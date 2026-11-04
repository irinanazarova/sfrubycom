// Fails when the CFP feed holds something the site is silently dropping. Both
// cases fall back to the placeholder in src/data/schedule-2026.js with nothing
// on the page to say so:
//
// - a title isRealTitle() rejected that isn't a bare placeholder. "Ruby 4.0" is
//   too short and "From Draft to Done" contains a placeholder word. Widen the
//   filter in src/utils/cfpTalks.js.
// - a name that matches nobody on the roster, because a speaker edited their
//   name in the CFP app. Add it to cfpNameAliases in src/data/conference-2026.js.
//
// The last step of .github/workflows/speaker-cards.yml. A failed run is the one
// signal GitHub sends anyone, so both make the run fail.
import { readFileSync } from "node:fs";
import { conferenceSpeakers, cfpNameAliases } from "../src/data/conference-2026.js";
import { buildTalkMap, isRealTitle } from "../src/utils/cfpTalks.js";

const BARE_PLACEHOLDER =
  /^(tbd|tba|tbc|wip|draft|placeholder|keynote|working title|title pending|coming soon)?$/i;

const talks = JSON.parse(readFileSync("src/content/cfp-talks.json", "utf8"));
const { unmatched } = buildTalkMap(talks, conferenceSpeakers, cfpNameAliases);
const rejected = talks.filter(
  (t) => !isRealTitle(t.title) && !BARE_PLACEHOLDER.test(String(t.title ?? "").trim()),
);

const problems = [
  ...unmatched.map((name) => `No roster match for the CFP name "${name}". Add a cfpNameAliases entry.`),
  ...rejected.map(
    (t) => `isRealTitle rejected "${t.title}" from ${t.speaker?.name}, so the schedule placeholder shows instead.`,
  ),
];

for (const problem of problems) console.log(`::error::${problem}`);
if (problems.length > 0) process.exit(1);
console.log("cfp-feed: every name matches and every title is in use");
