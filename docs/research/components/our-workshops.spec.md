# OurWorkshops Specification

## Overview
- **Target file:** `src/components/OurWorkshops.tsx`
- **Interaction model:** static (verified via DOM inspection — only ONE workshop card renders; this is NOT a tab-switcher despite the "Workshops" naming. Do not build tabs.)

## DOM Structure
White page background, with a large full-width black rounded card/panel centered in the content column:
1. "Our Workshops" H2 (centered, above/overlapping the black card's top edge)
2. Black rounded card containing:
   - "AI Tools Workshop" H3-style subheading (left-aligned inside card)
   - 4-item checklist (bold white lead-in line + lighter description line per item, mint-green checkmark icon)
   - "Register now" pill button (outlined, bottom-left of the text column)
   - Promo image (right side of card): people image with bold headline overlay text "AI won't replace You / A person using AI will", a "JOIN 3 HOURS WORKSHOP" yellow badge, and two name/credential captions ("Aditya Goenka / IIT-KGP" and "Aditya Kachave / IIT-KGP")

## Computed Styles

### Card
- backgroundColor: `#000000`
- borderRadius: `50px`
- padding: `10px 10px 40px` (top/sides tight, bottom generous — content inside has its own left/right padding, roughly `px-10` equivalent, use judgment to match the screenshot: text column has clear left inset ~40-50px)

### "Our Workshops" heading
- fontSize: `36px`, fontWeight: `600`, color: `#ffffff`, centered, sits above the card (white text needs to be outside/above the black card since it's white-on-white otherwise — matches site: heading rendered on the white page background just above the card, slightly overlapping its top rounded edge visually)

### "AI Tools Workshop" subheading
- Large bold white text, roughly `32-36px`, left-aligned, sits at the top-left of the card's text column.

### Checklist items (4 total)
- Bold lead-in line: color `#ffffff`, `font-weight: 700`
- Description line (second line, lighter): color `#4B4F58`-ish but lightened for dark bg — use a light gray like `#A8ACB5` (the site's body-text gray doesn't apply as-is on black; approximate with a light gray for legibility, matching the screenshot's dimmer white)
- Checkmark icon: mint-green `rgb(146, 253, 231)` (~`#92FDE7`), small (~16-18px), inline before text
- Font size: `16px`
- Items (bold lead-in **bolded**, description follows on next line):
  1. **Be among the top 1% professionals to avoid being laid off.** / Earn money with Artificial Intelligence seamlessly. Earn money with Artificial Intelligence seamlessly.
  2. **No technical AI knowledge required to master AI tools.** / Learn Claude and other AI tools from scratch.
  3. **Proven to reduce your work by 2 hours daily.** / With the help of Generative AI tools, you will be able to work more in less time.
  4. **Learn to code using AI with Zero technical knowledge.** / With the help of Claude courses, you will be able to code within minutes effortlessly.

### Register Now button
- Outlined pill: `border: 2-3px solid` mint-green/teal (matches checkmark color family, approx `#92FDE7` or the site's blue `#17A4F4` — reference screenshot shows a teal/mint outline distinct from the hero's blue; use `#92FDE7` for consistency with the checkmarks), `border-radius: 90px`, padding ~`12px 28px`, white text, ~18-20px font, includes `ArrowCircleRightIcon` from `@/components/icons` after the label.

### Promo image
- `public/images/be10x/Why-You-Should-Attend-The-Be10x-AI-Tools-Workshop-In-2025.jpg` is NOT this image — the actual asset downloaded for this exact card is `public/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg` (confirmed via live DOM `img.src` inspection; the filename is misleading/generic but this is the correct file — it depicts two people with a red/dark abstract background and the "AI won't replace You / A person using AI will" text baked into the image itself). Use this file directly as a single `<img>`/`<Image>` — the headline text, badge, and names are all part of the image raster, not separate HTML overlays.
- Natural size: 1024x576 (16:9). Render with rounded corners matching the card's inner radius, roughly `rounded-2xl` to `rounded-3xl`, on the right side of the card at desktop, full-width stacked below the text on mobile.

## Assets
- `public/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg` — promo image (see above).
- Checkmark icon: use `Check` from `lucide-react`, colored via `style={{ color: "#92FDE7" }}` or a Tailwind arbitrary color class `text-[#92FDE7]`.
- `ArrowCircleRightIcon` from `@/components/icons`.

## Text Content (verbatim)
See checklist and headings above — use exactly as written.

## Responsive Behavior
- **Desktop (≥1024px):** two-column layout inside the card — text/checklist column ~55-60% width on the left, promo image ~40-45% on the right, vertically centered.
- **Tablet (768-1023px):** may keep two columns with reduced gap, or stack image below text — prefer stacking if columns get cramped below ~900px.
- **Mobile (≤767px):** single column — "Our Workshops" heading, then card with subheading, checklist, button, then promo image full-width below, all stacked. Reduce card border-radius slightly (e.g. `rounded-[32px]`) and padding (`p-6`) for mobile comfort.
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
