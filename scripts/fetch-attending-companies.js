// Snapshot "who is in the room" for the homepage: the companies with two or
// more conference ticket holders, and the Cloud Card characters those people
// have published on clouds.sfruby.com.
//
//     node scripts/fetch-attending-companies.js
//
// Runs as part of `npm run fetch-data`. Writes src/content/attending-companies.json.
// The committed snapshot is the fallback: without LUMA_API_KEY, or on any fetch
// problem, the previous file stays in place and the build proceeds.
//
// What leaves this script is deliberately small. Company names and a count per
// company; and for people who have already published a character on the Pier,
// the character image, the card URL and the name that card already shows. No
// emails, no ticket types, nobody who has not put themselves on the map.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(
  new URL("../src/content/attending-companies.json", import.meta.url),
);
const EVENT_ID = "evt-mKb0oC6cWGtqSIQ"; // San Francisco Ruby Startup Conference 2026
const LUMA_API = "https://public-api.luma.com/public/v1";
const CHARACTERS_API = "https://clouds.sfruby.com/api/characters?limit=500";
const MIN_ATTENDEES = 2;

// Minimal .env loader, same as fetch-luma-events.js: never overrides vars
// already present, so Netlify's build env wins in prod.
const envPath = fileURLToPath(new URL("../.env", import.meta.url));
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && process.env[m[1]] === undefined)
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

// Ticket types that are not attendees in the sense the section means.
const NOT_ATTENDEE_TICKETS = new Set(["Organizer/volunteer"]);
// The organizer's own people would top the list; the section is about
// everyone else in the room.
const HIDDEN_COMPANIES = new Set(["evil martians"]);
// Answers that are not a company.
const NOT_A_COMPANY = new Set([
  "", "n/a", "na", "none", "self", "self-employed", "freelance", "freelancer",
  "independent", "stealth", "student", "graduate student", "unemployed",
  "retired", "personal", "me", "myself", "working on my startup", "-", ".",
]);

// "Cisco, Inc." and "cisco" are one company. The key drops case, punctuation
// and corporate suffixes; the display name is the most common raw spelling.
const companyKey = (raw) =>
  raw
    .toLowerCase()
    .replace(/\(.*?\)/g, " ")
    .replace(/[.,'"&]/g, " ")
    .replace(/\b(inc|llc|ltd|corp|corporation|co|company|io|com|ai)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const nameKey = (raw) =>
  (raw || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// People who typed a different name on the Pier than on Luma.
const NAME_ALIASES = { "vova dementyev": "vladimir dementyev" };

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(20_000) });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}

async function fetchGuests(apiKey) {
  const guests = [];
  let cursor = null;
  do {
    const url =
      `${LUMA_API}/event/get-guests?event_api_id=${EVENT_ID}&pagination_limit=100` +
      (cursor ? `&pagination_cursor=${encodeURIComponent(cursor)}` : "");
    const page = await getJson(url, { "x-luma-api-key": apiKey });
    guests.push(...page.entries.map((e) => e.guest));
    cursor = page.has_more ? page.next_cursor : null;
  } while (cursor);
  return guests;
}

const companyAnswer = (guest) => {
  for (const a of guest.registration_answers ?? []) {
    if (a.question_type === "company" || /company/i.test(a.label ?? "")) {
      return (a.answer_company ?? (typeof a.answer === "string" ? a.answer : "") ?? "").trim();
    }
  }
  return "";
};

try {
  const apiKey = process.env.LUMA_API_KEY;
  if (!apiKey) throw new Error("LUMA_API_KEY not set");

  const [guests, { characters = [] }] = await Promise.all([
    fetchGuests(apiKey),
    getJson(CHARACTERS_API),
  ]);

  const attendees = guests.filter(
    (g) =>
      g.approval_status === "approved" &&
      !NOT_ATTENDEE_TICKETS.has(g.event_ticket?.name ?? ""),
  );

  // Group attendees by company.
  const companies = new Map();
  for (const g of attendees) {
    const raw = companyAnswer(g);
    const key = companyKey(raw);
    if (NOT_A_COMPANY.has(key) || HIDDEN_COMPANIES.has(key)) continue;
    const c = companies.get(key) ?? { key, spellings: new Map(), people: new Set() };
    c.spellings.set(raw, (c.spellings.get(raw) ?? 0) + 1);
    c.people.add(nameKey(g.name ?? g.user_name));
    companies.set(key, c);
  }

  // Characters, keyed by person name and by company.
  const byName = new Map();
  const byCompany = new Map();
  for (const ch of characters) {
    const n = nameKey(ch.name);
    const key = NAME_ALIASES[n] ?? n;
    byName.set(key, ch);
    const ck = companyKey(ch.company ?? "");
    if (ck) (byCompany.get(ck) ?? byCompany.set(ck, []).get(ck)).push(ch);
  }

  const out = [...companies.values()]
    .filter((c) => c.people.size >= MIN_ATTENDEES)
    .map((c) => {
      const seen = new Set();
      const chars = [];
      const add = (ch) => {
        if (!ch || seen.has(ch.url)) return;
        seen.add(ch.url);
        chars.push({ name: ch.name, url: ch.url, image: ch.image_url });
      };
      // A ticket holder from this company who made a character, matched by
      // name; then anyone who typed this company on their card, which only a
      // ticket holder can make.
      for (const p of c.people) add(byName.get(p));
      for (const ch of byCompany.get(c.key) ?? []) add(ch);
      const name = [...c.spellings.entries()].sort((a, b) => b[1] - a[1])[0][0];
      return { name, count: c.people.size, characters: chars };
    })
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  writeFileSync(
    OUT,
    JSON.stringify({ fetchedAt: new Date().toISOString(), minAttendees: MIN_ATTENDEES, companies: out }, null, 2) + "\n",
  );
  const withArt = out.filter((c) => c.characters.length).length;
  console.log(
    `attending-companies: ${out.length} companies with ${MIN_ATTENDEES}+ attendees (${withArt} with characters) from ${attendees.length} ticket holders`,
  );
} catch (error) {
  console.warn(
    `attending-companies: fetch failed (${error.message}); keeping the committed snapshot`,
  );
}
