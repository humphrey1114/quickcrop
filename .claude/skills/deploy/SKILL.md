# Deploy Skill

Standardized Vercel deployment workflow for TapCrop.

## Pre-deploy Checklist

Run these checks before deploying:

1. **Build test**: Run `npm run build` and confirm it succeeds with no errors
2. **Sitemap check**: Verify `public/sitemap.xml` has today's date (auto-generated during build)
3. **OG image check**: Verify `public/og-image.png` exists (auto-generated during build)
4. **Route check**: Confirm all routes in `scripts/prerender.mjs` match routes in `src/main.jsx`
5. **SEO spot-check**: Open the built `dist/index.html` and confirm:
   - `<title>` tag is present
   - `<meta name="description">` is present
   - `<link rel="canonical">` is present
   - Schema.org JSON-LD is present

## Deploy

```bash
# Production deploy
vercel --prod

# Preview deploy (for testing)
vercel
```

## Post-deploy

1. Visit https://www.tapcrop.com and confirm the site loads
2. Check https://www.tapcrop.com/sitemap.xml is accessible
3. Run `npm run indexnow` to notify search engines of updates
4. If significant changes: manually submit updated URLs in Google Search Console
