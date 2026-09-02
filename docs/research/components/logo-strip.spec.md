# LogoStrip Specification

## Overview
- **Target file:** `src/components/LogoStrip.tsx`
- **Interaction model:** click-driven carousel, manual only (no autoplay), `slidesPerView: 3`, `loop: true`

## DOM Structure
White background section. Centered heading "Trusted by leading organizations across **industries**" (the word "industries" is colored — see below). Below: a horizontal row of organization logos with prev/next arrow controls (subtle, positioned at left/right edges).

## Computed Styles
- Heading: `font-size: 40px`, centered, color `#000000`, with the word "industries" in a highlight color `rgb(99, 102, 241)` (`#6366F1`, indigo/violet — distinct accent used only here).
- Logos: plain image logos, evenly spaced, vertically centered, roughly 120-160px wide each, generous horizontal gap (~48-64px).

## Logos (4 real downloaded logo images, use in this order)
1. `public/images/be10x/download-4-1.png`
2. `public/images/be10x/download-1-1-1.png`
3. `public/images/be10x/download-3-e1767892208960-1-1.png`
4. `public/images/be10x/download-2-1-1.png`

(These correspond visually to SNITCH, PVR INOX, Wanbury, and SIS Group Enterprises per the live screenshot, but use the image files directly rather than re-typing brand names — the logos are raster/vector images with the brand name baked in.)

## States & Behaviors
- **Trigger:** manual only — prev/next chevron arrow buttons (use `ChevronLeft`/`ChevronRight` from `lucide-react`), no autoplay.
- `loop: true`, `slidesPerView: 3` at desktop.
- Implementation: simple React state carousel (no new dependency), same pattern as other carousels on this site but WITHOUT the `setInterval` autoplay — purely manual advance/loop-wrap on arrow click.

## Responsive Behavior
- **Desktop (≥1024px):** 3-4 logos visible at once (with only 4 total logos, you may simply show all 4 statically without needing arrows/looping if that reads more naturally — use your judgment; if you do implement the carousel mechanism per spec, ensure it still looks correct with exactly 4 items).
- **Tablet (768-1023px):** 2-3 visible.
- **Mobile (≤767px):** 1-2 visible, stacked/scrollable row.
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
