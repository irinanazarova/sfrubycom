/**
 * Constants for schedule display
 */

/**
 * Session type color mappings
 * Each session type has its own gradient and border styling
 */
export const SESSION_COLORS = {
  keynote: 'bg-gradient-to-r from-ruby-500 to-pink-500 text-white border-ruby-400',
  panel: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-purple-400',
  demo: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400',
  break: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white border-sky-400',
  social: 'gitbutler-gradient text-white border-[oklch(0.5325_0.1109_183.03)]',
  logistics: 'bg-gray-100 text-gray-700 border-gray-200',
  talk: 'bg-white text-gray-900 border-gray-200 hover:border-ruby-300 hover:shadow-lg',
  workshop: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-300 hover:shadow-lg',
} as const;

/**
 * Track color mappings for badges and styling
 */
export const TRACK_COLORS = {
  main: 'ruby',
  blackbox: 'sky',
  workshop: 'emerald',
} as const;

/**
 * Track display names
 */
export const TRACK_NAMES = {
  main: 'Main Stage',
  blackbox: 'Blackbox Theater',
  workshop: 'Workshop Studio',
} as const;

/**
 * Session type labels for legend
 */
export const SESSION_TYPE_LABELS = {
  keynote: 'Keynote',
  talk: 'Talk',
  workshop: 'Workshop',
  panel: 'Panel',
  demo: 'Demo',
  social: 'Social Event',
  logistics: 'Logistics',
  break: 'Break',
} as const;

/**
 * Get session color classes by type
 */
export function getSessionColor(sessionType: string): string {
  return SESSION_COLORS[sessionType as keyof typeof SESSION_COLORS] || SESSION_COLORS.talk;
}

/**
 * Get track color by track name
 */
export function getTrackColor(track: string): string {
  return TRACK_COLORS[track as keyof typeof TRACK_COLORS] || 'gray';
}

/**
 * Get track display name
 */
export function getTrackDisplayName(track: string): string {
  return TRACK_NAMES[track as keyof typeof TRACK_NAMES] || track;
}
