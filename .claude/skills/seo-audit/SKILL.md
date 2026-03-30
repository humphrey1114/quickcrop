# SEO Audit Skill

One-click audit of all pages for SEO completeness. Run this after making content or routing changes.

## Audit Steps

### 1. Meta Tags Check
For every route in `scripts/prerender.mjs`, verify the page component calls `useSEO()` with:
- `title` — unique, includes primary keyword, ends with `| TapCrop`
- `description` — unique, 120-160 chars, includes target keyword
- `path` — matches the route path exactly

### 2. Schema.org Check
Verify structured data for each page type:
- **Tool pages** (`ToolLandingPage`): Must have `SoftwareApplication` + `FAQPage` + `HowTo` schemas
- **Guide pages** (`GuidePage`): Must have `Article` schema with headline, author, dates
- **Home page**: Must have `WebApplication` schema in `index.html`
- **FAQ page**: Must have `FAQPage` schema

### 3. Sitemap Check
- Run `node scripts/generate-sitemap.mjs` to regenerate
- Verify every route in the router is in the sitemap
- Verify no orphan URLs in sitemap that don't exist as routes

### 4. Canonical & OG Check
- Every page must set a canonical URL via `useSEO`
- `og:image` must point to a PNG (not SVG) — currently `og-image.png`
- `og:title` and `og:description` must be set per page

### 5. Prerender Check
- Verify `scripts/prerender.mjs` ROUTES array matches all routes in `src/main.jsx`
- Run `npm run build` and check that `dist/` has an `index.html` for each route

### 6. robots.txt Check
- Verify `public/robots.txt` exists with `Sitemap:` directive

## Output Format
Present results as a table:

| Page | Title | Description | Schema | Canonical | OG | Status |
|------|-------|-------------|--------|-----------|-----|--------|
| /crop | ... | ... | SoftwareApp+FAQ+HowTo | ... | ... | PASS |

Flag any issues as **FAIL** with a specific fix recommendation.
