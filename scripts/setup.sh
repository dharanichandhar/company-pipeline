#!/usr/bin/env bash
set -e

echo "🚀 Setting up project environment..."

# Install npm dependencies if package.json exists
if [ -f "./pi-package/package.json" ]; then
  cd pi-package
  echo "Installing dependencies..."
  npm install --silent
  cd - > /dev/null
fi

echo "✅ Setup complete."