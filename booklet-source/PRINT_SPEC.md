# PRINT BOOKLET — chapter fragment build spec

You write HTML **fragments** (no <html>/<head>/<body>) that get concatenated into a print booklet.
Output one file per assignment into /home/user/workspace/booklet/parts/.

## HARD RULES
1. German. NO disclaimers. NO "FOCUS" branding/wordmark/logo anywhere (this is a pre-press manuscript; the outlet brands it later). Byline, if any: "Recherche & Text: Ansgar Graw" — no publisher.
2. Keep ALL substantive facts from sources but REPHRASE in sharp magazine prose (not academic, not verbatim). Shorten as needed. Use callouts, pull-quotes, mini-headings, tables.
3. Verdict = ground truth: Az. 112 O 2848/25, 11. Zivilkammer, VRiLG Dr. Mozaffari, Klägerin LVS Hotel & Resorts (€pe) S.A. Damages 6,15 Mio. €, mit Zinsen ≈ 6,7 Mio. €. NEVER "112. ZK"/"Dr. Hanft".
4. Numbers in German format (6,15 Mio. €, 60,13 %, 30/30).

## PAGE STRUCTURE — every chapter = a divider page + content page(s)
Each "Teil" begins with a CHAPTER DIVIDER, then 3-7 content pages. Use this skeleton per page:

CHAPTER DIVIDER (one per Teil):
```html
<div class="chapter">
  <div class="chapter__num">II</div>
  <div class="chapter__inner">
    <div class="chapter__kicker">Teil II · Der Betrug</div>
    <h2 class="chapter__title">Der Betrug</h2>
    <p class="chapter__sub">One sharp standfirst sentence.</p>
  </div>
</div>
```

CONTENT PAGE:
```html
<div class="page">
  <div class="runhead"><span>Die SyncPilot-Akte</span><span>Teil II · Der Betrug</span></div>
  <span class="kicker">Section label</span>
  <h2 class="headline span-all">Headline</h2>
  <p class="deck span-all">Deck/standfirst.</p>
  <div class="cols">
     <p class="dropcap">First paragraph with drop cap…</p>
     <p>…justified two-column body…</p>
     <h4 class="minihead">Mini-heading</h4>
     <div class="callout"><p class="callout__t">Label</p><p>…</p></div>
  </div>
  <div class="pull">Pull quote.<cite>— attribution</cite></div>
  <div class="cols"> more paragraphs </div>
  <div class="runfoot"><span>Forensische Dokumentation</span><span>PAGE_NO</span></div>
</div>
```

## AVAILABLE CLASSES (in assets/print.css — use ONLY these, invent no CSS)
- Page: `.page` (auto page-break), `.chapter` (full-bleed divider)
- Type: `h2.headline`, `h3.subhead`, `h4.minihead`, `.deck`, `.kicker`, `.dropcap` (on first <p>), `.span-all`
- Columns: wrap body text blocks in `<div class="cols">…</div>` (2-column). Headings/tables/figures auto-span.
- Callouts: `.callout` (red), `.callout--teal`, `.callout--amber`; inside `<p class="callout__t">LABEL</p>` + `<p>`
- Pull-quote: `<div class="pull">…<cite>— …</cite></div>`
- Legal citation: `<blockquote class="legal">…</blockquote>`
- KPI strip: `<div class="kpis"><div class="kpi"><b>VAL</b><small>label</small></div>…4 per row…</div>` (use `<b class="ink">` for non-red)
- Tables: `<table class="data"><caption>…</caption><tr><th>…</th></tr><tr><td>…</td><td class="num">…</td></tr></table>`; `<span class="em">` for red emphasis
- Figures (infographics): `<figure class="ig"><img src="assets/ig/IG-NAME.png" alt="…"><figcaption><b>Infografik N</b> &nbsp; caption.</figcaption></figure>`
- Timeline: `<div class="tl"><div class="tl-item"><div class="tl-d">DATE</div><div class="tl-t">Title</div><p class="tl-b">…</p></div>…</div>`
- Personae: `<div class="persona-grid"><div class="persona"><p class="persona__n">Name</p><p class="persona__r">ROLE</p><p class="persona__b">… <span class="pill fact">Fakt</span></p></div>…</div>`
- Pills: `.pill.fact` (Fakt) `.pill.hypo` (Hypothese) `.pill.crit` `.pill.high` `.pill.mid`
- Rules: `<hr class="rule">`, `<hr class="rule-red">`
- Notes: `<p class="note">…</p>`

## INFOGRAPHIC PNG FILENAMES (in assets/ig/) — embed each in its matching Teil, full width:
- ig-cap-table.png, ig-offshore.png  → already used in the Leitstück; you MAY reuse only if essential
- ig-follow-the-money.png  → Teil III
- ig-bewertung.png         → Teil II
- ig-tunneling.png         → Teil IV
- ig-strafanzeige.png      → Teil IV
- ig-urteil.png            → Teil V

## PAGE NUMBERS
Use the PAGE_NO given in your assignment for each page's runfoot. Keep within your assigned range.

## SOURCES (in /home/user/workspace/syncpilot/docs/source/)
die-syncpilot-akte-buch.md · anhang.md · master-deposition-compendium.md · kapitel-9-pictet.md · pictet-term-sheet.md · pictet-deposition-interview-questions.md · urteil-lg-augsburg.md
Also read the already-built website pages in /home/user/workspace/syncpilot/docs/*.html for the verified, rephrased data (tables, figures) — reuse those numbers.

## KEEP IT TIGHT
~2 content pages of body text fit one printed page each. Don't overstuff a `.page` — if content exceeds ~1 page, split into multiple `.page` divs. Aim for the page count in your assignment.
