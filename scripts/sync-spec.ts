import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SPEC_URL = process.env.MELOQA_SPEC_URL ?? "https://api.meloqa.com/v1/docs.json";
const OUT = resolve(process.cwd(), "spec/openapi.json");

const res = await fetch(SPEC_URL);
if (!res.ok) {
  console.error(`Failed to fetch ${SPEC_URL}: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const json = await res.json();
writeFileSync(OUT, JSON.stringify(json, null, 2) + "\n");
console.log(`Wrote ${OUT} (from ${SPEC_URL})`);
