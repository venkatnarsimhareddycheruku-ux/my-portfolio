#!/bin/bash
set -e

# Build the app
echo "Building app..."
bun run build

# Prepare .vercel/output for prebuilt deployment
echo "Preparing Vercel output..."
rm -rf .vercel/output
mkdir -p .vercel/output/static
mkdir -p .vercel/output/functions/__server.func

# Copy static assets
cp -r dist/client/* .vercel/output/static/

# Copy server function
cp -r dist/server/* .vercel/output/functions/__server.func/

# Create Vercel routing config
cat > .vercel/output/config.json << 'EOF'
{
  "version": 3,
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/__server"
    }
  ]
}
EOF

echo "Vercel output ready in .vercel/output/"
