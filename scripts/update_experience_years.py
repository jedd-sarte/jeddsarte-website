from pathlib import Path

changed = []
replacements = 0

for path in Path('.').rglob('*.html'):
    if '.git' in path.parts:
        continue
    text = path.read_text(encoding='utf-8')
    original = text

    # Factual experience wording corrected by site owner.
    text = text.replace('6+ years of digital marketing experience', '7 years of digital marketing experience')
    text = text.replace('6+ years in digital marketing', '7 years in digital marketing')

    # Homepage visual stat uses split HTML markup rather than prose.
    if path.as_posix() == 'index.html':
        text = text.replace('<div class="stat-big">6<sup>+</sup></div>\n          <div class="stat-lbl">Years in Digital Marketing</div>', '<div class="stat-big">7</div>\n          <div class="stat-lbl">Years in Digital Marketing</div>')

    if text != original:
        replacements += original.count('6+ years of digital marketing experience')
        replacements += original.count('6+ years in digital marketing')
        if path.as_posix() == 'index.html' and '<div class="stat-big">6<sup>+</sup></div>' in original:
            replacements += 1
        path.write_text(text, encoding='utf-8')
        changed.append(path.as_posix())

# Guard against stale experience claims in HTML after update.
stale = []
for path in Path('.').rglob('*.html'):
    if '.git' in path.parts:
        continue
    text = path.read_text(encoding='utf-8')
    if '6+ years of digital marketing experience' in text or '6+ years in digital marketing' in text:
        stale.append(path.as_posix())

if stale:
    raise SystemExit('Stale 6+ year claims remain: ' + ', '.join(stale))
if not changed:
    raise SystemExit('No experience-year claims were updated; refusing empty change')

print(f'Updated {replacements} experience references in {len(changed)} HTML file(s):')
for p in changed:
    print(' -', p)
