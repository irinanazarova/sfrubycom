/**
 * Format time utilities for schedule display
 */

/**
 * Convert 24-hour time string to 12-hour format with AM/PM
 * @param time - Time string in HH:mm format (e.g., "14:30")
 * @returns Formatted time string (e.g., "2:30 PM")
 */
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/**
 * Format a time range
 * @param startTime - Start time in HH:mm format
 * @param endTime - End time in HH:mm format
 * @returns Formatted range (e.g., "2:30 PM - 4:00 PM")
 */
export function formatTimeRange(startTime: string, endTime: string): string {
  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}

/**
 * Convert time string to minutes since midnight
 * @param time - Time string in HH:mm format
 * @returns Number of minutes since midnight
 */
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Sort time blocks by start time
 * @param blocks - Array of objects with startTime property
 * @returns Sorted array
 */
export function sortByStartTime<T extends { startTime: string }>(blocks: T[]): T[] {
  return blocks.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));
}
