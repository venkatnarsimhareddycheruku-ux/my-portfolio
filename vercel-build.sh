#!/bin/bash
set -e

echo "Building app..."
bun run build

echo "Preparing .vercel/output..."
rm -rf .vercel/output
mkdir -p .vercel/output/static
mkdir -p .vercel/output/functions/__server.func

# Static assets
cp -r dist/client/. .vercel/output/static/

# Server function bundle
cp -r dist/server/. .vercel/output/functions/__server.func/

# Vercel function config (required, otherwise Vercel returns 404)
cat > .vercel/output/functions/__server.func/.vc-config.json << 'EOF'
{
  "runtime": "nodejs22.x",
  "handler": "index.mjs",
  "launcherType": "Nodejs",
  "shouldAddHelpers": false,
  "supportsResponseStreaming": true
}
EOF

# Top-level routing config
cp dist/config.json .vercel/output/config.json

echo "Vercel output ready in .vercel/output/"
