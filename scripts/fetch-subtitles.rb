#!/usr/bin/env ruby
# frozen_string_literal: true

# Pull English subtitles from YouTube for every video shown on /videos and save a
# clean plain-text transcript per video, keyed by YouTube id.
#
#   ruby scripts/fetch-subtitles.rb            # fetch the ones we don't have yet
#   ruby scripts/fetch-subtitles.rb --force    # re-fetch everything
#   ruby scripts/fetch-subtitles.rb ID1 ID2    # fetch specific ids only
#
# The id list is src/content/youtube-dates.json (every video on the page). Output
# goes to transcripts/<id>.txt (gitignored). Requires yt-dlp (`brew install yt-dlp`).
# These transcripts feed the talk-summary step; re-run when new videos are added.

require "json"
require "fileutils"
require "open3"

ROOT     = File.expand_path("..", __dir__)
IDS_FILE = File.join(ROOT, "src", "content", "youtube-dates.json")
OUT_DIR  = File.join(ROOT, "transcripts")
TMP_DIR  = File.join(OUT_DIR, ".vtt")

force = ARGV.delete("--force")
explicit_ids = ARGV.dup

abort "yt-dlp not found. Install it with: brew install yt-dlp" if `which yt-dlp`.strip.empty?
FileUtils.mkdir_p(TMP_DIR)

ids = explicit_ids.any? ? explicit_ids : JSON.parse(File.read(IDS_FILE)).keys

# YouTube auto-caption VTT is a rolling window: each cue re-prints the previous
# line plus a few new words, wrapped in <timestamp><c>word</c> tags. Strip the
# tags and timestamps, then collapse the rolling duplicates into one clean line.
def clean_vtt(path)
  out = []
  File.foreach(path, encoding: "UTF-8") do |raw|
    line = raw.chomp
    next if line.start_with?("WEBVTT", "Kind:", "Language:")
    next if line.include?("-->")
    text = line.gsub(/<[^>]+>/, "").gsub("&nbsp;", " ").gsub(/\s+/, " ").strip
    next if text.empty?
    out << text unless out.last == text
  end
  # Drop fully-contained rolling fragments ("Uh hi" then "Uh hi everybody.").
  collapsed = []
  out.each do |text|
    prev = collapsed.last
    if prev && text.start_with?(prev)
      collapsed[-1] = text
    elsif prev && prev.start_with?(text)
      next
    else
      collapsed << text
    end
  end
  collapsed.join(" ").gsub(/\s+/, " ").strip
end

fetched = 0
skipped = 0
failed  = []

ids.each_with_index do |id, i|
  txt_path = File.join(OUT_DIR, "#{id}.txt")
  if File.exist?(txt_path) && !force
    skipped += 1
    next
  end

  puts "[#{i + 1}/#{ids.size}] #{id}"
  template = File.join(TMP_DIR, id)
  Dir[File.join(TMP_DIR, "#{id}*.vtt")].each { |f| File.delete(f) }

  _out, _err, _status = Open3.capture3(
    "yt-dlp",
    "--write-auto-sub", "--write-sub", "--sub-lang", "en",
    "--skip-download", "--sub-format", "vtt",
    "--retries", "3", "--no-warnings", "--quiet",
    "-o", template,
    "https://www.youtube.com/watch?v=#{id}",
  )

  vtt = Dir[File.join(TMP_DIR, "#{id}*.vtt")].min_by(&:length)
  if vtt && File.exist?(vtt)
    text = clean_vtt(vtt)
    if text.length > 50
      File.write(txt_path, text + "\n")
      fetched += 1
      puts "  ✓ #{text.length} chars"
    else
      failed << id
      puts "  ✗ transcript too short"
    end
  else
    failed << id
    puts "  ✗ no subtitles available"
  end

  sleep 0.5 # be polite to YouTube
end

FileUtils.rm_rf(TMP_DIR)
puts
puts "Done: #{fetched} fetched, #{skipped} skipped, #{failed.size} failed (of #{ids.size})."
puts "Failed: #{failed.join(", ")}" unless failed.empty?
