/**
 * Build-time codegen: reads spec/openapi.json and emits src/tools.generated.ts.
 *
 * One MCP tool per OpenAPI operation. Tool input schemas are emitted as JSON Schema
 * literals (the MCP host validates calls against them). The request builder is a
 * generated function that routes inputs to path, query, and body slots.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

type AnySchema = Record<string, any>;

interface Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  parameters?: Array<{
    name: string;
    in: "path" | "query" | "header" | "cookie";
    required?: boolean;
    schema?: AnySchema;
    description?: string;
  }>;
  requestBody?: {
    required?: boolean;
    content?: Record<string, { schema?: AnySchema }>;
  };
}

const SPEC_PATH = resolve(process.cwd(), "spec/openapi.json");
const OUT_PATH = resolve(process.cwd(), "src/tools.generated.ts");

const spec = JSON.parse(readFileSync(SPEC_PATH, "utf8"));
const paths = spec.paths as Record<string, Record<string, Operation>>;

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;
type Method = (typeof HTTP_METHODS)[number];

// Paths where the trailing path segment is itself the verb (e.g. /executions-run).
// For these, skip the auto-added `_create` suffix.
const NAME_OVERRIDES: Record<string, string> = {
  "POST /v1/executions-run": "executions_run",
  "POST /v1/executions-pause": "executions_pause",
  "POST /v1/executions-finish": "executions_finish",
  // Sub-collection creates: `POST /v1/<res>/{id}/attachments` would otherwise
  // hit the "POST with {id} → trailing segment is the verb" rule and yield the
  // clunky `<res>_attachments` (no `_create`). These trailing segments are
  // plural nouns, not verbs, so pin the conventional `_create` name.
  "POST /v1/test-cases/{id}/attachments": "test_cases_attachments_create",
  "POST /v1/bugs/{id}/attachments": "bugs_attachments_create",
  "POST /v1/executions/{id}/attachments": "executions_attachments_create",
};

function deriveToolName(method: Method, path: string): string {
  const key = `${method.toUpperCase()} ${path}`;
  if (NAME_OVERRIDES[key]) return NAME_OVERRIDES[key];

  const segments = path.replace(/^\/v1\//, "").split("/");
  const literal = segments
    .filter((s) => !s.startsWith("{"))
    .map((s) => s.replace(/-/g, "_"));
  const hasId = segments.some((s) => s.startsWith("{"));
  const lastIsParam = segments[segments.length - 1]?.startsWith("{");
  const base = literal.join("_");

  switch (method) {
    case "get":
      return lastIsParam ? `${base}_get` : `${base}_list`;
    case "post":
      // POST /res/{id}/action  →  res_action (the trailing segment is the verb)
      if (hasId) return base;
      return `${base}_create`;
    case "patch":
    case "put":
      return `${base}_update`;
    case "delete":
      return `${base}_delete`;
  }
}

/** Strip OpenAPI-specific bits to produce plain JSON Schema. */
function normalizeSchema(schema: AnySchema | undefined): AnySchema {
  if (!schema) return {};
  const out: AnySchema = {};
  for (const [k, v] of Object.entries(schema)) {
    if (k === "nullable") continue; // handled below
    if (k === "example" || k === "examples") continue;
    if (k === "properties" && v && typeof v === "object") {
      const props: AnySchema = {};
      for (const [pk, pv] of Object.entries(v as AnySchema)) {
        props[pk] = normalizeSchema(pv as AnySchema);
      }
      out[k] = props;
    } else if (k === "items" && v && typeof v === "object") {
      out[k] = normalizeSchema(v as AnySchema);
    } else {
      out[k] = v;
    }
  }
  if (schema.nullable === true && schema.type) {
    out.type = Array.isArray(out.type) ? [...out.type, "null"] : [out.type, "null"];
  }
  return out;
}

interface ToolPlan {
  name: string;
  method: Method;
  path: string;
  description: string;
  pathParams: string[];
  queryParams: string[];
  bodyFields: string[] | null; // null → no body; [] → empty body schema; else field names
  inputSchema: AnySchema;
}

