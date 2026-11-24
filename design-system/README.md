# District V House

The brand book and design system for **District V House**, the vendor-based home store in the original Manchaug village store at 356 Manchaug Road, Sutton, MA, and its sister studio **District V Design**, Jamie Harrity Burke's interior design practice.

Built as a website pitch by Jeremy Anderson Tech (November 2026). Facts and photos come from District V House's own site (districtvhouse.com), Instagram and press. The four seasons are design proposals; Jamie decides them.

Tagline (hers): **A little unexpected. A lot extraordinary.**

## The idea: the shop window

The site works like the storefront of an 1800s village store seen at dusk: a **transom** with sign-painted gilt lettering, lit **display panes** divided by thick **sash** bars, and a painted **bulkhead** under the window that holds the hours and the door. Jamie restyles the whole floor every season, so the window gets repainted every season too.

It deliberately refuses two looks: cream-and-script farmhouse, and cold white luxury minimalism. The store is maximalist, warm and a little bit city.

## Who we are (content fundamentals)

- **District V House**: a curated, vendor-based home lifestyle store selling antique, vintage, old, new, handmade and artisan home decor, accessories and furniture. Open-plan and restyled every season.
- **The V**: Worcester's District 5, where Jamie was born and raised. Always explain it once on a page that introduces the brand.
- **The collective**: nearly all vendors are women-owned small businesses. Vendors refresh their spaces weekly. Jamie's line: "Alone we are but one drop. Together we are an ocean."
- **District V Design**: residential and commercial interior design. Jamie is self-taught and has been designing since she was four or five.
- **Place**: the historic Manchaug Company Store, overlooking the Mumford River in the 1800s mill village of Manchaug, Sutton, Massachusetts. The building is a store again, its original use. A destination store one mile from Route 146, near 290 and 395.
- **Christmas**: the store's biggest season. Every room is themed (2026: the North Pole), with a Wreath Bar and weekend Après Shop drinks from 20 Hudson St. Beverage Trailer. 2026 is its fifth Christmas.

### Fact sheet (keep identical everywhere)

| | |
| --- | --- |
| Address | 356 Manchaug Road, Sutton, MA 01590 (mailing: P.O. Box 507) |
| Hours | Thursday–Saturday 10 am–5 pm · Sunday 11 am–4 pm · Closed Monday–Wednesday |
| Phone | (774) 314-0022 |
| Email | districtvdesign@gmail.com |
| Social | Instagram @districtvhouse · Facebook "District V HOUSE" · Pinterest districtvdesign |
| Signature event | The Manchaug Stroll, every December (2026: Sat Dec 12), 4–8 pm, free, with Vaillancourt Folk Art, Sutton Historical Society and Sutton Fire Department |
| 2026 holiday events | Christmas Open House Oct 31 · Small Business Saturday Nov 28, 10–5 · Après Shop every Sat & Sun until Christmas · Chain of Lights Dec 5, 10–4 · Manchaug Stroll Dec 12, 4–8 |
| Vendors | At max capacity, wait list of 200+. Home decor and home lifestyle only, active Instagram required, no multi-level marketing. Application in the Instagram bio. |
| Own product | District V Designer Wall Decals (Atomic Star, Penny, Drip Drop): two sheets of 24, $50 |

Hours also live in the site's schema.org data. The GoDaddy site's machine-readable data and its map widget show Monday–Friday 9–5, which is wrong. Change hours everywhere at once (site, schema, Google Business Profile).

## Voice

Warm, direct, a little bit city. Talk like Jamie on the shop floor, not like a catalog.

- Say: "Come shop." · "Never the same store twice." · "Born in District 5." · "One floor, a whole collective."
- Short declaratives. Concrete nouns (tins, lamps, china, wreaths) over adjectives (charming, curated, timeless).
- Credit vendors by name when they are confirmed.
- Never invent vendors, prices, reviews, event dates or "best in" claims. When a date isn't set, say where it will be announced (Instagram).
- Avoid farmhouse clichés ("gather", "blessed", "live laugh love") and luxury-speak ("elevated", "bespoke curation").

## Visual foundations

