#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

cmd="${1:-}"
msg="${2:-}"

case "$cmd" in
  pull)
    git fetch origin
    git pull --ff-only origin main
    git status -sb
    git log -1 --oneline
    ;;
  push)
    if [[ -z "$msg" ]]; then
      echo "Uso: ./sync.sh push \"messaggio commit\""
      exit 1
    fi
    git add -A
    if git diff --cached --quiet; then
      echo "Niente da committare."
      git status -sb
      exit 0
    fi
    git commit -m "$msg"
    git push origin main
    git status -sb
    git log -1 --oneline
    ;;
  status)
    git fetch origin
    git status -sb
    git log -1 --oneline
    ;;
  *)
    echo "Uso:"
    echo "  ./sync.sh pull"
    echo "  ./sync.sh push \"messaggio\""
    echo "  ./sync.sh status"
    exit 1
    ;;
esac
