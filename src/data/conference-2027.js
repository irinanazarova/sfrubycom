// The 2027 conference as the homepage sells it, from the Luma page
// (luma.com/sfrubyconf2027), checked on Nov 12, 2026. The date and venue live
// in CONFERENCE_2027 with the sponsor tiers, so the two pages never disagree.
import { CONFERENCE_2027 } from "./sponsor-tiers-2027.js";

export { CONFERENCE_2027 };

export const SHORT_DATE_2027 = "Sep 9, 2027";

// Luma's first tier: 200 seats, sales end at midnight Pacific on Apr 30, 2027.
export const EARLY_BIRD_2027 = {
  name: "Early bird",
  price: 199,
  closes: "Apr 30",
};

// Same contract as ticketLink in conference-2026.js: the placement goes in
// utm_source, the only UTM Luma keeps per registration. Pair it with
// ticketEventClass from that file for the Plausible "Ticket click" event.
export const ticketLink2027 = (placement) =>
  `${CONFERENCE_2027.lumaUrl}?utm_source=sfruby-${placement}&utm_medium=site&utm_campaign=conf2027`;
