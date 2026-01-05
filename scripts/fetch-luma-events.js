import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');

// Ensure content directory exists
if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

/**
 * Fetch JSON from Luma API
 */
function fetchLumaEvents(apiKey, calendarId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.lu.ma',
      path: `/public/v2/calendar/list-events?calendar_api_id=${calendarId}`,
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-luma-api-key': apiKey
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Luma API error: ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Failed to parse Luma response'));
        }
      });
      res.on('error', reject);
    });

    req.on('error', reject);
    req.end();
  });
}

/**
 * Transform Luma event to our format
 */
function transformEvent(entry) {
  const event = entry.event || entry;

  const startDate = new Date(event.start_at);
  const endDate = event.end_at ? new Date(event.end_at) : null;

  // Determine event type based on name or description
  let type = 'meetup';
  const name = (event.name || '').toLowerCase();
  if (name.includes('workshop')) type = 'workshop';
  else if (name.includes('talk') || name.includes('speaker')) type = 'talks';
  else if (name.includes('conference') || name.includes('conf')) type = 'conference';
  else if (name.includes('social') || name.includes('happy hour')) type = 'social';

  return {
    id: event.api_id || event.id || `luma_${Date.now()}`,
    title: event.name || 'SF Ruby Event',
    description: event.description || '',
    date: startDate.toISOString().split('T')[0],
    time: startDate.toTimeString().slice(0, 5),
    endTime: endDate ? endDate.toTimeString().slice(0, 5) : '',
    location: event.geo_address_info?.full_address || event.location || 'San Francisco',
    lumaUrl: event.url || `https://lu.ma/${event.api_id || ''}`,
    registeredCount: entry.guest_count || event.guest_count || 0,
    coverImageUrl: event.cover_url || '',
    type: type
  };
}

async function main() {
  console.log('Fetching events from Luma...');

  const { LUMA_API_KEY, LUMA_CALENDAR_ID } = process.env;

  if (!LUMA_API_KEY || !LUMA_CALENDAR_ID) {
    console.log('LUMA_API_KEY or LUMA_CALENDAR_ID not set, skipping Luma fetch');

    // Write empty array if no API access
    const existingPath = path.join(CONTENT_DIR, 'meetups.json');
    if (!fs.existsSync(existingPath)) {
      fs.writeFileSync(existingPath, JSON.stringify([], null, 2));
      console.log('Created empty meetups.json');
    }
    return;
  }

  try {
    const data = await fetchLumaEvents(LUMA_API_KEY, LUMA_CALENDAR_ID);

    // Luma API returns { entries: [...] }
    const entries = data.entries || data.events || [];

    const meetups = entries
      .map(transformEvent)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    fs.writeFileSync(
      path.join(CONTENT_DIR, 'meetups.json'),
      JSON.stringify(meetups, null, 2)
    );

    console.log(`Wrote ${meetups.length} meetups`);
  } catch (err) {
    console.error('Error fetching Luma events:', err.message);

    // Write empty array on error if file doesn't exist
    const existingPath = path.join(CONTENT_DIR, 'meetups.json');
    if (!fs.existsSync(existingPath)) {
      fs.writeFileSync(existingPath, JSON.stringify([], null, 2));
      console.log('Created empty meetups.json due to error');
    }
  }

  console.log('Done fetching Luma events!');
}

main().catch(console.error);
