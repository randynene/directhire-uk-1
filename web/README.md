# CE Direct Hire — UK (Next.js)

Next.js (App Router) implementation of the UK direct-hire page. Built from the
static site at the repository root; the two render the same markup and share
the same CSS.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure

- `app/layout.jsx` — global CSS, wraps the tree in `ModalProvider`, mounts `<PageEffects />`.
- `app/page.jsx` — the page: NavBar, nine sections, Footer.
- `components/sections/` — one file per section, in page order.
- `components/` — shared pieces: buttons, icons, modal, accordion, report card.
- `lib/content/uk.js` — every list-shaped string (FAQ, funnel, features, pricing rows).
  Prose lives in its section component. Add `lib/content/us.js` and a second
  route to serve another locale from the same components.
- `styles/tokens.css` — CE Design System tokens, identical to the root `css/tokens.css`.
- `styles/components.css` — component styles, identical to the root `css/style.css`.
- `components/PageEffects.jsx` — the GSAP + ScrollTrigger suite, run once via
  `gsap.context()` with cleanup on unmount. GSAP is an npm dependency here, not a CDN script.

## Notes

- Client components are marked `'use client'`: the modal, accordion, report-card
  tabs, buttons that open the modal, and `PageEffects`. Everything else is a
  server component.
- Fonts load from the Google Fonts CDN via `styles/tokens.css`. Swap for
  `next/font` if licensed files are supplied.
- This has not been installed or built in the environment that generated it.
  Run it locally and compare against the root static build, which has been
  visually verified.
