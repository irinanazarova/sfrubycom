// Single source of truth for the Markdown twins of our main pages, for /llms.txt
// and for /llms-full.txt. Consumed by src/pages/[page].md.ts (static .md
// endpoints), src/pages/llms.txt.ts, src/pages/llms-full.txt.ts, and (at request
// time) the Netlify edge function that content-negotiates text/markdown.
//
// Everything is generated from the same data files the .astro pages render, so
// the Markdown stays in sync with the site as the schedule, tickets, jobs,
// startups, news and meetups change. Which routes have a twin is decided in
// src/lib/markdown-twins.js; this file only knows how to render each one.

import { TWINS } from "./markdown-twins.js";
import { getSortedJobs } from "../data/jobs.js";
import { getStartup, getAllStartups } from "../data/startups.js";
import { getSponsor } from "../data/sponsors.js";
import { getSpeaker } from "../data/speakers.js";
import { talks } from "../data/talks.js";
import {
  getAllMeetupRecordings,
  getLatestMeetupRecordings,
} from "../data/meetup-recordings.js";
import { getAllHosts } from "../data/hosts.js";
import {
  conferenceSpeakers,
  cfpNameAliases,
  ticketTiers,
  ticketLink,
} from "../data/conference-2026.js";
import {
  AUDIENCES,
  days,
  formatTime,
  formatRange,
} from "../data/schedule-2026.js";
import { buildProfiles } from "../utils/speakerProfiles.js";
import { speakerKey } from "../utils/cfpTalks.js";
import {
  conference2026SponsorTiers,
  sponsors as sponsors2025,
} from "../data/sponsors.js";
import {
  sponsorTiers2026,
  sponsorStats2026,
  whySponsor2026,
} from "../data/sponsor-tiers-2026.js";
import { emailSubject, emailBody } from "../data/manager-email-2026.js";
import {
  ADDRESS,
  MAPS,
  transit,
  garages,
  programHours,
  STREET_NOTE,
  SOURCE_NOTE,
} from "../data/venue-2026.js";
import cfpTalks from "../content/cfp-talks.json";
import attending from "../content/attending-companies.json";
import crew from "../content/crew-2026.json";
import news from "../content/news.json";
import meetups from "../content/meetups.json";

export const SITE = "https://sfruby.com";
const LUMA_CALENDAR = "https://lu.ma/sfruby";
const SLACK_INVITE =
  "https://join.slack.com/t/sf-ruby/shared_invite/zt-3mi22dwb9-MGN_s0j_jNrt7hb4rvqkHg";
const NEWSLETTER = "https://sfruby.substack.com/";
const CONTACT_EMAIL = "conference@sfruby.com";
const SPONSOR_EMAIL = "vicamelnikova@evilmartians.com";
const PIER_URL = "https://clouds.sfruby.com";

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

// "Tuesday, November 10, 2026" for a schedule day.
const fmtDay = (day) => `${day.weekday}, ${fmtDate(day.date)}`;

// Upcoming monthly meetups from the Luma snapshot; the conference is in the
// same feed under its own type and has the whole homepage twin to itself.
function upcomingMeetupLines() {
  const today = new Date().toISOString().slice(0, 10);
  return meetups
    .filter((m) => m.type === "meetup" && (m.date ?? "") >= today)
    .map(
      (m) =>
        `- **${plain(m.title)}**: ${fmtDate(m.date)}${m.time ? `, ${formatTime(m.time)}` : ""} at ${m.location || m.venue}. [RSVP](${m.lumaUrl})`,
    );
}

function upcomingMeetupsSection() {
  const next = upcomingMeetupLines();
  return next.length
    ? next.join("\n")
    : `No meetup is on the calendar yet. Dates appear on [Luma](${LUMA_CALENDAR}).`;
}

// --- Conference (the homepage) ----------------------------------------------
const price = (t) => `$${t.price}`;
const note = (t) => String(t.note ?? "").replace(/\.+$/, "");
const fromPrice = Math.min(
  ...ticketTiers.filter((t) => t.state === "live").map((t) => t.price),
);

