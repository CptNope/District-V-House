# Notes for the WordPress FSE block theme

- **theme.json**: put the Holiday season in the base palette and Winter, Garden and Harvest in `styles/*.json` style variations, using the token names in `design-system/tokens.json` (`glass`, `glass-2`, `sash`, `leaf`, `shade`, `ornament`, `on-ornament`, `frost`, `mist`). For automatic seasonal switching, add a tiny plugin that sets `data-season` on `<html>` by month, or schedule the active style variation.
- **Fonts**: Gloock and Hanken Grotesk via `fontFace` in theme.json (self-hosted).
- **Patterns**: window hero (transom + 3 panes + bulkhead), season band, collective, studio, events list, visit band. Panes and captions should be editable per season.
- **Events**: a simple Events post type (date, time, blurb) feeding the "Christmas at House" list, so Jamie can post Small Business Saturday etc. without editing a page.
- **Hours**: one source (an options page or block binding) feeding the OPEN sign, the Visit table and schema.org `openingHoursSpecification`. Update Google Business Profile to match.
- **Photos**: import `assets/photos/` into the media library; do not hotlink GoDaddy.
- **Forms & policies**: contact form, Privacy Policy and Terms pages, vendor wait-list form (or keep it on Instagram).
- **Plugins**: run the usual stack (JAT Site Shield, JAT WCAG AA, JAT Search Intel). Remove the pitch's `noindex`.
- **Domains**: fix DNS/SSL for districtvhouse.com and redirect districtvdesign.com to it.
