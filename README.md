# meloqa-mcp

Model Context Protocol (MCP) server for the meloQA public **v1** API.

Exposes every operation from the v1 OpenAPI spec as an MCP tool, so LLM clients (Claude Desktop, Claude Code, Cursor, etc.) can read and manage meloQA projects, test cases, cycles, executions, bugs, links, and reference data.

> **Status:** pre-release. Defaults to the public endpoint `https://api.meloqa.com`; override `MELOQA_BASE_URL` to point at another instance (e.g. a local `http://localhost:3000`).

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
        "MELOQA_BASE_URL": "https://api.meloqa.com"
      }
    }
  }
}
```

Restart the client. The `meloqa` server should appear with ~70 tools (one per v1 endpoint).

## Environment variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `MELOQA_API_TOKEN` | yes | — | API token sent as `Authorization: Bearer <token>`. |
| `MELOQA_BASE_URL` | no | `https://api.meloqa.com` | Base URL of the meloQA instance. Override to point at another deployment (e.g. `http://localhost:3000`). |
| `MELOQA_RATE_LIMIT` | no | `30` | Client-side limit (requests/minute) used to throttle outgoing calls. Match the server's limit. |

## Token lifecycle

The token sits in plaintext inside your MCP client config (e.g. `~/.claude.json`). The file is `chmod 600` by default, but the token still lives on disk — treat it as a credential.

**To rotate** (recommended periodically, and immediately if you suspect exposure):

1. Open the meloQA UI → **Settings → API Tokens**.
2. Click **Revoke** on the current token. It stops working server-side within seconds.
3. Click **Generate new token** and copy the new value.
4. Replace `MELOQA_API_TOKEN` in your MCP client config with the new value.
5. Restart the MCP client (Claude Desktop / Claude Code / etc.) so it re-spawns the server with the updated env.

**Per-machine tokens**: generate a separate token for each machine/environment so revoking one doesn't break the others.

**Do not commit** your MCP client config (`~/.claude.json`, `.mcp.json`, `claude_desktop_config.json`) to a public repo — it contains the token.

## Tools

Tool names follow `<resource>_<verb>`, derived from the OpenAPI spec:

- `<resource>_list`, `<resource>_get`, `<resource>_create`, `<resource>_update`, `<resource>_delete` for CRUD endpoints.
- Action endpoints keep the action as the suffix: `executions_run`, `executions_pause`, `executions_finish`, `test_cases_unarchive`, `links_batch_create`.
- Sub-resource listings use the parent resource as the prefix: `projects_members_list`, `projects_execution_statuses_list`, etc.

Each tool's `description` includes the OpenAPI `summary`, the tag, and any validation rules documented on the endpoint (e.g. max lengths, required referenced IDs).

## Behavior notes

- **Auth header**: the token is sent as `Authorization: Bearer <token>` (RFC 6750).
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
MELOQA_API_TOKEN=... MELOQA_BASE_URL=https://api.meloqa.com npm run dev
```

Then pipe JSON-RPC messages on stdin or wire it up via an MCP client.

## License

MIT
