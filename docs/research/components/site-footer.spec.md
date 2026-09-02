# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Interaction model:** static

## DOM Structure
White (or very light) background footer section:
1. A row of link items (single line on desktop, wraps on mobile), centered.
2. Below: a row of 5 social icon links, centered.
3. Below: copyright text, centered.

## Content

### Links (in order)
"About Us", "Contact Us", "Teach with Us", "Grow With Us", "Cancellation/Refund Policy", "Privacy Policy", "Terms of use", "Guest Posting", "Reviews", "Trust and Safety"

Hrefs (external, use as-is):
- About Us → `https://be10x.in/about-us/`
- Contact Us → `https://be10x.in/contact-us/`
- Teach with Us → `https://forms.gle/hsuyDJ2FM3PT2mwi6`
- Grow With Us → `https://be10x.com/grow-with-us/`
- Cancellation/Refund Policy → `https://be10x.in/refund-policy/`
- Privacy Policy → `https://be10x.in/privacy-policy/`
- Terms of use → `https://be10x.in/terms-of-use/`
- Guest Posting → `https://be10x.in/guest-posting/`
- Reviews → `https://be10x.com/reviews/`
- Trust and Safety → `https://be10x.com/trust-and-safety/`

### Social icons (5, in order): Facebook, Instagram, Twitter/X, LinkedIn, YouTube
Use `Facebook`, `Instagram`, `Twitter`, `Linkedin`, `Youtube` icons from `lucide-react`, small (~20px), dark/black color, simple circular or plain icon links, links can point to `"#"` (real social URLs weren't captured live and are out of scope to guess).

### Copyright
"Copyright © 2026 Be10x. All right reserved" — centered, smaller/muted text below the social icons.

## Computed Styles (approximate — exact values were inconclusive in live extraction due to nested wrapper transparency; use these as faithful defaults matching the screenshot)
- Background: white (`#ffffff`) or very light gray.
- Link text: `font-size: 15-16px`, color `#000000` or dark gray, moderate horizontal gap between items (~20-24px), wraps to multiple lines on mobile, centered.
- Social icons: `~20px`, dark/black, gap ~16px between them, centered row.
- Copyright: smaller text (~14px), muted gray, centered, below the social row with some top margin.
- Section padding: generous vertical padding (`py-8` to `py-12`).

## Text Content (verbatim)
See links and copyright above — use exactly as written (note: "All right reserved" — not "rights" — matches the live site's actual grammar, keep as-is for fidelity).

## Responsive Behavior
- **Desktop (≥768px):** single row of links (may wrap if too many), centered.
- **Mobile (≤767px):** links wrap into multiple centered rows, reduce font size slightly, keep social icons and copyright centered below.
