# YoutubeShowcase Specification

## Overview
- **Target file:** `src/components/YoutubeShowcase.tsx`
- **Interaction model:** click-to-play (lazy embed pattern); static layout otherwise.

## DOM Structure
White background section. Centered "Best of Be10X on YouTube" H2 heading (`font-size: 40px`, color `#000000`). Below: two-column layout —
- Left (larger): primary video, shown as a lite-embed placeholder (thumbnail image with center play button, small circular channel avatar + clock/duration icon overlay bottom-left, "Watch on YouTube" pill bottom-right) that becomes a real `<iframe>` on click.
- Right (sidebar): "@be10x · 9 Videos" header, then a vertically scrollable list of video rows (thumbnail + title + duration), each row clickable to swap the main video.

## Computed Styles
- Heading: `font-size: 40px`, centered, color `#000000`.
- Main video area: large rounded rectangle (`rounded-2xl`), ~16:9 aspect ratio, dark background before play.
- Sidebar header: "@be10x" bold + "9 Videos" lighter, small icon row.
- Sidebar list rows: thumbnail (~small, ~80x45px, rounded), title (2-line clamp, ~14-16px), duration badge (small, bottom-right of thumbnail or inline after title, muted color).

## Video List (7 real videos captured live, use in this order — first one is the default/primary video)
1. "10 Tips & Tricks For ChatGPT" — 31:44 — thumbnail `public/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg` (primary/default video)
2. "Top 5 AI Tools To Make Money" — 17:13
3. "5 Insane AI Tools To 10X Productivity" — 11:26 — thumbnail `public/images/be10x/5-insane-ai-tools-to-10x-product-195.jpg`
4. "From Fired to Hired: My AI Job..." — 7:29
5. "How To Crack Job Interviews..." — 13:19
6. "Content Engine with ChatGPT" — 6:51
7. "Start a Faceless YouTube Channel" — 7:03

For items without a captured thumbnail filename, reuse `public/images/be10x/Red-Abstract-YouTube-Thumbnail-2.jpg` or `public/images/be10x/PowerBI-2.jpg` as generic placeholders (already downloaded, real be10x assets) rather than fabricating new ones — distribute them so it doesn't look obviously repetitive if possible.

Channel: "@be10x", total "9 Videos" (only 7 titles were captured live in the visible list; render "9 Videos" as the label text regardless, since that's the real site's channel video count label, even though only 7 rows are populated with real titles — do not fabricate 2 additional fake titles).

## States & Behaviors
- **Click-to-play:** the main video area starts as a static thumbnail + play button overlay (lite-embed pattern — do NOT eagerly load a real YouTube iframe). On click, swap to a real `<iframe>` — but since no real YouTube video IDs were captured for these specific videos, and fabricating fake video IDs would break/embed nothing real, implement this as: on click, show a `cursor-pointer` state change (e.g., toggle a "loading"/"playing" visual placeholder, or simply keep it as an honest decorative interaction). Do not invent YouTube video IDs.
- **Sidebar row click:** clicking a sidebar row should visually set it as "active"/highlighted and swap the main thumbnail to match (this is safe to implement fully since it's just swapping which local thumbnail/title is "selected", no fake embed needed).

## Assets
- `public/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg` (primary video thumbnail)
- `public/images/be10x/5-insane-ai-tools-to-10x-product-195.jpg`
- `public/images/be10x/Red-Abstract-YouTube-Thumbnail-2.jpg`
- `public/images/be10x/PowerBI-2.jpg`
- `public/images/be10x/be10x-logowhite-2.png` (small channel avatar badge)
- Icons: `Play`, `Clock` from `lucide-react`.

## Responsive Behavior
- **Desktop (≥1024px):** two-column layout, main video ~65-70% width, sidebar ~30-35%.
- **Tablet (768-1023px):** may keep two columns with reduced sidebar width, or stack — use judgment.
- **Mobile (≤767px):** single column — main video full-width on top, sidebar list below (not a fixed-height scroll panel on mobile, just a normal stacked list).
- **Breakpoint:** Tailwind defaults (`md:768px`, `lg:1024px`).
