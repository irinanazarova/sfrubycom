import https from 'https';
import http from 'http';
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
 * Fetch CSV from URL
 */
function fetchCSV(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      resolve('');
      return;
    }

    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchCSV(res.headers.location).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Parse CSV to array of objects
 */
function parseCSV(csv) {
  if (!csv || csv.trim() === '') return [];

  const lines = csv.split('\n');
  if (lines.length < 2) return [];

  // Parse header row - handle quoted fields
  const headers = parseCSVLine(lines[0]);

  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseCSVLine(line);
    const obj = {};

    headers.forEach((header, index) => {
      obj[header.trim()] = values[index] || '';
    });

    results.push(obj);
  }

  return results;
}

/**
 * Parse a single CSV line handling quoted fields
 */
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Generate URL-safe ID from name
 */
function generateId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Parse roles string to array
 */
function parseRoles(rolesStr) {
  if (!rolesStr) return [];
  return rolesStr.split(',').map(r => r.trim()).filter(Boolean);
}

/**
 * Transform news row to JSON
 */
function transformNews(row) {
  const headline = row['Headline'] || row['Title'] || '';
  if (!headline) return null;

  return {
    id: generateId(headline),
    date: row['Date of Event'] || row['Date'] || row['Timestamp'] || '',
    headline: headline,
    summary: (row['Summary'] || row['Description'] || '').slice(0, 200),
    link: row['Link'] || row['URL'] || '',
    category: row['Category'] || 'Press',
    startupName: row['Startup Name'] || '',
    source: row['Source'] || ''
  };
}

/**
 * Transform talk row to JSON
 */
function transformTalk(row) {
  const title = row['Title'] || '';
  if (!title) return null;

  return {
    id: generateId(title),
    title: title,
    speakerNames: row['Speaker Name(s)'] || row['Speakers'] || '',
    speakerSocial: row['Speaker Twitter/LinkedIn'] || row['Speaker Social'] || '',
    abstract: (row['Abstract'] || row['Description'] || '').slice(0, 300),
    duration: parseInt(row['Duration (minutes)'] || row['Duration'] || '30', 10),
    event: row['Event'] || 'SF Ruby Meetup',
    youtubeLink: row['YouTube Link'] || row['Video'] || '',
    slidesLink: row['Slides Link'] || row['Slides'] || '',
    date: row['Date'] || '',
    topicTags: parseRoles(row['Topic Tags'] || row['Tags'] || '')
  };
}

async function main() {
  console.log('Fetching data from Google Sheets...');

  const {
    SHEET_NEWS_CSV_URL,
    SHEET_TALKS_CSV_URL
  } = process.env;

  // Jobs and startups are hand-maintained in src/data/jobs.js and src/data/startups.js

  // Fetch news
  if (SHEET_NEWS_CSV_URL) {
    try {
      console.log('Fetching news...');
      const csv = await fetchCSV(SHEET_NEWS_CSV_URL);
      const rows = parseCSV(csv);
      const news = rows
        .filter(row => {
          const published = row['Published?'] || row['Published'] || '';
          return published.toLowerCase() === 'yes' || published === '';
        })
        .map(transformNews)
        .filter(Boolean)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      fs.writeFileSync(
        path.join(CONTENT_DIR, 'news.json'),
        JSON.stringify(news, null, 2)
      );
      console.log(`Wrote ${news.length} news items`);
    } catch (err) {
      console.error('Error fetching news:', err.message);
    }
  } else {
    console.log('SHEET_NEWS_CSV_URL not set, skipping news');
  }

  // Fetch talks
  if (SHEET_TALKS_CSV_URL) {
    try {
      console.log('Fetching talks...');
      const csv = await fetchCSV(SHEET_TALKS_CSV_URL);
      const rows = parseCSV(csv);
      const talks = rows
        .filter(row => {
          const published = row['Published?'] || row['Published'] || '';
          return published.toLowerCase() === 'yes' || published === '';
        })
        .map(transformTalk)
        .filter(Boolean)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      fs.writeFileSync(
        path.join(CONTENT_DIR, 'talks.json'),
        JSON.stringify(talks, null, 2)
      );
      console.log(`Wrote ${talks.length} talks`);
    } catch (err) {
      console.error('Error fetching talks:', err.message);
    }
  } else {
    console.log('SHEET_TALKS_CSV_URL not set, skipping talks');
  }

  console.log('Done fetching sheets data!');
}

main().catch(console.error);
