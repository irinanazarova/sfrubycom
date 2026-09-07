#!/usr/bin/env bash
# Netlify runs this before every build; exit 0 skips the build, non-zero runs it.
#
# Deploy previews are opt-in. Most PRs are small content edits reviewed in the
# diff, and a preview build for each one was more compute than review. A PR
# gets a preview when either:
#   - it carries the "preview" label on GitHub (add the label, then push or
#     retry the deploy: Netlify only builds on a push), or
#   - the branch name ends in "-preview", or the head commit message contains
#     "[preview]", which both work without touching GitHub.
# Production and branch deploys are never skipped here.
set -u

if [ "${CONTEXT:-}" != "deploy-preview" ]; then
  exit 1
fi

case "${HEAD:-}" in
  *-preview) exit 1 ;;
esac

if git log -1 --pretty=%B 2>/dev/null | grep -qi '\[preview\]'; then
  exit 1
fi

# The repo is public, so the labels read without a token. If GitHub is
# unreachable the answer is "no label", and the build is skipped.
if [ -n "${REVIEW_ID:-}" ]; then
  labels=$(curl -sf --max-time 10 \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/irinanazarova/sfrubycom/pulls/${REVIEW_ID}" \
    | grep -o '"name": *"[^"]*"' | grep -ci '"preview"')
  if [ "${labels:-0}" -gt 0 ]; then
    exit 1
  fi
fi

echo "Deploy preview skipped: add the 'preview' label (then push), name the branch *-preview, or put [preview] in the commit message."
exit 0
