// Fetch real YouTube publish dates for every video shown on /videos.
//
//   node scripts/fetch-youtube-dates.js
//
// The /videos page is sorted by YouTube publish date. YouTube's Data API needs
// a key, but each watch page embeds the publish date in its HTML
// (`"publishDate":"2025-12-26T..."`), so we scrape it keylessly and cache the
// result to src/content/youtube-dates.json (id -> "YYYY-MM-DD").
//
// The cache is committed and merged on each run: a failed fetch keeps the
// previously known date rather than dropping it, so a flaky network or a
// YouTube markup change can never blank the feed. Re-run it when new videos
// are added (new meetup recording, conference upload, studio interview).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { talks } from "../src/data/talks.js";
import { getAllMeetupRecordings } from "../src/data/meetup-recordings.js";
import { getAllEmVideos } from "../src/data/em-videos.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "src", "content", "youtube-dates.json");

// Collect every unique YouTube id across the three sources.
const ids = new Set();
for (const t of Object.values(talks)) if (t.youtubeId) ids.add(t.youtubeId);
for (const m of getAllMeetupRecordings()) if (m.youtubeId) ids.add(m.youtubeId);
for (const v of getAllEmVideos()) if (v.youtubeId) ids.add(v.youtubeId);

// Start from the existing cache so a failed fetch never loses a known date.
let cache = {};
try {
    cache = JSON.parse(fs.readFileSync(OUT, "utf8"));
} catch {}

async function fetchPublishDate(id) {
    const res = await fetch(`https://www.youtube.com/watch?v=${id}`, {
        headers: {
            // A desktop UA avoids the EU consent interstitial that hides the date.
            "user-agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "accept-language": "en-US,en;q=0.9",
        },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const m = html.match(/"publishDate":"(\d{4}-\d{2}-\d{2})/);
    if (!m) throw new Error("publishDate not found");
    return m[1];
}

// Small concurrency pool so we stay polite and don't trip rate limits.
const all = [...ids];
const CONCURRENCY = 5;
let ok = 0;
let failed = 0;

async function worker(queue) {
    while (queue.length) {
        const id = queue.shift();
        try {
            cache[id] = await fetchPublishDate(id);
            ok++;
            process.stdout.write(`  ${id} -> ${cache[id]}\n`);
        } catch (err) {
            failed++;
            const note = cache[id] ? `kept ${cache[id]}` : "NO DATE";
            process.stdout.write(`  ${id} FAILED (${err.message}) [${note}]\n`);
        }
    }
}

console.log(`Fetching publish dates for ${all.length} videos...`);
const queue = [...all];
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

// Write sorted by id for a stable, reviewable diff.
const sorted = Object.fromEntries(Object.keys(cache).sort().map((k) => [k, cache[k]]));
fs.writeFileSync(OUT, JSON.stringify(sorted, null, 2) + "\n");

const missing = all.filter((id) => !cache[id]);
console.log(`\nDone: ${ok} fetched, ${failed} failed, ${Object.keys(cache).length} cached total.`);
if (missing.length) console.log(`Still missing dates for: ${missing.join(", ")}`);
