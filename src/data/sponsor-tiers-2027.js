// What a 2027 sponsorship costs and includes, for src/pages/sponsor-2027.astro.
//
// Separate from sponsor-tiers-2026.js on purpose: that file is what 2026 was
// sold at, and /sponsor-2026 keeps rendering it until the 2026 conference is
// over. Prices here are held at the 2026 numbers even though 2027 is one day
// of talks instead of two. Only 2025 is a completed, sold-out conference.
//
// There are no Stripe links here. The 2026 payment links are tied to 2026
// records, and a 2027 sponsor paying through one would land in the wrong year.
// Every tier routes to email until 2027 links exist.

export const CONFERENCE_2027 = {
  date: "September 9, 2027",
  venue: "SFJAZZ",
  city: "San Francisco",
  attendanceTarget: 450,
  // The Luma page is private until the 2026 conference opens on Nov 10, 2026.
  lumaUrl: "https://luma.com/sfrubyconf2027",
};

export const sponsorTiers2027 = [
  {
    name: "Pickaxe tier",
    emoji: "⛏️",
    price: "$20,000",
    description: "Bring a larger team, meet engineers at your exhibition space, and keep hiring through a year of job postings.",
    featured: true,
    label: "Year-round hiring",
    comparison: ["Premium", "Up to 10", "Unlimited for a year", "Every conference material", "Opening & closing", "Dedicated spotlight"],
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
    description: "Give your engineers and recruiters a dedicated place to meet the community.",
    comparison: ["Dedicated", "Up to 5", "3 postings", "Website & print", "Opening", "Recognition"],
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
    description: "Join the conversations with a small team and promote an open role.",
    comparison: ["Not included", "Up to 2", "1 posting", "Website & print", "Opening", "Recognition"],
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
    description: "Be the exclusive brand at the afterparty and bring your team into the conversations.",
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

export const PROSPECTUS_2027_PDF = "/sfruby-2027-prospectus.pdf";
export const prospectus2027 = {
  headline: "Meet the Ruby engineers you want on your team.",
  audience: "Connect with senior and staff engineers, open-source authors, and founders in the Bay Area Ruby community and beyond.",
  founders: "About 25% of attendees are founders or founding engineers.",
  foundersSource: "Approximate audience mix provided by SF Ruby organizers; not a forecast of 2027 registrations.",
  productTitle: "Meet the people choosing the stack",
  productText: "Founders and founding engineers build products and choose the tools behind them. For developer tools and infrastructure teams, SF Ruby is a place for product conversations, demos at your exhibition space, and technical feedback.",
  earlyTitle: "Put SF Ruby in your 2027 hiring plan",
  earlyText: "2027 packages are held at 2026 prices, with invoicing scheduled around your finance team's needs. Start the conversation now to plan your team's participation and discuss the right package.",
  nextStep: "Tell us your hiring goals, preferred package, and budget timing. We'll discuss availability, confirm deliverables and reservation terms, and agree an invoicing schedule with you.",
};

// 2027 attendance is a target; 2025 is the only completed, sold-out year.
export const sponsorStats2027 = [
  { value: String(CONFERENCE_2027.attendanceTarget), label: "2027 attendance target" },
  { value: "~25%", label: "Founders & founding engineers" },
  { value: "3,000+", label: "Luma subscribers" },
  { value: "800", label: "Slack members" },
];

export const tierComparisonLabels2027 = [
  "Exhibition space", "Conference tickets", "Job board", "Logo placement", "Stage acknowledgment", "Social media",
];

export const sponsorFaq2027 = [
  { question: "What does an inquiry reserve?", answer: "An inquiry starts a conversation. Availability, any hold period, and the steps to confirm your sponsorship are agreed with you in writing." },
  { question: "Can we use our 2027 budget?", answer: "We can schedule invoicing around your finance team's needs. Include your budget timing and procurement requirements in your inquiry." },
  { question: "What should we plan for on site?", answer: "Pickaxe and Ruby include exhibition space. Ask us to confirm placement, dimensions, equipment, staffing access, and exhibition hours as part of your proposal. The 2027 program is one day of talks followed by a community day." },
  { question: "When do job-board benefits start?", answer: "We'll agree the start date with you. Pickaxe includes unlimited postings for a year; Ruby includes three postings; Emerald includes one." },
  { question: "How do we choose the right package?", answer: "Tell us which roles and locations you're hiring for, how many colleagues will attend, and whether you want exhibition space. For product sponsors, tell us who uses your product and what you'd like to demonstrate." },
];

export function sponsorInquiry2027(tier) {
  const packageName = tier ? `${tier.name} (${tier.price || "custom quote"})` : "2027 sponsorship";
  return {
    subject: `SF Ruby 2027 — ${packageName}`,
    body: `Hi Vica,\n\nWe're interested in ${packageName} for SF Ruby 2027.\n\nCompany:\nHiring goals / product audience:\nRoles and hiring locations:\nTeam size attending:\nBudget and invoice timing:\n\nPlease send availability, package details, and reservation terms.\n`,
  };
}

// Why a large engineering company sponsors, as opposed to why a startup does.
// `icon` is a Heroicons outline path, the same convention as the 2026 file.
export const whySponsor2027 = [
  {
    title: "Hire Ruby engineers",
    text: "Meet senior and staff engineers, open-source authors, and builders with experience taking products from an idea to production. Bring your engineers and recruiters into the conversations.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Build your engineering brand",
    text: "Help Ruby engineers get to know the team behind your company: the systems you build, the problems you solve, and the people they could work with.",
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
    text: "SFJAZZ in Hayes Valley, the same room as the 2026 conference.",
  },
];
