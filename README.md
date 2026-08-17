# CE Direct Hire — United Kingdom

Long-form marketing page for CloudEmployee's UK permanent-recruitment offer,
built on the CE Design System.

The repository holds two implementations of the same page:

- **`/` (root)** — a static HTML/CSS/JS build. No toolchain, no build step.
  This is what deploys by default.
- **`web/`** — a Next.js (App Router) port of the same page, with US and UK
  routes sharing components. Not yet installed or verified.

See `build-brief.md` for page structure, design tokens, outstanding content,
and open items before launch.

## Run locally

Any static server works. From the repository root:

```bash
npx serve .
# or
python -m http.server 8000
```

Windows PowerShell: `./serve.ps1`

Then open the printed address.

## Deploy

The root is a static site — no build command, no framework detection needed.

**Netlify** — connect the repository; `netlify.toml` sets the publish
directory to the root and requires no build.

**Vercel** — connect the repository; `vercel.json` marks it as a static
deployment. Set Framework Preset to "Other" if prompted.

**GitHub Pages** — Settings → Pages → Source: Deploy from a branch, branch
`main`, folder `/ (root)`.

**Any static host** — upload `index.html`, `css/` and `js/`. Nothing else is
required at runtime.

### Deploying the Next.js app instead

```bash
cd web
npm install
npm run dev     # http://localhost:3000
npm run build
```

On Vercel, set the project root directory to `web/`. Verify it against the
static build before switching over — it has never been run.

## Structure

```
index.html          the page
css/tokens.css      design system tokens (colour, type, spacing, motion)
css/style.css       component and section styles
js/main.js          GSAP scroll animations, accordion, tabs, modal
build-brief.md      build brief and open items
web/                Next.js port of the same page
```

## Runtime dependencies

Loaded from CDN, no install step:

- GSAP 3.12.5 + ScrollTrigger (jsDelivr)
- Inter and Source Serif 4 (Google Fonts)

Self-host both before launch if the site must work without third-party
requests.
