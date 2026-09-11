// The 2026 program, transcribed from the organizers' schedule sheet.
//
// Two audiences share one stage. Every session block is tagged with the
// audience in the hall, and while that audience is in the hall the other one
// is in a conversation group built for it (`group`), then they swap. Keynotes
// are for everyone. Day 1 is AI-heavy; Day 2 is AI-light, the rest of the stack:
// queues, concurrency, real-time, open source.
//
// Talk titles live here rather than in the CFP feed on purpose: several
// speakers' CFP entries still read "TBD" while the sheet has a working title,
// and the sheet is the organizers' latest word. `cfpTitle` is the title the
// CFP feed carried when the sheet's title was set. The rule, applied in
// src/utils/speakerProfiles.js on every surface: the schedule title shows,
// and only a CFP title that differs from `cfpTitle` (a new version the
// speaker published since) replaces it. A session without `cfpTitle` had no
// real CFP title yet, so the first real one the speaker enters wins. Times
// are 24h strings; `formatTime` renders them.
export const AUDIENCES = {
  all: { id: "all", label: "Everyone" },
  // Labels renamed in September 2026 (were "Startups" and "Household names");
  // the ids stay, they are the audience keys on every block below.
  startups: { id: "startups", label: "Small teams" },
  household: { id: "household", label: "Big teams" },
};

