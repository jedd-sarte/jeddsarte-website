from pathlib import Path

p = Path('case-studies/index.html')
text = p.read_text(encoding='utf-8')

old_meta = '<meta name="description" content="Real paid media results for U.S. law firms, solar companies, and e-commerce brands. Google Ads, Meta Ads, and full-funnel campaign case studies by Jedd Sarte."/>'
new_meta = '<meta name="description" content="Open paid media case studies by Jedd Sarte across legal, e-commerce, and real estate, covering Google Ads, Meta Ads, tracking, search governance, and acquisition strategy."/>'
if text.count(old_meta) != 1:
    raise SystemExit(f'Expected one legacy meta description, found {text.count(old_meta)}')
text = text.replace(old_meta, new_meta, 1)

# Remove CSS for the old decorative filters now that the filter bar is gone.
css_start = text.find('.filter-bar{')
css_end = text.find('#cases{', css_start)
if css_start == -1 or css_end == -1:
    raise SystemExit('Old filter CSS markers not found')
text = text[:css_start] + text[css_end:]

for forbidden in ['gate-form', 'Unlock all 7', 'cs-card gated', 'filter-bar', '3 free - 7 unlockable']:
    if forbidden in text:
        raise SystemExit(f'Stale portfolio-gate text remains: {forbidden}')

required = [
    './pi-law-firm/',
    './b2b-corporate-law/',
    './complex-litigation/',
    './ecommerce/waxit-car-care-australia/',
    './real-estate/zahlco-real-estate-maryland/',
]
for href in required:
    if f'href="{href}"' not in text:
        raise SystemExit(f'Missing published case study link: {href}')

if text.count('Read full case study →') != 5:
    raise SystemExit(f'Expected 5 open case-study read links, found {text.count("Read full case study →")}')

p.write_text(text, encoding='utf-8')
print('Final case-study hub QA passed.')
