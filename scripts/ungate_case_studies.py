from pathlib import Path
import re

BOOKING = "https://calendar.app.google/2RJj6td6D5g3GgfC7"


def replace_once(text, old, new, label):
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected exactly 1 match, found {count}")
    return text.replace(old, new, 1)


# 1) Rebuild the case-study hub around real, published pages only.
hub_path = Path("case-studies/index.html")
hub = hub_path.read_text(encoding="utf-8")

hub = replace_once(
    hub,
    "Real results from real clients across legal, solar, e-commerce, and creative verticals. Client names withheld per confidentiality agreements - the numbers speak for themselves.",
    "Selected paid media work across legal, e-commerce, and real estate. Every published case study below is open to read with no form or access gate.",
    "hub hero description",
)

old_stats = '''      <div class="hero-stats">
        <div class="hs"><div class="hs-num">10<span>+</span></div><div class="hs-lbl">Client campaigns</div></div>
        <div class="hs"><div class="hs-num">5</div><div class="hs-lbl">Verticals covered</div></div>
        <div class="hs"><div class="hs-num">1:7.4</div><div class="hs-lbl">Best CAC to LTV ratio</div></div>
        <div class="hs"><div class="hs-num">10,979</div><div class="hs-lbl">Conversions, single account</div></div>
      </div>'''
new_stats = '''      <div class="hero-stats">
        <div class="hs"><div class="hs-num">5</div><div class="hs-lbl">Published case studies</div></div>
        <div class="hs"><div class="hs-num">3</div><div class="hs-lbl">Published verticals</div></div>
        <div class="hs"><div class="hs-num">Google <span>+</span> Meta</div><div class="hs-lbl">Core paid media platforms</div></div>
        <div class="hs"><div class="hs-num">Open</div><div class="hs-lbl">No gated access</div></div>
      </div>'''
hub = replace_once(hub, old_stats, new_stats, "hub stats")

# Remove the decorative filter bar; it never filtered cards.
filter_start = hub.find('<div class="filter-bar">')
cases_start = hub.find('<section id="cases">', filter_start)
if filter_start == -1 or cases_start == -1:
    raise SystemExit("hub filter section markers not found")
hub = hub[:filter_start] + hub[cases_start:]

old_intro = '''    <div class="section-intro fade-up">
      <span class="eyebrow">3 free - 7 unlockable</span>
      <h2 style="color:var(--navy)">Full case breakdowns with strategy, math, and results.</h2>
      <p style="max-width:560px">The first three are open. Fill out the quick form below to unlock the remaining seven - no pitch, just access.</p>
    </div>'''
new_intro = '''    <div class="section-intro fade-up">
      <span class="eyebrow">Published case studies</span>
      <h2 style="color:var(--navy)">Full case breakdowns, open to read.</h2>
      <p style="max-width:620px">Browse the published work directly. No email gate, no unlock form, and no booking required to read the case studies.</p>
    </div>'''
hub = replace_once(hub, old_intro, new_intro, "hub section intro")

# Remove obsolete gated/form CSS and replace it with a simple portfolio CTA.
css_start = hub.find("/* GATED card */")
css_end = hub.find("footer{", css_start)
if css_start == -1 or css_end == -1:
    raise SystemExit("hub gated CSS markers not found")
cta_css = '''/* OPEN PORTFOLIO CTA */
#portfolio-cta{background:var(--navy);padding:68px 0;position:relative;overflow:hidden}
.portfolio-cta-inner{max-width:760px;margin:0 auto;text-align:center;position:relative;z-index:1}
.portfolio-cta-inner h2{color:var(--white);margin:0 auto 12px}
.portfolio-cta-inner p{color:rgba(255,255,255,.55);max-width:620px;margin:0 auto 24px;font-size:.95rem}
.portfolio-btn{display:inline-block;background:var(--gold);color:var(--navy);padding:12px 22px;border-radius:8px;text-decoration:none;font-family:'Space Grotesk',sans-serif;font-size:.88rem;font-weight:800}
.portfolio-btn:hover{background:var(--gold-light)}

'''
hub = hub[:css_start] + cta_css + hub[css_end:]

# Replace the seven teaser cards + gate form with the two other real case studies.
gated_start = hub.find("      <!-- GATED 4: Motorcycle PI -->")
footer_start = hub.find("<footer>", gated_start)
if gated_start == -1 or footer_start == -1:
    raise SystemExit("hub gated-card/footer markers not found")

