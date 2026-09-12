// The approval email on /manager: the engineer pastes it, fills the brackets
// and sends it. Subject and body are separate strings so each copies into its
// own field. Rendered by src/pages/manager.astro and by the page's Markdown
// twin (src/lib/llm-content.js).
import { ticketLink, ticketTiers } from "./conference-2026.js";

const company = ticketTiers.find((t) => t.name === "Company-sponsored");

// Subject and body are separate strings, and each box copies only its own
// text: the subject pastes into the subject field, the body into the body.
export const emailSubject = `Request to attend SF Ruby Conference 2026, Nov 10-11 ($${company.price})`;

export const emailBody = `Hi [MANAGER'S NAME],

I'd like to request your approval to attend SF Ruby Conference 2026 at the SFJAZZ in San Francisco, California, on November 10-11. November 11 is Veterans Day, so this is a single working day out of the office.

SF Ruby is the flagship West Coast Ruby event that brings together technical leaders and builders shaping the future of Ruby. The conference is designed to help teams use AI effectively and move faster without compromising quality by learning directly from the bigger teams that ship Ruby code today.

Here's a breakdown of the conference costs:

Conference pass: $${company.price}
Airfare: [ADD COST]
Round trip transportation between airport and hotel: [ADD COST]
Hotel: [add cost per night] (plus taxes, subject to availability)
Meals: Breakfast, lunch, dinner [ADD COST]
Total: [ADD COST]

If we purchase 5 or more passes, we'll receive a 10% off with team pricing and get a segment on stage.

By attending SF Ruby, we can learn directly from Ruby success stories and apply those insights to our work.

Thank you for considering my request. If approved, I'm happy to share a brief plan for what I'll focus on and a recap afterward with concrete takeaways and recommendations.

Ticket: ${ticketLink("manager-email")}

Thanks,
[name]`;
