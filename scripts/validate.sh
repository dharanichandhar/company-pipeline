#!/usr/bin/env bash
set -e

echo "🔍 Validating project environment..."

# Ensure required directories exist
for dir in ".github" "pi-package" "scripts"; do
  if [ ! -d "$dir" ]; then
    echo "❌ Missing directory: $dir"
    exit 1
  fi
done

echo "✅ Directory structure looks good."

# Check Node.js version
REQUIRED_VERSION=20
NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt "$REQUIRED_VERSION" ]; then
  echo "❌ Node.js version must be >= $REQUIRED_VERSION"
  exit 1
fi

echo "✅ Validation successful. Environment is ready."