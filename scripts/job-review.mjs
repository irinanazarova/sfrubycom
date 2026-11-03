// The trusted half of the daily candidate review in
// .github/workflows/scan-job-boards.yml. The model in that job gets no shell
// and no GitHub access: it reads .review/candidates.json, edits the jobs data
// files and writes .review/decisions.json. Everything that talks to GitHub is
// here, run by the workflow before and after it.
//
//   node scripts/job-review.mjs prepare <issue>   # .review/candidates.json,
//                                                  # with each posting's text
//   node scripts/job-review.mjs body              # .review/pr-body.md
//   node scripts/job-review.mjs report <issue> [pr-url]
//                                                  # tick the boxes, comment
//
// This file never imports the jobs data: the model edited that, and nothing
// it wrote runs while a token is in reach.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REPO = process.env.GITHUB_REPOSITORY;
const PER_DAY = 15;
const DIR = ".review";

const gh = (args, input) =>
  execFileSync("gh", args, { encoding: "utf8", input, stdio: [input ? "pipe" : "ignore", "pipe", "inherit"] });
const comments = (issue) =>
  JSON.parse(gh(["api", `repos/${REPO}/issues/${issue}/comments`, "--paginate", "--slurp"])).flat();
const read = (name) => JSON.parse(readFileSync(`${DIR}/${name}`, "utf8"));

const UNTICKED = "- [ ] ";
const urlOf = (line) => line.match(/\]\((https?:\/\/[^)\s]+)\)/)?.[1];

const [cmd, issue, prUrl] = process.argv.slice(2);

// The posting's text, fetched here through the ATS APIs so the model reads
// it directly: Ashby's job pages are rendered in the browser, and WebFetch on
// them comes back empty (four Rails roles were skipped as "unreadable" on
// Oct 25-26, 2026). "" means the ATS answered that the posting is gone. null
// means we could not read it, which says nothing about whether it is open: a
// link naming no board was read as closed and six live roles were skipped on
// Nov 1-2, 2026.
const strip = (html) =>
  html
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const getJson = async (url) => {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20_000) });
    if (res.status === 404) return { gone: true };
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
};
const ashbyBoards = new Map();
async function postingText(url) {
  let m;
  if ((m = url.match(/greenhouse\.io\/([^/]+)\/jobs\/(\d+)/))) {
    const j = await getJson(`https://boards-api.greenhouse.io/v1/boards/${m[1]}/jobs/${m[2]}`);
    if (!j) return null;
    return j.gone ? "" : strip(j.content ?? "") || null;
  }
  if ((m = url.match(/jobs\.ashbyhq\.com\/([^/]+)\/([0-9a-f-]{36})/i))) {
    if (!ashbyBoards.has(m[1])) ashbyBoards.set(m[1], getJson(`https://api.ashbyhq.com/posting-api/job-board/${m[1]}?includeCompensation=true`));
    const board = await ashbyBoards.get(m[1]);
    if (!board?.jobs) return null;
    const j = board.jobs.find((x) => x.id === m[2]);
    if (!j) return "";
    return [j.descriptionPlain, j.compensation?.compensationTierSummary && `Compensation: ${j.compensation.compensationTierSummary}`].filter(Boolean).join("\n") || null;
  }
  if ((m = url.match(/jobs\.lever\.co\/([^/]+)\/([0-9a-f-]{36})/i))) {
    const j = await getJson(`https://api.lever.co/v0/postings/${m[1]}/${m[2]}`);
    if (!j) return null;
    if (j.gone) return "";
    return [j.descriptionPlain, ...(j.lists ?? []).map((l) => `${l.text}: ${strip(l.content ?? "")}`), j.additionalPlain].filter(Boolean).join("\n") || null;
  }
  return null;
}

