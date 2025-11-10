# Social Preview Best Practices & Implementation Guide

## Overview

Social previews (Open Graph images and meta tags) are crucial for sharing conference content on social media platforms like Twitter, LinkedIn, Facebook, and Slack. This document outlines our implementation and best practices.

## Current Implementation

### ✅ What We've Implemented

1. **Dynamic Per-Page Metadata**
   - Each page can now have unique title, description, and OG image
   - Support for dynamic metadata based on URL hash fragments (deep links)

2. **Speaker-Specific Previews**
   - URL: `https://sfruby.com/speakers#speaker-id`
   - Shows speaker photo, bio, and talk info
   - Example: `https://sfruby.com/speakers#marco-roth`

3. **Talk-Specific Previews**
   - URL: `https://sfruby.com/schedule#talk-id`
   - Shows talk title, speaker info, and description
   - Example: `https://sfruby.com/schedule#reaction-view`

4. **Utility Functions**
   - `getSpeakerOGMetadata()` - Generate speaker OG data
   - `getTalkOGMetadata()` - Generate talk OG data
   - `truncateDescription()` - Optimize text for social media

### How It Works

```astro
---
// In any page (e.g., speakers.astro)
import { getSpeakerOGMetadata } from "../utils/og";

// Check for hash-based deep link
const hash = Astro.url.hash.replace('#', '');
const targetSpeaker = hash ? speakers[hash] : null;

// Generate dynamic metadata
let ogMetadata = targetSpeaker 
  ? getSpeakerOGMetadata(targetSpeaker, "https://sfruby.com")
  : { /* default metadata */ };
---

<Layout
    title={ogMetadata.title}
    description={ogMetadata.description}
    ogImage={ogMetadata.ogImage}
    ogUrl={ogMetadata.ogUrl}
/>
```

## Social Media Best Practices

### Image Dimensions

- **Facebook/LinkedIn**: 1200x630px (1.91:1 ratio)
- **Twitter**: 1200x675px (16:9 ratio) or 1200x630px
- **Recommended**: 1200x630px works well everywhere
- **File size**: Keep under 5MB (ideally under 1MB)
- **Format**: JPG or PNG (JPG recommended for photos)

### Text Limits

- **Title**: 60-70 characters (truncated on some platforms)
- **Description**: 155-160 characters for Twitter, 200+ for Facebook
- **Use `truncateDescription()`** to handle this automatically

### Best Practices

1. **Include Branding**: Add conference logo/branding to all OG images
2. **Readable Text**: If text on image, ensure 40px+ font size
3. **High Contrast**: Dark text on light background or vice versa
4. **Faces Work Best**: Images with people get 38% more engagement
5. **Test Everything**: Use preview tools before going live

## Testing Tools

Test your social previews before sharing:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **All-in-One**: https://www.opengraph.xyz/

## Page-Specific Implementation

### Homepage (index.astro)
```astro
<Layout
    title="San Francisco Ruby Conference 2025"
    description="Building the Future with Ruby. Nov 19-20 at Fort Mason, SF."
    ogImage="/sfruby_og.jpg"
/>
```

### Speakers Page (speakers.astro)
- **Default**: Shows conference info
- **With hash**: Shows specific speaker info
- **Images**: Uses speaker headshot photos

### Schedule Page (schedule.astro)
- **Default**: Shows full schedule overview
- **With hash**: Shows specific talk info
- **Images**: Uses speaker photo or talk-specific image

### Other Pages
Update each page individually:
```astro
<Layout
    title="Sponsors - SF Ruby Conference 2025"
    description="Support the Ruby community..."
    ogImage="/sponsors_og.jpg"  // Create page-specific images
/>
```

## Next Steps: Dynamic OG Image Generation

For even better social previews, consider generating dynamic images with text overlays.

### Option 1: Vercel OG Image Generation (Recommended)

Create `src/pages/api/og/[type].ts`:

