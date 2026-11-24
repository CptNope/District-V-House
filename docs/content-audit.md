# Content audit: districtvhouse.com (GoDaddy Website Builder)

Captured 2026-11-23 from the live GoDaddy site (reachable only past a certificate warning) and search-index copies of the older districtvdesign.com pages.

## Problems on the current web presence (pitch points)

| Issue | Detail |
|---|---|
| Certificate error | `www.districtvhouse.com` and `districtvhouse.com` fail with ERR_CERT_COMMON_NAME_INVALID. Every visitor sees a security warning. |
| Old domain parked | `districtvdesign.com` shows a GoDaddy "parked free" page. It is still listed on Yelp, Facebook, Pinterest and directories. |
| Empty Shop page | `/shop` renders only the menu and footer: an online store with no products. |
| Wrong hours in data | GoDaddy's machine-readable data (llms.txt) and the map widget on /the-shop say Monday–Friday 9–5 / "Open today 9–5". Real hours: Thu–Sat 10–5, Sun 11–4. |
| Stale page | "Holiday's at House" only says "Holidays are coming! Stay tuned for our newest Holiday Collection 2026" while Christmas 2026 is already open. |
| Event posts in one long page | Small Business Saturday, Après Shop, the 5th Christmas Open House and the North Pole story are stacked on the home page with no dates on the posts themselves. |
| Accessibility | Viewport disables pinch zoom (`user-scalable=no`). |

## Pages and content inventory

**Home**: hours; address; "hidden gem" tagline; Upcoming Events (Small Business Saturday Nov 28 10–5 with gift with purchase and 20 Hudson St. Beverage Trailer; Après Shop every Sat & Sun until Christmas; Events list: Small Business Saturday Nov 28 10–5, Chain of Lights Dec 5 10–4, Manchaug Stroll Dec 12 4–8); "Christmas 2026 Has Arrived: Welcome to the North Pole" long-form story; Christmas Wreath Bar; "Best Christmas Shopping in New England"; 5th Annual Christmas Open House Oct 31 and the week-long closure before it; About Us / The Store (Manchaug Company Store, "being used as the original use", one mile from 146, near 290/395); tagline "A Little Unexpected. A Lot Extraordinary."; Privacy Policy, Terms and Conditions; a vendor-application popup.

**Vendors**: max capacity; 200+ wait list; application in the Instagram bio; vendors update spaces weekly; home decor / home lifestyle only (furniture, furnishings, art, accessories, plants, lighting, rugs, hardware, vintage, antique); must have an active Instagram; no MLM.

**The Shop**: "A One-of-a-Kind Shopping Destination in Sutton, Massachusetts"; inside the historic Manchaug Company Store overlooking the Mumford River; multi-vendor marketplace; "every room tells a different story"; small and exclusive group of vendors; photo gallery; contact form ("Drop us a line!"); map widget.

**Holiday's at House**: placeholder (see above). **Shop**: empty.

## Where each item lives in the new site

The example site is now multi-page, mirroring her navigation. The full section-by-section map is on the [overview page](../index.html) (live at https://cptnope.github.io/District-V-House/).

| Her page / content | Example site |
|---|---|
| Home: hours, address, directions | `site/` header OPEN sign (live), window bulkhead, Visit band, phone dock, schema.org data |
| Home: events, North Pole story, experience list, Wreath Bar, Why shop with us, holiday hours | `site/christmas.html` (full text), summary on `site/#stroll` |
| Home: Open House (Oct 31) and closure notice | `site/christmas.html` → "Earlier this season" (kept, marked past) |
| Home: About Us / The Store | `site/the-shop.html#about`, `site/#visit` |
| Vendors (all policy text) | `site/vendors.html`, summary on `site/#collective` |
| The Shop: text, 22-photo gallery, contact form, in person | `site/the-shop.html` (form composes an email to districtvdesign@gmail.com) |
| Holiday's at House | `site/christmas.html` |
| Privacy Policy, Terms | `site/privacy.html`, `site/terms.html` ("coming soon", as on her site) |
| Tagline | Every footer |
| Online shop (empty) | Not rebuilt. Decide with Jamie: WooCommerce or drop it |

## Still to confirm with Jamie
- Whether the District V Designer Wall Decals ($50, from the old districtvdesign.com shop) are still sold.
- Vendor names she wants credited (public sources name Birch Alley and The Modern Manor House).
- A vector (SVG) master of the HOUSE badge.
- Whether District V Design (interior design services) gets its own page or stays a section.
