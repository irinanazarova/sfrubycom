// Posts the listings that a push added to src/data/jobs.js to the SF Ruby
// Slack #jobs channel, one short line per job, each linking to its card on
// sfruby.com/jobs. Run by .github/workflows/jobs-to-slack.yml on every push to
// main that touches jobs.js.
//
//   node scripts/post-new-jobs.mjs <base-sha>            # print, post nothing
//   SLACK_JOBS_WEBHOOK=... node scripts/post-new-jobs.mjs <base-sha> --post
//
// "New" means an id that is in jobs.js now and was not at <base-sha>, so a
// closed listing replaced by another role at the same company is posted too
// (it is a new role), while an edit to an existing listing is not. Archived
// listings are comments and never match.
//
// With --post it first waits for the deploy, so nobody clicks through to a
// card that is not on the site yet.
import { execFileSync } from "node:child_process";
import { jobs, jobCompanyName } from "../src/data/jobs.js";

const SITE = "https://sfruby.com";
const DEPLOY_WAIT_MS = 15 * 60 * 1000;
// A bulk import is a board refresh, not news; past this many the message
// lists the first few and points at the board for the rest.
const MAX_LINES = 12;

const [base, ...flags] = process.argv.slice(2);
const post = flags.includes("--post");
if (!base) {
  console.error("usage: post-new-jobs.mjs <base-sha> [--post]");
  process.exit(1);
}

// Top-level job keys are the only lines in the file indented by exactly two
// spaces and opening an object; archived jobs sit inside comments.
const idsIn = (source) => new Set([...source.matchAll(/^ {2}"([^"]+)": \{/gm)].map((m) => m[1]));

let before;
try {
  before = idsIn(execFileSync("git", ["show", `${base}:src/data/jobs.js`], { encoding: "utf8" }));
} catch {
  console.log(`No jobs.js at ${base}; nothing to compare against.`);
  process.exit(0);
}

const added = Object.values(jobs).filter((job) => !before.has(job.id));
if (added.length === 0) {
  console.log("No new listings.");
  process.exit(0);
}

// Slack mrkdwn escapes & < >. Link text also ends at a "|", which has no
// escape, so it becomes a slash.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escLink = (s) => esc(s).replace(/\|/g, "/");

const line = (job) => {
  const salary = /\d/.test(job.salary ?? "") ? job.salary : null;
  const details = [job.location, salary].filter(Boolean).map(esc).join(" · ");
  return `• *${esc(jobCompanyName(job))}*: <${SITE}/jobs#${job.id}|${escLink(job.title)}>${details ? `\n   ${details}` : ""}`;
};

const shown = added.slice(0, MAX_LINES);
const more = added.length - shown.length;
const text = [
  added.length === 1 ? "New on the SF Ruby jobs board:" : `${added.length} new on the SF Ruby jobs board:`,
  ...shown.map(line),
  more > 0 ? `…and ${more} more at <${SITE}/jobs|sfruby.com/jobs>` : null,
]
  .filter(Boolean)
  .join("\n");

console.log(text);
if (!post) process.exit(0);

const webhook = process.env.SLACK_JOBS_WEBHOOK;
if (!webhook) {
  console.log("SLACK_JOBS_WEBHOOK is not set; skipping the post.");
  process.exit(0);
}

// Netlify deploys main on its own schedule. Wait until every new card is in
// the live page before posting.
const deadline = Date.now() + DEPLOY_WAIT_MS;
for (;;) {
  const html = await fetch(`${SITE}/jobs/?t=${Date.now()}`)
    .then((r) => r.text())
    .catch(() => "");
  if (shown.every((job) => html.includes(`id="${job.id}"`))) break;
  if (Date.now() > deadline) {
    console.error("The new listings did not appear on sfruby.com/jobs within 15 minutes; not posting.");
    process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 30_000));
}

const res = await fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text, unfurl_links: false, unfurl_media: false }),
});
if (!res.ok) {
  console.error(`Slack answered ${res.status}: ${await res.text()}`);
  process.exit(1);
}
console.log("Posted to Slack.");
