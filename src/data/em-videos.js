// Evil Martians studio videos relevant to SF Ruby:
// - "Startups on Rails" founder interviews by Irina Nazarova
// - SF Ruby Conference promo
// - Joint EM × community events
//
// Source: https://www.youtube.com/@evil.martians

export const emVideos = {
  "startups-on-rails-gusto-edward-kim": {
    id: "startups-on-rails-gusto-edward-kim",
    title: "Edward Kim (Gusto) — Startups on Rails",
    youtubeId: "E-NJ-NhY5dk",
    date: "2025-07-16",
    type: "interview",
    series: "Startups on Rails",
    interviewer: "Irina Nazarova",
    guest: "Edward Kim",
    guestRole: "Co-Founder & CTO",
    guestCompany: "Gusto",
    description:
      "Edward Kim, co-founder and CTO of Gusto, talks with Irina Nazarova about scaling a Rails-built unicorn — payroll and benefits for hundreds of thousands of small businesses, the pillars of Gusto's success on Rails, and what holds up two decades in. Part of Evil Martians' Startups on Rails series.",
    tags: ["rails", "founder", "scale", "fintech"],
  },
  "startups-on-rails-uscreen-nick-savrov": {
    id: "startups-on-rails-uscreen-nick-savrov",
    title: "Nick Savrov (Uscreen) — Startups on Rails",
    youtubeId: "--PvuOaxVVE",
    date: "2025-05-23",
    type: "interview",
    series: "Startups on Rails",
    interviewer: "Irina Nazarova",
    guest: "Nick Savrov",
    guestRole: "Co-Founder & CTO",
    guestCompany: "Uscreen",
    description:
      "Nick Savrov, co-founder and CTO of Uscreen, joins Irina Nazarova to talk about building a Rails-powered video monetization platform now serving thousands of creators — and what changed after Uscreen's $150M PSG deal. Part of Evil Martians' Startups on Rails series.",
    tags: ["rails", "founder", "video", "creator-economy"],
  },
  "sf-ruby-conf-2025-promo": {
    id: "sf-ruby-conf-2025-promo",
    title: "The San Francisco Ruby Conference — Join in at sfruby.com",
    youtubeId: "m2P9PZwi8W4",
    date: "2025-10-01",
    type: "promo",
    description:
      "Short promo for the inaugural San Francisco Ruby Conference (November 2025). Grab your tickets at sfruby.com. 💎❤️",
    tags: ["conference", "promo", "sfruby"],
  },
  "yc-em-rails-meetup-2024": {
    id: "yc-em-rails-meetup-2024",
    title: "Y Combinator × Evil Martians: Ruby & Rails Powering YC Startups (2024)",
    youtubeId: "1BNBOQOY-58",
    date: "2024-08-15",
    type: "event",
    description:
      "Joint Y Combinator and Evil Martians meetup in San Francisco celebrating Rails-powered YC companies. Panel with founders building on Rails inside the YC ecosystem.",
    tags: ["yc", "rails", "founders", "meetup"],
  },
};

export function getAllEmVideos() {
  return Object.values(emVideos);
}

export function getEmVideosByType(type) {
  return Object.values(emVideos).filter((v) => v.type === type);
}
