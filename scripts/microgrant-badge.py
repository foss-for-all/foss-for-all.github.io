# Usage: python3 scripts/microgrant-badge.py YEAR LOGO.svg > static/badges/microgrants-YEAR.svg
# shields.io only places a logo on the label side; this moves it before the message.
import base64, re, sys, urllib.request

year, logo = sys.argv[1:3]
url = f"https://img.shields.io/badge/funded%20by-Microgrants%20{year}-2979ff"
req = urllib.request.Request(url, headers={"User-Agent": "curl/8"})
s = urllib.request.urlopen(req).read().decode()
uri = "data:image/svg+xml;base64," + base64.b64encode(open(logo, "rb").read()).decode()

total = int(re.search(r'<svg[^>]* width="(\d+)"', s)[1])
lw = int(re.search(r'<rect width="(\d+)" height="20" fill="#555"/>', s)[1])
shift = 17
s = s.replace(f'width="{total}" height="20" role', f'width="{total + shift}" height="20" role', 1)
s = s.replace(f'<rect width="{total}" height="20" rx="3"/>', f'<rect width="{total + shift}" height="20" rx="3"/>')
s = s.replace(f'<rect x="{lw}" width="{total - lw}" height="20"', f'<rect x="{lw}" width="{total - lw + shift}" height="20"')
s = s.replace(f'<rect width="{total}" height="20" fill="url(#s)"/>', f'<rect width="{total + shift}" height="20" fill="url(#s)"/>')
mx = max(int(x) for x in re.findall(r'<text x="(\d+)"', s))
s = s.replace(f'<text x="{mx}"', f'<text x="{mx + shift * 10}"')
s = s.replace('<g transform="scale(.1)">', f'<image x="{lw + 4}" y="3" width="14" height="14" href="{uri}"/><g transform="scale(.1)">', 1)
sys.stdout.write(s)
