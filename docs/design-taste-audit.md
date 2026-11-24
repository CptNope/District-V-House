# Design taste audit

Tool: tasteskill v2 (`lint.mjs` on the source, `inspect.mjs` in headless Chrome at 1440, 768 and 390px, then a look at every screenshot). Run 2026-11-24 on `index.html` and `brand/index.html`, fonts self-hosted so the measurements use the real faces.

## Result

| | Before | After |
|---|---|---|
| Source lint, homepage | 36 FAIL, 1 WARN | 0 FAIL, 0 WARN |
| Inspector, homepage | 16 FAIL, 6 WARN | 1 FAIL\*, 4 WARN |
| Inspector, brand book | 8 FAIL, 7 WARN | 2 FAIL\*, 5 WARN |

\* Remaining items are explained under "Kept on purpose" below.

## What changed

**Title and first screen**
- The page title was a screen-reader-only `h1` next to a separate SVG drawing. The arched gilt name is now the `h1` itself: one text node, with the painted shade done as a filter, so it is read once.
- Under the name, a plain line says what this is: "A designer's home store in Manchaug Village, Sutton, Massachusetts" (was tracked capitals).
- On phones the hours-and-directions bulkhead now sits directly under the name, so the first screen answers what, when, and how to get there. The photos follow.

**Ornament removed**
- Transom glow (radial gradient), glass reflection streak, the fade over the events photo.
- Gold 1px keylines inside every pane and card; the hairline under the header; rules between events, menu links and the decals block.
- Shadows on buttons, the logo ring and the hanging sign. Buttons are flat fills; the secondary button is a flat tone, not an outline.
- Tracked-uppercase micro-labels (route line, "Hours", "Get in touch", "& District V Design", the brand book's "Contrast"): now sentence case at readable sizes.
- Glow behind window captions, replaced by a stronger neutral scrim (the one allowed gradient).

**Layout**
- Phone window: the sideways-scrolling photo strip (read as clipped) became a grid: one wide photo, two half-width below. No text against the screen edge.
- Season swatches are no longer outlined boxes; the current season gets a ring on its colours and an underlined name.
- Header margins aligned to the window's inner edge.
- Decals block: name first, price as a figure, on a tinted surface instead of under a rule.

**Type**
- Nothing readable under 13px (was 11.2–12px in six places); running text 17px throughout (body measured 15.7px before).
- Fonts self-hosted (`assets/fonts/`), no Google Fonts request.

**Motion** (the page measured as static before)
- Each section's parts rise 26px and fade in once, 75ms apart, as they enter.
- The window photos settle from 107% to 100% once on load.
- Buttons press on click; nav links underline on hover.
- All of it is off under reduced motion, and nothing is hidden if scripts fail.

## Kept on purpose

| Finding | Why it stays |
|---|---|
| Text-shadow on gilt lettering | The painted drop shade is what makes gold leaf on glass read as sign painting. It is the brand's lettering style (see the brand book); it is the only shadow in the system. Checked with `--allow text-shadow`. |
| "No dominant element" at 1440px | The meter does not read text drawn in SVG. The arched name renders at roughly 100px across 980px of the first screen. |
| Margins 14px vs ~60px | The window frame runs edge to edge as one object, with its own 14px sash; the header aligns to the window's inner content. |
| No video | No honest clip exists yet. **Recommended:** one of District V House's own Instagram Reels of the North Pole rooms as a muted loop in the season band. |
| 18 font sizes | Partly real. The arched title, the hanging sign and the season swatches each need their own size. Worth consolidating in the WordPress build (target: display, heading, lead, body, small). |
| Phone dock covers text while scrolling | It is a sticky action bar (allowed). It hides itself whenever the window's own buttons or the Visit section are on screen, and never covers keyboard focus. |
| Brand book: card rows, monospace, no motion | It is a reference document: token names and hex values are real code, cards hold reference entries, and motion would get in the way of reading. |
| "Eyebrow" above "$50" / "Harvest" | False positives: a tag list or table row that happens to precede a larger element. |
