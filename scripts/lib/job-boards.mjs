// What the daily job scan and the job archive share: how to read a Greenhouse,
// Ashby or Lever board, which boards we track, and how a posting is classified.
//
// Two jobs import this. scripts/scan-job-boards.mjs shortlists new roles for
// /jobs. The private ruby-jobs-archive repo checks this repository out and
// records every Ruby posting on these boards, so a change to a board reader or
// a classifier here changes both. Keep the exports dependency-free: neither job
// runs npm ci.
import { readFileSync } from "node:fs";
import { jobs, jobCompanyName } from "../../src/data/jobs.js";
import { jobWatchlist } from "../../src/data/job-watchlist.js";

export const jobsSource = readFileSync(new URL("../../src/data/jobs.js", import.meta.url), "utf8");
const watchlist = jobWatchlist.map((w) => w.board).join("\n");

const decode = (html) =>
  html
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/<[^>]+>/g, " ");

// Ashby and Lever repeat a place across their location fields.
const places = (...parts) => [...new Set(parts.filter(Boolean).map((p) => p.trim()))].join(", ");

async function get(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20_000) });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

// list() returns null when the board did not answer, which is different from
// an answer with no postings in it.
export const BOARDS = {
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
        department: (j.departments ?? []).map((d) => d.name).join(", "),
        published: j.first_published ?? "",
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
          department: j.department ?? "",
          published: j.publishedAt ?? "",
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
        department: j.categories?.team ?? j.categories?.department ?? "",
        published: j.createdAt ? new Date(j.createdAt).toISOString() : "",
        pay: j.salaryRange?.min ? `${j.salaryRange.currency ?? ""} ${j.salaryRange.min} - ${j.salaryRange.max}`.trim() : "",
        text: [j.descriptionPlain, ...(j.lists ?? []).map((l) => decode(l.content ?? "")), j.additionalPlain].join("\n"),
      }));
    },
  },
};

export const ENGINEERING = /engineer|developer|\bswe\b|architect|programmer|tech(nical)? lead|\bcto\b/i;
// Titles that mention engineering but are not the board's kind of role. Their
// postings list Ruby among the languages they audit, support or test. An
// engineering manager of a Rails team is the board's kind of role (a sponsor's
// Software Engineering Manager was missed in October 2026); product, program
// and account managers are not.
export const NOT_BUILDING = /security|director|\bvp\b|head of|product manager|(?<!lead |engineering )manager(?!,? (software )?engineering)|support|\bqa\b|quality|\btest|sales|solutions|machine learning|\bml\b|data scien|recruit/i;
export const RUBY = /\bruby\b|\brails\b|\bror\b/i;
// A posting about a Rails codebase names Rails, or Ruby more than once; a
// single "Ruby" is usually one entry in a list of languages. Payments
// postings say "payment rails" and "stablecoin rails", which are not Rails.
export const rubyShop = (text) =>
  /(?<!(payment|payments|stablecoin|fiat-only|banking|money) )\brails\b|\bror\b/i.test(text) || (text.match(/\bruby\b/gi) ?? []).length > 1;
const CALIFORNIA = /\b(CA|California|San Francisco|SF|Bay Area|Oakland|Berkeley|Palo Alto|Mountain View|San Jose|Sunnyvale|Menlo Park|Redwood City|San Mateo|Los Angeles|San Diego|Santa Monica|Irvine)\b/i;
const US = /\b(US|USA|U\.S\.|United States|North America|Americas)\b/i;
const ABROAD = /canada|mexico|brazil|argentina|colombia|latam|latin america|united kingdom|\buk\b|london|europe|emea|apac|india|germany|berlin|ireland|dublin|poland|spain|portugal|netherlands|amsterdam|france|paris|australia|singapore|japan|philippines|toronto|vancouver|montr[eé]al|israel|hungary|budapest|estonia|tallinn/i;

// California anywhere in the locations counts. Otherwise remote counts when
// it names the US, or names no other country either.
export const inScope = (location) =>
  CALIFORNIA.test(location) || (/remote/i.test(location) && (US.test(location) || !ABROAD.test(location)));

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
export const boardOf = (url) => {
  for (const [kind, board] of Object.entries(BOARDS)) {
    const org = [...url.matchAll(board.url)][0]?.[1];
    if (org) return { kind, org };
  }
  return OWN_DOMAIN.find((d) => d.url.test(url));
};

// Every board jobs.js links to (live, archived or waitlisted) or the watchlist
// names, named after a live listing on it when there is one. Otherwise
// Greenhouse's own company name, or the board's slug.
export function trackedBoards() {
  const boards = new Map();
  for (const [kind, board] of Object.entries(BOARDS)) {
    for (const [, org] of `${jobsSource}\n${watchlist}`.matchAll(board.url)) boards.set(`${kind}:${org.toLowerCase()}`, { kind, org, name: org });
  }
  for (const w of jobWatchlist) {
    for (const [kind, board] of Object.entries(BOARDS)) {
      const org = [...w.board.matchAll(board.url)][0]?.[1];
      if (org) boards.get(`${kind}:${org.toLowerCase()}`).name = w.company;
    }
  }
  for (const d of OWN_DOMAIN) {
    if (d.url.test(jobsSource)) boards.set(`${d.kind}:${d.org}`, { kind: d.kind, org: d.org, name: d.org });
  }
  for (const job of Object.values(jobs)) {
    const b = boardOf(job.url ?? "");
    if (b) boards.get(`${b.kind}:${b.org.toLowerCase()}`).name = jobCompanyName(job);
  }
  return [...boards.values()];
}

// The listings live on /jobs right now. jobsSource also holds the archived and
// waitlisted ones in its comments; this is only what a reader can see.
export const liveJobs = () =>
  Object.values(jobs)
    .filter((j) => j.url)
    .map((j) => ({
      id: j.id,
      company: jobCompanyName(j),
      title: j.title,
      location: j.location ?? "",
      pay: j.salary ?? "",
      url: j.url,
      postedDate: j.postedDate ?? null,
      description: j.description ?? "",
    }));

// Whether text names this posting id as a whole token, never as part of a
// longer id. Greenhouse ids are plain numbers, which careers pages on a
// company's own domain put at the end of a slug
// (thatch.com/jobs/software-engineer-backend-5113759008), so for them only a
// digit is a neighbour.
export const mentions = (text, id) => {
  const edge = /^[0-9]+$/.test(id) ? "[^0-9]" : "[^0-9A-Za-z-]";
  return new RegExp(`(^|${edge})${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|${edge})`).test(text);
};
