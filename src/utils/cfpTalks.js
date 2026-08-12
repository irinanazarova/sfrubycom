// Shared logic for the CFP talks feed (https://cfp.sfruby.com/api/talks).
// Used in three places that must never disagree: the build-time snapshot script
// (scripts/fetch-cfp-talks.js), server-side rendering in SpeakerRoster.astro,
// and the client-side refresh script in the same component.

export const CFP_API_PATH = "/api/talks?cfp_id=primary-2026";
export const CFP_API_ORIGIN = "https://cfp.sfruby.com";

// A title renders only when it looks like a real, confirmed talk title.
// Placeholder titles ("TBD", "Keynote", "My talk (wip)") stay hidden until the
// speaker fills in the real one. Validated against the live 2026 feed: every
// real title passes, every placeholder is caught.
export function isRealTitle(title) {
  if (typeof title !== "string") return false;
  const trimmed = title.trim();
  if (trimmed.length < 10) return false;
  if (trimmed.split(/\s+/).length < 2) return false;
  if (
    /\b(tbd|tba|tbc|wip|draft|placeholder|working title|title pending|coming soon)\b/i.test(
      trimmed,
    )
  )
    return false;
  return true;
}

// "Vladimir (Vova) Dementyev" -> ["vladimir", "dementyev"]; strips diacritics
// so the CFP's "Rosa Gutierrez" matches the roster's "Rosa Gutiérrez".
function nameTokens(name) {
  return (name ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\([^)]*\)/g, " ")
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

// First+last token key, so middle names and initials ("Jason G. Thomas")
// don't break the match. Also the value of the cards' data-cfp-key attribute.
export function speakerKey(name) {
  const tokens = nameTokens(name);
  if (tokens.length === 0) return "";
  if (tokens.length === 1) return tokens[0];
  return `${tokens[0]}-${tokens[tokens.length - 1]}`;
}

// Reduce the raw feed to { titles: Map<speakerKey, title>, unmatched: string[] }.
// `unmatched` lists CFP speaker names that matched nobody on the roster — each
// one is either a missing cfpNameAliases entry or a speaker we haven't added.
export function buildTitleMap(talks, speakers, aliases = {}) {
  const rosterKeys = new Set(speakers.map((s) => speakerKey(s.name)));
  const titles = new Map();
  const unmatched = [];
  if (!Array.isArray(talks)) return { titles, unmatched };
  for (const talk of talks) {
    const cfpName = talk?.speaker?.name?.trim();
    if (!cfpName) continue;
    const key = speakerKey(aliases[cfpName] ?? cfpName);
    if (!rosterKeys.has(key)) {
      unmatched.push(cfpName);
      continue;
    }
    if (isRealTitle(talk.title)) titles.set(key, talk.title.trim());
  }
  return { titles, unmatched };
}
