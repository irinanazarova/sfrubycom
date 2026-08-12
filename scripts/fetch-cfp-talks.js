// Snapshot the CFP talks feed into src/content/cfp-talks.json so talk titles
// are baked into the built HTML (SEO, no-JS, instant paint). The committed
// snapshot is the fallback: on any fetch problem — timeout, non-200, bad JSON —
// the previous file stays in place and the build proceeds, so a CFP outage can
// never blank the program on deploy. The client-side refresh in
// SpeakerRoster.astro picks up newer data between deploys.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CFP_API_ORIGIN, CFP_API_PATH } from "../src/utils/cfpTalks.js";

const OUT = fileURLToPath(
  new URL("../src/content/cfp-talks.json", import.meta.url),
);

try {
  const res = await fetch(`${CFP_API_ORIGIN}${CFP_API_PATH}`, {
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const talks = await res.json();
  if (!Array.isArray(talks)) throw new Error("response is not an array");
  writeFileSync(OUT, JSON.stringify(talks, null, 2) + "\n");
  console.log(`cfp-talks: saved ${talks.length} talks to src/content/cfp-talks.json`);
} catch (error) {
  console.warn(
    `cfp-talks: fetch failed (${error.message}); keeping the committed snapshot`,
  );
}
