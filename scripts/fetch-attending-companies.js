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
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

// Character images are saved here, resized, so the homepage never hotlinks
// the game's 450x800 PNGs (about 600KB each; 26 of them was 15MB of images
// and the odd one failing to load). 128px tall is 2x the largest size the
// block renders. Committed alongside the JSON so build:dev has them.
const IMG_DIR = fileURLToPath(new URL("../public/attending/", import.meta.url));
const IMG_HEIGHT = 128;
// Organizers and volunteers, by Luma ticket type, for the homepage crew
// section: everyone approved on such a ticket, with a character when they
// made one. Same image snapshot as the companies.
const CREW_OUT = fileURLToPath(new URL("../src/content/crew-2026.json", import.meta.url));
const crewBucket = (ticket) =>
  /organi[sz]er/i.test(ticket) ? "organizers" : /volunteer/i.test(ticket) ? "volunteers" : null;
const OUT = fileURLToPath(
  new URL("../src/content/attending-companies.json", import.meta.url),
);
const EVENT_ID = "evt-mKb0oC6cWGtqSIQ"; // San Francisco Ruby Conference 2026
const LUMA_API = "https://public-api.luma.com/public/v1";
const CHARACTERS_API = "https://clouds.sfruby.com/api/characters?limit=500";
// The list API pages with next_cursor; older deploys capped it at the 50
// newest with no cursor. Each character also lives at a URL slugged from the
// name the person typed, and that is probed for every attendee the list did
// not cover, which catches the older-deploy case and nothing else needs to.
const CHARACTER_URL = (slug) => `https://clouds.sfruby.com/e/2026-bits/${slug}`;
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

// Every approved ticket counts, organizers and volunteers included: they are
// in the room, and a volunteer from another company is that company attending.
const NOT_ATTENDEE_TICKETS = new Set();
// Companies never listed, by normalized key. Empty on purpose.
const HIDDEN_COMPANIES = new Set();
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

const slugOf = (raw) =>
  (raw || "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// People who typed a different name on the Pier than on Luma.
const NAME_ALIASES = { "vova dementyev": "vladimir dementyev" };

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(20_000) });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}

// A character exists when its image URL answers 200 with a PNG.
async function probeCharacter(name) {
  const slug = slugOf(name);
  if (!slug) return null;
  try {
    const res = await fetch(`${CHARACTER_URL(slug)}/character`, {
      method: "HEAD",
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok || !(res.headers.get("content-type") ?? "").startsWith("image/")) return null;
    return { name, url: CHARACTER_URL(slug), image_url: `${CHARACTER_URL(slug)}/character` };
  } catch {
    return null;
  }
}

async function fetchCharacters() {
  const characters = [];
  let cursor = null;
  do {
    const page = await getJson(CHARACTERS_API + (cursor ? `&cursor=${cursor}` : ""));
    characters.push(...(page.characters ?? []));
    cursor = page.next_cursor ?? null;
  } while (cursor);
  return characters;
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

  const [guests, characters] = await Promise.all([fetchGuests(apiKey), fetchCharacters()]);

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
    (c.names ??= new Map()).set(nameKey(g.name ?? g.user_name), (g.name ?? g.user_name ?? "").trim());
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

  const out = [];
  for (const c of [...companies.values()].filter((c) => c.people.size >= MIN_ATTENDEES)) {
    const seen = new Set();
    const chars = [];
    const add = (ch) => {
      if (!ch || seen.has(ch.url)) return;
      seen.add(ch.url);
      chars.push({ name: ch.name, url: ch.url, image: ch.image_url });
    };
    // A ticket holder from this company who made a character: from the list
    // API by name, else by probing the slug of the name they used on Luma.
    // Then anyone who typed this company on their card, which only a ticket
    // holder can make.
    for (const p of c.people) {
      add(byName.get(p) ?? (await probeCharacter(c.names.get(p))));
    }
    for (const ch of byCompany.get(c.key) ?? []) add(ch);
    const name = [...c.spellings.entries()].sort((a, b) => b[1] - a[1])[0][0];
    // Someone who typed this company on their card but a different one on
    // Luma still counts as in the room, so the count never reads below the
    // row of characters under it.
    out.push({ name, count: Math.max(c.people.size, chars.length), characters: chars });
  }
  out.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  // Snapshot the character art locally. A download that fails drops the
  // character (the person still counts; the block shows a stand-in).
  mkdirSync(IMG_DIR, { recursive: true });
  const keep = new Set();
  const snapshot = async (ch) => {
    const file = `${ch.url.split("/").filter(Boolean).at(-1)}.webp`;
    try {
      if (!keep.has(file)) {
        const res = await fetch(ch.image, { signal: AbortSignal.timeout(30_000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await sharp(buf).resize({ height: IMG_HEIGHT }).webp({ quality: 82 }).toFile(IMG_DIR + file);
        keep.add(file);
      }
      return { ...ch, image: `/attending/${file}` };
    } catch (e) {
      console.warn(`attending-companies: no image for ${ch.name} (${e.message})`);
      return null;
    }
  };
  for (const c of out) {
    c.characters = (await Promise.all(c.characters.map(snapshot))).filter(Boolean);
  }

  const crew = { organizers: [], volunteers: [] };
  for (const g of attendees) {
    const bucket = crewBucket(g.event_ticket?.name ?? "");
    if (!bucket) continue;
    const name = (g.name ?? g.user_name ?? "").trim();
    const n = nameKey(name);
    const ch = byName.get(NAME_ALIASES[n] ?? n) ?? (await probeCharacter(name));
    const snap = ch ? await snapshot({ name: ch.name, url: ch.url, image: ch.image_url }) : null;
    crew[bucket].push(snap ? { name, url: snap.url, image: snap.image } : { name });
  }
  for (const list of Object.values(crew)) list.sort((a, b) => a.name.localeCompare(b.name));

  for (const f of readdirSync(IMG_DIR)) if (!keep.has(f)) unlinkSync(IMG_DIR + f);

  writeFileSync(
    OUT,
    JSON.stringify({ fetchedAt: new Date().toISOString(), minAttendees: MIN_ATTENDEES, companies: out }, null, 2) + "\n",
  );
  writeFileSync(
    CREW_OUT,
    JSON.stringify({ fetchedAt: new Date().toISOString(), ...crew }, null, 2) + "\n",
  );
  console.log(
    `crew: ${crew.organizers.length} organizers, ${crew.volunteers.length} volunteers (${[...crew.organizers, ...crew.volunteers].filter((p) => p.image).length} with characters)`,
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
