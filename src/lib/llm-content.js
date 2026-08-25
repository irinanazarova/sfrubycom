// Single source of truth for the Markdown twins of our main pages and for llms.txt.
// Consumed by src/pages/[page].md.ts (static .md endpoints), src/pages/llms.txt.ts,
// and (at request time) the Netlify edge function that content-negotiates text/markdown.
//
// Everything is generated from the same data files the .astro pages render, so the
// Markdown stays in sync with the site as jobs/startups/news/meetups change.

import { getSortedJobs } from "../data/jobs.js";
import { getStartup, getAllStartups } from "../data/startups.js";
import { getSpeaker } from "../data/speakers.js";
import { talks } from "../data/talks.js";
import { getAllMeetupRecordings } from "../data/meetup-recordings.js";
import news from "../content/news.json";
import meetups from "../content/meetups.json";

export const SITE = "https://sfruby.com";

// Strip the light HTML that sometimes appears in prose fields (<br>, <a>, entities).
function plain(text) {
  if (!text) return "";
  return String(text)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00Z" : ""));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function upcomingMeetupLines() {
  const now = new Date();
  return meetups
    .filter((m) => new Date(m.startAt || m.date) >= new Date(now.toDateString()))
    .map(
      (m) =>
        `- **${plain(m.title)}**: ${fmtDate(m.date)}, ${m.time} at ${m.venue}. [Register](${m.lumaUrl})`,
    );
}

// --- Homepage ---------------------------------------------------------------
export function homeMarkdown() {
  const next = upcomingMeetupLines();
  return `# SF Ruby

> The community for Ruby developers, founders, and startups in San Francisco. Monthly meetups, an annual conference, a curated Ruby/Rails jobs board, and a running feed of Ruby company news.

SF Ruby (sfruby.com) exists to promote Ruby as the language of choice for new startups, showcase real Ruby companies, and support founders and engineers with meetups, talks, jobs, and news. We believe Ruby is the best language for building web applications, and San Francisco is where the most ambitious Ruby startups are born.

## Upcoming meetups
${next.length ? next.join("\n") : "See [Luma](https://lu.ma/sfruby) for the next event."}

## Sections
- [Jobs](${SITE}/jobs.md): Ruby and Rails roles at SF-area startups, refreshed monthly.
- [Startups](${SITE}/startups.md): Companies building on Ruby, many featured at our conference demos.
- [Videos](${SITE}/videos.md): Talks from SF Ruby Conf and recordings from the monthly meetups.
- [News](${SITE}/news.md): A running feed of Ruby company funding, launches, and hiring.
- [About](${SITE}/about.md): What SF Ruby is and how to get involved.

## Get involved
- Meetups: ${SITE}/meetup (RSVP on https://lu.ma/sfruby)
- Conference (Nov 10-12, 2026 at SFJAZZ): ${SITE}/
- 2026 speakers, with talk titles and abstracts: ${SITE}/speakers
- Sponsor: ${SITE}/sponsor-2026
`;
}

// --- Jobs -------------------------------------------------------------------
export function jobsMarkdown() {
  const jobs = getSortedJobs();
  const body = jobs
    .map((j) => {
      const startup = j.startupId ? getStartup(j.startupId) : null;
      const company = startup?.name || "";
      const heading = company ? `${j.title} at ${company}` : j.title;
      const meta = [j.location, j.type, j.salary].filter(Boolean).join(" · ");
      const chips = j.chips?.length ? `\nTags: ${j.chips.join(", ")}` : "";
      const site = startup?.url ? `\nCompany: ${startup.url}` : "";
      return `### ${heading}
${meta}${chips}
${plain(j.description)}
Apply: ${j.url}${site}`;
    })
    .join("\n\n");

  return `# SF Ruby Jobs

> ${jobs.length} Ruby and Rails engineering roles, mostly at San Francisco startups. Curated and audited monthly. See ${SITE}/jobs for the live board.

${body}
`;
}

// --- Startups ---------------------------------------------------------------
export function startupsMarkdown() {
  const startups = getAllStartups();
  const body = startups
    .map((s) => {
      const facts = [
        s.url && `Website: ${s.url}`,
        s.founded && `Founded: ${s.founded}`,
        s.funding && `Funding: ${s.funding}`,
        s.valuation && `Valuation: ${s.valuation}`,
        s.isYC && "Y Combinator",
      ]
        .filter(Boolean)
        .join(" · ");
      const news = s.news ? `\nLatest: ${plain(s.news)}` : "";
      return `### ${s.name}
${facts}
${plain(s.description)}${news}`;
    })
    .join("\n\n");

  return `# SF Ruby Startups

> ${startups.length} companies building on Ruby, many of which have demoed at SF Ruby. See ${SITE}/startups for the live list.

${body}
`;
}

