/**
 * Open Graph utilities for generating dynamic social preview metadata
 */

export interface OGOptions {
  title: string;
  description: string;
  image?: string;
  type?: string;
  url?: string;
}

/**
 * Generate OG image URL for a speaker
 */
export function getSpeakerOGImage(speakerId: string, speakerName: string): string {
  // For now, return the speaker's photo
  // In the future, this could call an OG image generation API
  return `/speaker_${speakerId.replace(/-/g, '')}.jpg`;
}

/**
 * Generate OG image URL for a talk
 */
export function getTalkOGImage(talkId: string, talkTitle: string, speakerName: string): string {
  // For now, return default OG image
  // In the future, this could generate a dynamic image with talk title and speaker
  return '/sfruby_og.jpg';
}

/**
 * Generate OG metadata for a speaker
 */
export function getSpeakerOGMetadata(speaker: any, baseUrl: string = 'https://sfruby.com'): OGOptions {
  return {
    title: `${speaker.name} - San Francisco Ruby Conference 2025`,
    description: speaker.bio || `${speaker.title}${speaker.company ? ` at ${speaker.company}` : ''}. Speaking at San Francisco Ruby Conference 2025.`,
    image: speaker.image || getSpeakerOGImage(speaker.id, speaker.name),
    type: 'profile',
    url: `${baseUrl}/speakers#${speaker.id}`,
  };
}

/**
 * Generate OG metadata for a talk
 */
export function getTalkOGMetadata(talk: any, speaker: any, baseUrl: string = 'https://sfruby.com'): OGOptions {
  const speakerName = speaker?.name || 'Speaker';
  return {
    title: `${talk.title} - San Francisco Ruby Conference 2025`,
    description: talk.description || `${talk.title} by ${speakerName}. San Francisco Ruby Conference 2025.`,
    image: getTalkOGImage(talk.id, talk.title, speakerName),
    type: 'article',
    url: `${baseUrl}/schedule#${talk.id}`,
  };
}

/**
 * Truncate text for social media descriptions (recommended 155-160 chars for Twitter)
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Generate OG image using a third-party service (e.g., og-image.vercel.app)
 * This is useful for dynamic text-based OG images
 */
export function generateDynamicOGImage(options: {
  title: string;
  subtitle?: string;
  template?: 'speaker' | 'talk' | 'default';
}): string {
  const { title, subtitle, template = 'default' } = options;

  // Example using Vercel's OG Image generation service
  // You can replace this with your own service or Cloudinary
  const params = new URLSearchParams({
    title: title,
    subtitle: subtitle || '',
    theme: 'ruby',
  });

  // This is a placeholder - you'd need to set up your own OG image generation
  // Options:
  // 1. Vercel OG: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
  // 2. Cloudinary dynamic text overlays
  // 3. Your own API endpoint with @vercel/og or Puppeteer

  return `/api/og/${template}?${params.toString()}`;
}

/**
 * Clean and prepare text for OG tags
 */
export function sanitizeOGText(text: string): string {
  return text
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
