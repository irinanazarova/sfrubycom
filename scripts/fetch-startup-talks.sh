#!/bin/zsh
# Fetch YouTube transcripts for talks by startup founders/team (non-demo talks)

OUTDIR="src/pages/startups-th/transcripts"

# Talks from startup people (not demos)
TALKS=(
  "rubyllm_keynote:y535u1EWqAg"           # Carmine Paolino - Chat with Work - RubyLLM keynote
  "cloud_data_infrastructure:tE_gTgnoLw8"  # Evgeny Li - Bemi AI
  "operating_rails:2h2XEyOM6lg"            # André Arko - Spinel
  "thin_client:JmmtO8vChyA"                # Jeremy Evans - Ubicloud
  "scaling_rails_intercom:Xc8OYnIci3E"     # Eugene Kenny - Intercom/Fin
  "boltnew_fireside:pzA1Q8sBwcA"           # Albert Pai - Bolt.new CTO fireside chat
)

echo "Fetching transcripts for ${#TALKS[@]} startup talks..."
echo ""

for entry in "${TALKS[@]}"; do
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

echo "Done!"
