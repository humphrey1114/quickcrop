# TapCrop — Project Guidelines

## Tech Stack
- Frontend: React + Vite, JavaScript (ES modules), CSS
- Backend: Node.js + SQLite
- Deployment: Vercel with custom domain (tapcrop.com)
- Bilingual: English + Chinese (zh)

## API & External Services
- Before implementing any AI image generation/processing feature, verify the specific model supports the required capability (e.g., image output, not just text). Check API docs first.
- When hitting API errors (400, 402, 403), diagnose the root cause (auth, balance, capability) before attempting workarounds like timeout/compression fixes.

## UI Development Rules
- Use real icons/SVGs, never AI-generated or placeholder-looking icons. The user has repeatedly flagged 'AI-style' icons as unacceptable.
- Always fill the full viewport - no empty grid spaces or partial layouts.
- Keep user-facing text simple and non-technical. Write for regular consumers, not developers.
- When adding navigation, use separate pages/routes, not modals, unless explicitly requested.

## JavaScript/CSS Projects
- This is primarily a JavaScript + CSS codebase. Use ES module syntax consistently.
- When implementing batch/export features, always test with multiple items - verify ALL items are processed, not just the first one.
- Always test download functionality end-to-end before marking a task complete.
