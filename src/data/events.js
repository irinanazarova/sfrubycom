// Events data - conferences, meetups, and other gatherings
// Talks and photos are linked to events via eventId

export const events = {
  "sfruby-conf-2025": {
    id: "sfruby-conf-2025",
    name: "San Francisco Ruby Conference 2025",
    shortName: "SF Ruby Conf 2025",
    type: "conference",
    date: "2025-11-19",
    endDate: "2025-11-21",
    venue: "Fort Mason Center",
    location: "San Francisco, CA",
    description:
      "The first SF Ruby Conference - two days of talks, workshops, and startup demos, plus a community day.",
    attendees: 400,
    featured: true,
  },
  "sfruby-meetup-jan-2026": {
    id: "sfruby-meetup-jan-2026",
    name: "SF Ruby Meetup, January @ Persona",
    shortName: "January 2026 Meetup",
    type: "meetup",
    date: "2026-01-22",
    venue: "Persona HQ",
    address: "50 Beale Street, Fl 16, San Francisco, CA 94105",
    location: "San Francisco, CA",
    description: "Monthly SF Ruby meetup.",
    lumaUrl: "https://luma.com/rv17ccv7",
    featured: false,
  },
  "sfruby-meetup-dec-2025": {
    id: "sfruby-meetup-dec-2025",
    name: "SF Ruby Meetup, December Holiday Edition @ Intercom",
    shortName: "December 2025 Meetup",
    type: "meetup",
    date: "2025-12-18",
    venue: "Intercom",
    location: "San Francisco, CA",
    description:
      "Holiday edition featuring talks on Ruby 4.0 and JavaScript runtimes for Rails.",
    lumaUrl: "https://luma.com/ot3v0fzb",
    featured: false,
  },
  "sfruby-meetup-oct-2025": {
    id: "sfruby-meetup-oct-2025",
    name: "SF Ruby Meetup, October @ AngelList",
    shortName: "October 2025 Meetup",
    type: "meetup",
    date: "2025-10-30",
    venue: "AngelList",
    location: "San Francisco, CA",
    description:
      "Talks on spreadsheet creation in Ruby, Rust bindings, secure app configuration, and AI-powered domain logic.",
    lumaUrl: "https://luma.com/xh2h2jd3",
    featured: false,
  },
  "sfruby-meetup-sep-2025": {
    id: "sfruby-meetup-sep-2025",
    name: "SF Ruby Meetup, September @ Binti",
    shortName: "September 2025 Meetup",
    type: "meetup",
    date: "2025-09-30",
    venue: "Binti",
    location: "San Francisco, CA",
    description:
      "Talks on Ruby management tools, platform integrations, Rails app development with AI, and more.",
    lumaUrl: "https://luma.com/jsxmbf03",
    featured: false,
  },
  "sfruby-meetup-aug-2025": {
    id: "sfruby-meetup-aug-2025",
    name: "SF Ruby Meetup, August @ GitHub",
    shortName: "August 2025 Meetup",
    type: "meetup",
    date: "2025-08-26",
    venue: "GitHub",
    location: "San Francisco, CA",
    description:
      "Talks on Temporal Ruby, MCP Inspector, CI optimization, and AI coding agents.",
    lumaUrl: "https://luma.com/k2l9089u",
    featured: false,
  },
  "sfruby-meetup-jul-2025": {
    id: "sfruby-meetup-jul-2025",
    name: "SF Ruby Meetup, July @ Figma",
    shortName: "July 2025 Meetup",
    type: "meetup",
    date: "2025-07-22",
    venue: "Figma",
    address: "760 Market St, Floor 10, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Talks on Ruby at Figma, building internal tools, and the modern view layer Rails deserves.",
    lumaUrl: "https://luma.com/8jcbnfls",
    featured: false,
  },
  "sfruby-hackathon-jul-2025": {
    id: "sfruby-hackathon-jul-2025",
    name: "SF Ruby AI Hackathon",
    shortName: "AI Hackathon",
    type: "hackathon",
    date: "2025-07-19",
    venue: "Sentry HQ",
    address: "45 Fremont Street, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Community-driven hackathon exploring how AI can make building a Rails app even more of a one-person show. $3,000 prize pool.",
    lumaUrl: "https://luma.com/znhcct7v",
    featured: false,
  },
  "sfruby-elixir-jun-2025": {
    id: "sfruby-elixir-jun-2025",
    name: "SF Ruby & Elixir with José Valim @ PlanetScale",
    shortName: "José Valim Special",
    type: "meetup",
    date: "2025-06-18",
    venue: "PlanetScale",
    address: "123 S Park St, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Special meetup featuring José Valim, creator of Elixir and former Rails contributor.",
    lumaUrl: "https://luma.com/rzyjxo93",
    featured: false,
  },
  "sfruby-meetup-jun-2025": {
    id: "sfruby-meetup-jun-2025",
    name: "SF Ruby Meetup, June @ Chime",
    shortName: "June 2025 Meetup",
    type: "meetup",
    date: "2025-06-04",
    venue: "Chime",
    location: "San Francisco, CA",
    description:
      "Connecting with Chicago Ruby, talks on JRuby optimization, Clickhouse analytics, and LLM evaluation for Rails.",
    lumaUrl: "https://luma.com/doa9bu64",
    featured: false,
  },
  "sfruby-meetup-may-2025": {
    id: "sfruby-meetup-may-2025",
    name: "SF Ruby Meetup, May @ Cisco Meraki",
    shortName: "May 2025 Meetup",
    type: "meetup",
    date: "2025-05-21",
    venue: "Cisco Meraki",
    location: "San Francisco, CA",
    description:
      "Talks on decoupling from Rails, AI workflows at scale, and Rails 8 deployment strategies.",
    lumaUrl: "https://luma.com/9f6l9pn2",
    featured: false,
  },
  "sfruby-meetup-apr-2025": {
    id: "sfruby-meetup-apr-2025",
    name: "SF Ruby Meetup, April @ Sentry",
    shortName: "April 2025 Meetup",
    type: "meetup",
    date: "2025-04-23",
    venue: "Sentry",
    address: "45 Fremont St, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Talks on debugging Ruby, API integration, type checking with Sorbet, and modular architecture with Packwerk.",
    lumaUrl: "https://luma.com/9uabe94u",
    featured: false,
  },
  "sfruby-meetup-mar-2025": {
    id: "sfruby-meetup-mar-2025",
    name: "SF Ruby Meetup, March @ New Relic",
    shortName: "March 2025 Meetup",
    type: "meetup",
    date: "2025-03-20",
    venue: "New Relic",
    address: "188 Spear St Floor 10, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Talks on Avo, filtering complexity in development, and using Stimulus with Rails 7.",
    lumaUrl: "https://luma.com/npghoigs",
    featured: false,
  },
  "sfruby-meetup-feb-2025": {
    id: "sfruby-meetup-feb-2025",
    name: "SF Ruby Meetup, February @ GitHub",
    shortName: "February 2025 Meetup",
    type: "meetup",
    date: "2025-02-11",
    venue: "GitHub HQ",
    address: "88 Colin P Kelly Jr, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Keynote by Joel Hawksley on 5 years of UI architecture at GitHub, plus talks on Rails banking and hexagonal architecture.",
    lumaUrl: "https://luma.com/hoou421h",
    featured: false,
  },
  "sfruby-meetup-jan-2025": {
    id: "sfruby-meetup-jan-2025",
    name: "SF Ruby Meetup, January @ Productboard",
    shortName: "January 2025 Meetup",
    type: "meetup",
    date: "2025-01-16",
    venue: "Productboard",
    address: "333 Bush St, 20th floor, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Talks on test readability, passkeys in Rails, WebAssembly in Ruby, and Bazel in Ruby projects.",
    lumaUrl: "https://luma.com/goujxu3a",
    featured: false,
  },
  "sfruby-meetup-dec-2024": {
    id: "sfruby-meetup-dec-2024",
    name: "SF Ruby presents: Ruby&AI, December @ Sentry",
    shortName: "December 2024 Meetup",
    type: "meetup",
    date: "2024-12-03",
    venue: "Sentry",
    address: "45 Fremont St, San Francisco, CA",
    location: "San Francisco, CA",
    description:
      "Holiday edition focused on AI-native applications. Talks on AI grouping for SDKs and voice AI with AnyCable.",
    lumaUrl: "https://luma.com/q7fwrtj2",
    featured: false,
  },
  "sfruby-meetup-nov-2024": {
    id: "sfruby-meetup-nov-2024",
    name: "SF Ruby Meetup, November @ Academia.edu",
    shortName: "November 2024 Meetup",
    type: "meetup",
    date: "2024-11-19",
    venue: "Academia.edu",
    address: "580 California Street, Suite 400, San Francisco, CA 94104",
    location: "San Francisco, CA",
    description:
      "Featuring Jeremy Evans (Polished Ruby, Roda). Talks on Rails at scale, Hotwire, AI-native apps, and Roda's ten-year evolution.",
    lumaUrl: "https://luma.com/f4pfsigc",
    featured: false,
  },
  "sfruby-meetup-oct-2024": {
    id: "sfruby-meetup-oct-2024",
    name: "SF Ruby Meetup, October @ Chime",
    shortName: "October 2024 Meetup",
    type: "meetup",
    date: "2024-10-10",
    venue: "Chime",
    address: "101 California St, San Francisco, CA 94111",
    location: "San Francisco, CA",
    description:
      "Talks by Noel Rappin on Ruby as a Legacy Ecosystem, Brandon Weaver on functional programming, and Vladimir Dementyev on form optimization.",
    lumaUrl: "https://luma.com/jfpfmh19",
    featured: false,
  },
  "sfruby-meetup-sep-2024": {
    id: "sfruby-meetup-sep-2024",
    name: "SF Ruby Meetup, September @ GitHub",
    shortName: "September 2024 Meetup",
    type: "meetup",
    date: "2024-09-03",
    venue: "GitHub HQ",
    address: "88 Colin P Kelly Jr. St., San Francisco, CA 94107",
    location: "San Francisco, CA",
    description:
      "Talks on Web Components at GitHub, YJIT, CLI tools, Rails architecture patterns, and Ruby concurrency.",
    lumaUrl: "https://luma.com/qfyzbfkk",
    featured: false,
  },
  "sfruby-meetup-jul-2024": {
    id: "sfruby-meetup-jul-2024",
    name: "SF Ruby Meetup, July @ Cisco Meraki",
    shortName: "July 2024 Meetup",
    type: "meetup",
    date: "2024-07-18",
    venue: "Cisco Meraki",
    address: "500 Terry A Francois Blvd, San Francisco, CA 94158",
    location: "San Francisco, CA",
    description:
      "Talks on time-series data, PostgreSQL query optimization, deployment tools, C extensions, and dynamic form building.",
    lumaUrl: "https://luma.com/bxzdp6mz",
    featured: false,
  },
  "sfruby-meetup-jun-2024": {
    id: "sfruby-meetup-jun-2024",
    name: "SF Ruby Meetup, June @ Productboard",
    shortName: "June 2024 Meetup",
    type: "meetup",
    date: "2024-06-13",
    venue: "Productboard",
    location: "San Francisco, CA",
    description:
      "Talks on scaling Rails, module mixins pitfalls, building Rails frontends with Phlex, and Ruby in release engineering.",
    lumaUrl: "https://luma.com/sfruby-june24",
    featured: false,
  },
  "sfruby-meetup-may-2024": {
    id: "sfruby-meetup-may-2024",
    name: "SF Ruby Meetup, May @ New Relic",
    shortName: "May 2024 Meetup",
    type: "meetup",
    date: "2024-05-16",
    venue: "New Relic",
    location: "San Francisco, CA",
    description:
      "Talks on OpenTelemetry and Ruby, leveraging POROs, and isomorphic view components.",
    lumaUrl: "https://luma.com/sfruby-may24",
    featured: false,
  },
  "sfruby-meetup-mar-2024": {
    id: "sfruby-meetup-mar-2024",
    name: "SF Ruby Meetup, March @ GitHub",
    shortName: "March 2024 Meetup",
    type: "meetup",
    date: "2024-03-28",
    venue: "GitHub",
    location: "San Francisco, CA",
    description:
      "Talks by Ben Sheldon from GitHub, Daniel Farina from Ubicloud, and Vladimir Dementyev from Evil Martians.",
    lumaUrl: "https://luma.com/r6d0lghm",
    featured: false,
  },
};

