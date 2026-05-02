# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build (output: dist/)
npm run preview    # Preview production build locally
npm run lint       # ESLint check
```

There are no tests in this project.

## Git & Deployment

- **Repo**: `https://github.com/hardik121121/Vacation-Times` (pushed via `git@github.com-personal:hardik121121/Vacation-Times.git`)
- **SSH**: personal key `~/.ssh/id_personal`, alias `github.com-personal` in `~/.ssh/config`
- **Hosting**: Hostinger (switched from Netlify). Deploy by running `npm run build` and uploading the `dist/` directory.

## Architecture

**React 19 + Vite SPA** — plain JavaScript (no TypeScript). Single layout route wraps all pages; `ScrollToTop` resets scroll on every navigation.

### Routing (`src/App.jsx`)
All pages are children of a single `<Layout />` route (React Router DOM v7). Adding a page = add the import + `<Route>` in `App.jsx`.

Routes: `/` (Home), `/packages`, `/gallery`, `/about`, `/contact`, `/privacy`, `/terms`.

`src/pages/Destinations.jsx` exists and is fully implemented but has **no route in `App.jsx`** — it is orphaned. `FilterTabs` is only used by `Destinations.jsx` and is therefore also effectively orphaned. `team.js` is also unused. `DestinationCard`'s "Explore →" hover link points to `/destinations` (dead link). The Home page "Explore All Destinations" button links to `/packages` as a workaround.

### Data layer (`src/data/`)
Pure JS arrays — no API calls. Active data files: `packages.js`, `destinations.js`, `gallery.js`. Pages import directly from these files. `destinations.js` is imported by `Home.jsx` (first 4 items) and the orphaned `Destinations.jsx`; `team.js` and `testimonials.js` are not imported anywhere — actual testimonials are inline arrays inside `Home.jsx` (5 items) and `StaggerTestimonials.jsx` (12 items).

Key data shapes:

```js
// packages.js — all have price: null (shows "Price on Request"), featured boolean splits grid
{ id, slug, name, duration, featured, price, image, highlights[], rating, reviewCount }

// destinations.js
{ id, name, country, region /* 'asia'|'europe'|'americas'|'africa' */,
  image, description, bestTime, experiences }

// gallery.js  (exported as `photos`)
{ id, src, category, alt, type /* 'photo'|'video' */, poster? /* video only */ }
```

### Component layers
- `src/components/layout/` — `Header`, `Footer`, `Layout`. Header is fixed (`z-50`, `pt-16` offset on `<main>`); adds shadow on scroll; locks body scroll when mobile menu is open (hamburger breakpoint: `lg`).
- `src/components/shared/` — reusable UI: `PageHero`, `PackageCard`, `DestinationCard`, `FilterTabs`, `TestimonialCard`, `AssistanceBanner`, `NewsletterStrip` (unused), `Toast`, `StaggerTestimonials`.
  - `AssistanceBanner` — teal banner with "Your Dream Trip, Crafted Just for You", phone CTA (`tel:+919837089181`), WhatsApp CTA. Used at the bottom of Packages, About Us, and Destinations. Also appears inline at the bottom of Home.
  - `TestimonialCard` — simple flat card, not currently used anywhere.
  - `StaggerTestimonials` — the stacked carousel, used only in `AboutUs.jsx`. See dedicated section below.
  - `NewsletterStrip` — still exists as a file but is **not imported anywhere**; replaced by `AssistanceBanner`.

### Non-functional UI stubs

- **`PackageCard` "Book Now"** — `<a>` tag linking to `https://api.whatsapp.com/send/?phone=919837089181&text=`. Opens WhatsApp in a new tab.
- All packages have `price: null`, so all cards show "Price on Request" badge rather than a number.

### Key page behaviours

- **Home** (`src/pages/Home.jsx`) — sections in order:
  1. **Hero** — full-screen Phuket video (`/VIDEO-2026-05-02-13-42-08.mp4`) as background, `h-screen`, left-aligned text, two CTAs (Explore Packages → `/packages`, Plan My Trip → `/contact`).
  2. **Top Destinations** — `DestinationCard` grid, `destinations.slice(0,4)`.
  3. **Featured Travel Packages** — 3 `PackageCard`s from `packages.slice(0,3)`.
  4. **Hotel Stays** — auto-sliding right-to-left marquee (`marquee` keyframe, 35s) with 10 cities doubled for seamless loop. Cards are 200×280px with `rounded-3xl`.
  5. **Facilities Available** — 8-card icon grid (coloured icons: bed, restaurant, pool, dumbbell, spa, wifi, taxi, briefcase).
  6. **Testimonials** — inline 5-item array, carousel showing 3 at a time, prev/next arrows, dot pagination.
  7. **Assistance Banner** — inline teal section (same content as `AssistanceBanner` component).

- **Gallery** (`src/pages/Gallery.jsx`) — two-column layout: photos left (60%), videos right (40%). No filter tabs. All content is local files from `public/`. Videos show a poster + play-button overlay and open a `<video>` in a lightbox (pure React state). Lightbox supports keyboard navigation.

- **Packages** (`src/pages/Packages.jsx`) — header with background image + `bg-brown/60` overlay. Packages split into `featured` (2-col grid) and standard (3-col grid). Perks strip: Pranaam Service Available (`FaHandsPraying`), Luggage Assistance, 24/7 On-Trip Support, Flexible Payment Plans.

