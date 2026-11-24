#!/usr/bin/env python3
"""Generate design-system/tokens.css from design-system/tokens.json (one block per season)."""
import json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
t = json.loads((root / "design-system/tokens.json").read_text())
themes = [th["id"] for th in t["color"]["themes"]]
out = ["/* District V House — generated from tokens.json by scripts/build-tokens-css.py. Do not edit by hand. */"]
for i, th in enumerate(themes):
    sel = (":root, " if i == 0 else "") + f'[data-season="{th}"]'
    out.append(sel + " {")
    for tok in t["color"]["tokens"]:
        out.append(f"  --{tok['name']}: {tok['value'][th]};")
    out.append("}")
out.append(":root {")
for fam, val in t["type"]["families"].items():
    out.append(f"  --font-{fam}: {val};")
for group in ("spacing", "radius", "shadow"):
    for tok in t[group]["tokens"]:
        out.append(f"  --{tok['name']}: {tok['value']};")
out.append("}")
(root / "design-system/tokens.css").write_text("\n".join(out) + "\n")
print("wrote design-system/tokens.css")