// --- Videos (conference talks + meetup recordings) --------------------------
export function videosMarkdown() {
  const confTalks = Object.values(talks)
    .map((t) => {
      const speaker = t.speakerId ? getSpeaker(t.speakerId)?.name : "";
      const who = speaker ? ` by ${speaker}` : "";
      const link = t.youtubeId
        ? ` ([watch](https://youtu.be/${t.youtubeId}))`
        : t.blogPost
          ? ` ([blog post](${t.blogPost}))`
          : "";
      return `- **${plain(t.title)}**${who}${link}\n  ${plain(t.description)}`;
    })
    .join("\n");

  const recordings = getAllMeetupRecordings()
    .map((r) => {
      const talksList = (r.talks || [])
        .map((t) => {
          const at = t.timestamp
            ? ` (https://youtu.be/${r.youtubeId}?t=${t.timestamp})`
            : "";
          const co = t.company ? `, ${t.company}` : "";
          return `  - ${plain(t.title)}, by ${t.speaker}${co}${at}`;
        })
        .join("\n");
      return `### ${plain(r.title)}\n${fmtDate(r.date)}${r.venue ? ` · ${r.venue}` : ""}\nFull video: https://youtu.be/${r.youtubeId}\n${talksList}`;
    })
    .join("\n\n");

  return `# SF Ruby Talks & Recordings

> Conference talks from SF Ruby Conf and recordings of the monthly SF Bay Area Ruby meetups. See ${SITE}/videos for the browsable library.

## Conference talks
${confTalks}

## Meetup recordings
${recordings}
`;
}

// --- News -------------------------------------------------------------------
export function newsMarkdown() {
  const items = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
  const body = items
    .map((n) => {
      const co = n.startupName ? ` · ${n.startupName}` : "";
      const src = n.source ? ` (${n.source})` : "";
      return `### ${plain(n.headline)}
${fmtDate(n.date)} · ${n.category}${co}
${plain(n.summary)}
Source${src}: ${n.link}`;
    })
    .join("\n\n");

  return `# SF Ruby News

> A running feed of funding, launches, and hiring at companies that run on Ruby. ${items.length} items. See ${SITE}/news for search and filters, or ${SITE}/news/rss.xml for the feed.

${body}
`;
}

// --- About ------------------------------------------------------------------
export function aboutMarkdown() {
  return `# About SF Ruby

> The community for Ruby developers and founders in San Francisco.

## Our mission
SF Ruby exists to promote Ruby as the language of choice for new startups, showcase real Ruby companies (especially conference demos), and support founders and engineers with content, meetups, jobs, and resources. We believe Ruby is the best language for building web applications, and San Francisco is where the most ambitious Ruby startups are born.

## What we do
- **Monthly meetups** with talks, demos, and networking: ${SITE}/meetup. RSVP on [Luma](https://lu.ma/sfruby).
- **Annual conference.** SF Ruby Conf brings together 450+ Rubyists for two days of talks, workshops, and startup demos. See ${SITE}/.
- **Jobs board.** A curated, monthly-audited board of Ruby/Rails roles at SF-area startups: ${SITE}/jobs.
- **Startups & news.** We track Ruby companies and their milestones: ${SITE}/startups and ${SITE}/news.

## Links
- Meetups: https://lu.ma/sfruby
- Sponsor: ${SITE}/sponsor-2026
`;
}

// --- Page registry (drives the .md endpoint and llms.txt) -------------------
export const PAGES = [
  {
    slug: "index",
    title: "Home",
    description:
      "The San Francisco Ruby Startup Conference 2026, plus what SF Ruby is and links to every section.",
    render: homeMarkdown,
  },
  {
    slug: "jobs",
    title: "Jobs",
    description: "Ruby and Rails engineering roles at SF-area startups, audited monthly.",
    render: jobsMarkdown,
  },
  {
    slug: "startups",
    title: "Startups",
    description: "Companies building on Ruby, many featured at SF Ruby conference demos.",
    render: startupsMarkdown,
  },
  {
    slug: "videos",
    title: "Videos",
    description: "Conference talks and monthly meetup recordings.",
    render: videosMarkdown,
  },
  {
    slug: "news",
    title: "News",
    description: "A running feed of funding, launches, and hiring at Ruby companies.",
    render: newsMarkdown,
  },
  {
    slug: "about",
    title: "About",
    description: "What SF Ruby is and how to get involved.",
    render: aboutMarkdown,
  },
];

export function llmsTxt() {
  const links = PAGES.map(
    (p) => `- [${p.title}](${SITE}/${p.slug}.md): ${p.description}`,
  ).join("\n");

  return `# SF Ruby

> The community for Ruby developers, founders, and startups in San Francisco: monthly meetups, an annual conference, a curated Ruby/Rails jobs board, and a running feed of Ruby company news.

SF Ruby (sfruby.com) promotes Ruby as the language of choice for new startups and connects the people building on it. Each page below is available as clean Markdown by appending \`.md\` to its URL, or by requesting it with an \`Accept: text/markdown\` header.

## Pages
${links}

## Also
- Meetup page: ${SITE}/meetup (RSVPs: https://lu.ma/sfruby)
- News feed (RSS): ${SITE}/news/rss.xml
- Conference (Nov 10-12, 2026 at SFJAZZ): ${SITE}/
- 2026 speakers, with talk titles and abstracts: ${SITE}/speakers
`;
}
