#!/usr/bin/env node
// Convert SRT subtitle files to clean text transcripts

import fs from 'fs';
import path from 'path';

const TRANSCRIPTS_DIR = 'src/pages/startups-th/transcripts';

function cleanSRT(content) {
  // Split into blocks
  const blocks = content.split(/\n\n+/);
  const lines = [];

  for (const block of blocks) {
    const blockLines = block.trim().split('\n');
    // Skip sequence number and timestamp lines
    // SRT format: sequence number, timestamp, text (may be multiple lines)
    if (blockLines.length >= 3) {
      // Get text lines (everything after timestamp)
      const textLines = blockLines.slice(2).join(' ');
      if (textLines.trim() && !textLines.match(/^\[.*\]$/)) {
        lines.push(textLines.trim());
      }
    }
  }

  // Remove duplicate consecutive lines (common in auto-generated subs)
  const dedupedLines = [];
  for (const line of lines) {
    if (dedupedLines.length === 0 || !dedupedLines[dedupedLines.length - 1].includes(line)) {
      dedupedLines.push(line);
    }
  }

  // Join and clean up
  let text = dedupedLines.join(' ');

  // Clean up common issues
  text = text
    .replace(/\s+/g, ' ')  // Multiple spaces
    .replace(/\s+([.,!?])/g, '$1')  // Space before punctuation
    .replace(/([.,!?])([A-Z])/g, '$1 $2')  // Missing space after punctuation
    .trim();

  return text;
}

// Process all SRT and VTT files
const files = fs.readdirSync(TRANSCRIPTS_DIR).filter(f => f.endsWith('.srt') || f.endsWith('.vtt'));

console.log(`Processing ${files.length} transcript files...`);

for (const file of files) {
  const srtPath = path.join(TRANSCRIPTS_DIR, file);
  const txtPath = path.join(TRANSCRIPTS_DIR, file.replace(/\.(srt|en\.vtt)$/, '.txt'));

  const content = fs.readFileSync(srtPath, 'utf-8');
  const cleanText = cleanSRT(content);

  fs.writeFileSync(txtPath, cleanText);

  const wordCount = cleanText.split(/\s+/).length;
  console.log(`  ${file.replace(/\.(srt|en\.vtt)$/, '')}: ${wordCount} words`);
}

console.log('\nDone! Text files created alongside SRT files.');
