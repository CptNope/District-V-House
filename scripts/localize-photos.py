#!/usr/bin/env python3
"""Point every HTML page at the local copies in assets/photos/ instead of GoDaddy's CDN.
Only rewrites a URL when the matching local file exists, so it is safe to run any time."""
import pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
photos = root / "assets" / "photos"
base = r"https://img1\.wsimg\.com/isteam/ip/d721429c-11dc-4b02-8fed-165d735cdef7/"
size = r"(?:/:/rs=w:\d+(?:,h:\d+)?(?:,cg:true)?,m(?:/cr=w:\d+,h:\d+)?)?"
changed = 0
for page in list(root.glob("*.html")) + list(root.glob("*/*.html")) + list(root.glob("*/*/*/*.html")):
    text = page.read_text(encoding="utf-8")
    prefix = "../" * (len(page.relative_to(root).parts) - 1) + "assets/photos/"
    def one(m):
        local = m.group(1).replace("%20", "-")
        return prefix + local if (photos / local).exists() else m.group(0)
    new = re.sub(base + r"([A-Za-z0-9_.%\-]+)" + size, one, text)
    # the season switcher builds URLs from a template: switch it once every season photo is local
    tpl = base.replace("\\", "") + "${f}/:/rs=w:1100,m"
    if tpl in new and all((photos / n.replace("%20", "-")).exists() for n in re.findall(r"\['([^']+\.(?:jpe?g|png))'", new)):
        new = new.replace("`" + tpl + "`", "`" + prefix + "${f.replace(/%20/g, '-')}`")
    if new != text:
        page.write_text(new, encoding="utf-8"); changed += 1; print("localized", page.relative_to(root))
print("pages changed:", changed)
