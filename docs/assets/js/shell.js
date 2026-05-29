/* Shared chrome: masthead, nav, footer — injected so all 11 pages stay in sync */
(function () {
  // Resolve base path so it works at grossklein.github.io/7G/ and locally
  const PAGES = [
    { href: 'index.html',           label: 'Übersicht' },
    { href: 'urteil.html',          label: 'Urteil' },
    { href: 'timeline.html',        label: 'Chronologie' },
    { href: 'follow-the-money.html',label: 'Geldfluss' },
    { href: 'cap-table.html',       label: 'Cap-Table' },
    { href: 'offshore.html',        label: 'Offshore' },
    { href: 'bewertung.html',       label: 'Bewertung' },
    { href: 'tunneling.html',       label: 'Tunneling' },
    { href: 'personae.html',        label: 'Personen' },
    { href: 'strafanzeige.html',    label: 'Strafanzeige' },
    { href: 'dossier.html',         label: 'Dossier' },
  ];

  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const LOGO = `<svg class="brand__mark" width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="30" height="30" rx="3" fill="#ee001c"/>
    <path d="M9 8h14v3.4H12.6v3.5H21v3.4h-8.4V24H9V8Z" fill="#fff"/>
  </svg>`;

  const masthead = `
  <header class="masthead">
    <div class="masthead__inner">
      <a class="brand" href="index.html" aria-label="FOCUS — Die SyncPilot-Akte">
        ${LOGO}
        <span class="brand__word">FOCUS</span>
        <span class="brand__sub">Investigativ</span>
      </a>
      <span class="masthead__spacer"></span>
      <span class="masthead__meta">Die SyncPilot-Akte · LG Augsburg 112&nbsp;O&nbsp;2848/25</span>
    </div>
  </header>
  <nav class="nav" aria-label="Hauptnavigation">
    <div class="nav__inner">
      ${PAGES.map(p => `<a href="${p.href}"${p.href.toLowerCase()===current?' class="is-active" aria-current="page"':''}>${p.label}</a>`).join('')}
    </div>
  </nav>`;

  const footer = `
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__grid">
        <div>
          <h4>Die SyncPilot-Akte</h4>
          <p style="font-size:var(--text-sm); color:rgba(255,255,255,.7); max-width:46ch; margin:0;">
            Forensisch-journalistische Dokumentation zum Komplex SYNCPILOT&nbsp;SE / Franz&nbsp;Xaver&nbsp;Bleicher /
            Pictet / LVS. Stand der Recherche: Mai&nbsp;2026.
          </p>
        </div>
        <div>
          <h4>Kapitel</h4>
          <div class="footer__cols">
            <a href="urteil.html">Das Urteil</a>
            <a href="timeline.html">Chronologie</a>
            <a href="follow-the-money.html">Geldfluss</a>
            <a href="cap-table.html">Cap-Table</a>
            <a href="offshore.html">Offshore-Netz</a>
          </div>
        </div>
        <div>
          <h4>Analyse</h4>
          <div class="footer__cols">
            <a href="bewertung.html">Bewertung</a>
            <a href="tunneling.html">Tunneling</a>
            <a href="personae.html">Personen</a>
            <a href="strafanzeige.html">Strafanzeige</a>
            <a href="dossier.html">Dossier-Index</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span><span class="footer__brand">FOCUS</span> · Recherche &amp; Text: Ansgar&nbsp;Graw</span>
        <span>© 2026 · Alle Beträge und Befunde nach Aktenlage. Hypothesen sind als solche gekennzeichnet.</span>
      </div>
    </div>
  </footer>`;

  // Inject
  const mh = document.getElementById('site-masthead');
  if (mh) mh.outerHTML = masthead;
  const ft = document.getElementById('site-footer');
  if (ft) ft.outerHTML = footer;
})();
