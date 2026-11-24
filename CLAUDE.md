@AGENTS.md

# CLAUDE.md — nickconnelly.com

Personal portfolio site for **Nicholas Connelly** ([nickconnelly.com](https://nickconnelly.com)). Static marketing/content site, not a web app with auth or a database.

## Quick reference

| Item | Value |
|------|--------|
| Version | See `package.json` |
| Node | `26.x` (see `.nvmrc` and `engines`) |
| Package manager | npm (`package-lock.json`) |
| Framework | Next.js 16 App Router |
| UI | React 19, Tailwind CSS v4, Inter via `next/font` |
| Deploy | Vercel (`vercel.json` → `framework: nextjs`) |

```bash
npm install
npm run dev      # http://localhost:3000 (scripts set NEXT_TELEMETRY_DISABLED=1: no Next.js telemetry)
npm run lint     # eslint src --max-warnings 0
npm run build    # production build
```

## Repository layout

```
src/
├── app/                    # App Router routes (one page.tsx per route)
│   ├── layout.tsx          # Root layout: NavBar, fonts, metadata
│   ├── globals.css         # Tailwind v4 @theme, utility classes
│   ├── page.tsx            # Home (RSC, hero + about + projects)
│   ├── contact/
│   ├── health/             # Body / mind / spirit (images + video in public/)
│   ├── resume/
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── NavBar.tsx          # Server: fixed top nav shell
│   ├── NavLinks.tsx        # Client: desktop links + mobile <details> menu
│   └── ProjectCard.tsx     # Shared project cards + projects array
└── lib/
    └── metadata.ts         # Per-page Open Graph / Twitter helper

public/                     # Static assets (images, videos/, favicon, manifest, resume PDF)
next.config.mjs             # trailingSlash: true, image optimization, security headers
```

## Routes (all static)

| Path | Purpose |
|------|---------|
| `/` | Home — hero image, about copy, project cards |
| `/resume` | Resume PDF open/download (embedded iframe only at `lg`+ with a mouse or trackpad, `lg:pointer-fine:`; phones and tablets get the buttons, since iPad Safari cannot scroll a PDF iframe) |
| `/contact` | Contact links |
| `/health` | Health — personal body / mind / spirit page (linked from the home page Health section) |

URLs use **trailing slashes** (`trailingSlash: true` in `next.config.mjs`).

## Architecture patterns

- **Server Components by default**; `'use client'` only for `NavLinks` (pathname, mobile menu). `NavBar` is a Server Component that renders it. The mobile menu is a `<details>` in the root layout, so it is never re-mounted: `NavLinks` closes it on a link tap, an outside tap, and Escape.
- **Global chrome**: `NavBar` only (footer removed).
- **Metadata**: `metadataBase` + shared OG image in layout; per-page metadata via `src/lib/metadata.ts`. The share image is `public/images/nick/og-image.jpg` (1200×630, rotation baked in), not the 4.2 MB hero original.
- **Images**: `next/image` with optimized delivery (AVIF/WebP); large originals in `public/`. Next 16 deprecates `priority`. Per Next's image docs, prefer `loading="eager"` (or `fetchPriority="high"`) for an above-the-fold LCP image (React then emits a preload link for it, as on /health); `preload` is for a hero that must start loading from `<head>` (used on `/`). Everything else keeps the default lazy loading. Give every image alt text that describes the picture.
- **Video**: encode H.264 with `-movflags +faststart` at about the displayed width (the /health clip is 480 px, ~1.2 MB), no audio track unless needed, with `poster`, `preload="none"`, `controls`, `playsInline` and an `aria-label`.

## Conventions for changes

- Match existing tone: light headings (`font-light`), gray body text, white sections.
- New top-level pages: add `src/app/<route>/page.tsx` and link from `NavBar.tsx` if discoverable.
- Run `npm run lint` then `npm run build` before finishing substantive edits.
- Keep diffs small; no database, env secrets, or API routes unless the task requires them.

## ESLint

Flat config in `eslint.config.mjs` — `eslint-config-next/core-web-vitals`; lints `src/**/*.ts(x)`.
