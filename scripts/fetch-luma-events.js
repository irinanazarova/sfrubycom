import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');
const OUTPUT_PATH = path.join(CONTENT_DIR, 'meetups.json');

// Ensure content directory exists
if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

/**
 * Minimal .env loader so local `npm run build` picks up LUMA_* without dotenv.
 * Never overrides vars already present (e.g. Netlify's build env wins in prod).
 */
function loadDotEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const key = m[1];
    if (process.env[key] === undefined) {
      process.env[key] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

/**
 * Fetch the calendar's events from the Luma public API.
 * Uses /public/v1 (v2 returns 404 for this endpoint) and follows pagination.
 */
function fetchLumaPage(apiKey, calendarId, cursor) {
  return new Promise((resolve, reject) => {
    let queryPath = `/public/v1/calendar/list-events?calendar_api_id=${encodeURIComponent(calendarId)}`;
    if (cursor) queryPath += `&pagination_cursor=${encodeURIComponent(cursor)}`;

    const req = https.request(
      {
        hostname: 'api.lu.ma',
        path: queryPath,
        method: 'GET',
        headers: { accept: 'application/json', 'x-luma-api-key': apiKey },
      },
      (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Luma API error: ${res.statusCode}`));
          return;
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error('Failed to parse Luma response'));
          }
        });
        res.on('error', reject);
      }
    );
    req.on('error', reject);
    req.end();
  });
}

async function fetchAllEvents(apiKey, calendarId) {
  const all = [];
  let cursor = null;
  do {
    const page = await fetchLumaPage(apiKey, calendarId, cursor);
    all.push(...(page.entries || []));
    cursor = page.has_more ? page.next_cursor : null;
  } while (cursor);
  return all;
}

/**
 * Break an ISO timestamp into date (YYYY-MM-DD) and time (HH:MM) in a given
 * IANA timezone, so an event stored as UTC renders on its local calendar day.
 */
function partsInTimezone(iso, timezone) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return { date: '', time: '' };
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone || 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const p = Object.fromEntries(fmt.formatToParts(d).map((x) => [x.type, x.value]));
  const hour = p.hour === '24' ? '00' : p.hour; // Intl edge: midnight can format as 24
  return { date: `${p.year}-${p.month}-${p.day}`, time: `${hour}:${p.minute}` };
}

function classifyType(name) {
  const n = (name || '').toLowerCase();
  if (n.includes('workshop')) return 'workshop';
  if (n.includes('hackathon')) return 'workshop';
  if (n.includes('conference') || n.includes('conf')) return 'conference';
  if (n.includes('social') || n.includes('happy hour')) return 'social';
  return 'meetup';
}

/**
 * Transform a Luma entry into our Meetup shape (see src/utils/types.ts).
 */
function transformEvent(entry) {
  const event = entry.event || entry;
  const tz = event.timezone || 'America/Los_Angeles';
  const start = partsInTimezone(event.start_at, tz);
  const end = event.end_at ? partsInTimezone(event.end_at, tz) : { time: '' };

  const geo = event.geo_address_json || {};
  const location =
    geo.full_address ||
    [geo.address, geo.city_state].filter(Boolean).join(', ') ||
    'San Francisco, CA';

  const host = entry.submitted_by || {};

  return {
    id: event.api_id || event.id,
    title: event.name || 'SF Ruby Event',
    description: '', // Not returned by list-events; curate manually if needed.
    date: start.date,
    time: start.time,
    endTime: end.time,
    location,
    venue: geo.address || '',
    lumaUrl: event.url || `https://luma.com/${event.api_id || ''}`,
    registeredCount: 0, // list-events omits guest counts.
    coverImageUrl: event.cover_url || '',
    registrationOpen: event.registration_open ?? null,
    spotsRemaining: event.spots_remaining ?? null,
    hostName: host.name || '',
    hostAvatar: host.avatar_url || '',
    startAt: event.start_at,
    endAt: event.end_at || '',
    timezone: tz,
    type: classifyType(event.name),
  };
}

async function main() {
  console.log('Fetching events from Luma...');
  loadDotEnv();

  const { LUMA_API_KEY, LUMA_CALENDAR_ID } = process.env;

  if (!LUMA_API_KEY || !LUMA_CALENDAR_ID) {
    console.log('LUMA_API_KEY or LUMA_CALENDAR_ID not set, skipping Luma fetch');
    if (!fs.existsSync(OUTPUT_PATH)) {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify([], null, 2));
      console.log('Created empty meetups.json');
    }
    return;
  }

  try {
    const entries = await fetchAllEvents(LUMA_API_KEY, LUMA_CALENDAR_ID);
    const now = Date.now();

    // Keep only events that haven't ended yet (soonest first).
    const upcoming = entries
      .map(transformEvent)
      .filter((m) => {
        const ends = new Date(m.endAt || m.startAt).getTime();
        return !isNaN(ends) && ends >= now;
      })
      .sort((a, b) => new Date(a.startAt) - new Date(b.startAt));

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(upcoming, null, 2));
    console.log(`Wrote ${upcoming.length} upcoming meetup(s) (from ${entries.length} total).`);
  } catch (err) {
    console.error('Error fetching Luma events:', err.message);
    // Preserve the last good file on transient failure; only seed if missing.
    if (!fs.existsSync(OUTPUT_PATH)) {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify([], null, 2));
      console.log('Created empty meetups.json due to error');
    }
  }

  console.log('Done fetching Luma events!');
}

main().catch(console.error);
