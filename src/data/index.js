// Central export point for all conference data
// This makes imports cleaner and provides a single source of truth

export * from "./speakers.js";
export * from "./talks.js";
export * from "./schedule.js";
export * from "./sponsors.js";
export * from "./startups.js";
export * from "./jobs.js";

// Re-export commonly used functions with clearer names
export { getTalk } from "./talks.js";
export { getSpeaker } from "./speakers.js";
export { getSlot } from "./schedule.js";

// Combined data helpers
import { talks } from "./talks.js";
import { speakers } from "./speakers.js";
import { scheduleSlots, slotAssignments } from "./schedule.js";
import { sponsors } from "./sponsors.js";
import { startups } from "./startups.js";
import { jobs } from "./jobs.js";

/**
 * Get complete schedule with all data joined
 * @param {number} day - Day number (1 or 2)
 * @returns {Array} Array of time blocks with talks and speakers
 */
export function getCompleteSchedule(day = null) {
  const slots = day
    ? Object.values(scheduleSlots).filter((slot) => slot.day === day)
    : Object.values(scheduleSlots);

  return slots
    .map((slot) => {
      const talkId = slotAssignments[slot.id];
      const talk = talkId ? talks[talkId] : null;

      let speakerDetails = [];
      if (talk) {
        if (talk.speakers && Array.isArray(talk.speakers)) {
          speakerDetails = talk.speakers
            .map((id) => speakers[id])
            .filter(Boolean);
        } else if (talk.speakerId) {
          const speaker = speakers[talk.speakerId];
          if (speaker) speakerDetails = [speaker];
        }
      }

      return {
        ...slot,
        talk,
        speakers: speakerDetails,
      };
    })
    .sort((a, b) => {
      // Sort by day, then by start time
      if (a.day !== b.day) return a.day - b.day;

      const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
      };

      return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
    });
}

/**
 * Get all talks with their assigned slots
 * @returns {Object} Object mapping talk IDs to their slot information
 */
export function getTalksWithSlots() {
  const talkSlotMap = {};

  Object.entries(slotAssignments).forEach(([slotId, talkId]) => {
    talkSlotMap[talkId] = {
      ...talks[talkId],
      slot: scheduleSlots[slotId],
    };
  });

  return talkSlotMap;
}

/**
 * Get speakers with their talks and schedule
 * @returns {Array} Array of speakers with their scheduled talks
 */
export function getSpeakersWithSchedule() {
  const speakerSchedule = {};

  Object.values(speakers).forEach((speaker) => {
    speakerSchedule[speaker.id] = {
      ...speaker,
      talks: [],
    };
  });

  Object.entries(slotAssignments).forEach(([slotId, talkId]) => {
    const talk = talks[talkId];
    const slot = scheduleSlots[slotId];

    if (talk) {
      const talkWithSlot = { ...talk, slot };

      if (talk.speakers && Array.isArray(talk.speakers)) {
        talk.speakers.forEach((speakerId) => {
          if (speakerSchedule[speakerId]) {
            speakerSchedule[speakerId].talks.push(talkWithSlot);
          }
        });
      } else if (talk.speakerId && speakerSchedule[talk.speakerId]) {
        speakerSchedule[talk.speakerId].talks.push(talkWithSlot);
      }
    }
  });

  return Object.values(speakerSchedule);
}

/**
 * Get conference statistics
 * @returns {Object} Statistics about the conference
 */
export function getConferenceStats() {
  const assignedTalks = new Set(Object.values(slotAssignments));
  const speakersWithTalks = new Set();

  assignedTalks.forEach((talkId) => {
    const talk = talks[talkId];
    if (talk) {
      if (talk.speakers && Array.isArray(talk.speakers)) {
        talk.speakers.forEach((id) => speakersWithTalks.add(id));
      } else if (talk.speakerId) {
        speakersWithTalks.add(talk.speakerId);
      }
    }
  });

  return {
    totalDays: 2,
    totalSlots: Object.keys(scheduleSlots).length,
    totalTalks: Object.keys(talks).length,
    assignedTalks: assignedTalks.size,
    unassignedTalks: Object.keys(talks).length - assignedTalks.size,
    totalSpeakers: Object.keys(speakers).length,
    speakersWithTalks: speakersWithTalks.size,
    totalSponsors: Object.keys(sponsors).length,
    totalStartups: Object.keys(startups).length,

    byType: {
      keynotes: Object.values(talks).filter((t) => t.type === "keynote").length,
      talks: Object.values(talks).filter((t) => t.type === "talk").length,
      workshops: Object.values(talks).filter((t) => t.type === "workshop")
        .length,
      panels: Object.values(talks).filter((t) => t.type === "panel").length,
      demos: Object.values(talks).filter((t) => t.type === "demo").length,
    },

    byTrack: {
      main: Object.values(scheduleSlots).filter((s) => s.track === "main")
        .length,
      blackbox: Object.values(scheduleSlots).filter(
        (s) => s.track === "blackbox",
      ).length,
      workshop: Object.values(scheduleSlots).filter(
        (s) => s.track === "workshop",
      ).length,
    },

    byStatus: {
      confirmed: Object.values(talks).filter((t) => t.status === "confirmed")
        .length,
      tentative: Object.values(talks).filter((t) => t.status === "tentative")
        .length,
      cancelled: Object.values(talks).filter((t) => t.status === "cancelled")
        .length,
    },
  };
}

/**
 * Search across all conference data
 * @param {string} query - Search query
 * @returns {Object} Search results organized by type
 */
export function searchConferenceData(query) {
  const lowerQuery = query.toLowerCase();
  const results = {
    talks: [],
    speakers: [],
    sponsors: [],
    startups: [],
  };

  // Search talks
  Object.values(talks).forEach((talk) => {
    if (
      talk.title?.toLowerCase().includes(lowerQuery) ||
      talk.description?.toLowerCase().includes(lowerQuery) ||
      talk.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    ) {
      results.talks.push(talk);
    }
  });

  // Search speakers
  Object.values(speakers).forEach((speaker) => {
    if (
      speaker.name?.toLowerCase().includes(lowerQuery) ||
      speaker.bio?.toLowerCase().includes(lowerQuery) ||
      speaker.company?.toLowerCase().includes(lowerQuery) ||
      speaker.role?.toLowerCase().includes(lowerQuery)
    ) {
      results.speakers.push(speaker);
    }
  });

  // Search sponsors
  Object.values(sponsors).forEach((sponsor) => {
    if (
      sponsor.name?.toLowerCase().includes(lowerQuery) ||
      sponsor.description?.toLowerCase().includes(lowerQuery)
    ) {
      results.sponsors.push(sponsor);
    }
  });

  // Search startups
  Object.values(startups).forEach((startup) => {
    if (
      startup.name?.toLowerCase().includes(lowerQuery) ||
      startup.description?.toLowerCase().includes(lowerQuery) ||
      startup.founder?.toLowerCase().includes(lowerQuery)
    ) {
      results.startups.push(startup);
    }
  });

  return results;
}

// Export all data objects for direct access
export {
  talks,
  speakers,
  scheduleSlots,
  slotAssignments,
  sponsors,
  startups,
  jobs,
};
