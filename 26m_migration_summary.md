# MRI Together 2026 Edition Migration Summary

## Overview

Updated the `26m/` directory from a workshop format (modeled on `25m/`) to a **hackathon** format called **MRI TogetherThon 2026**.

---

## New Files (4)

| File | Description |
|---|---|
| `_includes/preamble2026.html` | Empty preamble (mirrors 2025 pattern) |
| `_includes/menu2026.html` | Navigation with `/26m/` paths, **Projects** tab (replacing Abstracts), 2025 in Past Workshops dropdown |
| `26m/projects.md` | New page replacing `abstracts.md`, describes the hackathon format |
| `26m_committee_template.md` | Committee page template with placeholder anchors and coordinate hints |

---

## Modified Files (8)

| File | Change |
|---|---|
| `_layouts/default.html` | `page.year == 2026` Liquid conditional: shows "MRI TogetherThon 2026 / November 30 – December 4" instead of hardcoded 2025 dates |
| `26m/index.md` | Full rewrite: hackathon description, dates, `year: 2026` |
| `26m/committee.md` | `year: 2026`, replaced content with committee template from `26m_committee_template.md` |
| `26m/sponsors.md` | All tiers set to "To be announced" |
| `26m/registration.md` | Placeholder: "Registration information will be announced soon" |
| `26m/news.md` | Single entry: "MRI TogetherThon announced!" (June 2026) |
| `26m/jobboard.md` | Stripped: contact note + "No open positions" |
| `26m/comingsoon.md` | Added `year: 2026` front-matter field |
| `26m/programbook.md` | `year: 2026`, stripped 2025-specific schedule content |

---

## Deleted Files (1)

| File | Replaced by |
|---|---|
| `26m/abstracts.md` | `26m/projects.md` |

---

## Committee Template Details

The committee page uses a **dual-display layout**:

- **SVG layer** (wide screens): Clickable name overlays on a group photo (`committee_26.png`). X/Y coordinates are approximate.
- **Table layer** (mobile/narrow): Headshot grid with names, affiliations, and LinkedIn links.

### 10 Committee Members

| Name | Affiliation |
|---|---|
| Maria Mora | Children's National Hospital, USA |
| Anais Artiges | King's College London, UK |
| Marta Brigid Maggioni | University of Basel, CH |
| Matteo Cencini | IRCCS Stella Maris, IT |
| Yueqi Qiu | Shanghai Jiao Tong University, CN |
| Guillermo Sahonero | UC Chile, CHL |
| Jiqing Huang | University of Liège, BE |
| Cliff Mokua | Sonar Imaging Centre, KE |
| Carlos Castillo-Passi | Stanford University, USA |
| Javier Bisbal | UC Chile, CHL |

---

## Manual Follow-up Required

1. **Pronouns** — Fill in for Maria Mora, Marta Maggioni, Yueqi Qiu, Jiqing Huang, Cliff Mokua, Carlos Castillo-Passi, Javier Bisbal
2. **LinkedIn/profile URLs** — Replace `LINKEDIN_*` placeholders for Maria Mora, Marta Maggioni, Matteo Cencini, Yueqi Qiu, Jiqing Huang, Cliff Mokua, Carlos Castillo-Passi, Javier Bisbal
3. **SVG coordinates** — Adjust X/Y positions once the group photo is placed
4. **Headshot images** — Upload PNG files to `26m/images/committee/` (naming: `FirstnameLastname.png`)
5. **Group photo** — Upload `committee_26.png` to `26m/images/committee/`
