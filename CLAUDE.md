# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@meloqa/mcp-server` (binary `meloqa-mcp`) — a public MCP server that wraps the meloQA **public v1 API**. The repo is intentionally separate from the main meloQA codebase so it can be distributed via npm to any MCP client. ~70 tools, one per OpenAPI operation.

## Architecture

```
spec/openapi.json   ← source of truth (snapshot of meloQA v1 OpenAPI spec)
       │
       ▼
scripts/generate.ts ← build-time codegen
       │
       ▼
src/tools.generated.ts  ← committed; one ToolDef per operation
       │
       ▼
src/server.ts       ← MCP Server, registers tools from the generated file
src/client.ts       ← HTTP client (auth header, rate limiter, error mapping)
src/index.ts        ← stdio entrypoint (bin)
```

The whole pipeline is **build-time** codegen. The runtime does not read the OpenAPI spec — it only consumes `src/tools.generated.ts`. To change tool surface, edit the spec and rerun `npm run gen` (or `npm run build`).

### Tool naming (derived in `scripts/generate.ts`)

Names come from path + method, not `operationId` (the spec doesn't define any):

- `GET /v1/<res>` → `<res>_list`
- `GET /v1/<res>/{id}` → `<res>_get`
- `POST /v1/<res>` → `<res>_create`
- `PATCH /v1/<res>/{id}` → `<res>_update`
- `DELETE /v1/<res>/{id}` → `<res>_delete`
- `POST /v1/<res>/{id}/<action>` → `<res>_<action>` (e.g. `test_cases_unarchive`)
- Sub-collections: `GET /v1/<res>/{id}/<sub>` → `<res>_<sub>_list`

Action-style paths whose name is itself the verb (e.g. `/v1/executions-run`) are listed in `NAME_OVERRIDES` in `scripts/generate.ts` to avoid `executions_run_create`.

### Codegen output shape

For each operation the generator emits a `ToolDef` ([src/types.ts](src/types.ts)) with:

- `name`, `description` (summary + tag + spec `description` so the LLM sees validation rules).
- `inputSchema`: JSON Schema literal — sent verbatim to the MCP client. Path params, query params, and body fields are **merged into a single flat object**; the generator throws on name collisions.
- `request(input)`: pure function that returns `{ method, path, query?, body? }`. Path params are interpolated with `encodeURIComponent`; query params only included when defined; body fields gated on `!== undefined`.

Runtime input validation is delegated to the MCP host (which validates against `inputSchema`) and the meloQA API. We don't re-validate in TS.

## meloQA v1 API contract — non-obvious bits

These are encoded in [src/client.ts](src/client.ts) and matter when changing the client:

- **Auth header**: `Authorization: Bearer <token>` (standard RFC 6750 Bearer scheme).
- **Rate limit**: server caps at **30 req/min** per token. The client implements a sliding-window limiter (`RateLimiter` in [src/client.ts](src/client.ts)) that blocks outgoing calls; tune via `MELOQA_RATE_LIMIT`. 429s from the server are surfaced as tool errors.
- **Error mapping**: Prisma errors are mapped to **400/404** on the server side (not 406). Don't special-case 406.

## Commands

```bash
npm install
npm run sync-spec   # refresh spec/openapi.json from MELOQA_SPEC_URL (default http://localhost:3000/v1/docs.json)
npm run gen         # regenerate src/tools.generated.ts from spec/openapi.json
npm run build       # gen + tsc → dist/
npm run typecheck   # tsc --noEmit
npm run dev         # run server from source (tsx)
npm run start       # run built server (dist/index.js)
```

The codegen step has no test suite — the smoke test is `npm run build` followed by piping a JSON-RPC `tools/list` request to the binary and confirming the count matches the spec's operation count.

## When changing the API surface

1. Refresh the spec: `npm run sync-spec` (point `MELOQA_SPEC_URL` at the right server).
2. `npm run gen` — re-emits `src/tools.generated.ts`.
3. Eyeball the diff in `src/tools.generated.ts`. New endpoints should appear with sensible names; renamed/removed ones should disappear cleanly.
4. If a new endpoint has an action-style path that produces a clunky name, add it to `NAME_OVERRIDES` in `scripts/generate.ts`.
5. `npm run build` to confirm typecheck passes.

## Do not

- Edit `src/tools.generated.ts` by hand. It's committed for transparency/IDE jump-to-source, but it's regenerated on every build.
- Drop the `Bearer ` prefix from the Authorization header. Will 401.
- Add `operationId`-based logic; the spec doesn't define any.