### Colour: the season is the palette

Every color token has four themes: **Holiday** (Nov–Dec), **Winter** (Jan–Mar), **Garden** (Apr–Jul) and **Harvest** (Aug–Oct). The site picks the season from the date and lets visitors restyle it.

- `glass` is the dominant ground; `glass-2` is the bulkhead and cards.
- `sash` draws every mullion between panes and sections. Mullions are layout, not decoration: sections are separated by a `mullion`-wide sash bar, never by a thin line. No hairline rules, keylines or outlined boxes anywhere (real tables excepted).
- `leaf` is gilt: lettering, primary buttons, 1px keylines inside panes, and the gold Visit band.
- `ornament` carries one full-width band per page (the season band) and the OPEN sign. Text on it is always `on-ornament`.
- `frost` is body text on glass and the light ground for the Collective section; `mist` is secondary text on glass.
- Strategy: committed. Colour fills whole regions edge to edge. No gradients except the glass reflection on photo panes and the warm glow at the bottom of the transom.

### Type

- **Gloock** (`display`) is the sign-painter's gilt. It matches the high-contrast serif of the HOUSE badge. Use it for the arched name, headings, pane captions, quotes and status lines. No italics.
- **Hanken Grotesk** (`text`) for everything set: body, buttons, labels, tables.
- Gilt lettering = `leaf` fill + a 1px lighter top keyline + `gilt-shade` drop shade in the season's `shade`. Only on dark grounds (`glass`, `glass-2`, photos with the glass scrim). The painted shade is the one shadow in the system; surfaces, buttons and signs are flat.
- Sentence case everywhere. No tracked uppercase labels and no eyebrow labels above headings; nothing meant to be read is under 13px.
- Numbers in hours tables use tabular figures.

### Layout

- The page is one storefront: header sash → transom → three panes → bulkhead → full-width bands, each separated by a `mullion` sash bar.
- The first viewport always shows the name, the season's panes, today's hours and **Get directions**.
- Desktop panes are 1.35 : 1 : 1. On phones they become a horizontal, snap-scrolling row.
- Side margin `gutter`, band padding `section`, both fluid.

### Photography

- Jamie's own floor and window photos, shot at dusk or with the store lights on, warm white balance, full of objects. One subject per pane.
- Each pane gets a gilt caption painted low on the glass, over a `glass` scrim.
- The pitch uses District V House's own photos, currently hotlinked from the GoDaddy image CDN (img1.wsimg.com). Download the originals into the WordPress media library before the GoDaddy site is cancelled, or they will disappear.
- Avoid: empty white product cut-outs, stock people posing, flat-lay mockups.

### Iconography

Line icons, 24px grid, 1.8px stroke, round joins, `currentColor`. Pin, phone, mail, arrow, camera. No emoji, no filled icon tiles, no third-party brand logos (spell out "Instagram", "Facebook").

### Logo

The black-and-white badge (small DISTRICT V over a large serif HOUSE between two rules) is the logo. Current file: `https://img1.wsimg.com/isteam/ip/d721429c-11dc-4b02-8fed-165d735cdef7/District-3.png` (black on white). On dark grounds use it on a white disc with 5px padding. Never recolor it to gilt or place it on glass without the disc. Ask Jamie for a vector (SVG) master for the WordPress build.

### Motion

One authored moment, plus quiet entrances (section parts rise 26px and fade in once, 75ms apart) and a one-time settle of the window photos on load. When the season changes, the window's lights go down, the floor is restyled, and the lights come back up (about 1.4 s, ease-out). The hanging sign swings once on load. Both are off under `prefers-reduced-motion`.

### Accessibility

Body text is 4.5:1 or better on its ground in every season. Gilt and frost on glass are 8:1 or better. The OPEN sign text is announced politely. Focus rings are two-tone (3px `sash` outline plus a 2px `leaf` ring) so they show on dark, light and gold grounds. Tap targets are 44px or more.

## Components

Button (gilt, line, dark) · OpenSign (live hanging sign) · PriceTag (string tags for the collective) · GiltLettering · SeasonSwatch. See each card for usage.
