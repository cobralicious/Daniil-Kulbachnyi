#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="$PROJECT_DIR/dist"

mkdir -p "$BUILD_DIR"
cp "$PROJECT_DIR/index.html" "$BUILD_DIR/index.html"
cp "$PROJECT_DIR/styles.css" "$BUILD_DIR/styles.css"
cp "$PROJECT_DIR/app.js" "$BUILD_DIR/app.js"
cp "$PROJECT_DIR/favicon.svg" "$BUILD_DIR/favicon.svg"

test -s "$BUILD_DIR/index.html"
test -s "$BUILD_DIR/styles.css"
test -s "$BUILD_DIR/app.js"
