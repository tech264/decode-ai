# AboutUs Specification

## Overview
- **Target file:** `src/components/AboutUs.tsx`
- **Interaction model:** static

## DOM Structure
White background section. Centered "About Us" H2 heading at top. Below: two-column layout —
- Left: a bordered text box (thin black border box, ~699px wide at desktop) containing the "Be10X" bold lead-in paragraph + 2 more paragraphs, then a "Join us" subheading + "As we pave your way to the AI journey!" line + "Learn More" button. A decorative thick blue vertical accent bar sits just to the right of/alongside this bordered box (visible in the reference screenshot as a solid blue vertical stripe running the height of the box, offset slightly right of the box's right edge).
- Right: a flat-style illustration (person at a desktop with UI chat bubble elements) — `public/images/be10x/Press.svg`.

## Computed Styles

### Heading
- Text: "About Us"
- `font-size: 55px`, centered, color `#000000`

### Text box
- `border: 2px solid #000000`, `border-radius: 0` (sharp corners), `padding: 15px`, width ~`699px` at desktop (roughly `max-w-[700px]`)
- Decorative accent: a solid blue (`#17A4F4`) vertical bar, ~6-8px wide, positioned just outside/along the right edge of the box, full height of the box (`absolute` positioned sibling, e.g. `right-[-8px] top-0 h-full w-2 bg-[#17A4F4]`)

### Paragraph content inside box
- First paragraph starts with bold "Be10X" lead-in (render "Be10X" as `<strong>`/`font-bold`) followed by: "is a leading ed-tech platform that helps working professionals upskill, boost productivity, and achieve their career goals with the help of IT Professional Courses."
- Second paragraph: "Gain knowledge and enhance your skills in various subjects such as AI Tools courses, Excel using AI courses, Power BI courses, Generative AI courses, and more."
- Third paragraph: "These workshops will make you industry-ready, earn money with Artificial Intelligence, and help you grow exponentially in your career."
- All paragraphs: `font-size: 16px`, `color: #000000`, normal spacing between them (`space-y-4` or similar).

### "Join us" subheading
- `font-size: 40px`, `font-weight: 600`, color `#000000`, appears below the 3 paragraphs (still inside the bordered box).

### Tagline
- "As we pave your way to the AI journey!" — normal paragraph styling below the "Join us" heading.

### Learn More button
- `background-color: #ffffff`, `color: #000000`, `border: 2px solid #000000`, `border-radius: 0` (sharp rectangular button, no pill), `padding: 15px 30px`
- Links to `/about-us` (adjust to a relative in-app route if you create one, otherwise just `href="/about-us"` or `"#"` since About page is out of scope per TARGET.md — use `"#"`).

### Illustration
- `public/images/be10x/Press.svg` (already downloaded) — flat illustration of a person at a desk with chat-bubble/UI elements. Render at natural aspect ratio, roughly 400-450px wide at desktop, centered in the right column.

## Text Content (verbatim)
See above — use exactly as written.

## Responsive Behavior
- **Desktop (≥1024px):** two-column layout, text box ~699px on the left, illustration on the right, both vertically centered against each other.
- **Tablet (768-1023px):** may reduce text box width proportionally, keep two columns or stack if cramped.
- **Mobile (≤767px):** single column — heading, then text box (full width minus padding), then illustration below, centered. Reduce heading to ~32px, "Join us" subheading to ~28px.
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