function ticketsSection(placement) {
  const live = ticketTiers.filter((t) => t.state === "live");
  const gone = ticketTiers.filter((t) => t.state === "gone");
  const soon = ticketTiers.filter((t) => t.state === "soon");
  const lines = [
    ...live.map((t) => `- **${t.name}**: ${price(t)}. ${note(t)}.`),
    ...soon.map((t) => `- ${t.name}: ${price(t)}. ${note(t)}.`),
    ...gone.map((t) => `- ${t.name}: ${price(t)}. ${note(t)}.`),
  ];
  return `${lines.join("\n")}

Buy on Luma: ${ticketLink(placement)}

Teams of five and more get 10% off and a segment on stage: ${SITE}/team. Need company sign-off to attend? The email to send is at ${SITE}/manager.md.`;
}

function scheduleSection() {
  const label = (b) =>
    b.kind === "keynote"
      ? "Keynote, everyone"
      : (AUDIENCES[b.audience]?.label ?? "");
  return days
    .map((d) => {
      const head = `### Day ${d.n}: ${d.theme}
${fmtDay(d)}. ${d.tagline}`;
      if (!d.blocks.length) {
        const links = (d.links ?? [])
          .map((l) => `- ${l.label}: ${l.href}`)
          .join("\n");
        return `${head}\n${links}`;
      }
      const blocks = d.blocks
        .map((b) => {
          if (b.kind === "break" || b.kind === "lunch") {
            return `- ${formatTime(b.start)}: ${b.kind === "lunch" ? "Lunch" : "Break"}`;
          }
          const sessions = b.sessions
            .map((s) => {
              const at = s.start ? `${formatTime(s.start)}: ` : "";
              if (s.tba) return `  - ${at}To be announced`;
              return `  - ${at}**${s.title}**, ${s.speaker} (${s.org})`;
            })
            .join("\n");
          const group = b.group
            ? `\n  - Meanwhile, ${AUDIENCES[b.group.audience]?.label}: conversation group "${b.group.title}"${
                b.group.hosts
                  ? `, with ${b.group.hosts.join(" and ")}`
                  : b.group.hostTbc
                    ? ", host to be confirmed"
                    : ""
              }`
            : "";
          return `- ${formatRange(b.start, b.end)}, ${label(b)}\n${sessions}${group}`;
        })
        .join("\n");
      return `${head}\n\n${blocks}`;
    })
    .join("\n\n");
}

