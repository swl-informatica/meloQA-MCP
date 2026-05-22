import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { MeloqaClient, MeloqaError } from "./client.js";
import { tools } from "./tools.generated.js";
import type { ToolDef } from "./types.js";

export interface ServerOptions {
  baseUrl: string;
  apiToken: string;
  rateLimitPerMin?: number;
}

export function createServer(opts: ServerOptions): Server {
  const client = new MeloqaClient(opts);
  const toolsByName = new Map<string, ToolDef>(tools.map((t) => [t.name, t]));

  const server = new Server(
    {
      name: "meloqa-mcp",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: tools.map((t) => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema,
    })),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (req) => {
    const tool = toolsByName.get(req.params.name);
    if (!tool) {
      return {
        isError: true,
        content: [{ type: "text", text: `Unknown tool: ${req.params.name}` }],
      };
    }

    const input = (req.params.arguments ?? {}) as Record<string, unknown>;

    try {
      const httpReq = tool.request(input);
      const result = await client.send(httpReq);
      return {
        content: [
          { type: "text", text: JSON.stringify(result, null, 2) },
        ],
      };
    } catch (err) {
      if (err instanceof MeloqaError) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `meloQA API error ${err.status}: ${err.message}\n\n${err.bodyText.slice(0, 1000)}`,
            },
          ],
        };
      }
      const msg = err instanceof Error ? err.message : String(err);
      return {
        isError: true,
        content: [{ type: "text", text: `Request failed: ${msg}` }],
      };
    }
  });

  return server;
}
