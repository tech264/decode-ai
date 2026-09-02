# WhyChooseUs Specification

## Overview
- **Target file:** `src/components/WhyChooseUs.tsx`
- **Interaction model:** static

## DOM Structure
White background section, padding `40px 0` (vertical), centered content, max content width ~1140px (matches other sections). Content is vertically stacked and centered:
1. H2 heading "Why Choose Us?"
2. Two paragraphs
3. A 3-item checklist (each item: black checkmark icon + bold lead-in text — see below)
4. A decorative illustration below the checklist: a large blue/navy question mark graphic with small scattered decorative elements (dots, a small speech-bubble-with-dots icon, a diagonal pencil/line icon, small squares) arranged around it.

## Computed Styles

### Heading
- text: "Why Choose Us?"
- fontSize: `55px`, fontWeight: `900`, color: `#000000` (black), centered

### Paragraphs (centered, stacked, max-width constrained ~900px)
- fontSize: `16px`, color: `#000000`
- Text 1: "Be10X is among top-rated ed-tech companies providing Online Workshops with Certificates to the working professionals."
- Text 2: "Starting from Artificial Intelligence Online Courses for beginners, we have expanded our array to MS Excel Workshops, Power BI workshops, and MS PowerPoint Workshops."

### Checklist (centered, stacked vertically, tight line spacing)
- fontSize: `16px`, color: `rgb(75, 79, 88)` (`#4B4F58`)
- Icon: black/dark checkmark (small, ~16px), inline before text
- Items (bold lead-in — render the whole line in one weight since the live site doesn't bold-split it, font-weight `400`):
  1. "100k+ Professionals Enrolled in our Workshops"
  2. "Learn from IIT Kharagpur Alumni"
  3. "Get Workshop Participation Certificate"

### Illustration
- A large blue/navy stylized question mark (two-tone: light blue `#4DA8E8`-ish front layer + dark navy `#1E2A44`-ish shadow/back layer offset behind it — approximate from the downloaded asset, don't hand-pick exact hex, sample from the actual PNG/SVG if you crack it open).
- Surrounding decorative elements: small dot grid marks, a rounded speech-bubble icon containing 3 dots ("...") to the left of the question mark, a diagonal short line/pencil stroke to the upper-right, a few scattered small squares/dots around the whole illustration.
- Approximate overall illustration size: ~270x320px (matches downloaded `Layer.svg` natural dimensions 271x322).

## Assets
- `public/images/be10x/Layer.svg` — the question mark illustration (primary asset, use this as the main illustration image/graphic; inspect it — it's likely a multi-color SVG you can drop in directly via an `<img>` tag or inline).
- `public/images/be10x/Layer_2.png` and `public/images/be10x/Layer_2-1.png` — these were detected as CSS background-image references near this section; if `Layer.svg` alone doesn't visually match the screenshot (e.g. it's just the question mark without the scattered decorative dots), layer one of these PNGs behind/around it as an absolutely-positioned background layer. Use your judgment after opening the files — pick whichever combination reproduces the full illustration (question mark + scattered doodles) most faithfully.
- Checkmark icon: use `Check` from `lucide-react` (already a project dependency per AGENTS.md — Lucide is the default icon set), sized ~16-18px, color `#000000` or `#4B4F58` to match.

## Text Content (verbatim)
See above — use exactly as written, no paraphrasing.

## Responsive Behavior
- **Desktop (≥1024px):** heading ~55px, content centered with generous max-width (~900px) for paragraphs, illustration centered below at full detailed size.
- **Tablet (768-1023px):** heading ~40-44px, same centered stacked layout, illustration scaled down proportionally (~200px wide).
- **Mobile (≤767px):** heading ~32px, tighter paragraph max-width (full width minus padding), illustration scaled further (~160px wide), reduce section vertical padding to `py-8 px-4`.
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
