(() => {
  const grid = document.querySelector('.cs-grid');
  if (!grid) return;
  const cards = [
    {href:'/case-studies/seo/netafim-north-america/',tag:'International SEO',metric:'+54.96%',sub:'Data Cube Score increase',title:'Netafim North America - International SEO & Localization',desc:'International SEO, localized content, hreflang, canonicalization, regional sitemaps, and technical cleanup for a global irrigation technology brand.',tags:['SEO','International SEO','Technical SEO'],results:[['+54.96%','Data Cube Score'],['Regional','SEO structure']]},
    {href:'/case-studies/seo/peters-law-firm/',tag:'Personal Injury SEO',metric:'$193K',sub:'Monthly organic SEO value',title:'Peters Law Firm - Personal Injury SEO Growth',desc:'Website architecture, high-value content strategy, local SEO, Google Business Profile optimization, citations, technical SEO, and on-page optimization.',tags:['SEO','Legal SEO','Local SEO'],results:[['$193K','Organic traffic value'],['Consistent','Keyword growth']]},
    {href:'/case-studies/seo/bellport-country-club/',tag:'Hospitality SEO',metric:'+195%',sub:'Mobile organic traffic YoY',title:'Bellport Country Club - Technical SEO & Organic Growth',desc:'Core Web Vitals, image optimization, content roadmap, internal linking, and technical SEO for a high-volume wedding venue and hospitality business.',tags:['SEO','Core Web Vitals','Content SEO'],results:[['+96%','Desktop traffic YoY'],['+195%','Mobile traffic YoY']]}
  ];
  cards.forEach(c => {
    const a = document.createElement('a');
    a.href = c.href; a.className = 'cs-card fade-up';
    a.innerHTML = `<div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#3B6255,#2F5046)"></div><div class="cs-thumb-glow"></div><div class="cs-vertical-tag">${c.tag}</div><div><div class="cs-metric">${c.metric}</div><div class="cs-metric-sub">${c.sub}</div></div></div><div class="cs-body"><div class="cs-tags">${c.tags.map(t=>`<span class="cs-tag">${t}</span>`).join('')}</div><h3>${c.title}</h3><p>${c.desc}</p><div class="cs-results">${c.results.map(r=>`<div class="cs-r"><div class="cs-r-num"><span class="up">${r[0]}</span></div><div class="cs-r-lbl">${r[1]}</div></div>`).join('')}</div><span class="cs-read">Read SEO case study →</span></div>`;
    grid.appendChild(a);
  });
  const stats = document.querySelectorAll('.hs-num');
  if (stats[0]) stats[0].textContent = '8';
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = 'Selected paid media and SEO work across legal, e-commerce, agriculture technology, hospitality, and other growth-focused businesses. Every published case study below is open to read with no form or access gate.';
  requestAnimationFrame(()=>document.querySelectorAll('.fade-up').forEach(el=>el.classList.add('visible')));
})();