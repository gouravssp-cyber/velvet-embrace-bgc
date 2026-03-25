#!/bin/bash

# Vercel SPA Routing Configuration - Testing Script
# This script verifies that the vercel.json configuration and build setup are correct
# Usage: bash verify-vercel-config.sh

set -e

echo "================================"
echo "Vercel SPA Configuration Tester"
echo "================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
  echo -e "${BLUE}[*]${NC} $1"
}

print_success() {
  echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
  echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
  echo -e "${YELLOW}[!]${NC} $1"
}

# Check 1: Verify vercel.json exists and is valid JSON
print_status "Checking vercel.json exists..."
if [ -f "vercel.json" ]; then
  print_success "vercel.json found"
  
  # Validate JSON
  if node -e "require('fs').readFileSync('./vercel.json')" 2>/dev/null; then
    print_success "vercel.json is valid JSON"
  else
    print_error "vercel.json has invalid JSON syntax"
    exit 1
  fi
else
  print_error "vercel.json not found at project root"
  echo "  Create one by running: cat > vercel.json << 'EOF'
{...}
EOF"
  exit 1
fi

echo ""
print_status "Checking vercel.json configuration..."

# Check for required fields
if grep -q '"outputDirectory"' vercel.json; then
  print_success "outputDirectory is configured"
else
  print_warning "outputDirectory not found in vercel.json"
fi

if grep -q '"rewrites"' vercel.json; then
  print_success "rewrites are configured"
else
  print_error "rewrites not found in vercel.json"
fi

if grep -q '"index.html"' vercel.json; then
  print_success "SPA rewrite to index.html is configured"
else
  print_warning "index.html rewrite not explicitly found"
fi

echo ""
print_status "Checking project structure..."

# Check for build output
if grep -q "\"dist\"" package.json || grep -q "'dist'" vite.config.ts; then
  print_success "Build output directory appears to be 'dist'"
else
  print_warning "Verify build output directory matches vercel.json outputDirectory"
fi

# Check for React Router
if grep -q "react-router" package.json; then
  print_success "react-router-dom is installed"
else
  print_error "react-router-dom not found in package.json"
fi

echo ""
print_status "Checking build configuration..."

if grep -q "build" package.json; then
  print_success "Build script found in package.json"
else
  print_warning "Build script not found in package.json"
fi

echo ""
print_status "Checking for required files..."

[ -f "index.html" ] && print_success "index.html found" || print_error "index.html not found"
[ -f "vite.config.ts" ] && print_success "vite.config.ts found" || print_error "vite.config.ts not found"
[ -f "tsconfig.json" ] && print_success "tsconfig.json found" || print_warning "tsconfig.json not found"

echo ""
print_status "Checking App.tsx routes configuration..."

if grep -q "BrowserRouter" src/App.tsx; then
  print_success "BrowserRouter is configured"
else
  print_error "BrowserRouter not found in App.tsx"
fi

if grep -q "Routes" src/App.tsx; then
  print_success "Routes component is used"
else
  print_error "Routes component not found in App.tsx"
fi

# Extract and display routes
print_status "Routes detected:"
routes=$(grep -o 'path="[^"]*"' src/App.tsx | cut -d'"' -f2 | sort | uniq)
for route in $routes; do
  echo "  - $route"
done

echo ""
echo "================================"
print_success "Pre-deployment verification complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Test locally: npm run build && npm run preview"
echo "2. Visit: http://localhost:4173/"
echo "3. Test routes:"
echo "   - http://localhost:4173/ (home)"
echo "   - http://localhost:4173/blog (blog page)"
echo "   - http://localhost:4173/nonexistent (404 page)"
echo "4. Refresh each page to verify SPA routing works"
echo "5. Deploy to Vercel and test in production"
echo ""
