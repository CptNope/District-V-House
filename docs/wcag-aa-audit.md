# WCAG 2.2 AA audit

Scope: `index.html` (all four seasons) and `brand/index.html`, at 1440×900 and 390×844, plus 320px reflow. Run 2026-11-24.

Tools: axe-core 4.14.1 in headless Chrome (rule tags wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice); scripted keyboard, text-spacing, reflow, reduced-motion and no-JavaScript checks; pixel-level contrast measurement for text over photographs. Not covered: testing with a real screen reader (NVDA, VoiceOver). Do that once before launch.

## Result

| Page | Before | After |
|---|---|---|
| Homepage, 8 runs (4 seasons × 2 widths) | 1–3 violations per run | **0 violations** in every run |
| Brand book, 2 runs | 2 violations per run | **0 violations** |

## Fixed

| WCAG | Issue | Fix |
|---|---|---|
| 1.4.3 Contrast (minimum) | Season swatch labels 3.6–4.4:1 in Winter and Garden. The month line was faded, and the pressed swatch darkened its background. | Full-opacity text; the pressed state is a ring on the colour chips, so the background never changes. |
| 2.5.3 Label in name | Logo link's accessible name ("District V House home") didn't contain its visible text. | Name now comes from the visible text. On phones the text is visually hidden, not removed, so the link keeps a name. |
| 2.1.1 Keyboard | Phone photo strip was a scroll area keyboard users couldn't reach. | Strip replaced by a grid (no scrolling region). |
| 1.3.1 / best practice | Phone action dock outside any landmark. | It is now an `<aside aria-label="Quick actions">`. |
| 2.4.11 Focus not obscured (minimum) | On phones the fixed dock could cover the focused element. | Focus is scrolled clear of the dock, and `scroll-padding-bottom` is set. Re-tested: no focused element hidden. |
| 1.4.11 Non-text contrast / 2.4.7 Focus visible | Gold focus ring nearly invisible on the gold Visit band and the frost Collective band. | Two-tone ring (3px dark outline + 2px gold) on every ground. Brand book preview frames show a ring when focused. |
| 1.4.12 Text spacing | With WCAG spacing applied, the Menu button pushed the page 28px wider at 390px. | Header wraps; no overflow. |
| 1.3.1 Info and relationships | Brand book: empty table header cell. | Labelled "Scale" for screen readers. |
| 1.3.1 / best practice | Brand book cover content outside any landmark. | The cover is a labelled region. |
| 1.1.1 Non-text content | Brand book photo library used file names as alt text. | Each photo described ("Red plaid sofa with pillows, District V House"). |
| 4.1.2 / heading structure | The `h1` was hidden text, and the visible title was an image with its own label (read twice). | The arched title is the `h1`; its painted shade is a filter, not a second copy of the text. |
| 3.2.5 (advisory) | Links opening a new tab gave no warning. | Each has hidden text "(opens in a new tab)". |

## Manual checks (pass)

- **Text over photos (1.4.3):** for each window caption, in each season, at both widths, the photo pixels behind the caption were sampled with the caption hidden. The lowest 5th-percentile contrast against the gilt colour was **5.1:1** (median 6–11:1). Captions are 17–30px display text, which needs 3:1.
- **Keyboard (2.1.1, 2.4.3, 2.4.7):** skip link first, then logo, nav, OPEN sign, Get directions, call, season swatches, and on in reading order. Every stop shows a focus ring. Menu button: `aria-expanded`, closes on Escape and returns focus.
- **Reflow (1.4.10):** no horizontal scrolling at 320px.
- **Reduced motion (2.3.3):** with `prefers-reduced-motion: reduce`, no entrances or swing run and all content is visible.
- **Pause, stop, hide (2.2.2):** every animation runs once and ends within 2.4 seconds; nothing loops.
- **No JavaScript:** all content visible. Hours fall back to the static text.
- **Target size (2.5.8):** controls are 44px or more, apart from inline text links.
- **Language and title (3.1.1, 2.4.2):** `lang="en"`; descriptive page titles.

## Needs human review

axe marks the window captions and the arched title "needs review" because they sit on photographs or are drawn in SVG. The pixel measurements above cover them. Re-measure if Jamie's photos are swapped for much lighter ones.
