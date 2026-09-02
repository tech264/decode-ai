# Page Topology — be10x.in Home Page

Source: WordPress + Astra theme + Elementor (container-based, `e-flex`/`e-con` layout, Swiper carousels).
Root content wrapper: `#content .ast-container > .elementor.elementor-37705` — 11 top-level Elementor containers (`e-con` / `e-parent`), top to bottom.

## Global Layout
- Header: `#masthead` (in-flow placeholder, `position: absolute`, transparent) + `#ast-fixed-header` (the real always-visible header, `position: fixed; top:0`, black background, height ~93px). It carries Astra's sticky classes (`ast-sticky-shrunk ast-sticky-active ast-header-sticked`) **permanently** — there is no scroll-triggered visual change (no shrink, no shadow, no color change). Treat it as a simple always-fixed black header.
- Body max content width: 1110px boxed containers (`e-con-boxed`) inside full-bleed section backgrounds.
- No smooth-scroll library (no `.lenis`, no Locomotive Scroll) — native scrolling.
- No scroll-snap detected on the page container.
- Background: sections alternate black (hero, workshops card) and white (why choose us, about, testimonials) — both use a faint grid/dot pattern background (`background-image` grid lines + crosses), visible on both black and white sections.

## Sections (top to bottom)

| # | data-id | Working name | Interaction model | Notes |
|---|---------|--------------|--------------------|-------|
| 0 | 917b7ab | Hero | **time-driven** (autoplay swiper carousel) | Black bg, grid pattern. 3 rotating slides (looped, autoplay ~1500ms... see BEHAVIORS.md for corrected delay), each with headline (white + blue highlighted phrase), 2 bullet points, right-side "Join our X Workshop today!" + "Register now" pill button. Small 2-dot pagination visible (only 2 dots rendered even though 3 slides — verify in spec phase). |
| 1 | 9002df9 | Why Choose Us | static | White bg. "Why Choose Us?" H2, paragraph, 3-item checklist (blue check icons), question-mark illustration (SVG/PNG, decorative dots+lines around it). |
| 2 | 2eb1a4b | Our Workshops | static (single card, NOT tabbed — verified via DOM, only 1 workshop card renders) | Black rounded card (large border-radius ~40px+) titled "Our Workshops" > "AI Tools Workshop" subhead, 4-item checklist (green checks, bold lead-in + description line), promo image right side, "Register now" outlined pill button (blue border). |
| 3 | 8e2ffed | Resource/Blog carousel ("From the World of AI Tools & Claude") | **click-driven carousel** (prev/next arrows) + autoplay (swiper, 3 slidesPerView, loop, autoplay 5000ms) | Black rounded outer panel containing 3 visible blue card slides (rounded, dark-blue bg, white text) — each card: thumbnail image (rounded, be10x watermark), title, date + category tag, excerpt, "READ MORE..." link. Prev/next chevrons at panel edges. |
| 4 | 9e0fe83 | About Us | static | White bg. "About Us" H2 centered. Two columns: left = bordered text box (blue left border accent) with "Be10X" lead-in bold + 3 paragraphs + "Join us" subhead + "As we pave your way..." + button; right = illustration (person at desktop, flat illustration style). |
| 5 | c2f944c | (nested/zero-height wrapper labeled "Testimonials") | n/a | 0px height/top in isolation — likely a heading widget that Elementor renders inline with section 6/7, or a duplicate scroll-marker. Re-verify during spec extraction; may just be an anchor/empty container. |
| 6 | 0a0d48b | Trusted-by logo strip | **click-driven carousel** (swiper, slidesPerView 3, loop, no autoplay — manual prev/next arrows) | "Trusted by leading organizations across industries" heading, logo carousel (SNITCH, PVR INOX, Wanbury, SIS Group, more via arrows). |
| 7 | 638add4 | Testimonials (video) | **click-driven carousel** (swiper, slidesPerView 3, loop, autoplay 5000ms) | "Testimonials" H2. Video-thumbnail cards (before/after split thumbnails with center play button). ~19 pagination dots — large slide set, only 3 visible at once on desktop. |
| 8 | f41dd3b | YouTube showcase | static layout, embeds are click-to-play iframes | "Best of Be10X on YouTube" heading. Main large video (iframe, lazy) + right sidebar list of channel videos (thumbnail, title, duration) — "@be10x · 9 Videos". |
| 9 | 5b0944b | Footer | static | Link columns: About Us, Contact Us, Teach with Us, Grow With Us, Cancellation/Refund Policy, Privacy Policy, Terms of use, Guest Posting, Reviews, Trust and Safety. Social icons row (Facebook, Instagram, Twitter/X, LinkedIn, YouTube). Copyright line "© 2026 Be10x. All right reserved".
| 10 | d47b74c | Spacer/utility | n/a | ~20px height, likely a bottom spacer or back-to-top trigger container — verify, may be safely ignored. |

## Responsive Breakpoints (from live CSS, Astra theme defaults)
- **Desktop:** ≥ 921px (some queries use 1025px as the "true" desktop cutover for the container-grid rules)
- **Tablet:** 768px – 921px
- **Mobile:** ≤ 767px (with a secondary sub-breakpoint at 544px and 420px for tighter mobile spacing)
- Mobile header uses Astra's standard hamburger menu pattern (`#ast-mobile-header`, off-canvas drawer) — not visually captured live (window resize tool was unable to shrink the automation browser below 1440px in this environment), so the mobile nav must be built to Astra's conventional off-canvas drawer behavior and spot-checked after build via DevTools responsive mode if possible.

## Carousels Inventory (Swiper) — confirm exact params during per-section extraction
1. Hero slide carousel — loop, autoplay, 1 slide per view, 3 unique slides
2. Resource/blog carousel (section 3) — loop, autoplay 5000ms, 3 slides per view
3. Logo strip (section 6) — loop, manual only (no autoplay), 3 slides per view
4. Video testimonials (section 7) — loop, autoplay 5000ms, 3 slides per view, ~19 total slides

## Open Items For Per-Section Extraction Phase
- Confirm section 5's true role (likely folds into section 6/7 heading).
- Confirm section 10's purpose (spacer vs. utility widget).
- Exact hero pagination dot count vs. slide count mismatch (saw 2 dots, 3 unique slides).
- Exact colors/spacing/typography per element (captured live in each component's `.spec.md`, not here).