```typescript
import { ImageResponse } from '@vercel/og';

export async function get({ params, request }) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const subtitle = searchParams.get('subtitle');
  
  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(to bottom, #fee2e2, #dc2626)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}>
        <h1 style={{ fontSize: 60, color: 'white' }}>{title}</h1>
        <p style={{ fontSize: 30, color: '#fecaca' }}>{subtitle}</p>
        <div style={{ fontSize: 24, marginTop: 40 }}>
          SF Ruby Conference 2025
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

Usage:
```typescript
export function getTalkOGImage(talkId: string, title: string, speaker: string) {
  return `/api/og/talk?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(speaker)}`;
}
```

### Option 2: Cloudinary Dynamic Images

Use Cloudinary's text overlay feature:

```typescript
export function getTalkOGImage(title: string, speaker: string) {
  const baseUrl = 'https://res.cloudinary.com/YOUR_CLOUD/image/upload';
  const transformations = [
    'w_1200,h_630,c_fill',
    `l_text:Arial_60_bold:${encodeURIComponent(title)},co_rgb:ffffff,w_1000,c_fit`,
    'fl_layer_apply,g_north,y_200',
    `l_text:Arial_30:${encodeURIComponent(speaker)},co_rgb:fecaca`,
    'fl_layer_apply,g_south,y_200'
  ].join('/');
  
  return `${baseUrl}/${transformations}/sfruby_template.jpg`;
}
```

### Option 3: Pre-generated Static Images

For smaller conferences, generate images in advance:

1. **Design Template**: Create Figma/Canva template
2. **Batch Generate**: Create images for each speaker/talk
3. **Store in `/public`**: Name consistently (e.g., `og_talk_[id].jpg`)
4. **Reference**: Point to static files in metadata

```typescript
export function getTalkOGImage(talkId: string) {
  return `/og/talk_${talkId}.jpg`;
}
```

## Current Static OG Images

We currently have one main OG image:
- `/public/sfruby_og.jpg` - Used for all pages without specific images

### Recommended Additional Images

Create these page-specific images:

1. **`/public/og_speakers.jpg`** - Collage of speaker photos
2. **`/public/og_schedule.jpg`** - Schedule preview/calendar visual
3. **`/public/og_sponsors.jpg`** - Sponsor logos showcase
4. **`/public/og_about.jpg`** - Team/venue photo
5. **`/public/og_jobs.jpg`** - Ruby jobs/hiring themed

Then update each page:
```astro
<Layout ogImage="/og_speakers.jpg" />
```

## Hash-Based Deep Linking

Our implementation supports deep linking with hash fragments:

### How It Works

1. **User shares**: `https://sfruby.com/speakers#marco-roth`
2. **Server renders**: Detects hash from `Astro.url.hash`
3. **Generates metadata**: Creates speaker-specific OG tags
4. **Social crawlers**: See speaker's photo and bio
5. **User clicks**: Opens to that specific speaker

### Important Notes

⚠️ **Limitation**: Hash fragments are **client-side only**. Social media crawlers don't always process them correctly because the hash doesn't get sent to the server in traditional requests.

### Solutions for Hash Deep Linking

1. **Current Approach**: Works in Astro because SSR can access `Astro.url.hash`
2. **Alternative**: Use query parameters instead
   - Change from: `speakers#marco-roth`
   - To: `speakers?speaker=marco-roth`
   - More reliable for social crawlers

3. **Best Approach**: Create dedicated pages
   - `/speakers/marco-roth` - Better SEO and social sharing
   - Requires dynamic routing setup

### Implementing Dedicated Speaker Pages

Create `src/pages/speakers/[id].astro`:

```astro
---
import Layout from "../../layouts/Layout.astro";
import { speakers } from "../../data/speakers";
import { getSpeakerOGMetadata } from "../../utils/og";

export async function getStaticPaths() {
  return Object.entries(speakers).map(([id, speaker]) => ({
    params: { id },
    props: { speaker: { ...speaker, id } },
  }));
}

const { speaker } = Astro.props;
const ogMetadata = getSpeakerOGMetadata(speaker, "https://sfruby.com");
---

<Layout
    title={ogMetadata.title}
    description={ogMetadata.description}
    ogImage={ogMetadata.image}
    ogUrl={ogMetadata.url}
>
  <!-- Speaker content -->
</Layout>
```

Benefits:
- ✅ Better SEO
- ✅ More reliable social previews
- ✅ Cleaner URLs
- ✅ Can be indexed separately

## Checklist for Perfect Social Previews

- [ ] Unique title for each page (under 70 characters)
- [ ] Unique description for each page (155-160 characters)
- [ ] Unique OG image for each page (1200x630px)
- [ ] Images include conference branding
- [ ] Text is readable at small sizes
- [ ] Absolute URLs for all images (`https://...`)
- [ ] Test on Facebook debugger
- [ ] Test on Twitter validator
- [ ] Test on LinkedIn inspector
- [ ] Verify mobile appearance
- [ ] Check that images load quickly (<1MB)

## Common Issues & Fixes

### Issue: Old preview showing after update
**Solution**: Clear cache on social platforms:
- Facebook: Use their debug tool and click "Scrape Again"
- Twitter: Add `?v=2` to URL temporarily to force re-crawl
- LinkedIn: Use Post Inspector

### Issue: Image not showing
**Solution**: Check these:
1. Is the image URL absolute? (`https://` not relative)
2. Is the image accessible publicly?
3. Is the image under 5MB?
4. Is the format JPG or PNG?
5. Are there CORS issues?

### Issue: Description too long
**Solution**: Use `truncateDescription()` utility:
```typescript
description: truncateDescription(speaker.bio, 160)
```

### Issue: Hash links not working in social
**Solution**: Consider using query parameters or dedicated pages instead

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Vercel OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [Cloudinary Dynamic Text Overlays](https://cloudinary.com/documentation/image_transformations#adding_text_captions)

## Questions or Issues?

If you need help implementing social previews for a specific page or scenario, check the utility functions in `src/utils/og.ts` or refer to the examples in `speakers.astro` and `schedule.astro`.