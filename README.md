# meloqa-mcp

Model Context Protocol (MCP) server for the [meloQA](https://meloqa.com) public **v1** API.

Exposes every operation from the v1 OpenAPI spec as an MCP tool, so LLM clients (Claude Desktop, Claude Code, Cursor, etc.) can read and manage meloQA projects, test cases, cycles, executions, bugs, links, and reference data.

## Requirements

- Node.js **18+** (uses native `fetch`).
- A meloQA **API token** (see Settings → API Tokens in the meloQA app).

## Configure in your MCP client

### Claude Desktop / Claude Code

Add an entry to your MCP config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS for Claude Desktop, or `.claude.json` for Claude Code):

```json
{
  "mcpServers": {
    "meloqa": {
      "command": "npx",
      "args": ["-y", "@meloqa/mcp-server"],
      "env": {
        "MELOQA_API_TOKEN": "your-token-here",
        "MELOQA_BASE_URL": "https://app.meloqa.com"
      }
    }
  }
}
```

Restart the client. The `meloqa` server should appear with ~70 tools (one per v1 endpoint).

## Environment variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `MELOQA_API_TOKEN` | yes | — | API token sent verbatim in the `Authorization` header (no `Bearer` prefix). |
| `MELOQA_BASE_URL` | no | `https://app.meloqa.com` | Base URL of the meloQA instance. Set to `http://localhost:3000` for local dev. |
| `MELOQA_RATE_LIMIT` | no | `30` | Client-side limit (requests/minute) used to throttle outgoing calls. Match the server's limit. |

## Tools

Tool names follow `<resource>_<verb>`, derived from the OpenAPI spec:

- `<resource>_list`, `<resource>_get`, `<resource>_create`, `<resource>_update`, `<resource>_delete` for CRUD endpoints.
- Action endpoints keep the action as the suffix: `executions_run`, `executions_pause`, `executions_finish`, `test_cases_unarchive`, `links_batch_create`.
- Sub-resource listings use the parent resource as the prefix: `projects_members_list`, `projects_execution_statuses_list`, etc.

Each tool's `description` includes the OpenAPI `summary`, the tag, and any validation rules documented on the endpoint (e.g. max lengths, required referenced IDs).

## Behavior notes

- **Auth header**: the token is sent as `Authorization: <token>` — no `Bearer` prefix (this matches meloQA v1).
- **Rate limit**: the client uses an in-process sliding-window limiter (default 30 req/min). It blocks outgoing calls until a slot is available. If you hit the server-side 429 anyway, the tool call surfaces a clear error.
- **Errors**: non-2xx responses (400/401/403/404/etc.) are returned as MCP tool errors with the response body included.

## Development

```bash
npm install
npm run sync-spec       # refresh spec/openapi.json from MELOQA_SPEC_URL (default http://localhost:3000/v1/docs.json)
npm run gen             # regenerate src/tools.generated.ts from the spec
npm run build           # gen + tsc → dist/
npm run dev             # run from source via tsx
```

To test the generated server against a running meloQA instance:

```bash
MELOQA_API_TOKEN=... MELOQA_BASE_URL=http://localhost:3000 npm run dev
```

Then pipe JSON-RPC messages on stdin or wire it up via an MCP client.

## License

MIT
