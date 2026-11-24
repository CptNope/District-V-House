# DESIGN.md — District V House

World: the storefront of the 1800s Manchaug village store at dusk. Transom with gilt sign-painted lettering, three lit display panes in thick sash mullions, a painted bulkhead holding hours and the door. Repainted every season. Source of truth for tokens: `.impeccable/design.json` (mirrors the "District V House" Design System artifact).

## Color (committed; four season themes)
| token | holiday | winter | garden | harvest | role |
|---|---|---|---|---|---|
| glass | #0D2A24 | #0F1D33 | #0C3A3A | #2A1512 | dominant ground |
| glass-2 | #163D34 | #1A2C49 | #145050 | #3D1F19 | bulkhead, cards |
| sash | #06110E | #070C16 | #042020 | #140908 | mullions, header, footer |
| leaf | #DDB65C | #CBD4DF | #E8C25E | #E09A4C | gilt, primary, Visit band |
| shade | #6B4A16 | #4A5568 | #6E5212 | #6A3A12 | gilt drop shade only |
| ornament | #B0142F | #3E8FB8 | #E0507A | #E4B23A | season band, OPEN sign |
| on-ornament | #F3F5F2 | #06101C | #1B0710 | #1E0E05 | text on ornament |
| frost | #EFF3F0 | #F0F3F7 | #F0F5F2 | #F4F0EC | body on glass; Collective ground |
| mist | #AFC4BB | #A9B6C8 | #A3C6C1 | #CFB6A6 | secondary on glass |
Season auto-selected by month in America/New_York; visitors can restyle via the season swatches.

## Type
Gloock (gilt display: arch 116, display up to 96, headings 64, quote 32, captions 30) · Hanken Grotesk (lede 20/29, body 17/27, small 15, button 16/600, caps labels 12.5/600 tracked). No italics, no eyebrows, no gradient text.

## Layout & components
Mullion 14px (fluid 8–14) separates every pane and section. Gutter 72 (fluid 20–72), band padding 112 (fluid 48–112). Radii 2/3/4. Components: Button (gilt/line/dark), OpenSign (live hours), PriceTag, GiltLettering (SVG textPath arch), SeasonSwatch. Icons: 24px line, 1.8 stroke.

## Motion
Season change: panes dim (brightness .18) → theme + photos swap → lights up; color tokens transition 0.9s via @property. Sign swings once on load. All off under prefers-reduced-motion.

## Imagery provenance
All photos and the HOUSE badge logo are District V House's own, hotlinked from its GoDaddy image CDN (img1.wsimg.com, folder d721429c-…). Move them into the WordPress media library before the GoDaddy site is cancelled.
