# Build brief — Direct Hire, United Kingdom

Single long-form marketing page for CloudEmployee's UK permanent-recruitment
offer, built on the CE Design System. Covers what exists in the repository
today, how the page is assembled, and what must be resolved before launch.

- **Owner:** Marketing / Web
- **Locale:** en-GB
- **Status:** build complete, content and copy localisation pending

---

## 1. What is in the project

Two parallel implementations of the same page, both driven by the same tokens.

| Path | What it is |
| --- | --- |
| `Direct Hire - UK.html` | Static build. Opens directly in a browser, no toolchain. Visually verified. |
| `css/tokens.css` | CE Design System tokens — colour ramps, type scale, spacing, radii, elevation, motion. |
| `css/style.css` | Component and section styles for the static build. |
| `js/main.js` | GSAP + ScrollTrigger scroll animations, accordion, tabs, modal, scroll progress. |
| `web/` | Next.js (App Router) build of the same page: section components, a content module for list-shaped copy, GSAP as an npm dependency. Never installed or run — verify locally before shipping. |
| `serve.ps1` | Local static server for the plain HTML build. |

The Next.js app splits the page into `components/sections/` (one file per
section), shared pieces in `components/`, and `lib/content/uk.js` for every
list-shaped string (FAQ, funnel rows, features, pricing rows) — prose stays in
its section component. Adding a second locale is a content module plus a route.
`styles/tokens.css` and `styles/components.css` are copies of the root `css/`
files.

---

## 2. Page structure

Nine sections between a sticky navbar and the footer. Every primary CTA opens
the same "Start a search" modal.

| # | Section | Purpose | Notable UI |
| --- | --- | --- | --- |
| 1 | Hero | Positioning claim and primary CTA | Shortlist panel with two candidate cards, three trust checks |
| 2 | Problem | "AI ruined hiring" — why job posts fail | Animated job-post grid with floating profile cards |
| 3 | Explainer (`#how`) | 90-second CEO video | Video placeholder, to be filmed |
| 4 | Process (`#process`) | Three stages, then two stages in detail | Stage cards, live code panel, candidate report card with tabs and scores, funnel table |
| 5 | De-risk band | Four guarantees in one strip | Full-width band, animated on scroll |
| 6 | Differentiators | Four things a recruiter cannot do | Icon-tile feature cards |
| 7 | Pricing (`#pricing`) | Published fee, worked example | Pricing card plus rationale for the up-front payment |
| 8 | FAQ (`#faq`) | Ten questions founders and CTOs ask | Accordion, first item open by default; side card links to chatbot |
| 9 | Closing CTA | Restates the claim, two CTAs | Display heading, fine print |

**Modal:** work email, seniority select, role textarea, weekly-updates
checkbox. Currently front-end only — no submit handler.

---

## 3. Design system

All values come from `css/tokens.css`; nothing is hard-coded in the page.

- **Base:** navy ramp, `--navy-1000: #070D18` as page background.
- **Accent:** lime `#D4FF3C`, hover `#E1FF6B`, active `#C4F522`. Synced to the
  CE Design System on 18 Aug 2026.
- **Secondary accent:** teal, used for section eyebrows.
- **Type:** Inter for UI and headings, Source Serif 4 italic for emphasis
  inside headings. Loaded from the Google Fonts CDN.
- **Motion:** GSAP with ScrollTrigger. Scroll-progress bar, staggered reveals,
  grid and card entrances, typed code panel, animated progress bars.

---

## 4. Content and assets still required

1. **Explainer video** — Seb Hall, 90 seconds, same framing as the homepage
   explainer. Currently a labelled placeholder.
2. **Photography** — two hero candidate portraits, two code-panel portraits
   (CE engineer and candidate), one report-card portrait. All are
   `REAL PHOTO` placeholders today.
3. **Chatbot endpoint** — the FAQ side card's "Open chat" button currently
   opens the search modal.
4. **Form handling** — modal submit needs a destination (CRM or email).

---

## 5. Open items to resolve before launch

- **UK localisation is incomplete.** The candidate cards, pricing example and
  report card still carry US data: salaries in dollars (`$175,000`,
  `$160,000`, `$140,000` / `$35,000` fee, `$3,000` deposit) and US locations
  (Austin TX, Denver CO). These need GBP figures and UK cities.
- **Guarantee length is inconsistent.** The hero states a 3-month replacement
  guarantee; the de-risk band and closing fine print state 6 months. Pick one.
- **Dead footer link.** The footer links to `uk.html`, which is not in the
  project, and the copy reads as though pointing elsewhere from a US page.
  FAQ item 10 ("Do you do this in the UK?") likewise reads as US-page copy.
- **Next.js app is unverified.** It has never been installed or built. Run
  `npm install && npm run dev` in `web/` and diff against the static build
  before treating it as the source of truth.
- **Fonts load from CDN.** Swap for self-hosted or `next/font/local` if
  licensed files are supplied.

---

## 6. Suggested build order

1. Decide the canonical implementation: static build or Next.js. Do not
   maintain both.
2. Localise all content to GBP and UK locations; fix the guarantee wording.
3. Wire the modal to its destination and the chatbot to its own trigger.
4. Drop in the video and photography as they arrive.
5. Verify the Next.js build if it is the chosen path, then accessibility and
   responsive passes.
