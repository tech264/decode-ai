# Behaviors — be10x.in Home Page

## Header
- Real header is `#ast-fixed-header`: `position: fixed; top: 0`, black background, ~93px tall, full width.
- No scroll-triggered change detected — background, shadow, and transform are identical at scroll 0 and scroll 800px. It is a static fixed black bar, not a shrink-on-scroll header.
- Mobile nav (≤767px): standard Astra off-canvas hamburger drawer (`#ast-mobile-header`) — build as a slide-in/overlay drawer triggered by a hamburger icon; not visually verified live due to viewport resize limitations in this session, follow Astra's conventional pattern (hamburger icon top-right, drawer slides from a side or drops down, closes on outside click / X icon).

## Hero Carousel (section 0, data-id 917b7ab)
- **Interaction model: time-driven (autoplay).**
- Swiper carousel, `loop: true`, `speed: 500ms`, autoplay delay ~1500-5000ms range (two swiper instances detected on the element — one likely a duplicate/inactive breakpoint variant; use ~4000-5000ms as a safe default matching the other autoplay carousels on the page unless closer inspection during spec phase shows otherwise).
- 3 unique slide contents, each: H1 headline (white) with one highlighted phrase in blue `rgb(23, 164, 244)`, 2 bullet points (blue dot + white text), right column "Join our [X] Workshop today!" heading + "Register now" pill button (black bg, blue 3px border, white text, border-radius 90px, icon circle-arrow).
  1. "Maximize Your Productivity with **Office using AI Workshop**" — bullets: "No Prior MS Office Knowledge Required", "Solve Real Life Problems that you face daily with Microsoft Office"
  2. "Become 10X More Productive with our **ChatGPT & AI Tools Workshop**" / "**Claude & AI Tools Workshop**" (variant text seen) — bullets: "Learn the basics of prompt engineering to create a presentation using AI.", "Generate amazing presentations with AI within 10 mins"
  3. "Boost Your Skills with our **Power BI Mastery Workshop**" — bullets: "Create any kind of presentation..." (verify full text during spec extraction)
- Pagination: 2 small dots visible bottom-center (active = white filled, inactive = dark gray) — dot count did not match 3 unique slides in the quick check; re-verify exact bullet count and slide-to-dot mapping when building this component, since it may actually be more dots that were cropped, or the site logically groups slides.
- Transition: slide (horizontal), 500ms.

## Our Workshops Card (section 2)
- **Interaction model: static.** Confirmed via DOM inspection — the "workshops grid" (`.elementor-element-6a82d85`, `display:grid`) contains exactly 1 child card ("AI Tools Workshop"). There is no tab bar switching between multiple workshop types on this section; do not build tabs here.

## Resource/Blog Carousel (section 3, data-id 8e2ffed)
- **Interaction model: click-driven carousel with autoplay.**
- Swiper: `elementor-loop-container`, `slidesPerView: 3`, `loop: true`, `autoplay delay: 5000ms`, `speed: 500ms`, effect: slide.
- Prev/next chevron arrow controls at left/right edges of the panel (visible in screenshot at roughly y-center of the card row).
- Cards: rounded rect, dark blue background, contain: rounded thumbnail image with small "be10x" logo watermark badge (top-right of thumbnail), title (bold white, 2-line clamp), meta row (calendar icon + date, bookmark/tag icon + category), 2-3 line excerpt (lighter blue/gray text), "READ MORE..." link at bottom.

## Logo Strip Carousel (section 6, data-id 0a0d48b)
- **Interaction model: click-driven carousel, manual only (no autoplay).**
- Swiper: `slidesPerView: 3`, `loop: true`, `autoplay: false`.
- Prev/next arrow controls (chevrons, left/right of the strip, subtle gray, visible on hover per typical Elementor carousel default — verify exact hover opacity during spec phase).
- Logos: plain wordmark/logo images, grayscale-safe (shown in full color on white bg), evenly spaced.

## Video Testimonials Carousel (section 7, data-id 638add4)
- **Interaction model: click-driven carousel with autoplay + click-to-play videos.**
- Swiper: `slidesPerView: 3`, `loop: true`, `autoplay delay: 5000ms`, `speed: 500ms`.
- ~19 pagination dots total (large slide set — likely closer to 19 individual testimonial videos, 3 shown at a time).
- Each slide: split before/after thumbnail composite image with center circular play button overlay (semi-transparent dark circle, white play triangle). Clicking presumably opens/plays a YouTube embed (not confirmed by click-test in this session — treat as YouTube lite-embed pattern consistent with section 8).

## YouTube Showcase (section 8, data-id f41dd3b)
- **Interaction model: click-to-play (lazy iframe).**
- Left: large primary video embed (lite-YouTube style placeholder image with center play button, and small circular "be10x" avatar + clock icon overlay bottom-left, "Watch on YouTube" pill bottom-right) that swaps to a real iframe on click.
- Right: sidebar list of channel videos — "@be10x · 9 Videos" header, then a scrollable list of thumbnail + title + duration rows.

## Global
- No Lenis/Locomotive smooth scroll — native scrolling confirmed.
- No scroll-snap on page container.
- No dark/light theme toggle detected.
- Background grid/dot pattern is a repeating CSS background (faint plus-sign/dot grid lines) applied across full-bleed sections, both on black hero/workshop sections and white content sections — extract as a single reusable background utility.
- Site uses Elementor "container" flex/grid layout system (`e-con`, `e-flex`, `e-con-boxed` at ~1110px max width), not classic Elementor sections — build with plain flex/grid Tailwind equivalents, no need to replicate Elementor's own class names.

## Not Yet Verified (flag for Phase 5 QA pass)
- Exact hover states for nav menu items, footer links, and carousel arrow icons (CSS `:hover` rule lookup timed out mid-session; re-check live during QA pass with quick hover screenshots).
- Exact mobile (≤767px) stacking order and spacing — window resize tool could not shrink the automation browser viewport below ~1440px in this environment; build mobile layout from standard responsive stacking conventions (single column, full-width cards, hamburger nav) and verify later via a real device/DevTools if the user runs the dev server locally.
