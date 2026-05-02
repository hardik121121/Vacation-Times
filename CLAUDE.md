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

## Architecture

**React 19 + Vite SPA** — plain JavaScript (no TypeScript). Single layout route wraps all pages; `ScrollToTop` resets scroll on every navigation.

### Routing (`src/App.jsx`)
All pages are children of a single `<Layout />` route (React Router DOM v7). Adding a page = add the import + `<Route>` in `App.jsx`.

Routes: `/` (Home), `/packages`, `/gallery`, `/about`, `/contact`, `/privacy`, `/terms`.

`src/pages/Destinations.jsx` exists and is fully implemented but has **no route in `App.jsx`** — it is orphaned. `team.js` is also unused. `Home.jsx` renders a "View All Destinations →" `<Link to="/destinations">` that is a dead link because the route doesn't exist. `DestinationCard`'s "Explore →" hover link also points to `/destinations`, so it is equally broken.

### Data layer (`src/data/`)
Pure JS arrays — no API calls. All content (packages, gallery, testimonials) lives here. Pages import directly from these files. `destinations.js` is imported by both `Home.jsx` (first 4 items) and the orphaned `Destinations.jsx`; `team.js` is not imported anywhere.

Key data shapes:

```js
// packages.js
{ id, slug, name, category /* 'luxury'|'adventure'|'budget'|'family' */,
  duration, price /* null = "Price on Request" */, image, highlights[], description,
  rating, reviewCount }

// destinations.js
{ id, name, country, region /* 'asia'|'europe'|'americas'|'africa' */,
  image, description, bestTime, experiences }

// gallery.js  (exported as `photos`)
{ id, src, category, alt, type /* 'photo'|'video' */, poster? /* video only */ }
```

### Component layers
- `src/components/layout/` — `Header`, `Footer`, `Layout`. Header is fixed (`z-50`, `pt-16` offset on `<main>`); adds shadow on scroll; locks body scroll when mobile menu is open (hamburger breakpoint: `lg`).
- `src/components/shared/` — reusable UI: `PageHero`, `PackageCard`, `DestinationCard`, `FilterTabs`, `TestimonialCard`, `NewsletterStrip`, `Toast`, `StaggerTestimonials`.
  - `TestimonialCard` — simple flat card, used only in `Home.jsx`'s testimonial grid (plain `bg-brown` section). Not the carousel.
  - `StaggerTestimonials` — the stacked carousel, used only in `AboutUs.jsx`. See dedicated section below.

### Non-functional UI stubs

These elements are intentionally incomplete — do not add backend wiring without client direction:

- **`PackageCard` "Book Now" button** — `<button>` with no `onClick`; clicking does nothing. All packages also have `price: null`, so all cards show "Price on Request" rather than a number.
- **`NewsletterStrip`** — `handleSubmit` only calls `setSubmitted(true)`; no email is sent or stored anywhere.

### Key page behaviours
- **Gallery** (`src/pages/Gallery.jsx`) — CSS `columns` masonry grid. Items have `type: 'photo' | 'video'`; videos show a poster + play-button overlay and open a `<video>` element in the lightbox. Lightbox is pure React state (no library).
- **About Us** (`src/pages/AboutUs.jsx`) — sections in order: Our Story (with `FounderCarousel` — an inline function component defined at the top of `AboutUs.jsx`, not a shared component — auto-advancing every 4 s + Vivek's Facebook/Instagram pill links below) → Corporate Clients marquee (real SVG logos from `public/logos/`) → Why Vacation Times → Mission & Vision → What Our Customers Say (`StaggerTestimonials`) → Newsletter. The marquee uses `style={{ animation: 'marquee 28s linear infinite' }}` (inline, not a Tailwind class) because the keyframe lives in `index.css`.
- **Contact** (`src/pages/Contact.jsx`) — custom hero with a single "Call Us" CTA (no Book Now, no scroll arrow). Form submits via `window.open('https://wa.me/919837089181?text=...')`. Info bar at the bottom of the card is a responsive CSS grid (2-col mobile, 4-col desktop). Success feedback via `<Toast>` (auto-dismisses in 4 s).

### StaggerTestimonials (`src/components/shared/StaggerTestimonials.jsx`)
Staggered card carousel with 12 travel testimonials. Cards are absolute-positioned and shift via CSS `transform` — clicking any non-center card rotates it to center. Navigation chevrons use `FiChevronLeft/Right` from `react-icons/fi`. Uses `clsx` for conditional classes. Color scheme: center card `bg-brown text-white`, others `bg-white text-brown`. Card size switches at `sm` breakpoint (290 → 365 px) via `ResizeObserver`-style `matchMedia` listener.

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

Four `@keyframes` are defined in `index.css` (not Tailwind) — always apply them via inline `style={{ animation: '...' }}`:

| Name | Effect | Typical use |
|------|--------|-------------|
| `marquee` | `translateX(0 → -50%)` | Corporate clients ticker |
| `float` | gentle vertical bob | Map icon |
| `spin-slow` | full 360° rotation | Globe icon |
| `heartbeat` | scale pulse | Shield icon |

## Static assets

`public/logo.png` — transparent-background logo, used in Header (`/logo.png`) and favicon.  
`public/Vivek Kaushal/` — founder photos used in the About Us carousel. File names contain spaces; reference them as plain strings in `src` attributes (browser handles encoding).  
`public/logos/` — 12 corporate client SVG logos (bajaj, hcl, hdfc, hul, icici, infosys, itc, maruti, reliance, tcs, techmahindra, wipro) downloaded from Wikipedia Commons/EN. Referenced as `/logos/{name}.svg`.  
`public/office.jpeg` — office photo used in the Contact page map section.

## Brand copy conventions

- **Years of experience**: company was founded **June 2019** (~7 years). All copy reads "7 years" / "7+" — do not change to a higher number.
- **Spelling**: use British English — "Travellers" (double-l), not "Travelers".

## Unused / leftover files

- `src/App.css` — Vite starter template boilerplate; none of its classes (`.counter`, `.hero`, etc.) are used in the app.
- `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg` — Vite starter assets; not referenced anywhere in the app.

## Unused installed packages

`framer-motion`, `@radix-ui/react-label`, `@radix-ui/react-slot`, `class-variance-authority`, `tailwind-merge` — installed during a feature experiment that was reverted. Not imported anywhere. `clsx` is used in `StaggerTestimonials.jsx`.
