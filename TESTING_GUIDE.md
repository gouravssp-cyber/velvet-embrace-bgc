# Vercel SPA Routing - Testing Guide

This guide provides detailed instructions for testing the Vercel deployment configuration to ensure client-side routing works correctly.

## Pre-Deployment Local Testing

### Step 1: Build and Preview Locally

```bash
# Build the project
npm run build

# Start the preview server
npm run preview
```

The preview server will start at `http://localhost:4173/` (or similar).

### Step 2: Test Direct URL Access (Local)

Open a new terminal and test these URLs using curl:

```bash
# Test home page
curl -i http://localhost:4173/

# Test blog page
curl -i http://localhost:4173/blog

# Test invalid route (should return 200 with index.html content)
curl -i http://localhost:4173/nonexistent-page

# Check response headers and cache settings
curl -i http://localhost:4173/assets/index-*.js
```

**Expected Results:**
- `/` returns 200 OK
- `/blog` returns 200 OK with HTML content
- `/nonexistent-page` returns 200 OK (served as index.html)
- Static assets have long cache headers

### Step 3: Browser Testing (Local)

1. **Open browser to http://localhost:4173/**
2. **Test direct navigation:**
   - Type `http://localhost:4173/blog` in address bar
   - Press Enter
   - Verify blog page loads correctly
   - Check DevTools → Network tab for status code (should be 200)

3. **Test internal links:**
   - Click navigation links if available
   - Verify URL updates
   - Verify no full page reload occurs

4. **Test refresh on sub-routes:**
   - Navigate to `/blog`
   - Press F5 (refresh)
   - Verify page still shows blog content (not 404)

5. **Test back/forward buttons:**
   - Click internal navigation links
   - Use browser back button
   - Use browser forward button
   - Verify correct page loads each time

---

## Post-Deployment Production Testing

After deploying to Vercel, test these scenarios. Replace `https://your-app.vercel.app` with your actual domain.

### HTTP Status Code Verification

```bash
#!/bin/bash
# Test HTTP status codes for all routes

APP_URL="https://your-app.vercel.app"

echo "Testing HTTP Status Codes..."
echo "=============================="

# Test home page
echo -n "GET / → "
curl -s -o /dev/null -w "%{http_code}\n" "$APP_URL/"

# Test blog page
echo -n "GET /blog → "
curl -s -o /dev/null -w "%{http_code}\n" "$APP_URL/blog"

# Test invalid route
echo -n "GET /nonexistent → "
curl -s -o /dev/null -w "%{http_code}\n" "$APP_URL/nonexistent"

# Test nested route
echo -n "GET /some/deep/route → "
curl -s -o /dev/null -w "%{http_code}\n" "$APP_URL/some/deep/route"

# Test with query params
echo -n "GET /blog?page=1 → "
curl -s -o /dev/null -w "%{http_code}\n" "$APP_URL/blog?page=1"

# Test with hash
echo -n "GET /blog#section → "
curl -s -o /dev/null -w "%{http_code}\n" "$APP_URL/blog#section"
```

**All routes should return 200 OK**

### Content Type Verification

```bash
#!/bin/bash
# Verify correct content types

APP_URL="https://your-app.vercel.app"

echo "Testing Content Types..."
echo "========================="

# HTML pages should return text/html
echo "Content-Type for / page:"
curl -s -I "$APP_URL/" | grep Content-Type

echo ""
echo "Content-Type for /blog page:"
curl -s -I "$APP_URL/blog" | grep Content-Type

echo ""
echo "Content-Type for static JS:"
curl -s -I "$APP_URL/assets/index-*.js" | grep Content-Type

echo ""
echo "Content-Type for static CSS:"
curl -s -I "$APP_URL/assets/index-*.css" | grep Content-Type
```

**Expected Results:**
- HTML pages: `Content-Type: text/html; charset=utf-8`
- JS files: `Content-Type: application/javascript`
- CSS files: `Content-Type: text/css`

### Cache Headers Verification

```bash
#!/bin/bash
# Verify cache headers are correctly set

APP_URL="https://your-app.vercel.app"

echo "Cache Headers Analysis"
echo "========================"

echo -e "\n1. HTML Page (should be NO-CACHE):"
curl -s -I "$APP_URL/" | grep -i "cache-control\|expires"

echo -e "\n2. Static Assets (should be LONG-TERM):"
# List a few asset files
curl -s "$APP_URL/" | grep -o 'href="[^"]*\.\(css\|js\)"' | head -1 | xargs -I {} bash -c "
  asset=\$(echo {} | sed 's/href=\"//;s/\"//g')
  echo \"Asset: \$asset\"
  curl -s -I \"$APP_URL/\$asset\" | grep -i 'cache-control\|expires'
"

echo -e "\n3. index.html (should be NO-CACHE):"
curl -s -I "$APP_URL/index.html" | grep -i "cache-control"

echo -e "\n4. 404/nonexistent (should be NO-CACHE):"
curl -s -I "$APP_URL/nonexistent" | grep -i "cache-control"
```

**Expected Results:**
- HTML pages: `max-age=0, must-revalidate`
- Static assets: `max-age=31536000, immutable` (1 year)

### HTML Content Verification

```bash
#!/bin/bash
# Verify HTML content is served correctly for all routes

APP_URL="https://your-app.vercel.app"

echo "HTML Content Verification"
echo "=========================="

for route in "/" "/blog" "/nonexistent"; do
  echo -e "\n--- Route: $route ---"
  curl -s "$APP_URL$route" | head -20
  echo "..."
done
```

