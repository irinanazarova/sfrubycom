// The HTML routes that have a Markdown twin, and nothing else: this file is
// imported by every page shell, so it must stay free of data imports.
//
// One list, three consumers:
// - src/lib/llm-content.js renders each twin (PAGES adds the render function)
//   and lists them in /llms.txt;
// - the page shells (BaseLayout, Layout, index.astro, sponsor-2026.astro) add
//   <link rel="alternate" type="text/markdown"> for the current route;
// - netlify/edge-functions/markdown-negotiation.ts derives its route map and
//   `config.path` from it. Keep this file importable by Deno: relative
//   imports only, no JSON, nothing Node-specific.
export const TWINS = [
  {
    path: "/",
    slug: "index",
    title: "San Francisco Ruby Conference 2026",
    description:
      "Nov 10-12, 2026 at SFJAZZ: the schedule with every talk and conversation group, the speakers with abstracts and bios, tickets, sponsors, the companies attending, the venue and how to get there.",
  },
  {
    path: "/manager",
    slug: "manager",
    title: "Convince your manager",
    description:
      "The approval email for the conference, ready to fill in and send, with the costs.",
  },
  {
    path: "/sponsor-2026",
    slug: "sponsor-2026",
    title: "Sponsor the conference",
    description:
      "2026 sponsorship tiers with prices and benefits, who is in the room, and the sponsors so far.",
  },
  {
    path: "/meetup",
    slug: "meetup",
    title: "Meetup",
    description:
      "The monthly SF Ruby meetup: the next dates, the latest recordings, and the companies that host it.",
  },
  {
    path: "/jobs",
    slug: "jobs",
    title: "Jobs",
    description:
      "Ruby and Rails engineering roles at SF-area startups, audited monthly.",
  },
  {
    path: "/startups",
    slug: "startups",
    title: "Startups",
    description:
      "Companies building on Ruby, many of which have demoed at SF Ruby.",
  },
  {
    path: "/videos",
    slug: "videos",
    title: "Videos",
    description:
      "Conference talks and monthly meetup recordings, with links to each talk.",
  },
  {
    path: "/news",
    slug: "news",
    title: "News",
    description:
      "A running feed of funding, launches, and hiring at Ruby companies.",
  },
  {
    path: "/about",
    slug: "about",
    title: "About",
    description: "What SF Ruby is, who runs it, and how to get in touch.",
  },
];

// "/jobs/" -> "/jobs.md"; null for a route without a twin.
export function markdownTwinFor(pathname) {
  const path = String(pathname ?? "").replace(/\/+$/, "") || "/";
  const twin = TWINS.find((t) => t.path === path);
  return twin ? `/${twin.slug}.md` : null;
}
