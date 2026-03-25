# Vercel SPA Configuration Guide

## Overview

This project uses `vercel.json` to configure proper client-side routing for a React + React Router single-page application (SPA) deployed on Vercel. The configuration ensures that direct URL access to client-side routes works correctly instead of returning 404 errors.

## Configuration Breakdown

### Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "trailingSlash": false
}
```

- **buildCommand**: Runs the Vite build process that compiles React code into production assets
- **outputDirectory**: Specifies that the built files are in the `dist` folder
- **cleanUrls**: Removes `.html` extensions from URLs (e.g., `/about` instead of `/about.html`)
- **trailingSlash**: Removes trailing slashes from URLs (e.g., `/about` instead of `/about/`)

### Rewrites (Critical for SPA)

```json
"rewrites": [
  {
    "source": "/api/:path(.*)",
    "destination": "/api/:path*"
  },
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

**How it works:**

1. **API Route Handling**: `/api/:path(.*)` preserves any `/api/*` routes unchanged (for backend APIs)
2. **SPA Rewrite**: `/(.*)`→`/index.html` rewrites all other requests to `index.html`, allowing React Router to handle routing

**Why this matters:**
- When users directly navigate to `/blog` or `/about`, instead of getting a 404, they receive `index.html`
- React Router then takes over and renders the correct component based on the URL
- Static assets (JS, CSS, images) bypass this rewrite due to their file extensions

### Cache Headers

```json
"headers": [
  {
    "source": "/assets/:path(.*\\.(?:js|css|...))$",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=31536000, immutable"
      }
    ]
  },
  {
    "source": "/index.html",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=0, must-revalidate"
      }
    ]
  }
]
```

**Asset Caching** (Vite-generated files):
- `max-age=31536000` (1 year): Vite adds content hashes to filenames, ensuring unique names for new versions
- `immutable`: Tells browsers the file won't change

**index.html Caching**:
- `max-age=0, must-revalidate`: Forces browser to check for updates on every page reload
- Essential because `index.html` references the assets and must always reflect the latest

## Defined Routes

The application has the following client-side routes:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `HomeRoute` / `Index` | Main landing page or demo |
| `/blog` | `Blog` | Blog page |
| `/*` | `NotFound` | 404 page for undefined routes |

## How Client-Side Routing Works

1. **Initial Request**: User visits `https://example.com/blog`
2. **Vercel Rewrite**: Vercel sees this isn't a static asset and rewrites to `/index.html`
3. **HTML Return**: `index.html` with React + React Router bundle is served
4. **React Router**: Client-side React Router reads the URL (`/blog`) and renders the `<Blog />` component
5. **Navigation**: Internal links use React Router's `<Link>` component for instant navigation without page reloads

## Testing the Configuration

### 1. Local Testing (Before Deployment)

Test that the build works correctly:
```bash
npm run build
npm run preview
```

Then test these URLs locally:
- `http://localhost:4173/` - Home page
- `http://localhost:4173/blog` - Blog page
- `http://localhost:4173/nonexistent` - Should show 404 page

### 2. Post-Deployment Verification

After deploying to Vercel, verify:

#### Direct URL Access
```bash
# Test using curl or browser
curl https://your-app.vercel.app/blog -I
# Should return 200 OK, not 404

curl https://your-app.vercel.app/
# Should return 200 OK

curl https://your-app.vercel.app/nonexistent
# Should return 200 OK (because it serves index.html)
```

#### Browser Navigation Tests

1. **Test Direct Navigation**
   - Open `https://your-app.vercel.app/blog` directly in browser
   - Verify blog page loads correctly
   - Verify browser shows 200 status in network tab

2. **Test Internal Navigation**
   - From home page, click navigation link to blog
   - Verify page changes without full reload
   - Verify URL updates to `/blog`

3. **Test Back/Forward Buttons**
   - Navigate between pages using internal links
   - Use browser back/forward buttons
   - Verify correct page loads and URL updates

4. **Test Direct Refresh**
   - Go to any route (e.g., `/blog`)
   - Press F5 to refresh
   - Verify the same page loads (not 404)

5. **Test Invalid Routes**
   - Navigate to `https://your-app.vercel.app/invalid-route`
   - Verify NotFound page displays correctly

#### Network Tab Verification

1. Open DevTools → Network tab
2. Reload page on `/blog`
3. Verify:
   - `/blog` request returns 200 with HTML
   - Requests to `/assets/*` files return 200 with correct cache headers
   - No 404 errors appear

### 3. Vercel Dashboard Checks

1. Go to Vercel Dashboard → Settings → Build & Development Settings
2. Verify:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: React (auto-detected)

3. Check Vercel Logs:
   - Deployment tab should show successful build
   - No errors related to routes or redirects

## Troubleshooting

### Issue: Getting 404 on `/blog` after deployment

**Solution**: Ensure the rewrite rules in `vercel.json` are correct and the file is at the root of the repository.

```bash
# Verify the file exists
ls -la vercel.json
```

### Issue: Assets (CSS, JS) not loading

**Possible Cause**: Build output directory is incorrect.

**Solution**: Verify `outputDirectory` in `vercel.json` matches your build output.

```bash
# Check what Vite outputs
npm run build
ls -la dist/
```

### Issue: Internal links work but direct navigation fails

**Possible Cause**: Rewrites not being applied.

**Solution**: 
1. Check Vercel deployment logs
2. Verify `vercel.json` syntax is valid (use JSON validator)
3. Redeploy after fixing

### Issue: Pages load but styles/scripts not working

**Possible Cause**: Base path configuration issue.

**Solution**: If deploying to a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/my-subdirectory/', // Add if needed
  // ... rest of config
});
```

## API Routes (Future Use)

If you add backend API routes in `/api`, they will be automatically handled by the first rewrite rule and won't be affected by the SPA rewrite:

```
/api/users → /api/users (preserved)
/api/posts/123 → /api/posts/123 (preserved)
/about → /index.html (SPA rewrite)
```

## Environment Variables

The configuration sets `NODE_ENV=production` automatically on Vercel. No additional configuration needed unless you have custom environment needs.

## References

- [Vercel Documentation - rewrites](https://vercel.com/docs/edge-network/rewrites-and-redirects#rewrites)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
