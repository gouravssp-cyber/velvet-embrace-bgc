# Vercel Deployment Checklist

Complete this checklist before and after deploying to Vercel.

## Pre-Deployment Setup

### Repository Configuration
- [ ] `vercel.json` exists at project root
- [ ] `vercel.json` contains valid JSON (no syntax errors)
- [ ] `outputDirectory` is set to `"dist"`
- [ ] `buildCommand` matches your build script: `npm run build`
- [ ] `.vercelignore` file exists to optimize deployment

### Project Structure
- [ ] `package.json` has correct build script
- [ ] `vite.config.ts` is properly configured
- [ ] `src/App.tsx` uses BrowserRouter from React Router
- [ ] All routes are defined in `src/App.tsx`
- [ ] `index.html` exists at project root

### React Router Setup
- [ ] `react-router-dom` is installed in `package.json`
- [ ] `BrowserRouter` wraps the app
- [ ] All routes use `<Route>` components
- [ ] Routes are defined for: `/`, `/blog`, and catch-all (`*`)

### Local Testing
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` starts successfully
- [ ] `/` route loads correctly at http://localhost:4173/
- [ ] `/blog` route loads correctly at http://localhost:4173/blog
- [ ] `/nonexistent` route shows 404 page (not server error)
- [ ] Refresh on `/blog` works (doesn't show 404)
- [ ] Internal navigation links work without page reload
- [ ] Static assets (CSS, JS) load correctly

### Git Preparation
- [ ] All changes committed: `git add .` and `git commit -m "Add Vercel SPA configuration"`
- [ ] No uncommitted changes: `git status`
- [ ] Origin remote is set: `git remote -v`

## Deployment to Vercel

### Connect to Vercel
- [ ] Vercel account created
- [ ] GitHub repository connected to Vercel
- [ ] Project imported into Vercel dashboard

### Vercel Project Settings
- [ ] Framework: React (auto-detected)
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: (auto-detected)
- [ ] Environment Variables: Set any required vars

### Deploy
- [ ] Push to GitHub (if using Git integration): `git push origin main`
- [ ] OR deploy from Vercel UI
- [ ] Monitor deployment progress in Vercel dashboard
- [ ] Deployment completes without errors

## Post-Deployment Verification

### Check Deployment Status
- [ ] Vercel shows "Ready" status
- [ ] Deployment URL is accessible
- [ ] View deployment logs for any warnings

### Route Testing (Production)
- [ ] `/` loads correctly
- [ ] `/blog` loads correctly (no 404)
- [ ] `/nonexistent` shows 404 page (not server 404)
- [ ] Direct URL in address bar works for all routes
- [ ] Refresh on any route works correctly
- [ ] Browser back/forward buttons work

### HTTP Status Codes
- [ ] `https://your-app.vercel.app/` returns 200
- [ ] `https://your-app.vercel.app/blog` returns 200
- [ ] `https://your-app.vercel.app/nonexistent` returns 200 (serves index.html)
- [ ] Test with curl: `curl -i https://your-app.vercel.app/blog`

### Content Verification
- [ ] HTML pages return correct content type: `text/html`
- [ ] Static assets return correct content types
- [ ] DevTools Network tab shows all requests as 200
- [ ] No 404 errors appear in Network tab
- [ ] No errors appear in DevTools Console

### Performance Check
- [ ] Page load time is acceptable
- [ ] Assets are cached properly (check headers)
- [ ] JavaScript is minified
- [ ] CSS is minified

### Browser Compatibility
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test on mobile devices

## Documentation & Sharing

- [ ] Share Vercel deployment URL with team
- [ ] Document deployment URL in README.md
- [ ] Share `VERCEL_DEPLOYMENT_GUIDE.md` with team
- [ ] Share `TESTING_GUIDE.md` with team
- [ ] Update team wiki with deployment instructions

## Ongoing Maintenance

### Regular Checks
- [ ] Monitor deployment logs for errors
- [ ] Check Vercel analytics/metrics
- [ ] Monitor performance metrics
- [ ] Review error logs

### When Making Changes
- [ ] Test locally before pushing
- [ ] Verify build succeeds in Vercel
- [ ] Test all routes in deployed version
- [ ] Monitor for any new issues

## Troubleshooting Reference

If you encounter issues:

1. **404 errors on client-side routes:**
   - Check `vercel.json` is at project root
   - Verify rewrites section exists
   - Check build logs for errors

2. **Static assets not loading:**
   - Verify `outputDirectory` in `vercel.json` is correct
   - Check build succeeded
   - Verify asset paths in HTML

3. **Styles/scripts not working:**
   - Check browser DevTools Network tab
   - Verify asset status codes (should be 200)
   - Check asset response headers

4. **Need to rollback:**
   - Go to Vercel Deployments
   - Select previous deployment
   - Click "Promote to Production"

## Quick Commands

```bash
# Local development
npm run dev

# Local build test
npm run build && npm run preview

# Test specific routes locally
curl -i http://localhost:4173/blog

# Test production routes
curl -i https://your-app.vercel.app/blog

# Check deployment logs
vercel logs

# Redeploy manually
vercel --prod

# View vercel.json configuration
cat vercel.json | jq .
```

## Contact & Resources

- Vercel Support: https://vercel.com/support
- React Router Docs: https://reactrouter.com/
- Vite Docs: https://vitejs.dev/
- Configuration Guide: See `VERCEL_DEPLOYMENT_GUIDE.md`
- Testing Guide: See `TESTING_GUIDE.md`

---

**Date Created:** $(date)
**Last Updated:** $(date)
**Status:** ✓ Ready for Deployment
