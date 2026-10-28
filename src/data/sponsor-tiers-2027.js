// What a 2027 sponsorship costs and includes, for src/pages/sponsor-2027.astro.
//
// Separate from sponsor-tiers-2026.js on purpose: that file is what 2026 was
// sold at, and /sponsor-2026 keeps rendering it until the 2026 conference is
// over. Prices here are held at the 2026 numbers even though 2027 is one day
// of talks instead of two, because two sold-out years are the stronger
// argument and a raise would have to be explained in the same breath as the
// shorter programme.
//
// There are no Stripe links here. The 2026 payment links are tied to 2026
// records, and a 2027 sponsor paying through one would land in the wrong year.
// Every tier routes to email until 2027 links exist.

export const CONFERENCE_2027 = {
  date: "September 9, 2027",
  venue: "SFJAZZ",
  city: "San Francisco",
  // The Luma page is private until the 2026 conference opens on Nov 10, 2026.
  lumaUrl: "https://luma.com/sfrubyconf2027",
};

export const sponsorTiers2027 = [
  {
    name: "Pickaxe tier",
    emoji: "⛏️",
    price: "$20,000",
    description: "Maximum visibility",
    featured: true,
    label: "Most visibility",
    benefits: [
      "Premium exhibition space",
      "Up to 10 conference tickets",
      "Unlimited SF Ruby job board postings for a year",
      "Logo on every conference material",
      "Named in the opening and closing remarks",
      "Social media spotlight",
    ],
  },
  {
    name: "Ruby tier",
    price: "$10,000",
    description: "High visibility",
    benefits: [
      "Dedicated exhibition space",
      "Up to 5 conference tickets",
      "3 SF Ruby job board postings",
      "Logo on the website and printed materials",
      "Named in the opening remarks",
      "Social media recognition",
    ],
  },
  {
    name: "Emerald tier",
    price: "$4,000",
    description: "Supporters' favorite",
    benefits: [
      "Up to 2 conference tickets",
      "1 SF Ruby job board posting",
      "Logo on the website and printed materials",
      "Named in the opening remarks",
      "Social media recognition",
    ],
  },
  {
    name: "Afterparty",
    price: null,
    description: "Exclusive branding",
    benefits: [
      "Up to 10 conference tickets",
      "Your branding at the afterparty, with no other sponsor in it",
      "Logo on the website and printed materials",
      "Named at the afterparty",
      "Social media recognition",
    ],
  },
];

// Where a 2027 sponsor writes.
export const SPONSOR_CONTACT_2027 = {
  email: "vicamelnikova@evilmartians.com",
  subject: "SF Ruby 2027 Sponsorship",
};

// The headline numbers. Every one of them is a 2026 figure, which is the
// point: a 2027 prospectus sells on what the last two years did.
export const sponsorStats2027 = [
  { value: "450+", label: "Attendees in 2026" },
  { value: "2", label: "Sold-out years" },
  { value: "2,400+", label: "Newsletter subscribers" },
  { value: "650+", label: "Slack members" },
];

// Why a large engineering company sponsors, as opposed to why a startup does.
// `icon` is a Heroicons outline path, the same convention as the 2026 file.
export const whySponsor2027 = [
  {
    title: "Hire Ruby engineers",
    text: "450 engineers and founders who ship Ruby today. The organized networking sessions seat 70 to 100 people at a time.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Build your engineering brand",
    text: "Ruby engineers judge a company by whether it shows up for Ruby. Your logo sits beside the people who maintain the gems in your Gemfile.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    title: "Get customers",
    text: "Present your product to the teams that run Ruby in production, from a two-person startup to a public company.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Promote Ruby",
    text: "Ruby's future is in our hands. Play your part by showing up for the community that maintains the stack you run on.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

// What the sponsor is buying a place at. One line each, rendered as a list.
export const format2027 = [
  {
    label: "One day of talks",
    text: "September 9, 2027 at SFJAZZ, one stage, with a community day after it.",
  },
  {
    label: "Two audiences",
    text: "Small teams and big teams, served on purpose. Ruby runs the startup and the public company in the same room.",
  },
  {
    label: "Organized networking",
    text: "Attendees tell us what they are working on when they register, and we group them. This is the part people come back for.",
  },
  {
    label: "The same venue",
    text: "SFJAZZ in Hayes Valley, which held 450 people in 2026.",
  },
];
