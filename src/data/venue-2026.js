// SFJAZZ Center, and how to get there. Rendered by
// src/components/GettingThere.astro and by the homepage's Markdown twin
// (src/lib/llm-content.js).
// Getting to SFJAZZ: transit first, since most attendees are local, then the
// two city garages with the rates that matter on a weekday conference day.
// Figures are from sfmta.com (garage rate tables, Muni fares, route pages)
// as of September 2026. Two lines older guides recommend, the 21 Hayes and
// the 47 Van Ness, are suspended in 2026, so they are not listed. Recheck
// the garage tables before the conference: SFMTA revises them each summer.
// Nov 11 is Veterans Day: SFMTA lists the Civic Center Garage as closed on
// federal holidays and the Performing Arts Garage as closed only on
// Thanksgiving and Christmas; meters stay enforced; Muni and BART run a
// weekday schedule (BART has run one every Veterans Day since 2020).
import { days, formatTime } from "./schedule-2026.js";

export const ADDRESS = "201 Franklin St, San Francisco, CA 94102";
// Program hours from the schedule itself, so they cannot drift from it.
export const programHours = () =>
  days.slice(0, 2).map((d) => ({
    n: d.n,
    opens: formatTime(d.blocks[0].start),
    closes: formatTime(d.blocks.at(-1).end),
  }));
export const MAPS = {
  google:
    "https://www.google.com/maps/dir/?api=1&destination=SFJAZZ+Center,+201+Franklin+St,+San+Francisco,+CA+94102",
  apple:
    "https://maps.apple.com/?daddr=201+Franklin+St,+San+Francisco,+CA+94102",
};

export const transit = [
  {
    name: "Muni Metro",
    detail:
      "Any line to Van Ness station, then 8 minutes on foot up Van Ness to Fell.",
    meta: "$2.85 with Clipper, $3 cash",
  },
  {
    name: "BART",
    detail:
      "Civic Center station, then 12 minutes on foot along Grove, past City Hall.",
    meta: "About 30 min and $11 from SFO",
  },
  {
    name: "Buses",
    detail:
      "49 Van Ness/Mission to McAllister. 6 Hayes/Parnassus to Hayes & Gough. 5 Fulton to McAllister & Gough.",
    meta: "3 to 5 min walk",
  },
  {
    name: "Caltrain",
    detail:
      "Caltrain ends at 4th & King. From there the N Judah, a Muni light rail, runs to Van Ness station.",
    meta: "About 20 min, then the walk",
  },
  {
    name: "Bike",
    detail: "Bay Wheels docks at Grove & Gough and Market & Franklin.",
    meta: "3 min walk",
  },
];

export const garages = [
  {
    name: "Performing Arts Garage",
    address: "360 Grove St",
    href: "https://www.sfmta.com/garages-lots/performing-arts-garage",
    walk: "Two blocks, 4 min walk",
    rates: [
      ["In by 9 am, out by 7 pm", "$21 flat"],
      ["Hourly", "$3 to $5"],
      ["12 hours", "$26"],
    ],
    note: "Weekdays 6 am to 10 pm, Nov 11 included. 6'9\" clearance. EV charging.",
  },
  {
    name: "Civic Center Garage",
    address: "355 McAllister St, under Civic Center Plaza",
    href: "https://www.sfmta.com/garages-lots/civic-center-garage",
    walk: "10 min walk",
    rates: [
      ["In by 8:30 am, out by 7 pm", "$23 flat"],
      ["Hourly, midday", "$7"],
      ["24 hours", "$38"],
    ],
    note: "Weekdays 6 am to 10 pm. Closed Nov 11, Veterans Day.",
  },
];

export const STREET_NOTE =
  "Street meters are two-hour limits until 6 pm, Veterans Day included. Rideshare drop-off: Franklin St at Fell.";
export const SOURCE_NOTE =
  "Rates from SFMTA, September 2026. Nov 11 is Veterans Day: Muni and BART run a weekday schedule.";
