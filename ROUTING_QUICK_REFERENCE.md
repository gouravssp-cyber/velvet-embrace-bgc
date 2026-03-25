# React Router - Quick Reference Guide

Quick guide for adding and managing routes in this React Router application.

## Current Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `HomeRoute` / `Index` | Landing page / Demo |
| `/blog` | `Blog` | Blog listing page |
| `*` | `NotFound` | Catch-all for undefined routes |

---

## Adding a New Route

### Step 1: Create the Component

Create a new component in `src/pages/` or `src/components/`:

```typescript
// src/pages/About.tsx
import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>About page content...</p>
    </div>
  );
}
```

### Step 2: Add Route to App.tsx

Edit `src/App.tsx` and add the route:

```typescript
import About from './pages/About';

// ... in the Routes component:
<Routes>
  <Route path="/" element={<HomeRoute />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/about" element={<About />} />  {/* NEW ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

**Important:** Always keep the catch-all `<Route path="*" element={<NotFound />} />` **LAST**.

### Step 3: Update Navigation

Add link in `src/components/Navbar.tsx` or navigation component:

```typescript
import { Link } from 'react-router-dom';

// In the navbar:
<Link to="/about">About</Link>
```

### Step 4: Test Locally

```bash
# Build and test
npm run build
npm run preview

# Test in browser:
# - http://localhost:4173/
# - http://localhost:4173/about
# - Refresh page to verify SPA routing works
```

### Step 5: Deploy

```bash
git add src/
git commit -m "Add About page route"
git push origin main
```

Vercel will automatically rebuild and deploy. No changes needed to `vercel.json`.

---

## Navigation Patterns

### Internal Navigation (Links)

```typescript
import { Link } from 'react-router-dom';

// Use Link for internal navigation (no page reload)
export function MyComponent() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
```

### Programmatic Navigation

```typescript
import { useNavigate } from 'react-router-dom';

export function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/blog');
  };
  
  return <button onClick={handleClick}>Go to Blog</button>;
}
```

### Named Routes (Optional Pattern)

For better maintainability, define routes in a separate file:

```typescript
// src/routes/index.ts
export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ABOUT: '/about',
} as const;

// Usage:
import { ROUTES } from '@/routes';

<Link to={ROUTES.BLOG}>Blog</Link>
```

---

## Nested Routes

For complex layouts, you can nest routes:

```typescript
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:id" element={<BlogPost />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

Then in `Layout.tsx`:

```typescript
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* Child routes render here */}
      </main>
      <Footer />
    </div>
  );
}
```

---

## Route Parameters

### Dynamic Segments

```typescript
<Route path="/blog/:id" element={<BlogPost />} />

// In BlogPost component:
import { useParams } from 'react-router-dom';

export function BlogPost() {
  const { id } = useParams();
  return <div>Post {id}</div>;
}
```

### Query Parameters

```typescript
import { useSearchParams } from 'react-router-dom';

export function BlogList() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  
  return <div>Page: {page}</div>;
}
```

### Setting Query Params with Link

```typescript
<Link to="/blog?page=2&sort=latest">Blog (Page 2)</Link>

// Programmatically:
navigate(`/blog?page=${newPage}&sort=${sortBy}`);
```

---

## Protecting Routes (Optional)

If you need authentication-protected routes:

```typescript
// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ isAuthenticated, element }) {
  return isAuthenticated ? element : <Navigate to="/" />;
}

// Usage:
import { useAuth } from '@/hooks/useAuth';

const { isAuthenticated } = useAuth();

<Routes>
  <Route path="/" element={<Home />} />
  <Route 
    path="/dashboard" 
    element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />} 
  />
</Routes>
```

---

## Testing Routes

### Unit Tests

```typescript
// src/components/__tests__/NavLink.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from '@/components/NavLink';

test('renders nav link', () => {
  render(
    <BrowserRouter>
      <NavLink to="/blog">Blog</NavLink>
    </BrowserRouter>
  );
  
  const link = screen.getByText('Blog');
  expect(link).toHaveAttribute('href', '/blog');
});
```

### E2E Testing (Recommended)

```bash
# Install Playwright (optional)
npm install --save-dev @playwright/test

# Create tests/e2e/navigation.spec.ts
```

---

## Common Issues

### Issue: Page refreshes instead of navigating

**Solution:** Use `<Link>` from React Router, not `<a>`:

```typescript
// ❌ WRONG (causes full page refresh)
<a href="/blog">Blog</a>

// ✓ CORRECT (SPA navigation, no refresh)
<Link to="/blog">Blog</Link>
```

### Issue: URL updates but component doesn't render

**Solution:** Verify the route path matches exactly:

```typescript
// ❌ WRONG
<Route path="/blog/" element={...} />  // Note the trailing slash

// ✓ CORRECT (with cleanUrls: true in vercel.json)
<Route path="/blog" element={...} />
```

### Issue: Parameters not updating component

**Solution:** Use `useParams()` and ensure dependency:

```typescript
// ✓ CORRECT
const { id } = useParams();

useEffect(() => {
  // This runs when id changes
  fetchPost(id);
}, [id]);
```

---

## Performance Tips

### Code Splitting

```typescript
import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('./pages/Blog'));

<Suspense fallback={<Loading />}>
  <Blog />
</Suspense>
```

### Preloading Routes

```typescript
import { prefetchRoute } from 'react-router-dom';

// In a component or button:
onMouseEnter={() => prefetchRoute('/blog')}
```

---

## Resources

- [React Router Complete Docs](https://reactrouter.com/docs/start/overview)
- [React Router Tutorial](https://reactrouter.com/docs/start/tutorial)
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md)
- [Testing Guide](./TESTING_GUIDE.md)

---

## Summary: Do's and Don'ts

| Do ✓ | Don't ✗ |
|-----|--------|
| Use `<Link>` for internal navigation | Use `<a>` for internal links |
| Store routes in constants | Hardcode route strings everywhere |
| Keep catch-all route last | Put catch-all route first |
| Use `useParams()` for dynamic segments | Manually parse URLs |
| Test routes locally before deploying | Deploy untested route changes |
| Keep components in `src/pages/` | Put all components in root `src/` |
| Use meaningful path names | Use cryptic abbreviated paths |
| Document new routes | Leave new routes undocumented |

---

**Last Updated:** 2024
**Maintainer:** Development Team
