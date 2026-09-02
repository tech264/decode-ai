# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/hero-section.png` (full hero, "Claude & AI Tools Workshop" slide with orange accent)
- **Interaction model:** time-driven (autoplay carousel), two synced Swiper carousels (left content + right CTA panel move together)

## DOM Structure
- Full-bleed black section, faint grid-line background pattern (use the `bg-be10x-grid` utility class already defined in `globals.css` — apply `text-white/10`-ish via `text-white` on a dark section so the grid lines render subtly light against black).
- Inner container: max-width `1140px`, centered, padding `90px 0 25px` (top/bottom; use `pt-[90px] pb-[25px]` — reduce top padding responsively since 90px assumes room below the fixed 93px header).
- Two-column layout at desktop: left column = headline + bullets; right column = "Join our [X] Workshop today!" heading + Register Now button. Stacks to single column on mobile/tablet.
- Carousel dots: small pagination row centered below the content, 2 visible dots (white = active, dark gray = inactive), circular, ~8-10px.

## Computed Styles

### Section container
- backgroundColor: `rgb(0, 0, 0)` (`#000000`)
- Inner content max-width: `min(100%, 1140px)`, padding: `90px 0px 25px`

### Headline (h2)
- fontSize: `55px`
- fontWeight: `600`
- lineHeight: `71.5px` (i.e. `1.3em`)
- color: `#ffffff`, except the highlighted product-name phrase which is wrapped in its own `<span>` colored per-slide (see Slide Content below)
- fontFamily: Poppins (already global)

### Bullet list items
- Each bullet: blue/colored dot marker (color matches the slide's accent color, ~10px circle) + white text
- fontSize: body text ~18px, color `#ffffff`

### "Join our [X] Workshop today!" heading (right column)
- fontSize: `36px`, fontWeight: `600`, color `#ffffff`, centered text

### Register Now button
- padding: `12px 35px`
- border: `3px solid` — color matches the active slide's accent color (see below)
- borderRadius: `90px` (full pill)
- fontSize: `25px`, color `#ffffff`
- background: transparent/black
- Icon: `ArrowCircleRightIcon` from `@/components/icons` at the end of the label, ~1em size, inline

## States & Behaviors

### Autoplay slide rotation
- **Trigger:** time-based, Swiper autoplay, loop mode, slide transition speed `500ms` (ease/slide effect). Use an autoplay interval of ~4000-5000ms (exact site value was ambiguous between two internal swiper instances; 5000ms matches the other autoplay carousels on this site and is a safe default).
- **Implementation approach:** Client component using a small local carousel (state-driven `useState` index + `setInterval`, or a lightweight embla/swiper-style approach — no need to add a new dependency; a simple `setInterval` advancing an index with a `transition` on `transform: translateX()` is sufficient). Must pause-on-hover is NOT required (not observed on the live site — it truly autoplays continuously).
- Two content regions (left headline block and right "Join our..." block) change **in sync** on every slide tick — same slide index drives both.

### Per-slide content (4 unique slides, looped)
1. **Office AI Workshop** — accent color `#17A4F4` (blue)
   - Headline: "Maximize Your Productivity with **Office using AI Workshop**" (only "Office using AI Workshop" is the colored span; "Maximize Your Productivity with" stays white)
   - Bullets: "No Prior MS Office Knowledge Required" / "Solve Real Life Problems that you face daily with Microsoft Office"
   - Right heading: "Join our Office using AI Workshop today!"
2. **ChatGPT & AI Tools Workshop** — accent color `#FF4500` (orange-red)
   - Headline: "Become 10X More Productive with our **ChatGPT & AI Tools Workshop**"
   - Bullets: "Learn the basics of prompt engineering to create a presentation using AI." / "Generate amazing presentations with AI within 10 mins"
3. **Power BI Mastery Workshop** — accent color `#FFD700` (gold/yellow)
   - Headline: "Boost Your Skills with our **Power BI Mastery Workshop**"
   - Bullets: "Create any kind of presentable reports under 10 seconds" / "Combine data from over 30 sources (incl. Excel, SQL, etc) using the power of automation"
4. **Claude & AI Tools Workshop** — accent color `#FF4500` (orange-red, same as slide 2 — this appears to be an alternate name for the same underlying workshop)
   - Headline: "Become 10X More Productive with our **Claude & AI Tools Workshop**"
   - Bullets: same as slide 2
   - Right heading: "Join our Claude & AI Tools Workshop today!"

For slides 2 and 3, the right-column heading follows the same pattern: "Join our [product name] today!" — derive it from the headline's highlighted phrase.

- The bullet dot color and the Register Now button border color both switch to match the active slide's accent color.
- Pagination dots: only 2 dots were visible in the live DOM at the viewport observed — implement as many dots as unique slides you build (4) for correctness; visually style as small circles, active = white fill, inactive = `rgba(255,255,255,0.3)`.

## Assets
- No downloaded image assets needed — this section is pure text/gradient/CSS.
- Icon: `ArrowCircleRightIcon` from `src/components/icons.tsx` (already created).

## Text Content (verbatim)
See "Per-slide content" above — use exactly as written.

## Responsive Behavior
- **Desktop (≥1025px):** two-column side-by-side layout as described, headline ~55px.
- **Tablet (768-1024px):** reduce headline font-size (~40-44px), keep two columns if room allows or stack — use judgment, err toward stacking below 900px.
- **Mobile (≤767px):** single column, headline stacked above bullets, "Join our..." block and button centered below, reduce padding significantly (e.g. `pt-24 pb-6 px-4`), headline ~32-36px.
- **Breakpoint:** follow Tailwind defaults (`md:768px`, `lg:1024px`) — this matches the site's own 768/921/1025 breakpoints closely enough.