export const days = [
  {
    n: 1,
    date: "2026-11-10",
    weekday: "Tuesday",
    theme: "AI-heavy",
    tagline:
      "Agents in production, AI in legacy codebases, and the Ruby tooling for both.",
    blocks: [
      {
        start: "9:15",
        end: "9:45",
        kind: "keynote",
        audience: "all",
        sessions: [
          {
            speaker: "Irina Nazarova",
            org: "Evil Martians",
            title: "Why start a new company on Rails (and AI) today",
            cfpTitle: "Startups on Rails in 2026",
          },
        ],
      },
      { start: "9:45", end: "10:05", kind: "break" },
      {
        start: "10:05",
        end: "11:35",
        kind: "talks",
        audience: "household",
        sessions: [
          {
            start: "10:05",
            speaker: "Vladimir Dementyev",
            org: "Evil Martians",
            title: "Ruby for AI and AI for Ruby",
          },
          {
            start: "10:35",
            speaker: "Madison Sites",
            org: "Order.co",
            title: "The System Nobody Understood (Including AI)",
            cfpTitle: "The System Nobody Understood (Including AI)",
          },
          {
            start: "11:05",
            speaker: "JP Camara",
            org: "Wealthbox",
            title: "Realtime collaboration on Rails with yrby and Lexxy",
          },
        ],
        group: {
          audience: "startups",
          title: "Startups and startup-minded engineers: getting to know each other",
          hosts: ["Amanda Kinney"],
        },
      },
      { start: "11:35", end: "13:15", kind: "lunch" },
      {
        start: "13:15",
        end: "14:45",
        kind: "talks",
        audience: "startups",
        sessions: [
          {
            start: "13:15",
            speaker: "Ben Sheldon",
            org: "Frontdoor Benefits",
            title: "Building the same app twice: same problems, different decade",
            cfpTitle: "Building the same app twice: same problems, different decade",
          },
          {
            start: "13:45",
            speaker: "Svyatoslav Kryukov",
            org: "Evil Martians",
            title: "Maximizing Rails, React and AI with Inertia Rails",
          },
          {
            start: "14:15",
            speaker: "Carmine Paolino",
            org: "RubyLLM",
            title: "RubyLLM 2.0: The AI Framework Ruby Deserves",
            cfpTitle: "RubyLLM 2.0: The AI Framework Ruby Deserves",
          },
        ],
        group: {
          audience: "household",
          title: "Big teams: share your strategies for agentic coding",
          hosts: ["Mike Dalton"],
        },
      },
      { start: "14:45", end: "15:05", kind: "break" },
      {
        start: "15:05",
        end: "16:05",
        kind: "talks",
        audience: "household",
        sessions: [
          {
            start: "15:05",
            speaker: "CJ Avilla",
            org: "Anthropic",
            title: "Assign to Claude: Making an Agent a First-Class Teammate in Your SaaS",
            cfpTitle: "Assign to Claude: Making an Agent a First‑Class Teammate in Your SaaS",
          },
          { start: "15:35", tba: true },
        ],
        group: {
          audience: "startups",
          title: "Find your people: a matching game",
          hosts: ["Amanda Kinney"],
        },
      },
      { start: "16:05", end: "16:15", kind: "break" },
      {
        start: "16:15",
        end: "16:45",
        kind: "keynote",
        audience: "all",
        sessions: [
          {
            speaker: "Ryan Sherlock",
            org: "Fin",
            title: "Who Watches the Agents? Closing the Rails Loop from Code to Customers",
            cfpTitle: "Who Watches the Agents? Closing the Rails Loop from Code to Customers",
          },
        ],
      },
    ],
  },
  {
    n: 2,
    date: "2026-11-11",
    weekday: "Wednesday",
    theme: "AI-light",
    tagline:
      "Queues, concurrency, real-time, open source, and the businesses built on them.",
    blocks: [
      {
        start: "9:00",
        end: "9:30",
        kind: "keynote",
        audience: "all",
        sessions: [
          {
            speaker: "Rosa Gutiérrez",
            org: "37signals",
            title: "Solid Queue: two years on Rails",
            cfpTitle: "Solid Queue: two years on Rails",
          },
        ],
      },
      { start: "9:30", end: "9:50", kind: "break" },
      {
        start: "9:50",
        end: "11:20",
        kind: "talks",
        audience: "startups",
        sessions: [
          {
            start: "9:50",
            speaker: "Celina Lopez",
            org: "Primary Health",
            title: "Building a Developer-friendly PaaS for Kubernetes on Ruby",
          },
          {
            start: "10:20",
            speaker: "Jason Bosco",
            org: "Typesense",
            title:
              "How We Bootstrapped an Open Source Search Engine to $10M+ ARR with 15 People and Ruby on Rails",
            cfpTitle: "How We Bootstrapped an Open Source Search Engine to $10M+ ARR with 15 People and Ruby on Rails",
          },
          {
            start: "10:50",
            speaker: "Marco Roth",
            org: "Herb",
            title: "Reactive Rails Views, No Rewrite Required",
            cfpTitle: "Reactive Rails Views, No Rewrite Required",
          },
        ],
        group: {
          audience: "household",
          title: "Big teams and engineers: getting to know each other",
          hosts: ["Amanda Kinney"],
        },
      },
      { start: "11:20", end: "13:00", kind: "lunch" },
      {
        start: "13:00",
        end: "14:30",
        kind: "talks",
        audience: "household",
        sessions: [
          {
            start: "13:00",
            speaker: "Alex Coomans",
            org: "Persona",
            title: "Keeping Your Head on Straight in Concurrent & Complex Ruby Applications",
            cfpTitle: "Keeping Your Head on Straight in Concurrent & Complex Ruby Applications",
          },
          {
            start: "13:30",
            speaker: "Phillip Campbell",
            org: "Gusto",
            title: "Background processing at Gusto: The Parts Where People Look Puzzled",
            cfpTitle: "Background processing at Gusto: The Parts Where People Look Puzzled",
          },
          {
            start: "14:00",
            speaker: "Peter Zhu",
            org: "Shopify",
            title: "Open Source is the Most Fragile and Most Resilient Ecosystem",
            cfpTitle: "Open Source is the Most Fragile and Most Resilient Ecosystem",
          },
        ],
        // Host still to be confirmed on the sheet; `hosts` lands when it is.
        group: {
          audience: "startups",
          title: "Startups and VCs: getting to know each other",
          hostTbc: true,
        },
      },
      { start: "14:30", end: "14:50", kind: "break" },
      {
        start: "14:50",
        end: "15:50",
        kind: "talks",
        audience: "startups",
        sessions: [
          {
            start: "14:50",
            speaker: "Cole Robertson",
            org: "Rebulk",
            title: "Building a new startup on Rails and Starlink",
          },
          {
            start: "15:20",
            speaker: "Jason Thomas",
            org: "OpenC3",
            title: "Satellite command and control with Ruby and COSMOS",
            cfpTitle: "Satellite command and control with Ruby and COSMOS",
          },
        ],
        group: {
          audience: "household",
          title: "Big teams: when to choose Sidekiq, Solid Queue, GoodJob and more",
          hosts: ["Ken Decanio", "Cameron Dutro"],
        },
      },
      { start: "15:50", end: "16:00", kind: "break" },
      {
        start: "16:00",
        end: "16:30",
        kind: "keynote",
        audience: "all",
        sessions: [
          {
            // Closing keynote, title to come; the first real CFP title wins.
            speaker: "Chris Oliver",
            org: "GoRails",
            title: "Keynote",
          },
        ],
      },
    ],
  },
  {
    n: 3,
    date: "2026-11-12",
    weekday: "Thursday",
    theme: "Community day",
    tagline:
      "Bring your own event: a walk, a bike ride, an ocean swim, a hackathon or anything else you want to do together with Ruby friends!",
    // A day with no blocks asks for ideas instead: these render as buttons.
    links: [
      {
        label: "Send an email",
        href: "mailto:conference@sfruby.com?subject=Community%20day%20idea",
      },
      {
        label: "Post the idea on Slack",
        href: "https://join.slack.com/t/sf-ruby/shared_invite/zt-3mi22dwb9-MGN_s0j_jNrt7hb4rvqkHg",
        external: true,
      },
    ],
    blocks: [],
  },
];

// "13:15" -> "1:15 pm"
export const formatTime = (t) => {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${period}`;
};

// "9:15"-"9:45" -> "9:15-9:45 am"; "11:35"-"13:15" -> "11:35 am-1:15 pm". A hyphen,
// the same mark the site uses for "Nov 10-12".
export const formatRange = (a, b) => {
  const [ta, tb] = [formatTime(a), formatTime(b)];
  const [pa, pb] = [ta.slice(-2), tb.slice(-2)];
  return pa === pb ? `${ta.slice(0, -3)}-${tb}` : `${ta}-${tb}`;
};

export const formatDay = (day) =>
  new Date(`${day.date}T12:00:00-08:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });

// Every conversation group, in schedule order, with its day and times.
export const allGroups = () =>
  days.flatMap((d) =>
    d.blocks
      .filter((b) => b.group && !b.group.tba)
      .map((b) => ({ ...b.group, day: d.n, start: b.start, end: b.end })),
  );

// Everyone hosting a group, first appearance first, for the hosts line.
export const groupHosts = () => [
  ...new Set(allGroups().flatMap((g) => g.hosts ?? [])),
];
