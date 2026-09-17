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
    name: "Pickaxe tier",
    emoji: "⛏️",
    price: "$20,000",
    paymentLink: "https://buy.stripe.com/5kQ6oH8bi25Tacg4Ude7m07",
    description: "Maximum visibility",
    featured: true,
    label: "Most visibility",
    benefits: [
      "Premium exhibition space",
      "Up to 10 conference tickets",
      "Unlimited SF Ruby job board postings for 1 year",
      "Prominent logo placement on all conference materials",
      "Featured acknowledgment during opening and closing remarks",
      "Social media spotlight",
    ],
  },
  {
    name: "Ruby tier",
    price: "$10,000",
    paymentLink: "https://buy.stripe.com/6oU5kD4Z68uhfwA5Yhe7m06",
    description: "High visibility",
    benefits: [
      "Dedicated exhibition space",
      "Up to 5 conference tickets",
      "3 SF Ruby job board postings",
      "Logo placement on website and printed materials",
      "Acknowledgment during opening remarks",
      "Social media recognition",
    ],
  },
  {
    name: "Emerald tier",
    price: "$4,000",
    paymentLink: "https://buy.stripe.com/cNi9AT3V24e10BG2M5e7m05",
    description: "Supporters' favorite",
    benefits: [
      "Up to 2 conference tickets",
      "1 SF Ruby job board posting",
      "Logo placement on website and printed materials",
      "Acknowledgment during opening remarks",
      "Social media recognition",
    ],
  },
  {
    name: "Afterparty",
    price: null,
    description: "Exclusive branding",
    benefits: [
      "Up to 10 conference tickets",
      "Exclusive branding at the afterparty",
      "Logo on conference website and printed materials",
      "Acknowledgment at the afterparty",
      "Social media recognition",
    ],
  },
];

// Where a sponsor writes: the page's email modal and the twin both use it.
export const SPONSOR_CONTACT = {
  email: "vicamelnikova@evilmartians.com",
  subject: "SF Ruby 2026 Sponsorship",
};

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
    title: "Get customers",
    text: "Present your product to 450 engineers and founders who ship Ruby code today",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Hire talent",
    text: "Promote job opportunities at SF Ruby community of 2,400 engineers and in 50-people networking sessions at the conference",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Promote Ruby",
    text: "Ruby's future is in our hands! Play your part by showing up for the community",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];