**Expected Results:**
- All routes should return valid HTML
- HTML should contain the React root element and script tags
- Should NOT return 404 error pages

### Response Size Comparison

```bash
#!/bin/bash
# Compare response sizes to ensure caching is working

APP_URL="https://your-app.vercel.app"

echo "Response Size Comparison"
echo "========================"

echo "Size of / page:"
curl -s "$APP_URL/" | wc -c

echo "Size of /blog page:"
curl -s "$APP_URL/blog" | wc -c

echo "Size of /nonexistent (fallback):"
curl -s "$APP_URL/nonexistent" | wc -c

# These should be roughly similar since they all serve index.html
```

---

## Browser DevTools Testing

### Network Tab Analysis

1. **Open DevTools** (F12)
2. **Switch to Network tab**
3. **Reload page** (Ctrl+Shift+R for hard refresh)
4. **Verify the following:**

| Request | Status | Type | Size | Time | Cache |
|---------|--------|------|------|------|-------|
| /blog | 200 | document | ~5KB | <100ms | no-cache |
| assets/index-xxx.js | 200 | script | ~200KB | <100ms | cache |
| assets/index-xxx.css | 200 | stylesheet | ~50KB | <100ms | cache |

### Application Tab Verification

1. **Open DevTools**
2. **Go to Application/Storage tab**
3. **Check Cache Storage** (if using service workers)
4. **Verify localStorage** for any SPA state

### Console Tab Check

1. **Open DevTools Console**
2. **Verify no errors appear**
3. **Test React Router programmatically:**

```javascript
// In DevTools console, test React Router state
window.location.pathname  // Should show current route
```

---

## Automated Testing Script

```bash
#!/bin/bash
# Comprehensive POST-DEPLOYMENT test script

APP_URL="${1:-https://your-app.vercel.app}"
PASS=0
FAIL=0

test_route() {
  local route=$1
  local expected_status=$2
  local description=$3
  
  status=$(curl -s -o /dev/null -w "%{http_code}" "$APP_URL$route")
  
  if [ "$status" == "$expected_status" ]; then
    echo "[✓] $description: $status"
    ((PASS++))
  else
    echo "[✗] $description: $status (expected $expected_status)"
    ((FAIL++))
  fi
}

echo "========================================="
echo "Vercel SPA Deployment Test Report"
echo "========================================="
echo "Testing: $APP_URL"
echo ""

# Test all routes
test_route "/" 200 "Home page"
test_route "/blog" 200 "Blog page"
test_route "/nonexistent" 200 "Invalid route (fallback)"
test_route "/some/deep/nested/route" 200 "Deep nested route"
test_route "/blog?page=1" 200 "Route with query params"

echo ""
echo "========================================="
echo "Results: $PASS passed, $FAIL failed"
echo "========================================="

if [ $FAIL -eq 0 ]; then
  echo "✓ All tests passed! SPA routing is working."
  exit 0
else
  echo "✗ Some tests failed. Check configuration."
  exit 1
fi
```

**Usage:**
```bash
bash test-deployment.sh https://your-app.vercel.app
```

---

## Manual Browser Testing Checklist

Use this checklist after deployment:

- [ ] Home page loads at `/`
- [ ] Direct navigation to `/blog` works without 404
- [ ] Direct navigation to invalid route shows 404 page (not server 404)
- [ ] Refresh on `/blog` shows correct page (not 404)
- [ ] Browser back button works correctly
- [ ] Browser forward button works correctly
- [ ] Internal navigation links work without page reload
- [ ] URL updates when navigating internally
- [ ] Static assets load correctly (CSS, JS)
- [ ] No console errors appear
- [ ] DevTools Network tab shows 200 for all routes
- [ ] Asset requests show proper cache headers
- [ ] Page loads performance is adequate

---

## Testing with Different Environments

### Test with different query parameters
```bash
curl -i https://your-app.vercel.app/blog?id=123&sort=latest
```

### Test with URL fragments
```bash
curl -i https://your-app.vercel.app/blog#comments
```

### Test with trailing slashes (should be normalized)
```bash
# With trailingSlash: false in vercel.json, these should redirect or normalize
curl -i https://your-app.vercel.app/blog/
```

---

## Rollback if Issues Found

If testing reveals issues:

1. **Check Vercel Logs:**
   - Go to Vercel Dashboard
   - Select your project
   - Check "Deployments" tab
   - View build/deployment logs

2. **Verify vercel.json:**
   ```bash
   cat vercel.json
   ```

3. **Revert if needed:**
   ```bash
   git revert HEAD
   git push
   ```

4. **Redeploy after fixing:**
   ```bash
   git push
   ```

---

## Common Issues and Solutions

### Issue: Routes return 404 in production

**Check:**
1. `vercel.json` is at project root
2. Rewrites section exists
3. No typos in paths

### Issue: Static assets not loading

**Check:**
1. Build succeeded (check Vercel logs)
2. `dist/` folder was created
3. `outputDirectory` matches

### Issue: Page doesn't update on refresh

**Check:**
1. Browser cache (hard refresh with Ctrl+Shift+R)
2. Cache headers are correct
3. Not a React state issue (clear localStorage)

---

## More Information

- [Vercel Documentation - Rewrites](https://vercel.com/docs/edge-network/rewrites-and-redirects#rewrites)
- [React Router Docs](https://reactrouter.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#building-the-app)
