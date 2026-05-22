import type { HttpRequest } from "./types.js";

export interface ClientConfig {
  baseUrl: string;
  apiToken: string;
  /** Requests per minute. Default 30 (meloQA v1 limit). */
  rateLimitPerMin?: number;
}

export class MeloqaError extends Error {
  constructor(
    public status: number,
    public bodyText: string,
    public bodyJson: unknown,
  ) {
    super(`meloQA API ${status}: ${typeof bodyJson === "object" && bodyJson && "message" in bodyJson ? (bodyJson as any).message : bodyText.slice(0, 200)}`);
    this.name = "MeloqaError";
  }
}

/**
 * Sliding-window rate limiter: tracks request timestamps within the last 60s and
 * sleeps the caller until a slot frees up. Single-process; sufficient for a single
 * MCP server instance serving one user.
 */
class RateLimiter {
  private timestamps: number[] = [];
  constructor(private limit: number, private windowMs = 60_000) {}

  async acquire(): Promise<void> {
    while (true) {
      const now = Date.now();
      this.timestamps = this.timestamps.filter((t) => now - t < this.windowMs);
      if (this.timestamps.length < this.limit) {
        this.timestamps.push(now);
        return;
      }
      const waitMs = this.windowMs - (now - this.timestamps[0]!) + 5;
      await new Promise((r) => setTimeout(r, waitMs));
    }
  }
}

export class MeloqaClient {
  private baseUrl: string;
  private apiToken: string;
  private limiter: RateLimiter;

  constructor(cfg: ClientConfig) {
    this.baseUrl = cfg.baseUrl.replace(/\/$/, "");
    this.apiToken = cfg.apiToken;
    this.limiter = new RateLimiter(cfg.rateLimitPerMin ?? 30);
  }

  async send(req: HttpRequest): Promise<unknown> {
    await this.limiter.acquire();

    const url = new URL(this.baseUrl + req.path);
    if (req.query) {
      for (const [k, v] of Object.entries(req.query)) {
        url.searchParams.set(k, v);
      }
    }

    const init: RequestInit = {
      method: req.method,
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        Accept: "application/json",
      },
    };

    if (req.body !== undefined) {
      (init.headers as Record<string, string>)["Content-Type"] = "application/json";
      init.body = JSON.stringify(req.body);
    }

    const res = await fetch(url, init);
    const text = await res.text();
    let json: unknown = undefined;
    if (text) {
      try {
        json = JSON.parse(text);
      } catch {
        json = undefined;
      }
    }

    if (!res.ok) {
      if (res.status === 429) {
        throw new MeloqaError(429, text, {
          message: "Rate limit exceeded (meloQA v1 caps at 30 req/min). Slow down and retry.",
        });
      }
      throw new MeloqaError(res.status, text, json);
    }

    return json ?? null;
  }
}
