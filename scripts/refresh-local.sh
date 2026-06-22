#!/bin/bash
# Local data refresh used by the launchd scheduler (com.sfquorum.refresh).
# Re-crawls Legistar, regenerates summaries/topics, and recomputes leaderboard
# stats into the local SQLite database that the dev server reads.

set -uo pipefail

PROJECT_DIR="/Users/miguelmoncada/Documents/SF Votes"

# Make Node available under launchd's minimal environment.
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$NVM_DIR/nvm.sh"
  nvm use 20 >/dev/null 2>&1 || true
fi
# Fallback in case nvm shims are unavailable.
export PATH="$NVM_DIR/versions/node/v20.20.0/bin:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:$PATH"

cd "$PROJECT_DIR" || { echo "Project dir not found: $PROJECT_DIR"; exit 1; }
mkdir -p .cache

echo "===== $(date '+%Y-%m-%d %H:%M:%S') refresh start (node $(node -v 2>/dev/null)) ====="
npm run refresh
status=$?
echo "===== $(date '+%Y-%m-%d %H:%M:%S') refresh end (exit $status) ====="

# Publish the refreshed data so the deployed (Vercel) site updates. We commit
# ONLY prisma/dev.db via a pathspec so any unrelated work-in-progress in the
# working tree is left untouched. Pushing the new commit triggers a Vercel
# redeploy with the fresh dataset. This replaces the (paid) GitHub Action.
if [ "$status" -eq 0 ]; then
  git -C "$PROJECT_DIR" add prisma/dev.db
  if git -C "$PROJECT_DIR" diff --cached --quiet -- prisma/dev.db; then
    echo "[publish] no data changes to commit"
  else
    stamp=$(date -u '+%Y-%m-%dT%H:%MZ')
    git -C "$PROJECT_DIR" commit -m "chore(data): local refresh $stamp" -- prisma/dev.db
    if git -C "$PROJECT_DIR" push origin HEAD:main; then
      echo "[publish] pushed refreshed data ($stamp)"
    else
      echo "[publish] push failed — attempting rebase on origin/main"
      if git -C "$PROJECT_DIR" pull --rebase --autostash origin main \
        && git -C "$PROJECT_DIR" push origin HEAD:main; then
        echo "[publish] pushed after rebase ($stamp)"
      else
        echo "[publish] PUSH STILL FAILED — resolve manually (commit is local)"
      fi
    fi
  fi
else
  echo "[publish] skipped (refresh failed, exit $status)"
fi

exit $status