// Speakers in schedule order, then anyone on the roster the schedule has not
// placed yet. Each entry is the same merge the speaker cards render.
function speakersSection() {
  const { profiles } = buildProfiles(
    cfpTalks,
    conferenceSpeakers,
    cfpNameAliases,
  );
  const byKey = new Map(profiles.map((p) => [p.key, p]));
  const ordered = [];
  const seen = new Set();
  const push = (p) => {
    if (p && !seen.has(p.key)) {
      seen.add(p.key);
      ordered.push(p);
    }
  };
  for (const d of days)
    for (const b of d.blocks)
      for (const s of b.sessions ?? [])
        if (!s.tba) push(byKey.get(speakerKey(s.speaker)));
  profiles.forEach(push);

  return ordered
    .map((p) => {
      const orgs = (p.orgs ?? [])
        .map((o) => (o.url ? `[${o.name}](${o.url})` : o.name))
        .join(", ");
      const meta = [orgs, p.role].filter(Boolean).join(". ");
      const socials = (p.socials ?? []).map((l) => l.href).join(", ");
      return [
        `### ${p.name}${p.keynote ? " (keynote)" : ""}`,
        meta,
        p.title ? `Talk: **${p.title}**` : "",
        p.abstract ? plain(p.abstract) : "",
        p.bio ? plain(p.bio) : "",
        socials ? `Links: ${socials}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");
    })
    .join("\n\n");
}

const sponsorsSection = () =>
  conference2026SponsorTiers
    .map(
      (t) =>
        `- **${t.tier}**: ${t.sponsors.map((s) => `[${s.name}](${s.url})`).join(", ")}`,
    )
    .join("\n");

const attendingSection = () => {
  const names = (attending.companies ?? []).map((c) => c.name);
  return names.length
    ? `Companies with two or more ticket holders, organizers and volunteers included. Updated on every deploy.\n\n${names.join(" · ")}`
    : "";
};

function venueSection() {
  const hours = programHours()
    .map((h) => `Day ${h.n} runs ${h.opens} to ${h.closes}`)
    .join(", ");
  const transitLines = transit
    .map((t) => `- **${t.name}**: ${t.detail} ${t.meta}.`)
    .join("\n");
  const garageLines = garages
    .map(
      (g) =>
        `- **[${g.name}](${g.href})**, ${g.address}. ${g.walk}. ${g.rates
          .map(([k, v]) => `${k}: ${v}`)
          .join("; ")}. ${g.note}`,
    )
    .join("\n");
  return `[SFJAZZ Center](https://www.sfjazz.org/), ${ADDRESS}, at Fell, in Hayes Valley. Entrance on Franklin. ${hours}.

Directions: [Google Maps](${MAPS.google}), [Apple Maps](${MAPS.apple}).

Public transit:
${transitLines}

Parking:
${garageLines}

${STREET_NOTE}

${SOURCE_NOTE}`;
}

const crewSection = () =>
  [...(crew.organizers ?? []), ...(crew.volunteers ?? [])]
    .map((p) => p.name)
    .sort((a, b) => a.localeCompare(b))
    .join(" · ");

export function homeMarkdown() {
  return `# San Francisco Ruby Conference 2026

> Nov 10-12, 2026 at SFJAZZ Center, San Francisco. Two days of Ruby talks for small teams and big teams, Day 1 AI-heavy and Day 2 AI-light, then a community day. Tickets from $${fromPrice}. Organized by [Evil Martians](https://evilmartians.com).

Year two of the conference, and the second year of SF Ruby (${SITE}), the community for Ruby developers and founders in San Francisco. One stage, two audiences: while Small teams are in a talk, Big teams are in a conversation group, then they swap. Keynotes are for everyone.

- Tickets: ${ticketLink("index-md")}
- The schedule on the site: ${SITE}/#schedule
- Sponsor: ${SITE}/sponsor-2026.md
- Questions: ${CONTACT_EMAIL}

## Tickets

${ticketsSection("index-md-tickets")}

## Schedule

${scheduleSection()}

## Speakers

${speakersSection()}

## Sponsors

${sponsorsSection()}

Join them: ${SITE}/sponsor-2026.md

## Companies attending

${attendingSection()}

## The Pier

Everyone who comes gets a character. [The Pier](${PIER_URL}) is an 8-bit San Francisco where attendees, speakers and volunteers walk around as pixel versions of themselves. Buy a ticket, get a character. New quests come out until November, and the last badges are earned in person at SFJAZZ.

## Venue and getting there

${venueSection()}

## Organizers and volunteers

${crewSection()}

## SF Ruby all year round

SF Ruby meets every month: free meetups, a jobs board, and Ruby news.

- [Meetup](${SITE}/meetup.md): the next dates, recordings, and the companies that host it.
- [Jobs](${SITE}/jobs.md): Ruby and Rails roles at SF-area startups, audited monthly.
- [Startups](${SITE}/startups.md): companies building on Ruby.
- [Videos](${SITE}/videos.md): conference talks and meetup recordings.
- [News](${SITE}/news.md): funding, launches, and hiring at Ruby companies.
- [About](${SITE}/about.md): what SF Ruby is and how to get in touch.
- Last year: [2025 schedule](${SITE}/schedule-2025), [2025 speakers](${SITE}/speakers-2025), [2025 sponsors](${SITE}/sponsors-2025).

Next meetups:
${upcomingMeetupsSection()}
`;
}

// --- Convince your manager --------------------------------------------------
export function managerMarkdown() {
  return `# Convince your manager

> An email to send your manager for the San Francisco Ruby Conference 2026, Nov 10-12 at SFJAZZ, with the costs. Copy, fill in the brackets, send.

## Email subject

\`\`\`text
${emailSubject}
\`\`\`

## Email body

\`\`\`text
${emailBody}
\`\`\`

Every talk, with its abstract, is in the schedule: ${SITE}/index.md. Teams of five get 10% off and a segment on stage: ${SITE}/team. Register: ${ticketLink("manager-md")}.
`;
}

// --- Sponsor 2026 -----------------------------------------------------------
export function sponsorMarkdown() {
  const stats = sponsorStats2026
    .map((s) => `- ${s.label}: ${s.value}`)
    .join("\n");
  const why = whySponsor2026
    .map((r) => `- **${r.title}.** ${r.text}`)
    .join("\n");
  const tiers = sponsorTiers2026
    .map((t) => {
      const head = `### ${t.name.replace(/[^\p{L}\p{N})]+$/u, "").trim()}${t.price ? `: ${t.price}` : ""}`;
      const benefits = t.benefits.map((b) => `- ${b}`).join("\n");
      const pay = t.paymentLink ? `\nPay by card: ${t.paymentLink}` : "";
      return `${head}\n${t.description}\n${benefits}${pay}`;
    })
    .join("\n\n");
  const attendingNames = (attending.companies ?? []).map((c) => c.name);
  const room = attendingNames.length
    ? `## Who is in the room

Companies with two or more ticket holders so far, organizers and volunteers included.

${attendingNames.join(" · ")}

`
    : "";

  return `# Sponsor the San Francisco Ruby Conference 2026

> Three days in a room of engineers who read and write Ruby, from the startups building on it and the household names running it at scale, plus a monthly meetup the rest of the year. Nov 10-12, 2026 at SFJAZZ.

## 2026 in numbers

${stats}

${room}## Why sponsor

${why}

## 2026 sponsorship tiers

${tiers}

## 2026 sponsors so far

${sponsorsSection()}

Year one had ${Object.keys(sponsors2025).length} sponsors, Chime, Bolt.new, Cisco, Gusto and Temporal among them: ${SITE}/sponsors-2025.

## Contact

Questions, or a custom package: ${SPONSOR_EMAIL}. The conference program, speakers and venue: ${SITE}/index.md.
`;
}

// --- Meetup -----------------------------------------------------------------
function recordingMarkdown(r) {
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
}

export function meetupMarkdown() {
  const hosts = getAllHosts()
    .map((h) => `- **[${h.name}](${h.url})** (${h.tag}): ${plain(h.summary)}`)
    .join("\n");
  const latest = getLatestMeetupRecordings(2)
    .map(recordingMarkdown)
    .join("\n\n");

  return `# SF Ruby Meetup

> The monthly SF Ruby meetup: talks, startup demos, and networking with founders and engineers building with Ruby. Free, every month, in San Francisco. RSVP on [Luma](${LUMA_CALENDAR}).

## Next meetups

${upcomingMeetupsSection()}

## Take part

- All events and RSVPs: ${LUMA_CALENDAR}
- Submit a talk: https://forms.gle/EZLqENWd5VjiLduq8
- Demo your startup: https://docs.google.com/forms/d/e/1FAIpQLSdTg1VZIMOyWqffBZgsQxxWbSWYOKmp_kFVnQhtJvlgvdabyw/viewform?usp=send_form
- Host the meetup at your office: ${SITE}/host

## Latest recordings

Every talk is on YouTube. The full library: ${SITE}/videos.md.

${latest}

## Hosts

These companies open their doors to the Ruby community.

${hosts}

## Between meetups

- Slack: ${SLACK_INVITE}
- Newsletter: ${NEWSLETTER}
- Photos: ${SITE}/photos
- The conference, Nov 10-12, 2026: ${SITE}/index.md
`;
}

// --- Jobs -------------------------------------------------------------------
export function jobsMarkdown() {
  const jobs = getSortedJobs();
  const body = jobs
    .map((j) => {
      const startup = j.startupId ? getStartup(j.startupId) : null;
      const sponsor = j.sponsorId ? getSponsor(j.sponsorId) : null;
      // Inline-company listings carry their own companyName; sponsors and
      // startups resolve through their rosters.
      const company = startup?.name || sponsor?.name || j.companyName || "";
      const heading = company ? `${j.title} at ${company}` : j.title;
      const meta = [j.location, j.type, j.salary].filter(Boolean).join(" · ");
      const chips = j.chips?.length ? `\nTags: ${j.chips.join(", ")}` : "";
      const site = startup?.url || sponsor?.url ? `\nCompany: ${startup?.url || sponsor?.url}` : "";
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
    .map(recordingMarkdown)
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

> The community for Ruby developers and founders in San Francisco. Organized by Evil Martians.

## Our mission
SF Ruby exists to promote Ruby as the language of choice for new startups, showcase real Ruby companies, and support founders and engineers with content, meetups, jobs, and resources. We believe Ruby is the best language for building web applications, and San Francisco is where the most ambitious Ruby startups are born. Our goal is to connect the Ruby community and help it thrive.

## What we do
- **Monthly meetups** with talks, demos, and networking: ${SITE}/meetup.md. RSVP on [Luma](${LUMA_CALENDAR}).
- **Annual conference.** The San Francisco Ruby Conference brings 450+ Rubyists together every November: two days of talks and a community day. 2026 is Nov 10-12 at SFJAZZ: ${SITE}/index.md.
- **Startup directory.** Ruby startups in the Bay Area, from pre-seed to public companies: ${SITE}/startups.md.
- **Jobs board.** Ruby and Rails roles, audited monthly: ${SITE}/jobs.md. Companies post at ${SITE}/jobs/post.
- **Videos and news.** ${SITE}/videos.md and ${SITE}/news.md.

## Organized by
SF Ruby is organized by [Evil Martians](https://evilmartians.com), a product development consultancy and open source powerhouse. We build and maintain popular Ruby gems and contribute to Rails core.

## Get in touch
- Email: ${CONTACT_EMAIL}
- Slack: ${SLACK_INVITE}
- Newsletter: ${NEWSLETTER}
- X: https://x.com/inazarova
- Sponsor the conference: ${SITE}/sponsor-2026.md
`;
}

// --- Page registry (drives the .md endpoint, llms.txt and llms-full.txt) ----
const RENDERERS = {
  index: homeMarkdown,
  manager: managerMarkdown,
  "sponsor-2026": sponsorMarkdown,
  meetup: meetupMarkdown,
  jobs: jobsMarkdown,
  startups: startupsMarkdown,
  videos: videosMarkdown,
  news: newsMarkdown,
  about: aboutMarkdown,
};

export const PAGES = TWINS.map((t) => {
  const render = RENDERERS[t.slug];
  if (!render)
    throw new Error(
      `No Markdown renderer for /${t.slug}.md (see src/lib/markdown-twins.js)`,
    );
  return { ...t, render };
});

const CONFERENCE_SLUGS = ["index", "manager", "sponsor-2026"];

export function llmsTxt() {
  const link = (p) => `- [${p.title}](${SITE}/${p.slug}.md): ${p.description}`;
  const conference = PAGES.filter((p) => CONFERENCE_SLUGS.includes(p.slug)).map(
    link,
  );
  const community = PAGES.filter((p) => !CONFERENCE_SLUGS.includes(p.slug)).map(
    link,
  );

  return `# SF Ruby

> The community for Ruby developers, founders, and startups in San Francisco: the San Francisco Ruby Conference (Nov 10-12, 2026 at SFJAZZ), a monthly meetup, a curated Ruby/Rails jobs board, a startup directory, talk recordings, and a running feed of Ruby company news. Organized by Evil Martians.

Every page below is available as Markdown by appending \`.md\` to its URL, or by requesting the HTML URL with an \`Accept: text/markdown\` header. All of them in one file: ${SITE}/llms-full.txt.

## Conference 2026
${conference.join("\n")}

## Community
${community.join("\n")}

## Also
- Tickets: ${ticketLink("llms-txt")}
- Meetup RSVPs: ${LUMA_CALENDAR}
- Slack: ${SLACK_INVITE}
- Newsletter: ${NEWSLETTER}
- News feed (RSS): ${SITE}/news/rss.xml
- The Pier, the pre-conference game: ${PIER_URL}
- 2025 archive: ${SITE}/schedule-2025, ${SITE}/speakers-2025, ${SITE}/sponsors-2025
- Contact: ${CONTACT_EMAIL}
`;
}

export function llmsFullTxt() {
  return PAGES.map(
    (p) => `<!-- ${SITE}/${p.slug}.md -->\n\n${p.render().trimEnd()}`,
  ).join("\n\n\n");
}
