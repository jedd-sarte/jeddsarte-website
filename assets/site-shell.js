(() => {
  // GA4 base tag. Loaded once from the shared shell so every page is measured.
  const ga4MeasurementId = 'G-ZKNWZ52PSH';
  if (!document.querySelector('script[data-jedd-ga4]')) {
    const ga4Script = document.createElement('script');
    ga4Script.async = true;
    ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga4MeasurementId;
    ga4Script.dataset.jeddGa4 = 'true';
    document.head.appendChild(ga4Script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga4MeasurementId);
  }

  const brandCss = document.createElement('link');
  brandCss.rel = 'stylesheet';
  brandCss.href = '/assets/brand.css';
  brandCss.id = 'site-brand-styles';
  if (!document.getElementById('site-brand-styles')) document.head.appendChild(brandCss);

  const bookingUrl = 'https://calendar.app.google/2RJj6td6D5g3GgfC7';
  const quickCallUrl = 'https://us05web.zoom.us/j/3434853022?pwd=GSaX7AQaYsuYqoWADf0UmJJpaa8Yti.1';
  const path = window.location.pathname;
  const active = (prefix) => path === prefix || path.startsWith(prefix);

  const header = `
    <nav id="site-global-nav" aria-label="Primary navigation">
      <div class="site-shell-inner">
        <a href="/" class="site-shell-logo" aria-label="Jedd Sarte home">Jedd Sarte</a>
        <button class="site-shell-menu" type="button" aria-expanded="false" aria-controls="site-shell-links">Menu</button>
        <div id="site-shell-links" class="site-shell-links">
          <a href="/services/"${active('/services/') ? ' class="active"' : ''}>Services</a>
          <a href="/industries/"${active('/industries/') ? ' class="active"' : ''}>Industries</a>
          <a href="/case-studies/"${active('/case-studies/') ? ' class="active"' : ''}>Case Studies</a>
          <a href="/resources/"${active('/resources/') ? ' class="active"' : ''}>Resources</a>
          <a href="/locations/"${active('/locations/') ? ' class="active"' : ''}>Locations</a>
          <a href="/#about">About</a>
          <a href="${bookingUrl}" target="_blank" rel="noopener" class="site-shell-cta">Book a Call</a>
        </div>
      </div>
    </nav>`;

  const footer = `
    <footer id="site-global-footer">
      <div class="site-shell-footer-inner">
        <a href="/" class="site-shell-footer-logo">Jedd Sarte</a>
        <div class="site-shell-footer-links" aria-label="Footer navigation">
          <a href="/services/">Services</a>
          <a href="/industries/">Industries</a>
          <a href="/case-studies/">Case Studies</a>
          <a href="/resources/">Resources</a>
          <a href="/locations/">Locations</a>
          <a href="/privacy-policy/">Privacy</a>
          <a href="/terms-of-service/">Terms</a>
        </div>
        <div class="site-shell-copy">© ${new Date().getFullYear()} Jedd Sarte. Paid Social & Search Advertising Specialist.</div>
      </div>
    </footer>`;

  const style = document.createElement('style');
  style.id = 'site-shell-styles';
  style.textContent = `
    #site-global-nav{position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:9999!important;background:#3B6255!important;border-bottom:1px solid rgba(210,196,158,.32)!important;padding:15px 28px!important;box-shadow:0 8px 24px rgba(47,80,70,.12)!important;font-family:Inter,Arial,sans-serif!important}
    #site-global-nav .site-shell-inner{max-width:1180px!important;margin:0 auto!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:24px!important}
    #site-global-nav .site-shell-logo,#site-global-footer .site-shell-footer-logo{font-family:'DM Serif Display',Georgia,'Times New Roman',serif!important;font-weight:400!important;font-size:1.34rem!important;color:#FFFDF9!important;text-decoration:none!important;letter-spacing:.08em!important;text-transform:uppercase!important}
    #site-global-nav .site-shell-links{display:flex!important;align-items:center!important;gap:7px!important}
    #site-global-nav .site-shell-links a{color:rgba(255,253,249,.86)!important;text-decoration:none!important;font-family:Inter,Arial,sans-serif!important;font-size:.82rem!important;font-weight:500!important;padding:9px 10px!important;border-radius:7px!important;white-space:nowrap!important}
    #site-global-nav .site-shell-links a:hover,#site-global-nav .site-shell-links a.active{color:#FFFDF9!important;background:rgba(203,222,211,.12)!important}
    #site-global-nav .site-shell-links a.active{color:#D2C49E!important}
    #site-global-nav .site-shell-links .site-shell-cta{background:#E8A44A!important;color:#173F35!important;font-weight:700!important;padding:10px 17px!important;border-radius:6px!important}
    #site-global-nav .site-shell-links .site-shell-cta:hover{background:#F4C879!important;color:#173F35!important}
    #site-global-nav .site-shell-menu{display:none!important;background:transparent!important;border:1px solid rgba(255,253,249,.28)!important;color:#FFFDF9!important;border-radius:7px!important;padding:8px 11px!important;font-weight:700!important}
    #site-global-footer{background:#2F5046!important;border-top:1px solid rgba(210,196,158,.25)!important;padding:38px 28px!important;font-family:Inter,Arial,sans-serif!important;position:relative!important;inset:auto!important;z-index:auto!important}
    #site-global-footer .site-shell-footer-inner{max-width:1180px!important;margin:0 auto!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:20px!important;flex-wrap:wrap!important}
    #site-global-footer .site-shell-footer-links{display:flex!important;gap:18px!important;flex-wrap:wrap!important}
    #site-global-footer .site-shell-footer-links a{color:rgba(255,253,249,.69)!important;text-decoration:none!important;font-size:.8rem!important;font-weight:500!important}
    #site-global-footer .site-shell-footer-links a:hover{color:#D2C49E!important}
    #site-global-footer .site-shell-copy{color:rgba(255,253,249,.48)!important;font-size:.76rem!important}
    #site-quick-call{position:fixed;right:22px;bottom:22px;z-index:9998;font-family:Inter,Arial,sans-serif!important}
    #site-quick-call .quick-call-card{display:flex;align-items:center;gap:12px;background:#FFFDF9;border:1px solid rgba(23,63,53,.16);box-shadow:0 14px 38px rgba(23,63,53,.22);border-radius:16px;padding:12px 14px;text-decoration:none!important;max-width:310px;transition:transform .2s ease,box-shadow .2s ease}
    #site-quick-call .quick-call-card:hover{transform:translateY(-2px);box-shadow:0 18px 46px rgba(23,63,53,.27)}
    #site-quick-call .quick-call-icon{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;flex:0 0 40px;background:#CBDED3;color:#173F35;font-size:19px}
    #site-quick-call .quick-call-copy{display:flex;flex-direction:column;line-height:1.2}
    #site-quick-call .quick-call-title{font-size:.86rem;font-weight:800;color:#173F35}
    #site-quick-call .quick-call-sub{font-size:.72rem;color:#62645F;margin-top:4px}
    #site-quick-call .quick-call-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#35A56F;margin-right:6px;box-shadow:0 0 0 4px rgba(53,165,111,.12)}
    #site-quick-call.offline .quick-call-icon{background:#F1EFEB;color:#62645F}
    #site-quick-call.offline .quick-call-dot{background:#9A9A93;box-shadow:none}
    @media(max-width:900px){#site-quick-call{right:14px;bottom:14px}.quick-call-sub{max-width:190px}#site-global-nav .site-shell-menu{display:block!important}#site-global-nav .site-shell-links{display:none!important;position:absolute!important;top:66px!important;left:18px!important;right:18px!important;background:#2F5046!important;border:1px solid rgba(210,196,158,.26)!important;border-radius:10px!important;padding:12px!important;flex-direction:column!important;align-items:stretch!important;box-shadow:0 18px 40px rgba(30,52,45,.28)!important}#site-global-nav .site-shell-links.open{display:flex!important}#site-global-nav .site-shell-links a{text-align:left!important}#site-global-footer .site-shell-footer-inner{flex-direction:column!important;align-items:flex-start!important}.site-shell-footer-links{gap:12px!important}}
  `;
  document.head.appendChild(style);

  const oldNav = document.querySelector('body > nav, body > header nav, nav#nav');
  if (oldNav) oldNav.outerHTML = header;
  else document.body.insertAdjacentHTML('afterbegin', header);

  const oldFooter = document.querySelector('body > footer, footer');
  if (oldFooter) oldFooter.outerHTML = footer;
  else document.body.insertAdjacentHTML('beforeend', footer);

  // Floating quick-call presence. Availability is evaluated in America/New_York,
  // so DST switches between EST/EDT automatically while the displayed promise stays ET.
  const getEasternHour = () => Number(new Intl.DateTimeFormat('en-US', {
    timeZone:'America/New_York', hour:'2-digit', hour12:false
  }).format(new Date()));
  const easternHour = getEasternHour();
  const quickCallOpen = easternHour >= 8 && easternHour < 19;
  const quickCall = document.createElement('div');
  quickCall.id = 'site-quick-call';
  if (!quickCallOpen) quickCall.classList.add('offline');
  quickCall.innerHTML = quickCallOpen
    ? '<a class="quick-call-card" href="' + quickCallUrl + '" target="_blank" rel="noopener" aria-label="Start a quick Zoom call"><span class="quick-call-icon" aria-hidden="true">↗</span><span class="quick-call-copy"><span class="quick-call-title"><span class="quick-call-dot"></span>Open for quick calls</span><span class="quick-call-sub">8 AM–7 PM ET · Start a Zoom call</span></span></a>'
    : '<a class="quick-call-card" href="' + bookingUrl + '" target="_blank" rel="noopener" aria-label="Book a strategy call"><span class="quick-call-icon" aria-hidden="true">◷</span><span class="quick-call-copy"><span class="quick-call-title"><span class="quick-call-dot"></span>Currently offline</span><span class="quick-call-sub">Available 8 AM–7 PM ET · Book a call</span></span></a>';
  document.body.appendChild(quickCall);

  // Lead-intent measurement for the two primary conversion paths.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || typeof window.gtag !== 'function') return;
    const href = link.href || '';
    if (href.includes('calendar.app.google/2RJj6td6D5g3GgfC7')) {
      window.gtag('event', 'book_call_click', { link_url: href, page_path: location.pathname });
    } else if (href.includes('us05web.zoom.us/j/3434853022')) {
      window.gtag('event', 'quick_call_click', { link_url: href, page_path: location.pathname });
    }
  });

  const menu = document.querySelector('.site-shell-menu');
  const links = document.getElementById('site-shell-links');
  if (menu && links) menu.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  if (path === '/case-studies/' || path === '/case-studies/index.html') {
    const seoCards = document.createElement('script');
    seoCards.src = '/assets/seo-case-study-cards.js';
    seoCards.defer = true;
    document.body.appendChild(seoCards);
  }
})();