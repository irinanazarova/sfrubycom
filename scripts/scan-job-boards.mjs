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
import { jobs, jobCompanyName } from "../src/data/jobs.js";
import { jobWatchlist } from "../src/data/job-watchlist.js";

const source = readFileSync(new URL("../src/data/jobs.js", import.meta.url), "utf8");
const watchlist = jobWatchlist.map((w) => w.board).join("\n");
const seenArg = process.argv.indexOf("--seen");
const seen = seenArg > 0 ? readFileSync(process.argv[seenArg + 1], "utf8") : "";

const BOARDS = {
  greenhouse: {
    url: /https:\/\/(?:job-boards|boards)\.greenhouse\.io\/([a-z0-9]+)/gi,
    list: async (org) => {
      const data = await get(`https://boards-api.greenhouse.io/v1/boards/${org}/jobs?content=true`);
      if (!data) return null;
      return data.jobs.map((j) => ({
        id: String(j.id),
        title: j.title,
        url: j.absolute_url,
        company: j.company_name,
        location: j.location?.name ?? "",
        text: decode(j.content ?? ""),
      }));
    },
  },
  ashby: {
    url: /https:\/\/jobs\.ashbyhq\.com\/([A-Za-z0-9.-]+)/g,
    list: async (org) => {
      const data = await get(`https://api.ashbyhq.com/posting-api/job-board/${org}?includeCompensation=true`);
      if (!data) return null;
      return data.jobs
        .filter((j) => j.isListed !== false)
        .map((j) => ({
          id: j.id,
          title: j.title,
          url: j.jobUrl,
          location: places(j.location, j.isRemote && "Remote", j.address?.postalAddress?.addressCountry, ...(j.secondaryLocations ?? []).map((l) => l.location)),
          pay: j.compensation?.compensationTierSummary ?? "",
          text: j.descriptionPlain ?? "",
        }));
    },
  },
  lever: {
    url: /https:\/\/jobs\.lever\.co\/([a-z0-9-]+)/gi,
    list: async (org) => {
      const data = await get(`https://api.lever.co/v0/postings/${org}?mode=json`);
      if (!Array.isArray(data)) return null;
      return data.map((j) => ({
        id: j.id,
        title: j.text,
        url: j.hostedUrl,
        location: places(j.categories?.location, ...(j.categories?.allLocations ?? []), j.workplaceType === "remote" && "Remote"),
        text: [j.descriptionPlain, ...(j.lists ?? []).map((l) => decode(l.content ?? "")), j.additionalPlain].join("\n"),
      }));
    },
  },
};

const ENGINEERING = /engineer|developer|\bswe\b|architect|programmer|tech(nical)? lead|\bcto\b/i;
// Titles that mention engineering but are not the board's kind of role. Their
// postings list Ruby among the languages they audit, support or test. An
// engineering manager of a Rails team is the board's kind of role (a sponsor's
// Software Engineering Manager was missed in October 2026); product, program
// and account managers are not.
const NOT_BUILDING = /security|director|\bvp\b|head of|product manager|(?<!lead |engineering )manager(?!,? (software )?engineering)|support|\bqa\b|quality|\btest|sales|solutions|machine learning|\bml\b|data scien|recruit/i;
const RUBY = /\bruby\b|\brails\b|\bror\b/i;
// A posting about a Rails codebase names Rails, or Ruby more than once; a
// single "Ruby" is usually one entry in a list of languages. Payments
// postings say "payment rails" and "stablecoin rails", which are not Rails.
const rubyShop = (text) =>
  /(?<!(payment|payments|stablecoin|fiat-only|banking|money) )\brails\b|\bror\b/i.test(text) || (text.match(/\bruby\b/gi) ?? []).length > 1;
const CALIFORNIA = /\b(CA|California|San Francisco|SF|Bay Area|Oakland|Berkeley|Palo Alto|Mountain View|San Jose|Sunnyvale|Menlo Park|Redwood City|San Mateo|Los Angeles|San Diego|Santa Monica|Irvine)\b/i;
const US = /\b(US|USA|U\.S\.|United States|North America|Americas)\b/i;
const ABROAD = /canada|mexico|brazil|argentina|colombia|latam|united kingdom|\buk\b|london|europe|emea|apac|india|germany|berlin|ireland|dublin|poland|spain|portugal|netherlands|amsterdam|france|paris|australia|singapore|japan|philippines|toronto|vancouver|montr[eé]al|israel/i;

