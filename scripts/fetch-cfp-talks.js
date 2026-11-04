// Snapshot the CFP talks feed into src/content/cfp-talks.json so talk titles
// are baked into the built HTML (SEO, no-JS, instant paint). The committed
// snapshot is the fallback: on any fetch problem (timeout, non-200, bad JSON, a
// feed that is empty or has lost most of its talks) the previous file stays in
// place, so a CFP outage can never blank the program on deploy.
//
// A production build warns and carries on. --strict exits non-zero instead, for
// .github/workflows/speaker-cards.yml, where a bad feed must stop the run before
// anything is rendered or committed.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CFP_API_ORIGIN, CFP_API_PATH, feedProblem } from "../src/utils/cfpTalks.js";

const OUT = fileURLToPath(
  new URL("../src/content/cfp-talks.json", import.meta.url),
);
const strict = process.argv.includes("--strict");

try {
  const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
  const res = await fetch(`${CFP_API_ORIGIN}${CFP_API_PATH}`, {
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const talks = await res.json();
  const problem = feedProblem(talks, previous);
  if (problem) throw new Error(problem);
  writeFileSync(OUT, JSON.stringify(talks, null, 2) + "\n");
  console.log(`cfp-talks: saved ${talks.length} talks to src/content/cfp-talks.json`);
} catch (error) {
  const message = `cfp-talks: fetch failed (${error.message}); keeping the committed snapshot`;
  if (strict) {
    console.error(message);
    process.exit(1);
  }
  console.warn(message);
}
