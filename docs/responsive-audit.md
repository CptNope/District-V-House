# Responsive audit: index.html

Measured in a real browser at 320×568, 360×740, 375×812, 390×844, 414×896, 768×1024, 820×1180, 1024×768, 1280×720/800, 1440×900, 1920×1080 and 844×390 (phone landscape). Checks: horizontal overflow, elements outside the viewport, clipped headings, smallest font size, tap targets under 44px, line length, and whether Get directions is reachable from the first screen.

## Found and fixed
| Finding | Fix |
|---|---|
| No navigation below 1080px | Menu button with a full-width dropdown (Esc closes, links close it) |
| Get directions below the fold on phones and phone landscape | Fixed Directions / Call dock that appears whenever the window's Get directions button is not fully visible and the Visit band is off screen |
| Contact links 30px tall | 44px minimum |
| Nav links under 44px wide | 44px minimum width |
| Labels at 11.2–11.5px | 12px minimum |
| "10 am" breaking across lines | Non-breaking space in times |
| Location line rules wrapping on phones | Rules hidden under 820px |

## Result
No horizontal overflow and no clipped headings at any tested size. The first screen shows the name, the season's photos, today's hours and Get directions at every desktop and tablet size; on phones the dock covers it. Remaining detector notes are intentional: the decorative "V" watermark (aria-hidden), tight line-height on display type, and padding the static checker cannot resolve.
