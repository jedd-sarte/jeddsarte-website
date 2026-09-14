(() => {
  const bookingUrl = 'https://calendar.app.google/2RJj6td6D5g3GgfC7';
  const path = window.location.pathname;
  const active = (prefix) => path === prefix || path.startsWith(prefix);

  const header = `
    <nav id="site-global-nav" aria-label="Primary navigation">
      <div class="site-shell-inner">
        <a href="/" class="site-shell-logo" aria-label="Jedd Sarte home">Jedd<span>.</span></a>
        <button class="site-shell-menu" type="button" aria-expanded="false" aria-controls="site-shell-links">Menu</button>
        <div id="site-shell-links" class="site-shell-links">
          <a href="/services/"${active('/services/') ? ' class="active"' : ''}>Services</a>
          <a href="/industries/"${active('/industries/') ? ' class="active"' : ''}>Industries</a>
          <a href="/case-studies/"${active('/case-studies/') ? ' class="active"' : ''}>Case Studies</a>
          <a href="/blog/"${active('/blog/') || active('/resources/') ? ' class="active"' : ''}>Insights</a>
          <a href="/locations/"${active('/locations/') ? ' class="active"' : ''}>Locations</a>
          <a href="/#about">About</a>
          <a href="${bookingUrl}" target="_blank" rel="noopener" class="site-shell-cta">Book a Call</a>
        </div>
      </div>
    </nav>`;

  const footer = `
    <footer id="site-global-footer">
      <div class="site-shell-footer-inner">
        <a href="/" class="site-shell-footer-logo">Jedd<span>.</span></a>
        <div class="site-shell-footer-links" aria-label="Footer navigation">
          <a href="/services/">Services</a>
          <a href="/industries/">Industries</a>
          <a href="/case-studies/">Case Studies</a>
          <a href="/blog/">Insights</a>
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
    #site-global-nav{position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:9999!important;background:linear-gradient(90deg,#010829,#07154f)!important;border-bottom:1px solid rgba(244,159,28,.14)!important;padding:14px 28px!important;box-shadow:0 10px 30px rgba(1,8,41,.12)!important;font-family:Inter,Arial,sans-serif!important}
    #site-global-nav .site-shell-inner{max-width:1180px!important;margin:0 auto!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:24px!important}
    #site-global-nav .site-shell-logo,#site-global-footer .site-shell-footer-logo{font-family:'Space Grotesk',Inter,Arial,sans-serif!important;font-weight:800!important;font-size:1.12rem!important;color:#fff!important;text-decoration:none!important;letter-spacing:-.02em!important}.site-shell-logo span,.site-shell-footer-logo span{color:#f49f1c!important}
    #site-global-nav .site-shell-links{display:flex!important;align-items:center!important;gap:6px!important}
    #site-global-nav .site-shell-links a{color:rgba(255,255,255,.76)!important;text-decoration:none!important;font-family:'Space Grotesk',Inter,Arial,sans-serif!important;font-size:.82rem!important;font-weight:600!important;padding:9px 10px!important;border-radius:8px!important;white-space:nowrap!important}
    #site-global-nav .site-shell-links a:hover,#site-global-nav .site-shell-links a.active{color:#fff!important;background:rgba(255,255,255,.07)!important}
    #site-global-nav .site-shell-links a.active{color:#f49f1c!important}
    #site-global-nav .site-shell-links .site-shell-cta{background:#f49f1c!important;color:#010829!important;font-weight:800!important;padding:10px 16px!important}
    #site-global-nav .site-shell-menu{display:none!important;background:transparent!important;border:1px solid rgba(255,255,255,.22)!important;color:#fff!important;border-radius:8px!important;padding:8px 11px!important;font-weight:700!important}
    #site-global-footer{background:#030d40!important;border-top:1px solid rgba(255,255,255,.07)!important;padding:34px 28px!important;font-family:Inter,Arial,sans-serif!important;position:relative!important;inset:auto!important;z-index:auto!important}
    #site-global-footer .site-shell-footer-inner{max-width:1180px!important;margin:0 auto!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:20px!important;flex-wrap:wrap!important}
    #site-global-footer .site-shell-footer-links{display:flex!important;gap:18px!important;flex-wrap:wrap!important}
    #site-global-footer .site-shell-footer-links a{color:rgba(255,255,255,.58)!important;text-decoration:none!important;font-size:.8rem!important;font-weight:600!important}
    #site-global-footer .site-shell-footer-links a:hover{color:#f49f1c!important}
    #site-global-footer .site-shell-copy{color:rgba(255,255,255,.38)!important;font-size:.76rem!important}
    @media(max-width:900px){#site-global-nav .site-shell-menu{display:block!important}#site-global-nav .site-shell-links{display:none!important;position:absolute!important;top:64px!important;left:18px!important;right:18px!important;background:#010829!important;border:1px solid rgba(244,159,28,.18)!important;border-radius:12px!important;padding:12px!important;flex-direction:column!important;align-items:stretch!important;box-shadow:0 18px 40px rgba(0,0,0,.28)!important}#site-global-nav .site-shell-links.open{display:flex!important}#site-global-nav .site-shell-links a{text-align:left!important}#site-global-footer .site-shell-footer-inner{flex-direction:column!important;align-items:flex-start!important}.site-shell-footer-links{gap:12px!important}}
  `;
  document.head.appendChild(style);

  const oldNav = document.querySelector('body > nav, body > header nav, nav#nav');
  if (oldNav) oldNav.outerHTML = header;
  else document.body.insertAdjacentHTML('afterbegin', header);

  const oldFooter = document.querySelector('body > footer, footer');
  if (oldFooter) oldFooter.outerHTML = footer;
  else document.body.insertAdjacentHTML('beforeend', footer);

  const menu = document.querySelector('.site-shell-menu');
  const links = document.getElementById('site-shell-links');
  if (menu && links) menu.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
})();