// Prep step for the talk-summary workflow.
//
//   node scripts/build-summaries-prep.mjs
//
// Builds the same per-row item list as /videos, assigns each a stable summary key,
// and writes ONE transcript file per item to transcripts/items/<key>.txt so a
// workflow agent can summarize it with a single Read:
//   - one-talk videos (conference talks/demos/interviews) -> the video transcript
//   - meetup sub-talks -> the slice of the recording between this talk's start and
//     the next talk's start (needs timestamps, so meetup VTTs are re-fetched timed)
//   - meetup "full recording" rows -> the whole recording transcript
// Emits scratchpad manifest (metadata only) consumed by the Workflow as args.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

import { talks } from "../src/data/talks.js";
import { slotAssignments, scheduleSlots } from "../src/data/schedule.js";
import { getSpeaker } from "../src/data/speakers.js";
import { getAllMeetupRecordings } from "../src/data/meetup-recordings.js";
import { getAllEmVideos } from "../src/data/em-videos.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TXT = (id) => path.join(ROOT, "transcripts", `${id}.txt`);
const ITEMS_DIR = path.join(ROOT, "transcripts", "items");
const TIMED_DIR = path.join(ROOT, "transcripts", "timed");
const TMP = path.join(ROOT, "transcripts", ".vtt-timed");
const MANIFEST = process.argv[2] || path.join(ROOT, "transcripts", "summary-manifest.json");
fs.mkdirSync(ITEMS_DIR, { recursive: true });
fs.mkdirSync(TIMED_DIR, { recursive: true });

// ---- replicate /videos item construction (the bits we need) ------------------
const day12 = Object.keys(scheduleSlots).filter((s) => scheduleSlots[s].day <= 2);
const confIds = new Set(day12.map((s) => slotAssignments[s]).filter(Boolean));
const excluded = new Set(["hack-day-angellist", "community-day-placeholder"]);
const all = Object.values(talks);
const conferenceTalks = all.filter(
    (t) => confIds.has(t.id) && ["keynote", "talk", "workshop", "panel"].includes(t.type) && !excluded.has(t.id),
);
const startupDemos = all.filter((t) => t.type === "demo");
const kindForType = { keynote: "keynote", talk: "talk", panel: "talk", workshop: "workshop", demo: "demo" };

function speakerName(talk) {
    if (talk.speakerId) return getSpeaker(talk.speakerId)?.name || "";
    if (talk.speakers?.length) return talk.speakers.map((id) => getSpeaker(id)?.name).filter(Boolean).join(", ");
    return "";
}
function speakerCompany(talk) {
    if (talk.speakerId) return getSpeaker(talk.speakerId)?.company || "";
    return "";
}

const MEETUP_SHORT_KW =
    /(announc|hiring|open mic|stand[\s-]?up|q&a|newsletter|office hours|\bupdates?\b|recap|\bpsa\b|pre-vetted|looking for|job seeker|sponsorship|opening words)/i;
const MEETUP_MIN_SEC = 720;

// ---- VTT helpers -------------------------------------------------------------
const tsToSec = (s) => {
    const [h, m, rest] = s.split(":");
    return +h * 3600 + +m * 60 + parseFloat(rest);
};
function fetchTimedCues(id) {
    const cache = path.join(TIMED_DIR, `${id}.json`);
    if (fs.existsSync(cache)) return JSON.parse(fs.readFileSync(cache, "utf8"));
    fs.rmSync(TMP, { recursive: true, force: true });
    fs.mkdirSync(TMP, { recursive: true });
    try {
        execFileSync("yt-dlp", [
            "--write-auto-sub", "--write-sub", "--sub-lang", "en", "--skip-download",
            "--sub-format", "vtt", "--retries", "3", "--no-warnings", "--quiet",
            "-o", path.join(TMP, id), `https://www.youtube.com/watch?v=${id}`,
        ], { stdio: "ignore" });
    } catch {}
    const vtt = fs.readdirSync(TMP).filter((f) => f.startsWith(id) && f.endsWith(".vtt")).sort((a, b) => a.length - b.length)[0];
    const cues = [];
    if (vtt) {
        const lines = fs.readFileSync(path.join(TMP, vtt), "utf8").split("\n");
        let t = null;
        for (const line of lines) {
            const m = line.match(/^(\d\d:\d\d:\d\d\.\d+)\s+-->/);
            if (m) { t = tsToSec(m[1]); continue; }
            if (t == null) continue;
            const text = line.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
            if (text) cues.push({ t, text });
        }
    }
    fs.rmSync(TMP, { recursive: true, force: true });
    fs.writeFileSync(cache, JSON.stringify(cues));
    return cues;
}
// Collapse YouTube's rolling-caption duplicates into clean prose.
function collapse(texts) {
    const out = [];
    for (const text of texts) {
        const prev = out[out.length - 1];
        if (prev && text.startsWith(prev)) out[out.length - 1] = text;
        else if (prev && prev.startsWith(text)) continue;
        else out.push(text);
    }
    return out.join(" ").replace(/\s+/g, " ").trim();
}

