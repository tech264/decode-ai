# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Interaction model:** static, always-fixed black header (no scroll-triggered visual change — confirmed via getComputedStyle at scroll 0 and scroll 800px, styles were identical). Mobile uses a hamburger off-canvas drawer.

## DOM Structure
- Full-width `position: fixed; top: 0` black bar, height ~93px, z-index above all content.
- Left: "be10x" logo (wordmark "be" + circular black-and-white "10X" badge — this is a text+shape logo, render it directly rather than an image, OR use `public/images/be10x/be10x-logowhite-1.png` if simpler; the live site logo mark is a stylized "be" text next to a black circle containing white "10X" text).
- Center/left-of-account: horizontal nav menu with items: "Workshops" (dropdown chevron), "AI Mastery", "AI Tool of the Day", "Blogs" (dropdown chevron), "Reviews", "About Us", "Contact Us".
- Right: "My Account" pill button.

## Computed Styles
- Header background: `#000000`, height `~93px`, full width.
- Nav links: `font-size: 18px`, `font-weight: 400`, `color: #ffffff`. Space evenly, moderate gap (~28-32px between items).
- Dropdown chevron: small chevron-down icon next to "Workshops" and "Blogs" (use `ChevronDown` from `lucide-react`, ~14px).
- "My Account" button: `background-color: #17A4F4` (blue), `color: #1c1c1c` (near-black text, confirmed via computed style despite initial visual assumption of white — the rendered text is a dark charcoal on the blue pill, matching a zoomed screenshot inspection), `border-radius: 40.5px` (full pill), `padding: 12px 20px`, `font-size: 15px`, `font-weight: 500`.

## Dropdown menus (hover/click to reveal — standard nav dropdown pattern)
- **Workshops** dropdown items: "AI Tools Workshop", "10X Techie Using AI Workshop"
- **Blogs** dropdown items: "AI Tools", "ChatGPT", "Excel With AI", "Marketing With AI"
- Implement as a simple hover-to-show dropdown (absolute positioned panel below the trigger, shown on `:hover`/`group-hover`) — no need for complex animation, a simple opacity/visibility transition is sufficient and matches typical WordPress/Astra theme dropdown behavior.

## States & Behaviors
- **No scroll-triggered change** — do not build a shrink/shadow-on-scroll header. It's simply always fixed and always looks the same.
- **Mobile (≤767px):** replace the horizontal nav with a hamburger icon (use `Menu` from `lucide-react`) on the right side (before or instead of "My Account", per typical mobile header layout — put hamburger at the far right, "My Account" can move into the drawer or stay visible, use your judgment). Clicking opens an off-canvas drawer/panel (slide in from the right or a full-screen overlay) listing all nav items stacked vertically, with a close (X) icon. Use simple React state (`useState` open/closed) + CSS transition — no new dependency needed.

## Assets
- Logo: `public/images/be10x/be10x-logowhite-1.png` (already downloaded) — use as the logo image, OR reconstruct as text+badge if you prefer sharper rendering at small size (your call; the PNG is simplest and was confirmed as the actual asset used live).
- `ChevronDown`, `Menu`, `X` from `lucide-react`.

## Text Content (verbatim)
Nav items, in order: "Workshops", "AI Mastery", "AI Tool of the Day", "Blogs", "Reviews", "About Us", "Contact Us", then "My Account" button.

## Responsive Behavior
- **Desktop (≥1025px):** full horizontal nav as described.
- **Tablet/Mobile (≤1024px, more aggressively ≤767px):** collapse to hamburger + off-canvas drawer.
- Keep the header `fixed top-0 left-0 right-0 z-50` at all breakpoints so content scrolls underneath it — remember to add top padding/margin to whatever content sits directly below it in the page (~93-100px) so it isn't obscured.
