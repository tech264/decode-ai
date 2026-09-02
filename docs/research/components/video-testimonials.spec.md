# VideoTestimonials Specification

## Overview
- **Target file:** `src/components/VideoTestimonials.tsx`
- **Interaction model:** click-driven carousel with autoplay (Swiper: `slidesPerView: 3`, `loop: true`, `autoplay delay: 5000ms`, `speed: 500ms`) + click-to-play videos (YouTube lite-embed pattern)

## DOM Structure
White background section. Centered "Testimonials" H2 heading (`font-size: 40px`, `color: #000000`). Below: a carousel of video-testimonial cards, ~20 pagination dots (large slide set), 3 visible at once on desktop. Each card is a thumbnail image (some are before/after split composites, some are single YouTube-style thumbnails) with a center circular play-button overlay (semi-transparent dark circle, white play triangle centered).

## Computed Styles
- Heading: `font-size: 40px`, `font-weight: 600` (assume, matches other H2s), `color: #000000`, centered.
- Card thumbnail: rounded corners (~`rounded-2xl`), aspect ratio ~16:9, full width of card column.
- Play button overlay: centered circle, ~56-64px diameter, `bg-black/50`, white play triangle icon centered (use `Play` from `lucide-react`, filled).

## Card Content (14 real downloaded testimonial thumbnails — use all of them as slides, in this order)
1. `public/images/be10x/WhatsApp-Image-2023-11-24-at-22.29.48_d4e7eee4.jpg`
2. `public/images/be10x/WhatsApp-Image-2023-11-24-at-22.29.48_25662f4a.jpg`
3. `public/images/be10x/WhatsApp-Image-2023-11-24-at-22.29.48_a3382fc9.jpg`
4. `public/images/be10x/5-insane-ai-tools-to-10x-product-195.jpg`
5. `public/images/be10x/niR8cAxJY-4-HD.webp`
6. `public/images/be10x/Qcxlh7GW1eQ-HD.webp`
7. `public/images/be10x/XAV8oEFqmF0-HD.webp`
8. `public/images/be10x/XvofmELxr70-HD.webp`
9. `public/images/be10x/9perDWyxNgo-HD.webp`
10. `public/images/be10x/iYxI4BIhHag-HD.webp`
11. `public/images/be10x/ov0QPm2TIko-HD.webp`
12. `public/images/be10x/c9fyZnBgreA-HD.webp`
13. `public/images/be10x/EK699kd3LkI-HD.jpg`
14. `public/images/be10x/5QFPSYNcb88-HD.webp`
15. `public/images/be10x/x20mAXebsLc-HD.webp`

For each card, render just the thumbnail image with the play-button overlay — do not fabricate names/quote text since none was captured live for individual testimonials (the live site's cards are purely video-thumbnail-driven, no text captions visible in the card itself beyond an occasional "Before/After" label baked into some thumbnails).

## States & Behaviors
- **Trigger:** autoplay (5000ms interval, 500ms transition) + manual prev/next controls (optional but nice — the live site likely allows drag/swipe; arrow buttons are acceptable) + click-to-play.
- **Click behavior:** clicking a thumbnail should visually indicate "play" (since these are static images without known YouTube video IDs, it's acceptable to just show a hover/active state or open the image at a larger size — do NOT fabricate fake YouTube embed IDs. A simple, honest implementation: clicking toggles a `cursor-pointer` "playing" visual state or is a no-op decorative interaction, since we don't have confirmed video IDs for each thumbnail).
- Implementation: same plain-React-state carousel pattern as the other sections (`useState` index + `setInterval`, flex row + `translateX` transition).

## Responsive Behavior
- **Desktop (≥1024px):** 3 cards visible.
- **Tablet (768-1023px):** 2 cards visible.
- **Mobile (≤767px):** 1 card visible.
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
