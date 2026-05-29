# BUILD SPEC — Die SyncPilot-Akte (FOCUS Dashboard)

You are building HTML pages for a FOCUS-magazine-styled investigative dashboard in German.
Each page goes in `/home/user/workspace/syncpilot/docs/<name>.html`.

## NON-NEGOTIABLE RULES
1. **German language only. NO disclaimers** anywhere (no "hypothetische Rekonstruktion", no "kein reales Dokument", no liability notes). Drop those wrappers entirely.
2. **Keep ALL substantive information** from the source MD files — but **REPHRASE in FOCUS magazine style**. Do NOT copy source sentences verbatim. Use FOCUS's full toolkit: red kicker labels, sharp headlines, pull-quotes, callout boxes, data tables, emphasis. You MAY shorten/condense as long as no fact is lost and the FOCUS tone holds.
3. Mark contested items honestly: use the `.pill pill--fact` ("Fakt") and `.pill pill--hypo` ("Hypothese") badges where the source marks FAKT / HYPOTHESE.
4. **Byline:** Ansgar Graw, FOCUS. **Verdict is ground truth:** Az. 112 O 2848/25, 11. Zivilkammer, VRiLG Dr. Mozaffari, plaintiff LVS Hotel & Resorts (€pe) S.A. NEVER write "112. ZK" or "Dr. Hanft".
5. The corrected headline figure: 6,15 Mio. € Urteilssumme; mit Zinsen rund 6,7 Mio. €.

## EXACT PAGE TEMPLATE (copy this skeleton for every page)
```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PAGE TITLE — Die SyncPilot-Akte</title>
<meta name="description" content="ONE-SENTENCE GERMAN SUMMARY">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="assets/css/tokens.css">
</head>
<body>
<div id="site-masthead"></div>
<main class="shell">
  <header class="page-head"><div class="page-head__inner">
    <span class="kicker">SECTION LABEL</span>
    <h1>PAGE H1</h1>
    <p>Deck / standfirst sentence in FOCUS tone.</p>
  </div></header>

  <section class="section"><div class="wrap">
     <!-- CONTENT using the component classes below -->
  </div></section>
</main>
<div id="site-footer"></div>
<script src="assets/js/shell.js"></script>
</body>
</html>
```

## AVAILABLE COMPONENT CLASSES (defined in tokens.css — use these, do not invent new CSS)
- Layout: `.wrap`, `.section`, `.section--tight`, `.measure`, `.prose`, `.grid-2`, `.grid-3`, `.stack`
- Kicker / labels: `.kicker` (red bar + caps label), `.eyebrow`
- Lede: `.lead` (large intro paragraph)
- KPI: `.kpi-grid` > `.kpi` > `.kpi__value` (+`--ink` modifier) + `.kpi__label`
- Callouts: `.callout` (red) `.callout--teal` `.callout--amber` `.callout--fact`; inside: `.callout__title` + `<p>`
- Pull-quote: `.pullquote` with `<cite>`
- Legal citation block: `blockquote.legal`
- Cards: `.card-grid` > `.card` > `.card__kicker`/`.card__title`/`.card__desc`/`.card__cta`
- Pills: `.pill pill--fact` (Fakt, green), `.pill pill--hypo` (Hypothese, amber), `.pill pill--soon`, `.pill pill--live`
- Tables: `<div class="tbl-wrap"><table class="data"><caption>…</caption>…</table></div>`; use `<td class="num">` for numbers, `class="em"` for red emphasis cells
- Timeline: `.timeline` > `.tl-item` (add `.is-key` for major events) > `.tl-date`/`.tl-title`/`.tl-body`
- Persona: `.persona` > `.persona__name`/`.persona__role`/`.persona__body`
- Dividers: `<hr class="divider">`, `<hr class="divider--red">`
- Utility: `.text-muted`, `.text-red`, `.mono`

## STYLE NOTES
- Headlines are Fraunces serif (automatic via h1–h4). Body is IBM Plex Sans.
- Lead with a red `.kicker` on every major section. Use pull-quotes to highlight the sharpest finding on each page.
- Tables for any structured data (timeline rows, cap-table snapshots, red-flag matrix, §§ list).
- Keep paragraphs tight and punchy — FOCUS style, not academic.
- Numbers: German format (6,15 Mio. €, 60,13 %, 30/30).
- Do NOT link to PDFs (they come later). Internal nav links use bare filenames (e.g. href="timeline.html").

## SOURCE FILES (in /home/user/workspace/syncpilot/docs/source/)
- die-syncpilot-akte-buch.md  (main book, 9 chapters)
- anhang.md                   (timeline A-01.., glossary, personae)
- master-deposition-compendium.md
- kapitel-9-pictet.md
- pictet-term-sheet.md
- pictet-deposition-interview-questions.md
- urteil-lg-augsburg.md        (the verdict — ground truth)
