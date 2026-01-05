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
 * Parse Yes/No to boolean
 */
function parseBoolean(value) {
  if (!value) return false;
  return value.toLowerCase().trim() === 'yes';
}

/**
 * Parse roles string to array
 */
function parseRoles(rolesStr) {
  if (!rolesStr) return [];
  return rolesStr.split(',').map(r => r.trim()).filter(Boolean);
}

/**
 * Parse percentage string to number
 */
function parsePercentage(value) {
  if (!value) return 0;
  const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
  return isNaN(num) ? 0 : Math.min(100, Math.max(0, num));
}

/**
 * Transform startup row to JSON
 */
function transformStartup(row) {
  const name = row['Startup Name'] || row['Name'] || '';
  if (!name) return null;

  return {
    id: generateId(name),
    name: name,
    logoUrl: row['Logo URL'] || row['Logo'] || '',
    founderNames: row['Founder Name(s)'] || row['Founders'] || '',
    founderLinkedIn: row['Founder LinkedIn Profile'] || row['LinkedIn'] || '',
    website: row['Website'] || '',
    oneLiner: (row['One-liner Description'] || row['Description'] || '').slice(0, 100),
    foundedDate: row['Founded Date'] || '',
    stage: row['Stage'] || 'Seed',
    metric: row['ARR or Funding'] || row['Funding'] || '',
    teamSize: parseInt(row['Team Size'] || '0', 10) || 0,
    hiring: parseBoolean(row['Hiring?'] || row['Hiring']),
    hiringRoles: parseRoles(row['Hiring Roles'] || ''),
    location: row['Location'] || 'SF-based',
    rubyPercentage: parsePercentage(row['Ruby/Rails Percentage'] || row['Ruby %']),
    rubyUseCase: (row['Brief Ruby/Rails use case'] || row['Ruby Use Case'] || '').slice(0, 200),
    researchOptIn: parseBoolean(row['Interested in "Startups on Rails" research?'] || row['Research Opt-in']),
    researchEmail: row['Research contact email'] || '',
    researchConsent: parseBoolean(row['Consent to include data in talks/keynotes?'] || row['Research Consent'])
  };
}

/**
 * Transform job row to JSON
 */
function transformJob(row) {
  const title = row['Job Title'] || row['Title'] || '';
  const company = row['Company Name'] || row['Company'] || '';
  if (!title || !company) return null;

  const postedDate = row['Posted Date'] || row['Timestamp'] || new Date().toISOString().split('T')[0];
  const expirationDate = row['Expiration Date'] || '';

  return {
    id: generateId(`${company}-${title}`),
    companyName: company,
    companyLogo: row['Company Logo URL'] || row['Logo'] || '',
    companyWebsite: row['Company Website'] || row['Website'] || '',
    contactEmail: row['Contact Email'] || '',
    contactName: row['Contact Name'] || '',
    jobTitle: title,
    description: (row['Job Description'] || row['Description'] || '').slice(0, 500),
    experienceLevel: row['Experience Level'] || 'Mid',
    location: row['Location'] || 'Remote',
    rubyRequired: parseBoolean(row['Ruby/Rails Required?'] || row['Ruby Required']),
    applicationUrl: row['Application URL'] || row['Apply URL'] || '',
    salaryRange: row['Salary Range'] || '',
    postedDate: postedDate,
    expirationDate: expirationDate,
    status: row['Status'] || 'Paid, Active',
    featured: parseBoolean(row['Featured'])
  };
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

/**
 * Check if today is before expiration date
 */
function isNotExpired(expirationDate) {
  if (!expirationDate) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expDate = new Date(expirationDate);
  return expDate >= today;
}

async function main() {
  console.log('Fetching data from Google Sheets...');

  const {
    SHEET_STARTUPS_CSV_URL,
    SHEET_JOBS_CSV_URL,
    SHEET_NEWS_CSV_URL,
    SHEET_TALKS_CSV_URL
  } = process.env;

  // Fetch startups
  if (SHEET_STARTUPS_CSV_URL) {
    try {
      console.log('Fetching startups...');
      const csv = await fetchCSV(SHEET_STARTUPS_CSV_URL);
      const rows = parseCSV(csv);
      const startups = rows
        .filter(row => {
          const status = row['Approval Status'] || row['Status'] || '';
          return status.toLowerCase() === 'approved' || status === '';
        })
        .map(transformStartup)
        .filter(Boolean);

      fs.writeFileSync(
        path.join(CONTENT_DIR, 'startups.json'),
        JSON.stringify(startups, null, 2)
      );
      console.log(`Wrote ${startups.length} startups`);
    } catch (err) {
      console.error('Error fetching startups:', err.message);
    }
  } else {
    console.log('SHEET_STARTUPS_CSV_URL not set, skipping startups');
  }

  // Fetch jobs
  if (SHEET_JOBS_CSV_URL) {
    try {
      console.log('Fetching jobs...');
      const csv = await fetchCSV(SHEET_JOBS_CSV_URL);
      const rows = parseCSV(csv);
      const jobs = rows
        .filter(row => {
          const status = row['Approval Status'] || row['Status'] || '';
          const paymentStatus = row['Status'] || '';
          const isApproved = status.toLowerCase() === 'approved' || status === '';
          const isPaid = paymentStatus.toLowerCase().includes('paid') || paymentStatus === '';
          const notExpired = isNotExpired(row['Expiration Date']);
          return isApproved && isPaid && notExpired;
        })
        .map(transformJob)
        .filter(Boolean);

      fs.writeFileSync(
        path.join(CONTENT_DIR, 'jobs.json'),
        JSON.stringify(jobs, null, 2)
      );
      console.log(`Wrote ${jobs.length} jobs`);
    } catch (err) {
      console.error('Error fetching jobs:', err.message);
    }
  } else {
    console.log('SHEET_JOBS_CSV_URL not set, skipping jobs');
  }

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