open_cards = '''      <!-- OPEN 4: Waxit Car Care -->
      <a href="./ecommerce/waxit-car-care-australia/" class="cs-card fade-up">
        <div class="cs-thumb">
          <div class="cs-thumb-bg" style="background:linear-gradient(135deg,#11141B 0%,#27212A 100%)"></div>
          <div class="cs-thumb-glow"></div>
          <div class="cs-vertical-tag">E-commerce</div>
          <div>
            <div class="cs-metric">26.6K<span>+</span></div>
            <div class="cs-metric-sub">search terms classified</div>
          </div>
        </div>
        <div class="cs-body">
          <div class="cs-tags"><span class="cs-tag">Google Ads</span><span class="cs-tag">Performance Max</span><span class="cs-tag">Search Governance</span></div>
          <h3>Waxit Car Care Australia - Search-Term Governance Under Live Budget Pressure</h3>
          <p>A documented rule-based query classification and negative-keyword governance system for a six-campaign Performance Max account.</p>
          <div class="cs-results">
            <div class="cs-r"><div class="cs-r-num"><span class="up">42</span></div><div class="cs-r-lbl">documented QA review cycles</div></div>
            <div class="cs-r"><div class="cs-r-num"><span class="up">32/32</span></div><div class="cs-r-lbl">automated checks passing pre-ship</div></div>
          </div>
          <span class="cs-read">Read full case study →</span>
        </div>
      </a>

      <!-- OPEN 5: Zahlco Real Estate -->
      <a href="./real-estate/zahlco-real-estate-maryland/" class="cs-card fade-up">
        <div class="cs-thumb">
          <div class="cs-thumb-bg" style="background:linear-gradient(135deg,#1B2D4A 0%,#10192B 100%)"></div>
          <div class="cs-thumb-glow"></div>
          <div class="cs-vertical-tag">Real Estate</div>
          <div>
            <div class="cs-metric" style="font-size:2.15rem">Lease-Up</div>
            <div class="cs-metric-sub">student housing acquisition</div>
          </div>
        </div>
        <div class="cs-body">
          <div class="cs-tags"><span class="cs-tag">Paid Media</span><span class="cs-tag">Student Housing</span><span class="cs-tag">Real Estate</span></div>
          <h3>Zahlco Real Estate Maryland - Student Housing Lease-Up</h3>
          <p>Paid media strategy for student housing lease-up, campaign execution, and measurable acquisition improvements.</p>
          <span class="cs-read">Read full case study →</span>
        </div>
      </a>

    </div>
  </div>
</section>

<section id="portfolio-cta">
  <div class="container">
    <div class="portfolio-cta-inner fade-up">
      <span class="eyebrow">Want to discuss your account?</span>
      <h2>See the work first. Book only when it makes sense.</h2>
      <p>The portfolio is fully open. If the approach fits what you need, choose a time and we can talk through your Google Ads, Meta Ads, tracking, or funnel priorities.</p>
      <a href="''' + BOOKING + '''" target="_blank" rel="noopener" class="portfolio-btn">Book a Call →</a>
    </div>
  </div>
</section>

'''
hub = hub[:gated_start] + open_cards + hub[footer_start:]

# Remove obsolete filter JS if present.
hub = hub.replace("document.querySelectorAll('.ftag').forEach(btn=>{btn.addEventListener('click',function(){document.querySelectorAll('.ftag').forEach(b=>b.classList.remove('active'));this.classList.add('active')})});\n", "")

# Update mobile CSS now that the gate form is gone.
hub = hub.replace("@media(max-width:900px){.cs-grid{grid-template-columns:1fr}.gf-inner{grid-template-columns:1fr}nav .nav-links{display:none}.footer-inner{flex-direction:column;text-align:center}}", "@media(max-width:900px){.cs-grid{grid-template-columns:1fr}nav .nav-links{display:none}.footer-inner{flex-direction:column;text-align:center}}")

if "gate-form" in hub or "Unlock all 7" in hub or "cs-card gated" in hub:
    raise SystemExit("hub still contains gated-access references")

hub_path.write_text(hub, encoding="utf-8")


# 2) Homepage: replace the case-study gate with a normal library link.
home_path = Path("index.html")
home = home_path.read_text(encoding="utf-8")
gate_marker = "      <!-- GATE -->"
end_marker = "\n\n    </div>\n  </div>\n</section>\n\n<!-- TESTIMONIALS -->"
gs = home.find(gate_marker)
ge = home.find(end_marker, gs)
if gs == -1 or ge == -1:
    raise SystemExit("homepage case-study gate markers not found")
new_home_gate = '''      <!-- CASE STUDY LIBRARY -->
      <div class="cs-gate fade-up">
        <div class="cs-gate-inner">
          <h3>Explore All Published Case Studies</h3>
          <p>Read the full published breakdowns across legal, e-commerce, and real estate. No gate and no form required.</p>
          <a href="case-studies/" class="btn-gold">View All Case Studies →</a>
        </div>
      </div>'''
home = home[:gs] + new_home_gate + home[ge:]
home_path.write_text(home, encoding="utf-8")


# 3) Full legal case studies: remove stale "unlock 7" cards and link back to the open library.
replacement_next = '''      <a href="../" class="next-card">
        <span class="next-tag">Case study library</span>
        <h4>Browse all published case studies</h4>
        <p>Explore the open library across legal, e-commerce, and real estate paid media work.</p>
        <span class="next-arrow">View all case studies →</span>
      </a>'''

for rel in [
    "case-studies/pi-law-firm/index.html",
    "case-studies/b2b-corporate-law/index.html",
    "case-studies/complex-litigation/index.html",
]:
    p = Path(rel)
    text = p.read_text(encoding="utf-8")
    pattern = re.compile(r'''      <a href="\.\./#gate-form" class="next-card">.*?      </a>''', re.S)
    text, n = pattern.subn(replacement_next, text, count=1)
    if n != 1:
        raise SystemExit(f"{rel}: expected one stale unlock card, replaced {n}")
    if "#gate-form" in text or "Unlock the remaining 7" in text:
        raise SystemExit(f"{rel}: stale gate reference remains")
    p.write_text(text, encoding="utf-8")

print("Case-study ungating and cleanup completed safely.")
