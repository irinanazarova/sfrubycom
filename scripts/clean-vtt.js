#!/usr/bin/env node
// Convert VTT subtitle files to clean text transcripts

import fs from 'fs';
import path from 'path';

const TRANSCRIPTS_DIR = 'src/pages/startups-th/transcripts';

function cleanVTT(content) {
  const lines = content.split('\n');
  const textLines = [];

  for (const line of lines) {
    // Skip WEBVTT header, timestamps, empty lines, and positioning info
    if (line.startsWith('WEBVTT') ||
        line.startsWith('Kind:') ||
        line.startsWith('Language:') ||
        line.match(/^\d{2}:\d{2}/) ||
        line.match(/^align:/) ||
        line.trim() === '' ||
        line.trim() === ' ') {
      continue;
    }

    // Skip lines that are just karaoke timing markers
    if (line.includes('<c>') || line.includes('</c>')) {
      continue;
    }

    // Clean up the line
    let cleanLine = line
      .replace(/<[^>]+>/g, '')  // Remove HTML-like tags
      .trim();

    if (cleanLine && cleanLine !== ' ') {
      textLines.push(cleanLine);
    }
  }

  // Deduplicate consecutive similar lines
  const dedupedLines = [];
  for (const line of textLines) {
    if (dedupedLines.length === 0) {
      dedupedLines.push(line);
    } else {
      const lastLine = dedupedLines[dedupedLines.length - 1];
      // If the new line is a continuation or starts with new text
      if (!lastLine.includes(line) && !line.includes(lastLine)) {
        dedupedLines.push(line);
      } else if (line.length > lastLine.length) {
        // Replace with longer version
        dedupedLines[dedupedLines.length - 1] = line;
      }
    }
  }

  // Join and clean up
  let text = dedupedLines.join(' ');

  // Clean up common issues
  text = text
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/([.,!?])([A-Z])/g, '$1 $2')
    .replace(/Uh /gi, '')  // Remove filler words
    .replace(/Um /gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  return text;
}

// Process VTT files
const files = fs.readdirSync(TRANSCRIPTS_DIR).filter(f => f.endsWith('.vtt'));

console.log(`Processing ${files.length} VTT files...`);

for (const file of files) {
  const vttPath = path.join(TRANSCRIPTS_DIR, file);
  const txtPath = path.join(TRANSCRIPTS_DIR, file.replace('.en.vtt', '.txt'));

  const content = fs.readFileSync(vttPath, 'utf-8');
  const cleanText = cleanVTT(content);

  fs.writeFileSync(txtPath, cleanText);

  const wordCount = cleanText.split(/\s+/).length;
  console.log(`  ${file.replace('.en.vtt', '')}: ${wordCount} words`);
}

console.log('\nDone!');