- **About Us** (`src/pages/AboutUs.jsx`) — sections: Our Story (`FounderCarousel` — inline component, auto-advances 4s) → Corporate Clients marquee → Why Vacation Times → Mission & Vision → `StaggerTestimonials` → `AssistanceBanner`. Marquee uses `style={{ animation: 'marquee 28s linear infinite' }}`.

- **Contact** (`src/pages/Contact.jsx`) — form submits via `window.open('https://wa.me/919837089181?text=...')`. Success feedback via `<Toast>` (auto-dismisses 4s).

- **Privacy** (`src/pages/Privacy.jsx`) and **Terms** (`src/pages/Terms.jsx`) — static pages using `PageHero` + an array of `{ title, content }` section objects rendered as a list. Legal contact email: `vivek@vacationtimes.co.in`.

### StaggerTestimonials (`src/components/shared/StaggerTestimonials.jsx`)
Staggered card carousel with 12 travel testimonials. Cards are absolute-positioned and shift via CSS `transform` — clicking any non-center card rotates it to center. Uses `clsx`. Color scheme: center card `bg-brown text-white`, others `bg-white text-brown`. Card size switches at `sm` breakpoint (290 → 365 px) via `matchMedia` listener.

## Tailwind config

Custom tokens (always use these, never raw hex):

| Token | Value | Use |
|-------|-------|-----|
| `teal` / `teal-dark` / `teal-light` / `teal-50` | #0D9488 / #0F766E / #5EEAD4 / #F0FDFA | Primary CTA, links, active states |
| `cream` / `cream-dark` | #F5F0E8 / #E8E0D0 | Page backgrounds |
| `brown` / `brown-light` / `brown-medium` | #292524 / #44403C / #57534E | Text |
| `amber` / `amber-light` | #B45309 / #D97706 | Badges, accents |

Custom breakpoint: `xs: 400px` (used for two-column grids before `sm`).  
Fonts: `font-heading` = Playfair Display (loaded via Google Fonts in `index.html`), `font-body` = Inter.

## CSS animations (`src/index.css`)

Four `@keyframes` — always apply via inline `style={{ animation: '...' }}`:

| Name | Effect | Used in |
|------|--------|---------|
| `marquee` | `translateX(0 → -50%)` | About Us corporate clients ticker; Home hotel stays carousel |
| `float` | gentle vertical bob | Map icon |
| `spin-slow` | full 360° rotation | Globe icon |
| `heartbeat` | scale pulse | Shield icon |

## Static assets

`public/logo.png` — transparent-background logo, used in Header and favicon.  
`public/Vivek Kaushal/` — founder photos for About Us carousel. File names contain spaces; reference as plain strings (browser handles encoding).  
`public/logos/` — corporate client logos used in About Us marquee:
- SVGs: `hdfc.svg`, `icici.svg`, `reliance.svg`
- PNGs: `taj.png` (Taj Hotels, provided by client), `yatharth.png` (Yatharth Group, provided by client)
- External URLs: Radisson Hotels logotype, Benaras Udyog SVG, IndiGo Airlines favicon

`public/PHOTO-2026-05-02-13-41-52.jpg` etc. — real client gallery photos (Thailand, Nepal, Dubai, St. Petersburg).  
`public/VIDEO-2026-05-02-13-42-07.mp4`, `VIDEO-2026-05-02-13-42-08.mp4` — real client gallery videos; second video also used as Home hero background.  
`public/office.jpeg` — office photo used in Contact page.  
`public/favicon.svg`, `public/icons.svg` — SVG assets in public root.  
`public/sitemap.xml` — all 7 routes, canonical domain `https://vacationtimes.co.in`, submitted to Google Search Console.  
`public/robots.txt` — allows all crawlers, points to sitemap.  
`public/thumb-video1.jpg`, `public/thumb-video2.jpg` — video thumbnail files present but not referenced by any source file (gallery uses Unsplash URLs as video posters).

## Brand copy conventions

- **Years of experience**: founded **June 2019** (~7 years). All copy reads "7 years" / "7+" — do not change.
- **Spelling**: British English — "Travellers" (double-l), "personalised", "organised".
- **Phone**: +91 98370 89181 — used consistently across all CTAs.
- **Email**: `vivek@vacationtimes.co.in` — appears in Privacy/Terms legal copy only.
- **WhatsApp**: `https://wa.me/919837089181` (chat), `https://api.whatsapp.com/send/?phone=919837089181&text=` (Book Now with empty pre-fill).

## Unused / leftover files

- `src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg` — Vite starter boilerplate, not used.
- `src/components/shared/NewsletterStrip.jsx` — superseded by `AssistanceBanner`; not imported anywhere.
- `src/data/testimonials.js`, `src/data/team.js` — not imported anywhere; testimonials are inline in their respective components.
- `public/logos/bajaj.svg`, `hcl.svg`, `hul.svg`, `infosys.svg`, `itc.svg`, `maruti.svg`, `tcs.svg`, `techmahindra.svg`, `wipro.svg`, `taj.svg` — removed from marquee but still in `public/`.

## Unused installed packages

`framer-motion`, `@radix-ui/react-label`, `@radix-ui/react-slot`, `class-variance-authority`, `tailwind-merge` — not imported anywhere. `clsx` is used in `StaggerTestimonials.jsx`. `ffmpeg-static` is in devDependencies but unused — likely a leftover from a one-off video processing script.
