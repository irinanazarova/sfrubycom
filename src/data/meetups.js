// Upcoming events synced from the Luma calendar at build time.
// Source: scripts/fetch-luma-events.js -> src/content/meetups.json (soonest first).
// Past meetups live in src/data/events.js; this file is the forward-looking feed.
import upcoming from "../content/meetups.json";

export const upcomingEvents = upcoming;

// The monthly meetups only (excludes the conference, which has its own page).
export function getUpcomingMeetups() {
  return upcomingEvents.filter((e) => e.type === "meetup");
}

// The single next meetup to feature, or null if none is scheduled.
export function getNextMeetup() {
  return getUpcomingMeetups()[0] || null;
}

// Everything upcoming (meetups + conference), soonest first.
export function getAllUpcoming() {
  return upcomingEvents;
}