// GCS bucket base URL for photos
export const GCS_PHOTO_BASE =
  "https://storage.googleapis.com/sfruby-photo-gallery";

// Photo albums linked to events
export const photoAlbums = {
  "conf2025-film1": {
    id: "conf2025-film1",
    eventId: "sfruby-conf-2025",
    title: "Conference Film Roll 1",
    description: "Film photography from SF Ruby Conference 2025",
    date: "2025-06-12",
    coverPhoto: `${GCS_PHOTO_BASE}/conf2025-film1/film1_20.jpg`,
    photoCount: 25,
    featured: true,
    author: "Bruno Bornsztein",
    photos: [
      "film1_01.jpg",
      "film1_03.jpg",
      "film1_04.jpg",
      "film1_05.jpg",
      "film1_06.jpg",
      "film1_07.jpg",
      "film1_08.jpg",
      "film1_09.jpg",
      "film1_10.jpg",
      "film1_11.jpg",
      "film1_12.jpg",
      "film1_13.jpg",
      "film1_14.jpg",
      "film1_15.jpg",
      "film1_16.jpg",
      "film1_18.jpg",
      "film1_19.jpg",
      "film1_20.jpg",
      "film1_21.jpg",
      "film1_22.jpg",
      "film1_23.jpg",
      "film1_24.jpg",
      "film1_26.jpg",
      "film1_27.jpg",
      "film1_28.jpg",
    ],
  },
  "conf2025-film2": {
    id: "conf2025-film2",
    eventId: "sfruby-conf-2025",
    title: "Conference Film Roll 2",
    description: "More film photography from SF Ruby Conference 2025",
    date: "2025-06-13",
    coverPhoto: `${GCS_PHOTO_BASE}/conf2025-film2/film2_04.jpg`,
    photoCount: 17,
    featured: false,
    photos: [
      "film2_01.jpg",
      "film2_02.jpg",
      "film2_03.jpg",
      "film2_04.jpg",
      "film2_05.jpg",
      "film2_06.jpg",
      "film2_07.jpg",
      "film2_08.jpg",
      "film2_09.jpg",
      "film2_10.jpg",
      "film2_11.jpg",
      "film2_12.jpg",
      "film2_13.jpg",
      "film2_14.jpg",
      "film2_15.jpg",
      "film2_16.jpg",
      "film2_17.jpg",
    ],
  },
  "conf2025-film3": {
    id: "conf2025-film3",
    eventId: "sfruby-conf-2025",
    title: "Conference Film Roll 3",
    description: "Film photography from SF Ruby Conference 2025",
    date: "2025-06-13",
    coverPhoto: `${GCS_PHOTO_BASE}/conf2025-film3/film3_26.jpg`,
    photoCount: 38,
    featured: false,
    photos: [
      "film3_01.jpg",
      "film3_02.jpg",
      "film3_03.jpg",
      "film3_04.jpg",
      "film3_05.jpg",
      "film3_06.jpg",
      "film3_07.jpg",
      "film3_08.jpg",
      "film3_09.jpg",
      "film3_10.jpg",
      "film3_11.jpg",
      "film3_12.jpg",
      "film3_13.jpg",
      "film3_14.jpg",
      "film3_15.jpg",
      "film3_16.jpg",
      "film3_17.jpg",
      "film3_18.jpg",
      "film3_19.jpg",
      "film3_20.jpg",
      "film3_21.jpg",
      "film3_22.jpg",
      "film3_23.jpg",
      "film3_24.jpg",
      "film3_25.jpg",
      "film3_26.jpg",
      "film3_27.jpg",
      "film3_28.jpg",
      "film3_29.jpg",
      "film3_30.jpg",
      "film3_31.jpg",
      "film3_32.jpg",
      "film3_33.jpg",
      "film3_34.jpg",
      "film3_35.jpg",
      "film3_36.jpg",
      "film3_37.jpg",
      "film3_38.jpg",
    ],
  },
  "conf2025-film4": {
    id: "conf2025-film4",
    eventId: "sfruby-conf-2025",
    title: "Conference Film Roll 4",
    description: "Film photography from SF Ruby Conference 2025",
    date: "2025-06-14",
    coverPhoto: `${GCS_PHOTO_BASE}/conf2025-film4/film4_21.jpg`,
    photoCount: 8,
    featured: false,
    photos: [
      "film4_06.jpg",
      "film4_07.jpg",
      "film4_08.jpg",
      "film4_09.jpg",
      "film4_12.jpg",
      "film4_13.jpg",
      "film4_14.jpg",
      "film4_21.jpg",
    ],
  },
};

// Helper functions
export function getEvent(eventId) {
  return events[eventId];
}

export function getAllEvents() {
  return Object.values(events);
}

export function getEventsByType(type) {
  return Object.values(events).filter((event) => event.type === type);
}

export function getConferences() {
  return getEventsByType("conference");
}

export function getMeetups() {
  return getEventsByType("meetup");
}

export function getFeaturedEvents() {
  return Object.values(events).filter((event) => event.featured);
}

export function getPhotoAlbum(albumId) {
  return photoAlbums[albumId];
}

export function getAllPhotoAlbums() {
  return Object.values(photoAlbums);
}

export function getPhotoAlbumsByEvent(eventId) {
  return Object.values(photoAlbums).filter(
    (album) => album.eventId === eventId,
  );
}

export function getFeaturedPhotoAlbums() {
  return Object.values(photoAlbums).filter((album) => album.featured);
}

// Get events sorted by date (newest first)
export function getEventsSortedByDate() {
  return Object.values(events).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