if (cmd === "prepare") {
  // The oldest unticked items first, so the backlog clears in order.
  const items = [];
  for (const c of comments(issue)) {
    const lines = c.body.split("\n");
    lines.forEach((line, i) => {
      const url = line.startsWith(UNTICKED) && urlOf(line);
      if (url) items.push({ comment_id: c.id, url, line: line.trim(), detail: (lines[i + 1] ?? "").trim() });
    });
  }
  // A posting we could not read stays unticked for tomorrow, and the model
  // never sees it, so it cannot be mistaken for a closed one.
  const picked = [];
  const unreadable = [];
  for (const item of items) {
    if (picked.length === PER_DAY) break;
    const text = await postingText(item.url);
    if (text === null) unreadable.push(item.url);
    else picked.push({ ...item, text: text.slice(0, 15_000) });
  }
  if (unreadable.length) console.error(`Left unticked, text unreadable:\n${unreadable.join("\n")}`);
  mkdirSync(DIR, { recursive: true });
  writeFileSync(`${DIR}/candidates.json`, JSON.stringify(picked, null, 2));
  console.log(`${picked.length} of ${items.length} unticked candidates to review.`);
  process.exit(0);
}

// The model's decisions, kept only where they name a candidate it was given
// and one of the three outcomes. Anything else in the file is ignored.
const candidates = read("candidates.json");
const given = new Map(candidates.map((c) => [c.url, c]));
const OUTCOMES = ["ADD", "HOLD", "SKIP"];
let decisions = [];
try {
  decisions = read("decisions.json");
} catch {
  console.error("No readable .review/decisions.json.");
}
decisions = (Array.isArray(decisions) ? decisions : [])
  .filter((d) => d && given.has(d.url) && OUTCOMES.includes(d.decision))
  .map((d) => ({ ...d, reason: String(d.reason ?? "").replace(/\s+/g, " ").slice(0, 200) }));
const label = (d) => `${String(d.company ?? "").slice(0, 60)}: [${String(d.title ?? "").slice(0, 120)}](${d.url})`;

if (cmd === "body") {
  const kept = decisions.filter((d) => d.decision !== "SKIP");
  const lines = [
    "Roles from the daily job board scan. Each was checked against the inclusion policy in CLAUDE.md; merge to publish (new listings post to #jobs).",
    "",
    ...kept.map((d) => `- **${d.decision}** ${label(d)}: ${d.reason}`),
  ];
  writeFileSync(`${DIR}/pr-body.md`, lines.join("\n") + "\n");
  process.exit(0);
}

if (cmd === "report") {
  if (decisions.length === 0) {
    console.log("No decisions to report.");
    process.exit(0);
  }
  const decided = new Set(decisions.map((d) => d.url));
  for (const id of new Set(candidates.map((c) => c.comment_id))) {
    const { body } = JSON.parse(gh(["api", `repos/${REPO}/issues/comments/${id}`]));
    const ticked = body
      .split("\n")
      .map((line) => (line.startsWith(UNTICKED) && decided.has(urlOf(line)) ? "- [x] " + line.slice(UNTICKED.length) : line))
      .join("\n");
    if (ticked !== body) gh(["api", "-X", "PATCH", `repos/${REPO}/issues/comments/${id}`, "--input", "-"], JSON.stringify({ body: ticked }));
  }
  const count = (o) => decisions.filter((d) => d.decision === o).length;
  const summary = [
    `**Review ${new Date().toISOString().slice(0, 10)}:** ${count("ADD")} added, ${count("HOLD")} held, ${count("SKIP")} skipped${prUrl ? ` (${prUrl})` : ""}.`,
    "",
    ...OUTCOMES.flatMap((o) => decisions.filter((d) => d.decision === o).map((d) => `- ${o} ${label(d)}: ${d.reason}`)),
  ];
  gh(["issue", "comment", issue, "--repo", REPO, "--body-file", "-"], summary.join("\n") + "\n");
  console.log(summary[0]);
  process.exit(0);
}

console.error("usage: job-review.mjs prepare <issue> | body | report <issue> [pr-url]");
process.exit(1);