function buildToolPlan(method: Method, path: string, op: Operation): ToolPlan {
  const name = deriveToolName(method, path);
  const tag = op.tags?.[0] ?? "Misc";
  const summary = op.summary ?? name;
  const descParts = [summary, `Tag: ${tag}`];
  if (op.description) descParts.push(op.description);
  const description = descParts.join("\n\n");

  const props: AnySchema = {};
  const required: string[] = [];
  const pathParams: string[] = [];
  const queryParams: string[] = [];

  for (const p of op.parameters ?? []) {
    const schema = normalizeSchema(p.schema);
    if (p.description) schema.description = p.description;
    if (props[p.name]) {
      throw new Error(`Parameter name collision in ${method} ${path}: ${p.name}`);
    }
    props[p.name] = schema;
    if (p.in === "path") {
      pathParams.push(p.name);
      required.push(p.name);
    } else if (p.in === "query") {
      queryParams.push(p.name);
      if (p.required) required.push(p.name);
    }
  }

  let bodyFields: string[] | null = null;
  const bodySchema = op.requestBody?.content?.["application/json"]?.schema;
  if (bodySchema) {
    const normalized = normalizeSchema(bodySchema);
    bodyFields = [];
    const bodyProps = (normalized.properties ?? {}) as AnySchema;
    const bodyRequired: string[] = normalized.required ?? [];
    for (const [k, v] of Object.entries(bodyProps)) {
      if (props[k]) {
        throw new Error(`Body field collides with parameter in ${method} ${path}: ${k}`);
      }
      props[k] = v;
      bodyFields.push(k);
      if (bodyRequired.includes(k)) required.push(k);
    }
  }

  const inputSchema: AnySchema = {
    type: "object",
    properties: props,
    additionalProperties: false,
  };
  if (required.length > 0) inputSchema.required = required;

  return {
    name,
    method,
    path,
    description,
    pathParams,
    queryParams,
    bodyFields,
    inputSchema,
  };
}

function emitRequestBuilder(plan: ToolPlan): string {
  // Build path with interpolated path params
  let pathExpr: string;
  if (plan.pathParams.length === 0) {
    pathExpr = JSON.stringify(plan.path);
  } else {
    const interpolated = plan.path.replace(/\{([^}]+)\}/g, (_, name) => {
      if (!plan.pathParams.includes(name)) return `{${name}}`;
      return `\${encodeURIComponent(String(input.${name}))}`;
    });
    pathExpr = `\`${interpolated}\``;
  }

  const lines: string[] = [];
  lines.push(`(input: any) => {`);
  lines.push(`    const req: HttpRequest = { method: ${JSON.stringify(plan.method.toUpperCase())}, path: ${pathExpr} };`);

  if (plan.queryParams.length > 0) {
    lines.push(`    const query: Record<string, string> = {};`);
    for (const q of plan.queryParams) {
      lines.push(`    if (input.${q} !== undefined && input.${q} !== null) query[${JSON.stringify(q)}] = String(input.${q});`);
    }
    lines.push(`    if (Object.keys(query).length > 0) req.query = query;`);
  }

  if (plan.bodyFields !== null) {
    if (plan.bodyFields.length === 0) {
      lines.push(`    req.body = {};`);
    } else {
      lines.push(`    const body: Record<string, unknown> = {};`);
      for (const f of plan.bodyFields) {
        lines.push(`    if (input.${f} !== undefined) body[${JSON.stringify(f)}] = input.${f};`);
      }
      lines.push(`    req.body = body;`);
    }
  }

  lines.push(`    return req;`);
  lines.push(`  }`);
  return lines.join("\n");
}

// Walk spec
const plans: ToolPlan[] = [];
const seenNames = new Set<string>();
for (const [path, item] of Object.entries(paths)) {
  for (const method of HTTP_METHODS) {
    const op = item[method] as Operation | undefined;
    if (!op) continue;
    const plan = buildToolPlan(method, path, op);
    if (seenNames.has(plan.name)) {
      throw new Error(`Duplicate tool name "${plan.name}" from ${method} ${path}`);
    }
    seenNames.add(plan.name);
    plans.push(plan);
  }
}

plans.sort((a, b) => a.name.localeCompare(b.name));

const header = `// AUTO-GENERATED — do not edit by hand. Run \`npm run gen\` to regenerate.
// Source: spec/openapi.json
//
// ${plans.length} tools generated from the meloQA Public API v1 spec.

import type { ToolDef, HttpRequest } from "./types.js";

export const tools: ToolDef[] = [
`;

const entries = plans.map((plan) => {
  return `  {
    name: ${JSON.stringify(plan.name)},
    description: ${JSON.stringify(plan.description)},
    inputSchema: ${JSON.stringify(plan.inputSchema, null, 2).replace(/\n/g, "\n    ")},
    request: ${emitRequestBuilder(plan)},
  }`;
});

const footer = `\n];\n`;

writeFileSync(OUT_PATH, header + entries.join(",\n") + footer);
console.log(`Generated ${OUT_PATH} with ${plans.length} tools.`);
