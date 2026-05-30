#!/usr/bin/env python3
import pathlib, re, sys

BASE = pathlib.Path("/home/user/workspace/booklet")
PARTS = BASE / "parts"
ORDER = ["00-front","01-lead","02-teil1","03-teil2","04-teil3","05-teil4","06-teil5","07-anhang"]

HEAD = """<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8">
<title>Die SyncPilot-Akte — Forensische Dokumentation</title>
<link rel="stylesheet" href="assets/print.css"></head>
<body>
"""
FOOT = "\n</body></html>\n"

def check_balance(name, html):
    issues = []
    for tag in ["div","table","figure"]:
        o = len(re.findall(rf"<{tag}[\s>]", html))
        c = len(re.findall(rf"</{tag}>", html))
        if o != c:
            issues.append(f"{name}: <{tag}> {o} open / {c} close")
    if re.search(r"</?(html|body|head)\b", html, re.I):
        issues.append(f"{name}: contains stray html/body/head tag")
    if "FOCUS" in html:
        issues.append(f"{name}: contains 'FOCUS' branding token")
    return issues

frags = []
all_issues = []
for key in ORDER:
    fp = PARTS / f"{key}.html"
    if not fp.exists():
        all_issues.append(f"MISSING: {key}.html")
        continue
    h = fp.read_text(encoding="utf-8")
    all_issues += check_balance(key, h)
    frags.append(f"\n<!-- ===== {key} ===== -->\n" + h)

out = HEAD + "\n".join(frags) + FOOT
(BASE / "booklet.html").write_text(out, encoding="utf-8")

# count pages
pages = out.count('class="page"') + out.count('class="cover"') + out.count('class="chapter"') + out.count('class="bleed"')
print(f"Assembled booklet.html — approx {pages} page units")
if all_issues:
    print("ISSUES:")
    for i in all_issues: print("  -", i)
else:
    print("Tag balance OK, no branding tokens, no stray tags.")
