// One merge of roster + CFP feed, used by every surface that shows a speaker
// (the /speakers cards and the homepage roster). Both used to merge the two
// sources themselves and had drifted: the page showed the CFP bio while the
// homepage showed the roster line for the same person.
//
// Who owns what: the roster (src/data/conference-2026.js) owns who is confirmed,
// the sprite, the orgs and the keynote flag. The CFP owns the talk, and the
// speaker's own role and bio. Roster fields are the fallback wherever the CFP
// field is missing or still a stub.
import {
  buildTalkMap,
  isRealTitle,
  isRealAbstract,
  isRealBio,
  speakerKey,
} from "./cfpTalks.js";
import { socialMetaList } from "./socialLinks.js";

export function buildProfiles(talks, speakers, aliases = {}) {
  const { byKey, unmatched } = buildTalkMap(talks, speakers, aliases);
  const profiles = speakers.map((s) => {
    const key = speakerKey(s.name);
    const talk = byKey.get(key);
    const cfpBio = isRealBio(talk?.speaker?.bio) ? talk.speaker.bio.trim() : "";
    const cfpAbstract =
      talk && isRealAbstract(talk.abstract) ? talk.abstract.trim() : "";
    return {
      ...s,
      key,
      title: talk && isRealTitle(talk.title) ? talk.title.trim() : "",
      // `pitch` on the roster covers a confirmed talk whose CFP entry is still
      // a stub; the CFP abstract takes over the moment one lands.
      abstract: cfpAbstract || s.pitch || "",
      role: talk?.speaker?.role || s.role || "",
      bio: cfpBio || s.bio || "",
      socials: socialMetaList(talk?.speaker?.socials),
    };
  });
  return { profiles, unmatched };
}

// The homepage tile has room for a couple of lines, and the full bio is one tap
// away on /speakers. A whole first sentence reads better than a clipped one, so
// take that when it fits and fall back to a word-boundary cut.
export function shortBio(bio, maxLength = 130) {
  const text = String(bio ?? "")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= maxLength) return text;
  const sentence = text.match(/^.{40,}?[.!?](?=\s|$)/);
  if (sentence && sentence[0].length <= maxLength) return sentence[0];
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).replace(/[,;:.\s]+$/, "")}…`;
}
