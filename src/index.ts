#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

const baseUrl = process.env.MELOQA_BASE_URL ?? "https://api.meloqa.com";
const apiToken = getRequiredEnv("MELOQA_API_TOKEN");
const rateLimitPerMin = process.env.MELOQA_RATE_LIMIT
  ? Number(process.env.MELOQA_RATE_LIMIT)
  : undefined;

const server = createServer({ baseUrl, apiToken, rateLimitPerMin });
const transport = new StdioServerTransport();

await server.connect(transport);
