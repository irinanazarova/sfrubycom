// Finds open Ruby/Rails roles the jobs board does not list yet, at the
// companies it already knows: every Greenhouse, Ashby and Lever board that
// src/data/jobs.js links to, including the archived and waitlisted listings
// in its comments. Run daily by .github/workflows/scan-job-boards.yml, which
// adds what it finds to the "job-candidates" issue.
//
//   node scripts/scan-job-boards.mjs [--seen <file>]
//
// Prints a Markdown checklist of candidates, or nothing when there are none.
// --seen is any text (the issue so far): a candidate whose URL is in it was
// already reported and is skipped.
//
// This only shortlists. A listing goes on the board by hand, because the
// inclusion policy (sponsor or meetup host, junior role, or pre-Series C
// startup; California or US-remote), the description and the chips all need
// someone to read the posting. A role that names Ruby only as a nice-to-have
// matches here too.
import { readFileSync } from "node:fs";
import { jobs } from "../src/data/jobs.js";
import { getSponsor } from "../src/data/sponsors.js";
import { getStartup } from "../src/data/startups.js";

const source = readFileSync(new URL("../src/data/jobs.js", import.meta.url), "utf8");
const seenArg = process.argv.indexOf("--seen");
const seen = seenArg > 0 ? readFileSync(process.argv[seenArg + 1], "utf8") : "";

const BOARDS = {
  greenhouse: {
    url: /https:\/\/(?:job-boards|boards)\.greenhouse\.io\/([a-z0-9]+)/gi,
    list: async (org) => {
      const data = await get(`https://boards-api.greenhouse.io/v1/boards/${org}/jobs?content=true`);
      return (data?.jobs ?? []).map((j) => ({
        id: String(j.id),
        title: j.title,
        url: j.absolute_url,
        location: j.location?.name ?? "",
        text: decode(j.content ?? ""),
      }));
    },
  },
  ashby: {
    url: /https:\/\/jobs\.ashbyhq\.com\/([A-Za-z0-9.-]+)/g,
    list: async (org) => {
      const data = await get(`https://api.ashbyhq.com/posting-api/job-board/${org}?includeCompensation=true`);
      return (data?.jobs ?? [])
        .filter((j) => j.isListed !== false)
        .map((j) => ({
          id: j.id,
          title: j.title,
          url: j.jobUrl,
          location: [j.location, j.isRemote ? "Remote" : "", j.address?.postalAddress?.addressCountry, ...(j.secondaryLocations ?? []).map((l) => l.location)]
            .filter(Boolean)
            .join(", "),
          pay: j.compensation?.compensationTierSummary ?? "",
          text: j.descriptionPlain ?? "",
        }));
    },
  },
  lever: {
    url: /https:\/\/jobs\.lever\.co\/([a-z0-9-]+)/gi,
    list: async (org) => {
      const data = await get(`https://api.lever.co/v0/postings/${org}?mode=json`);
      return (Array.isArray(data) ? data : []).map((j) => ({
        id: j.id,
        title: j.text,
        url: j.hostedUrl,
        location: [j.categories?.location, ...(j.categories?.allLocations ?? []), j.workplaceType === "remote" ? "Remote" : ""]
          .filter(Boolean)
          .join(", "),
        text: [j.descriptionPlain, ...(j.lists ?? []).map((l) => decode(l.content ?? "")), j.additionalPlain].join("\n"),
      }));
    },
  },
};

const ENGINEERING = /engineer|developer|\bswe\b|architect|programmer|tech(nical)? lead|\bcto\b/i;
// Titles that mention engineering but are not the board's kind of role. Their
// postings list Ruby among the languages they audit, support or test.
const NOT_BUILDING = /security|director|\bvp\b|head of|(?<!lead )manager|support|\bqa\b|quality|\btest|sales|solutions|machine learning|\bml\b|data scien|recruit/i;
const RUBY = /\bruby\b|\brails\b|\bror\b/i;
// A posting about a Rails codebase names Rails, or Ruby more than once; a
// single "Ruby" is usually one entry in a list of languages.
const rubyShop = (text) => /\brails\b|\bror\b/i.test(text) || (text.match(/\bruby\b/gi) ?? []).length > 1;
const CALIFORNIA = /\b(CA|California|San Francisco|SF|Bay Area|Oakland|Berkeley|Palo Alto|Mountain View|San Jose|Sunnyvale|Menlo Park|Redwood City|San Mateo|Los Angeles|San Diego|Santa Monica|Irvine)\b/i;
const US = /\b(US|USA|U\.S\.|United States|North America|Americas)\b/i;
const ABROAD = /canada|mexico|brazil|argentina|colombia|latam|united kingdom|\buk\b|london|europe|emea|apac|india|germany|berlin|ireland|dublin|poland|spain|portugal|netherlands|amsterdam|france|paris|australia|singapore|japan|philippines|toronto|vancouver|montr[eé]al|israel/i;

// California anywhere in the locations counts. Otherwise remote counts when
// it names the US, or names no other country either.
const inScope = (location) =>
  CALIFORNIA.test(location) || (/remote/i.test(location) && (US.test(location) || !ABROAD.test(location)));

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

// Every board the file links to, with the company name of a live listing on
// it when there is one (archived boards fall back to the slug).
const companyOf = (job) =>
  job.companyName || getSponsor(job.sponsorId)?.name || getStartup(job.startupId)?.name || job.sponsorId || job.startupId;
const boards = new Map();
for (const [kind, board] of Object.entries(BOARDS)) {
  for (const [, org] of source.matchAll(board.url)) boards.set(`${kind}:${org.toLowerCase()}`, { kind, org, name: org });
}
for (const job of Object.values(jobs)) {
  for (const [kind, board] of Object.entries(BOARDS)) {
    const org = [...(job.url ?? "").matchAll(board.url)][0]?.[1];
    if (org) boards.get(`${kind}:${org.toLowerCase()}`).name = companyOf(job);
  }
}

// A posting is known when its id appears anywhere in jobs.js (live, archived
// or waitlisted) or in what was already reported.
const known = (p) => source.includes(p.id) || seen.includes(p.id) || seen.includes(p.url);

const found = [];
const queue = [...boards.values()];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    for (let b; (b = queue.shift()); ) {
      for (const p of await BOARDS[b.kind].list(b.org)) {
        if (!ENGINEERING.test(p.title) || NOT_BUILDING.test(p.title) || !inScope(p.location) || known(p)) continue;
        const inTitle = RUBY.test(p.title);
        if (!inTitle && !rubyShop(p.text)) continue;
        found.push({ ...p, company: b.name, inTitle });
      }
    }
  }),
);

if (found.length === 0) process.exit(0);

found.sort((a, b) => a.company.localeCompare(b.company) || a.title.localeCompare(b.title));
const date = new Date().toISOString().slice(0, 10);
console.log(`### ${date}: ${found.length} new ${found.length === 1 ? "role" : "roles"}\n`);
for (const p of found) {
  const where = p.location.replace(/\s+/g, " ").trim();
  const extra = [where, p.pay, p.inTitle ? "Ruby in the title" : "Ruby in the description"].filter(Boolean).join(" · ");
  console.log(`- [ ] **${p.company}**: [${p.title.trim()}](${p.url})  \n  ${extra}`);
}