// California anywhere in the locations counts. Otherwise remote counts when
// it names the US, or names no other country either.
const inScope = (location) =>
  CALIFORNIA.test(location) || (/remote/i.test(location) && (US.test(location) || !ABROAD.test(location)));

// Ashby and Lever repeat a place across their location fields.
const places = (...parts) => [...new Set(parts.filter(Boolean).map((p) => p.trim()))].join(", ");

const decode = (html) =>
  html
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/<[^>]+>/g, " ");

async function get(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20_000) });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

// Careers pages on a company's own domain that are an ATS board underneath.
// Their links name no board, so without this the board is never scanned
// (Thatch's reopened Backend role and an AngelList role at a meetup host went
// unreported in October 2026). Whop links still carry Greenhouse ids, but
// Whop has moved to Ashby. Add a line when a listing links a new domain.
const OWN_DOMAIN = [
  { url: /https:\/\/thatch\.com\/jobs\//, kind: "greenhouse", org: "thatch" },
  { url: /https:\/\/(www\.)?angellist\.com\/careers\//, kind: "lever", org: "angellist" },
  { url: /https:\/\/stripe\.com\/jobs\//, kind: "greenhouse", org: "stripe" },
  { url: /https:\/\/prizepicks\.com\/position/, kind: "greenhouse", org: "prizepicks" },
  { url: /https:\/\/careers\.upstart\.com\//, kind: "greenhouse", org: "upstart" },
  { url: /https:\/\/(www\.)?stitchfix\.com\/careers\//, kind: "greenhouse", org: "stitchfix" },
  { url: /https:\/\/(www\.)?nexhealth\.com\/careers\//, kind: "greenhouse", org: "nexhealth" },
  { url: /https:\/\/(www\.)?chronograph\.pe\/jobs\//, kind: "greenhouse", org: "chronograph" },
  { url: /https:\/\/(www\.)?opendate\.io\/careers\//, kind: "greenhouse", org: "opendate" },
  { url: /https:\/\/careers\.whop\.com\//, kind: "ashby", org: "whop" },
];
const boardOf = (url) => {
  for (const [kind, board] of Object.entries(BOARDS)) {
    const org = [...url.matchAll(board.url)][0]?.[1];
    if (org) return { kind, org };
  }
  return OWN_DOMAIN.find((d) => d.url.test(url));
};

// Every board the file links to, named after a live listing on it when there
// is one. Otherwise Greenhouse's own company name, or the board's slug.
const boards = new Map();
for (const [kind, board] of Object.entries(BOARDS)) {
  for (const [, org] of `${source}\n${watchlist}`.matchAll(board.url)) boards.set(`${kind}:${org.toLowerCase()}`, { kind, org, name: org });
}
for (const w of jobWatchlist) {
  for (const [kind, board] of Object.entries(BOARDS)) {
    const org = [...w.board.matchAll(board.url)][0]?.[1];
    if (org) boards.get(`${kind}:${org.toLowerCase()}`).name = w.company;
  }
}
for (const d of OWN_DOMAIN) {
  if (d.url.test(source)) boards.set(`${d.kind}:${d.org}`, { kind: d.kind, org: d.org, name: d.org });
}
for (const job of Object.values(jobs)) {
  const b = boardOf(job.url ?? "");
  if (b) boards.get(`${b.kind}:${b.org.toLowerCase()}`).name = jobCompanyName(job);
}

// A posting is known when its id appears anywhere in jobs.js (live, archived
// or waitlisted) or in what was already reported. The match is a whole token,
// never part of a longer id. Greenhouse ids are plain numbers, which careers
// pages on a company's own domain put at the end of a slug
// (thatch.com/jobs/software-engineer-backend-5113759008), so for them only a
// digit is a neighbour.
const mentions = (text, id) => {
  const edge = /^[0-9]+$/.test(id) ? "[^0-9]" : "[^0-9A-Za-z-]";
  return new RegExp(`(^|${edge})${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|${edge})`).test(text);
};
const known = (p) => mentions(source, p.id) || mentions(seen, p.id);

const found = [];
const failed = [];
const queue = [...boards.values()];
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
        found.push({ ...p, company: b.name === b.org ? p.company || b.org : b.name, inTitle });
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
