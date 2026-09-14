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
import { days, formatDay, formatTime } from "../data/schedule-2026.js";

// The CFP app is the source of truth for what a talk is called. Speakers edit
// their entry there up to the conference, and a title we typed by hand can
// only go stale. So a real CFP title always wins, on every surface and in the
// client-side refresh too. The schedule file's title is the placeholder that
// holds the slot while a speaker's entry still says TBD, and it stops showing
// the moment they publish the real one.
// Each scheduled session with the day it sits on, so a profile can say when
// the talk is as well as what it is called. A session carries its own start
// inside a talks block; a keynote is the only session in its block and takes
// the block's.
const slots = days.flatMap((d) =>
  d.blocks.flatMap((b) =>
    (b.sessions ?? [])
      .filter((sess) => !sess.tba && sess.title)
      .map((sess) => ({ sess, day: d, start: sess.start || b.start })),
  ),
);

// A speaker has one CFP entry, so the model below gives them one title, which
// every row bearing their name would print. Two slots for one speaker (a talk
// and a panel, say) would silently put the same title on both. Fail the build
// instead: whoever adds the second slot has to decide what it is called.
const duplicate = slots
  .map(({ sess }) => speakerKey(sess.speaker))
  .find((key, i, keys) => keys.indexOf(key) !== i);
if (duplicate) {
  throw new Error(
    `schedule-2026.js: ${duplicate} has more than one session. One speaker, one CFP entry, one title. Split the speaker, or teach resolveTitle which slot is which.`,
  );
}

const scheduled = new Map(
  slots.map(({ sess }) => [speakerKey(sess.speaker), sess.title]),
);

// When the talk is. The schedule already prints its own times per row; this is
// for the surfaces that show one speaker on their own and have no column to
// read the time from: the card a slot opens, and the shareable speaker card.
const slotTimes = new Map(
  slots.map(({ sess, day, start }) => [
    speakerKey(sess.speaker),
    {
      day: day.n,
      weekday: day.weekday,
      date: formatDay(day),
      time: formatTime(start),
    },
  ]),
);

function resolveTitle(key, cfpTitle) {
  return cfpTitle || scheduled.get(key) || "";
}

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
      title: resolveTitle(
        key,
        talk && isRealTitle(talk.title) ? talk.title.trim() : "",
      ),
      // `pitch` on the roster covers a confirmed talk whose CFP entry is still
      // a stub; the CFP abstract takes over the moment one lands.
      abstract: cfpAbstract || s.pitch || "",
      role: talk?.speaker?.role || s.role || "",
      bio: cfpBio || s.bio || "",
      socials: socialMetaList(talk?.speaker?.socials),
      slot: slotTimes.get(key) || null,
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
