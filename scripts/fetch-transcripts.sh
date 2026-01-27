#!/bin/zsh
# Fetch YouTube transcripts for SF Ruby Conference startup demos
# Used for "Startups on Rails 2026" RubyConfTH talk

OUTDIR="src/pages/startups-th/transcripts"

# All demo YouTube IDs with startup names (name:video_id)
DEMOS=(
  "bolt_new:zXbAWkUueUM"
  "stepful:GoFbMl3TBmw"
  "accessgrid:LK0CmY72U9w"
  "suppli:nfeEQBmeirg"
  "nexhealth:21hf1Ue1o6I"
  "simple_ai:Bl7Dq6aYidE"
  "sixfold:L91KPH6f_q8"
  "cactus:kdVAm_yzqpE"
  "tend:WItgAAtvJhc"
  "spinel:F6dwuKszqWs"
  "coracomputer:FNWAKyTX4Uo"
  "terminalwire:ExICQ7RDT0E"
  "superconductor:P8myd01GxAA"
  "aisquared:A3smrePJj4M"
  "recognize:Ou7CGuQUy6Q"
  "fin:5MepvHfFXgk"
  "ubicloud:rhmINL-nK5o"
  "chatwithwork:H0XwqkQfiIM"
  "thatch:7M4dzK9wY7I"
  "angellist:931PpANN8bs"
  "finta:FDHtRONY4kk"
  "planetscale:WxdB4sg2eIM"
  "llamapress:Po-k0sddd0Y"
  "cleary:nJ6oxetPDMY"
  "bemi:3s6Je3wTXqE"
  "temporal:JvCQgUcQNps"
  "rails_x_keynote:hP4SkKH4IsA"
)

echo "Fetching transcripts for ${#DEMOS[@]} videos..."
echo ""

for entry in "${DEMOS[@]}"; do
  name="${entry%%:*}"
  video_id="${entry##*:}"

  echo "[$name] Fetching https://youtube.com/watch?v=$video_id"

  yt-dlp \
    --write-auto-sub \
    --sub-lang en \
    --skip-download \
    --sub-format vtt \
    --convert-subs srt \
    -o "$OUTDIR/${name}" \
    "https://www.youtube.com/watch?v=$video_id" 2>&1 | grep -E "(Downloading|Writing|error|Error|WARNING)" || true

  # Rename to simpler filename if downloaded
  if [ -f "$OUTDIR/${name}.en.srt" ]; then
    mv "$OUTDIR/${name}.en.srt" "$OUTDIR/${name}.srt"
    echo "  ✓ Saved as ${name}.srt"
  elif [ -f "$OUTDIR/${name}.en-orig.srt" ]; then
    mv "$OUTDIR/${name}.en-orig.srt" "$OUTDIR/${name}.srt"
    echo "  ✓ Saved as ${name}.srt"
  else
    echo "  ✗ No transcript available"
  fi
  echo ""
done

echo "Done! Transcripts saved to $OUTDIR"
ls -la "$OUTDIR"/*.srt 2>/dev/null | wc -l | xargs -I {} echo "{} transcripts downloaded"
