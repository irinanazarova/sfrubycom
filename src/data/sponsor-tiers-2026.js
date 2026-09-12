// What a 2026 sponsorship costs and includes. Lives here, and not in
// src/data/sponsors.js, because that file carries the tiers as they were priced
// in 2025 for the /sponsors-2025 archive. Who has signed is in sponsors.js too:
// SponsorTiers reads the 2026 roster (conference2026SponsorTiers) from it.
//
// Rendered by src/pages/sponsor-2026.astro and by the page's Markdown twin
// (src/lib/llm-content.js), so the two never disagree on a price.
import { conferenceSpeakers } from "./conference-2026.js";

export const sponsorTiers2026 = [
  {
    name: "Pickaxe ⛏️",
    price: "$20,000",
    paymentLink: "https://buy.stripe.com/5kQ6oH8bi25Tacg4Ude7m07",
    description: "Premier sponsorship with maximum visibility and branding.",
    featured: true,
    benefits: [
      "Prominent logo placement on all conference materials",
      "Featured acknowledgment during opening and closing remarks",
      "Dedicated sponsor spotlight on social media",
      "Premium exhibition space",
      "Unlimited job postings on the SF Ruby job board for 12 months",
      "Bring up to 10 of your team to the conference",
    ],
  },
  {
    name: "Ruby",
    price: "$10,000",
    paymentLink: "https://buy.stripe.com/6oU5kD4Z68uhfwA5Yhe7m06",
    description:
      "High-visibility sponsorship with excellent branding opportunities.",
    benefits: [
      "Logo on conference website and printed materials",
      "Sponsor acknowledgment during opening remarks",
      "Social media recognition",
      "Exhibition space or branded gifts for attendees",
      "3 job postings on the SF Ruby job board",
      "Bring up to 5 of your team to the conference",
    ],
  },
  {
    name: "Emerald",
    price: "$4,000",
    paymentLink: "https://buy.stripe.com/cNi9AT3V24e10BG2M5e7m05",
    description: "Strong presence with quality branding and networking.",
    benefits: [
      "Logo on conference website and printed materials",
      "Sponsor acknowledgment during opening remarks",
      "Social media recognition",
      "1 job posting on the SF Ruby job board",
      "Bring up to 2 of your team to the conference",
    ],
  },
  {
    name: "Afterparty",
    price: null,
    description: "Exclusive sponsorship of the conference afterparty.",
    benefits: [
      "Exclusive branding at the afterparty",
      "Logo on conference website and printed materials",
      "Special acknowledgment during the afterparty",
      "Social media recognition",
      "Bring up to 10 of your team to the conference",
    ],
  },
];

// The headline numbers on the sponsor page.
export const sponsorStats2026 = [
  { value: "450+", label: "Conference Attendees" },
  { value: String(conferenceSpeakers.length), label: "Speakers" },
  { value: "2,400+", label: "Subscribers" },
  { value: "650+", label: "Slack Members" },
];

// The three reasons on the sponsor page. `icon` is a Heroicons outline path.
export const whySponsor2026 = [
  {
    title: "Two audiences, on purpose",
    text: "Senior engineers from startups and from household names. Gusto, Shopify, Persona and 37signals are on stage; the schedule has talks and conversation groups for each audience.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Hiring Pipeline",
    text: "Your hiring managers get the mic in organized networking groups of 70 to 100 engineers, and a listing on the jobs board the rest of the year.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Community Support",
    text: "Support the Ruby ecosystem and show your commitment to the community.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];
