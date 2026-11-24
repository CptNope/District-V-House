# District V House

Website redesign pitch, brand book and design system for **District V House**, the designer-run vendor collective home store in the historic Manchaug Company Store, 356 Manchaug Road, Sutton, MA, and its sister studio District V Design.

By [Jeremy Anderson Tech](https://jeremyanderson.tech).

| | |
|---|---|
| **Overview** | [`index.html`](index.html): the pitch landing page, with what's wrong today, a map of every piece of her current content, and audit results |
| **Example site** | [`site/`](site/index.html): Home, Christmas at House, The Shop, Vendors, Privacy, Terms; shared `site.css` and `site.js` |
| **Brand book** | [`brand/`](brand/index.html): story, voice, logo, photography and the full photo library |
| **Design system** | [`design-system/`](design-system/index.html): HTML reference (color, type, layout, live components) plus `tokens.json` (source), `tokens.css` (generated), `README.md`, `components/`, `cover/` |
| **Docs** | [`docs/`](docs): product brief, DESIGN.md, direction contract, content audit, responsive audit, [design taste audit](docs/design-taste-audit.md), [WCAG 2.2 AA audit](docs/wcag-aa-audit.md), WordPress notes |
| **Fonts** | [`assets/fonts/`](assets/fonts): Gloock and Hanken Grotesk, self-hosted (SIL OFL) |
| **Photos** | [`assets/photos/`](assets/photos): the store's own photos, synced from its GoDaddy site |

## GitHub Pages

Settings → Pages → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**. The overview is served at `https://cptnope.github.io/District-V-House/`, the example site at `/site/`, the brand book at `/brand/` and the design system at `/design-system/`.

Every page carries `<meta name="robots" content="noindex">` so the pitch doesn't compete with the store's real site in search. Remove it if this becomes the live site.

## Photos

`.github/workflows/fetch-photos.yml` downloads every photo listed in `assets/photos/manifest.tsv` from the store's GoDaddy image CDN into `assets/photos/` (1600px wide) and rewrites the pages to use the local copies. It runs automatically when the manifest, scripts or workflow change on `main`, or manually from **Actions → Sync District V House photos → Run workflow**. Until it has run, the pages load the photos from GoDaddy, so nothing breaks.

To run it locally instead:

```sh
./scripts/fetch-photos.sh && python3 scripts/localize-photos.py
```

## Seasons

The site picks a season from the date in Eastern time (Holiday Nov–Dec, Winter Jan–Mar, Garden Apr–Jul, Harvest Aug–Oct); visitors can switch with the swatches. Colors come from `design-system/tokens.json`. After editing it, run `python3 scripts/build-tokens-css.py`. The example site keeps its own copy of the season tokens in `site/site.css`, so update that too.

Photos © District V House. Design and code © Jeremy Anderson Tech.
