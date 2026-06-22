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
exit $status
