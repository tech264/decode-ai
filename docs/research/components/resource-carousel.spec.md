# ResourceCarousel Specification

## Overview
- **Target file:** `src/components/ResourceCarousel.tsx`
- **Interaction model:** click-driven carousel (prev/next arrows) + autoplay (~5000ms). Section heading + 3-cards-visible-at-once card carousel.

## DOM Structure
- Outer full-width black rounded panel, `border-radius: 50px`, background `#000000`.
- Inside: "From the World of AI Tools & Claude" H2 heading (white, centered or left-aligned at top — reference screenshot shows it top-left-ish inside the panel), then a row of 3 visible cards with prev/next chevron arrow controls at the panel's left/right edges (vertically centered against the card row).
- Each card: dark blue rounded box containing a thumbnail image (with a small circular "be10x" logo badge overlaid top-right of the thumbnail), title, meta row (date + category tags), excerpt paragraph, "Read More..." link.

## Computed Styles

### Outer panel
- `background-color: #000000`, `border-radius: 50px`
- Heading: "From the World of\nAI Tools & Claude" — render as `font-size: 36px`, `font-weight: 600`, `color: #ffffff` (the live computed value read black, which is almost certainly a stale/wrong read given it sits on a black panel — trust white for visibility, matching the "Our Workshops" heading pattern).

### Card
- `background-color: rgb(10, 77, 122)` (`#0A4D7A`, dark blue)
- `border-radius: 48px`
- `padding: 15px 12px 25px`
- width: ~322px per card at desktop (3 cards visible across the panel width)

### Card thumbnail image
- Rounded corners matching card's inner radius (roughly `rounded-3xl`, e.g. `32px`), full width of card interior, ~16:9 aspect.
- Small circular "be10x" logo watermark badge overlaid at the top-right corner of the thumbnail (semi-transparent dark circle background with the be10x wordmark/logo, small ~32-40px). Use `public/images/be10x/be10x-logowhite-2.png` for this badge if it fits a small circular badge, otherwise a simple text badge is acceptable.

### Title
- `font-size: 21px`, `font-weight: 600`, `color: #ffffff`, max 2 lines (use `line-clamp-2`)

### Meta row (date + category tags)
- `font-size: 16px`, `color: rgb(146, 253, 231)` (`#92FDE7`, mint green) for both the date and category links
- Small calendar icon before the date (use `Calendar` from `lucide-react`, ~14px, same mint color) and a small tag/bookmark icon before the category (use `Tag` or `Bookmark` from `lucide-react`, same color)

### Excerpt
- `font-size: 16px`, `color: #ffffff`, 2-3 line clamp (`line-clamp-3`)

### "Read More..." link
- `font-size: 14px`, `color: rgb(146, 253, 231)` (`#92FDE7`)

## States & Behaviors

### Carousel
- **Trigger:** autoplay, Swiper-equivalent, `loop: true`, `slidesPerView: 3` at desktop, `autoplay delay: 5000ms`, `transition speed: 500ms` (slide effect).
- **Implementation approach:** build with plain React state (no new dependency needed) — a `useState` index + `setInterval` advancing by 1 every 5000ms, rendering a horizontally-scrolling flex row with `transform: translateX()` transitioning over 500ms. Prev/next chevron buttons (use `ChevronLeft`/`ChevronRight` from `lucide-react`) manually step the index (and should reset/restart the autoplay timer on manual interaction — simple is fine, don't over-engineer).
- At desktop show 3 cards at once; at tablet 2; at mobile 1.

## Card Content (use these 3 real cards verbatim; you may repeat/cycle them or use the downloaded resource images for a couple more synthetic-but-real-content slides since only 3 were captured live — 3 real cards is sufficient for a faithful carousel, do not fabricate additional article text)

1. **Title:** "Top 10 Ways To Excel With AI In Your Career And Business"
   **Date:** July 14, 2025 · **Category:** Excel With AI
   **Excerpt:** "AI is a technology that's changing the way you think, work, and communicate, as well as how you develop professionally and personally. Whether you're an established entrepreneur or are attempting to climb the corporate ladder, the proper application of AI will open doors previously unattainable to gain access to. The goal is not to replace you, but to improve your capabilities."
   **Image:** `public/images/be10x/Top-10-Ways-To-Excel-With-AI-In-Your-Career-And-Business.png`

2. **Title:** "Your Guide to the Be10x AI Mastery Course: Is It Right for You?"
   **Date:** July 9, 2025 · **Category:** AI Tools, Education
   **Excerpt:** "Artificial Intelligence (AI) is no longer a buzzword but a mastery pack that everyone needs. By 2025, AI tools will be used in every sector, such as marketing, teaching, health care, innovation, business analytics, and client assistance. Knowing how to utilize them is becoming imperative for development, innovation, and competitiveness."
   **Image:** `public/images/be10x/Your-Guide-to-the-Be10x-AI-Mastery-Course-Is-It-Right-for-You.png`

3. **Title:** "Why You Should Attend The Be10x AI Tools Workshop In 2025"
   **Date:** July 3, 2025 · **Category:** AI Tools, Artificial Intelligence
   **Excerpt:** "Artificial Intelligence has become a necessity for taking your career to new heights, as well as securing your job. Knowing how to utilize AI tools is a valuable asset for anyone, whether you are a student seeking to stay ahead of your peers, an employee looking to advance, or a business owner seeking to increase efficiency and productivity."
   **Image:** `public/images/be10x/Why-You-Should-Attend-The-Be10x-AI-Tools-Workshop-In-2025.jpg`

You may also include these additional downloaded resource images as 2 more cards (reuse plausible excerpt copy in the same voice, keep it short and on-topic — these are legitimately be10x blog thumbnails, just without captured excerpt text live):
4. **Title:** "Be10x vs Other Online Courses: Reviews That Matter" — **Image:** `public/images/be10x/Be10x-vs-Other-Online-Courses-Reviews-That-Matter.png`
5. **Title:** "Everything You Need to Know About Be10X in 2025" — **Image:** `public/images/be10x/Everything-You-Need-to-Know-About-Be10X-in-2025.png`

## Assets
- Card images: see above, all already downloaded to `public/images/be10x/`.
- Icons: `lucide-react` `Calendar`, `Tag`, `ChevronLeft`, `ChevronRight`.

## Responsive Behavior
- **Desktop (≥1024px):** 3 cards visible.
- **Tablet (768-1023px):** 2 cards visible.
- **Mobile (≤767px):** 1 card visible, full width, reduce panel padding/radius slightly.
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
