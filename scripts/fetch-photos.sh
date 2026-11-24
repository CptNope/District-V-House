#!/usr/bin/env bash
# Downloads District V House's own photos from her GoDaddy image CDN into assets/photos/,
# resized to 1600px wide. Safe to re-run: existing files are skipped.
set -euo pipefail
cd "$(dirname "$0")/.."
BASE="https://img1.wsimg.com/isteam/ip/d721429c-11dc-4b02-8fed-165d735cdef7"
ok=0; fail=0
while IFS=$'\t' read -r local remote; do
  [[ -z "$local" || "$local" == \#* ]] && continue
  out="assets/photos/$local"
  if [[ -s "$out" ]]; then ok=$((ok+1)); continue; fi
  if curl -fsSL --retry 3 -A "Mozilla/5.0 (photo sync for District V House site)" \
       -o "$out.tmp" "$BASE/$remote/:/rs=w:1600,m"; then
    mv "$out.tmp" "$out"; ok=$((ok+1)); echo "ok   $local"
  else
    rm -f "$out.tmp"; fail=$((fail+1)); echo "FAIL $local" >&2
  fi
done < assets/photos/manifest.tsv
echo "downloaded/present: $ok  failed: $fail"
[[ $fail -eq 0 ]]
