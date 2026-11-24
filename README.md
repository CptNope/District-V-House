# District V House

Website redesign pitch, brand book and design system for **District V House**, the designer-run vendor collective home store in the historic Manchaug Company Store, 356 Manchaug Road, Sutton, MA, and its sister studio District V Design.

By [Jeremy Anderson Tech](https://jeremyanderson.tech).

| | |
|---|---|
| **Site** | [`index.html`](index.html), a single self-contained page |
| **Brand book** | [`brand/`](brand/index.html), with live component previews and the full photo library |
| **Design system** | [`design-system/`](design-system): `tokens.json` (source), `tokens.css` (generated), `README.md` (brand book), `components/`, `cover/` |
| **Docs** | [`docs/`](docs): product brief, DESIGN.md, direction contract, content audit, responsive audit, WordPress notes |
| **Photos** | [`assets/photos/`](assets/photos): the store's own photos, synced from its GoDaddy site |

## GitHub Pages

Settings → Pages → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**. The site is served at `https://cptnope.github.io/District-V-House/` and the brand book at `/brand/`.

Both pages carry `<meta name="robots" content="noindex">` so the pitch doesn't compete with the store's real site in search. Remove it if this becomes the live site.

## Photos

`.github/workflows/fetch-photos.yml` downloads every photo listed in `assets/photos/manifest.tsv` from the store's GoDaddy image CDN into `assets/photos/` (1600px wide) and rewrites the pages to use the local copies. It runs automatically when the manifest, scripts or workflow change on `main`, or manually from **Actions → Sync District V House photos → Run workflow**. Until it has run, the pages load the photos from GoDaddy, so nothing breaks.

To run it locally instead:

```sh
./scripts/fetch-photos.sh && python3 scripts/localize-photos.py
```

## Seasons

The site picks a season from the date in Eastern time (Holiday Nov–Dec, Winter Jan–Mar, Garden Apr–Jul, Harvest Aug–Oct); visitors can switch with the swatches. Colors come from `design-system/tokens.json`. After editing it, run `python3 scripts/build-tokens-css.py`. The site inlines its own copy of the tokens, so update `index.html` too.

Photos © District V House. Design and code © Jeremy Anderson Tech.
