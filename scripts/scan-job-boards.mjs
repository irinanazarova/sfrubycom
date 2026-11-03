// Finds open Ruby/Rails roles the jobs board does not list yet, at the
// companies it already knows: every Greenhouse, Ashby and Lever board that
// src/data/jobs.js links to, directly or through OWN_DOMAIN, including the
// archived and waitlisted listings in its comments, plus the boards in
// src/data/job-watchlist.js (Ruby companies the board has never listed). Run
// daily by .github/workflows/scan-job-boards.yml, which adds what it finds to
// the "job-candidates" issue.
//
//   node scripts/scan-job-boards.mjs [--seen <file>]
//
// Prints a Markdown checklist of candidates, or nothing when there are none.
// --seen is any text (the issue so far): a candidate whose URL is in it was
// already reported and is skipped. Boards that did not answer are listed on
// stderr: a board that keeps failing usually means the company moved to
// another ATS or closed, which the monthly audit wants to know.
//
// This only shortlists. A listing goes on the board by hand, because the
// inclusion policy (sponsor or meetup host, junior role, or pre-Series C
// startup; California or US-remote), the description and the chips all need
// someone to read the posting. A role that names Ruby only as a nice-to-have
// matches here too.
import { readFileSync } from "node:fs";
import { BOARDS, ENGINEERING, NOT_BUILDING, RUBY, inScope, jobsSource, mentions, rubyShop, trackedBoards } from "./lib/job-boards.mjs";

const seenArg = process.argv.indexOf("--seen");
const seen = seenArg > 0 ? readFileSync(process.argv[seenArg + 1], "utf8") : "";

// A posting is known when its id appears anywhere in jobs.js (live, archived
// or waitlisted) or in what was already reported.
const known = (p) => mentions(jobsSource, p.id) || mentions(seen, p.id);

// Greenhouse often gives the company's own careers page as a posting's URL,
// which names no board, so neither the review nor the archive can read it. The
// board's own URL redirects to that page.
const postingUrl = (b, p) =>
  b.kind === "greenhouse" && !/greenhouse\.io/.test(p.url) ? `https://job-boards.greenhouse.io/${b.org}/jobs/${p.id}` : p.url;

const found = [];
const failed = [];
const queue = trackedBoards();
await Promise.all(
  Array.from({ length: 8 }, async () => {
    for (let b; (b = queue.shift()); ) {
      const postings = await BOARDS[b.kind].list(b.org);
      if (!postings) {
        failed.push(`${b.kind}/${b.org}`);
        continue;
      }
      for (const p of postings) {
        if (!ENGINEERING.test(p.title) || NOT_BUILDING.test(p.title) || !inScope(p.location) || known(p)) continue;
        const inTitle = RUBY.test(p.title);
        if (!inTitle && !rubyShop(p.text)) continue;
        found.push({ ...p, url: postingUrl(b, p), company: b.name === b.org ? p.company || b.org : b.name, inTitle });
      }
    }
  }),
);

if (failed.length) console.error(`No answer from ${failed.length} boards: ${failed.sort().join(", ")}`);
if (found.length === 0) process.exit(0);

found.sort((a, b) => a.company.localeCompare(b.company) || a.title.localeCompare(b.title));
const date = new Date().toISOString().slice(0, 10);
console.log(`### ${date}: ${found.length} new ${found.length === 1 ? "role" : "roles"}\n`);
for (const p of found) {
  const where = p.location.replace(/\s+/g, " ").trim();
  const extra = [where, p.pay, p.inTitle ? "Ruby in the title" : "Ruby in the description"].filter(Boolean).join(" · ");
  console.log(`- [ ] **${p.company}**: [${p.title.trim()}](${p.url})  \n  ${extra}`);
}