const manifest = [];
function emit(item) {
    const safe = item.sumKey.replace(/[^a-zA-Z0-9._-]/g, "_");
    const file = path.join(ITEMS_DIR, `${safe}.txt`);
    fs.writeFileSync(file, item.text + "\n");
    delete item.text;
    item.itemFile = path.relative(ROOT, file);
    manifest.push(item);
}

// ---- one-talk videos: conference talks/demos --------------------------------
for (const talk of [...conferenceTalks, ...startupDemos]) {
    if (!talk.youtubeId || !fs.existsSync(TXT(talk.youtubeId))) continue;
    emit({
        sumKey: `v:${talk.youtubeId}`,
        kind: kindForType[talk.type] || "talk",
        title: talk.title,
        speaker: speakerName(talk),
        company: speakerCompany(talk),
        event: "SF Ruby Conference 2025",
        text: fs.readFileSync(TXT(talk.youtubeId), "utf8"),
    });
}

// ---- interviews / studio -----------------------------------------------------
for (const v of getAllEmVideos()) {
    if (!v.youtubeId || !fs.existsSync(TXT(v.youtubeId))) continue;
    emit({
        sumKey: `v:${v.youtubeId}`,
        kind: v.type === "interview" ? "interview" : "studio",
        title: v.title,
        speaker: v.guest || "",
        company: v.guestCompany || "",
        event: v.series || "Evil Martians",
        text: fs.readFileSync(TXT(v.youtubeId), "utf8"),
    });
}

// ---- meetups: sub-talk slices + full recording ------------------------------
let sliced = 0, unsliceable = 0;
for (const rec of getAllMeetupRecordings()) {
    if (!rec.youtubeId || !fs.existsSync(TXT(rec.youtubeId))) continue;
    const sorted = [...(rec.talks || [])].map((t, idx) => ({ ...t, idx })).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
    const substantial = sorted.filter((t, i) => {
        const next = sorted[i + 1];
        const dur = next && t.timestamp > 0 && next.timestamp > t.timestamp ? next.timestamp - t.timestamp : null;
        if (MEETUP_SHORT_KW.test(t.title)) return false;
        if (dur == null) return true;
        return dur >= MEETUP_MIN_SEC;
    });
    const needTimed = substantial.some((t) => t.timestamp > 0);
    const cues = needTimed ? fetchTimedCues(rec.youtubeId) : [];
    const wholeText = fs.readFileSync(TXT(rec.youtubeId), "utf8");

    for (const t of substantial) {
        const pos = sorted.findIndex((s) => s.idx === t.idx);
        const next = sorted[pos + 1];
        const start = t.timestamp || 0;
        const end = next ? next.timestamp || Infinity : Infinity;
        let text, note;
        if (start > 0 && cues.length) {
            text = collapse(cues.filter((c) => c.t >= start - 5 && c.t < end).map((c) => c.text));
            sliced++;
        }
        if (!text || text.length < 80) {
            // ts=0 or empty slice: hand over the whole recording, agent extracts by title.
            text = wholeText;
            note = "This is the full meetup recording transcript; summarize ONLY the segment that is the talk named below.";
            unsliceable++;
        }
        emit({
            sumKey: `m:${rec.id}:${t.idx}`,
            kind: "meetup-talk",
            title: t.title,
            speaker: t.speaker || "",
            company: t.company || "",
            event: `${(rec.title || "Ruby Meetup").replace(/\s*[-–—]\s*[A-Za-z]+\s+\d{4}.*$/, "").trim()}${rec.venue ? " · " + rec.venue : ""}`,
            note,
            text,
        });
    }
    // full recording row
    emit({
        sumKey: `r:${rec.id}`,
        kind: "meetup-recording",
        title: rec.title,
        speaker: "",
        company: "",
        event: rec.venue || "",
        lineup: substantial.map((t) => ({ title: t.title, speaker: t.speaker || "", company: t.company || "" })),
        text: wholeText,
    });
}

fs.rmSync(TMP, { recursive: true, force: true });
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Manifest: ${manifest.length} items -> ${path.relative(ROOT, MANIFEST)}`);
console.log(`Meetup sub-talks: ${sliced} sliced by timestamp, ${unsliceable} fell back to full transcript.`);
console.log(`Item transcripts in ${path.relative(ROOT, ITEMS_DIR)}/`);
