# Instructions for updating the MRI Together website to the 2026 edition

The 26m/ folder has already been copied from 25m/. Apply the changes below exactly as described.
The 2026 edition is a **hackathon**, not a standard workshop. The event superheader remains "MRI Together",
but the title and nature of the event are different.

---

## Overview of changes

- Update all year references from 2025 to 2026
- Update all `/25m/` URL paths to `/26m/`
- Replace the "Abstracts" tab with a "Projects" tab
- Update the home page to reflect the hackathon format and new dates
- Strip event-specific content from pages that are not yet finalized (sponsors, registration, news, job board)
- Create the required new `_includes/` files for navigation and preamble

---

## 1. Create `_includes/preamble2026.html`

Create this file with empty content (a single blank line), mirroring `_includes/preamble2025.html`.

**File:** `_includes/preamble2026.html`
```
 
```

---

## 2. Create `_includes/menu2026.html`

Copy `_includes/menu2025.html` and apply these changes:
- Replace every occurrence of `/25m/` with `/26m/`
- Replace the `Abstracts` menu item with a `Projects` menu item pointing to `/26m/projects`
- Add `2025` to the "Past Workshops" dropdown (before the closing `</div>` of `.dropdown-menu`)

**File:** `_includes/menu2026.html`

```html
<div id="sticky_menu">
        <nav class="navbar navbar-expand-lg  navbar-light" id="nav-menu">
          <div class="nav__container w-100">
            <button class="navbar-toggler float-xs-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style="width: 100%;">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto mr-auto" id="menu-list" style="flex-basis: 100%;flex-grow: 1;">
                <div class="menu-item"><a href="/26m/" style="color: #547FAF;"><i class="fas fa-home-lg-alt"></i></a></div>
                <div class="menu-item"><a href="/26m/schedule">Program</a></div>
                <div class="menu-item"><a href="/26m/registration">Registration<br/>&amp; Attendance</a></div>
                <div class="menu-item"><a href="/26m/projects">Projects</a></div>
                <div class="menu-item"><a href="/26m/committee">Organizers</a></div>
                <div class="menu-item"><a href="/26m/sponsors">Supporters</a></div>
                <div class="menu-item"><a href="/26m/jobboard">Job Board</a></div>
                <div class="menu-item"><a href="/CODE_OF_CONDUCT">Code of Conduct</a></div>
                <div class="menu-item dropdown-container">
                  <a class="toggle-dropdown" href="#">Past Workshops</a>
                  <div class="dropdown-menu">
                    <a href="/21m">2021</a>
                    <a href="/22m">2022</a>
                    <a href="/23m">2023</a>
                    <a href="/24m">2024</a>
                    <a href="/25m">2025</a>
                  </div>
                </div>
                <div class="menu-item"><a href="/26m/news">News</a></div>
                </ul>
              </div> 
            </div>
        </nav>
</div>
```

---

## 3. Update `_layouts/default.html`

The slideshow section is hardcoded with 2025 dates. Replace the hardcoded text so it adapts to the page year using Liquid templating.

**Find** (around line 122-126):
```html
      <div class="text">
        <h1 style="...">MRI Together 2025 is coming!<br>
          December 9-12 2025</h1></span>
```

**Replace with:**
```html
      <div class="text">
        {% if page.year == 2026 %}
        <h1>MRI TogetherThon 2026 is coming!<br>November 30 – December 4, 2026</h1>
        {% else %}
        <h1>MRI Together 2025 is coming!<br>December 9-12 2025</h1>
        {% endif %}
```

---

## 4. Update `26m/index.md`

Replace the entire file content with:

```markdown
---
title: MRI Together
layout: default
year: 2026
---

![image](images/MRI together logo circle.png){: style="float: right; margin-left: 2em; width: 40%; height: 40%"}

## What?

[**#MRITogether**](https://twitter.com/hashtag/MRITogether) is a global online event on open, reproducible, and inclusive MRI research.

In 2026, MRI Together is becoming a **hackathon**: the **MRI TogetherThon**. The goal is to bring the community together around a shared, practical challenge — building a fully open-source, end-to-end MRI pipeline that benefits the entire field.

Whether you are an acquisition specialist, a reconstruction wizard, a software developer, or a clinical researcher, there is a role for you. The hackathon will be structured into focused sub-projects that span the full pipeline — from sequence design to final analysis — using open-source tools already trusted by the community.

If the work is impactful enough, it may lead to a community publication.

<br clear="right"/>

## When?
The hackathon will be held **November 30 – December 4, 2026 (UTC)**. Sessions will span all time zones, and all contributions will be documented and openly shared.

## Who?
We are a [team](committee) of MRI scientists from different corners of the MRI world with a passion for open, reproducible, and inclusive science.
With support and endorsement from [ESMRMB](https://esmrmb.org/), this event aims to produce something the community can use, build on, and publish.

Whether you're a **sequence developer**, **reconstruction engineer**, **image analysis expert**, **software developer**, or **clinical researcher**, there is a project for you here.
```

---

## 5. Delete `26m/abstracts.md` and create `26m/projects.md`

Delete the file `26m/abstracts.md`.

Create a new file `26m/projects.md` with the following content:

```markdown
---
title: Projects
layout: default
description: Hackathon projects
year: 2026
---

# Hackathon Projects

Details about the hackathon projects will be announced soon. Stay tuned!

The 2026 edition of MRI Together is a hackathon aimed at building open-source, end-to-end MRI pipelines. Sub-projects will cover the full chain from acquisition to analysis, each using community-trusted open-source tools.

[Contact us](mailto:mritogether@esmrmb.org) if you have a project idea you would like to propose.
```

---

## 6. Update `26m/committee.md`

Change only the front matter: set `year: 2026`. Leave the rest of the file as-is — the committee content will be filled in manually.

**Find:**
```yaml
year: 2025
```

**Replace with:**
```yaml
year: 2026
```

---

## 7. Update `26m/sponsors.md`

Replace the entire file content with a stripped-down version that keeps the structure but removes the 2025-specific sponsor entries:

```markdown
--- 
title: Supporters
layout: default
description: Workshop sponsors, external advisors, volunteers, and supporting researchers
year: 2026
--- 

We gratefully acknowledge the following sponsors that make **#MRITogetherThon 2026** happen.

To learn more about ways that _you_ can support the event, please [contact us](mailto:mritogether@esmrmb.org).

## Gold Sponsors

*To be announced.*

<br>

## Silver Sponsors

*To be announced.*

<br>

## Media Sponsors

*To be announced.*

<br>

### Fancy to help organizing?

We'll need volunteers to help us with technical aspects, the social gathering platform, video editing, captioning and uploading, and communications and social media management, and we'd love to have you on board!
[Contact us](mailto:mritogether@esmrmb.org) when you want to know more! — let's [**#MRITogether**](https://twitter.com/hashtag/MRITogether)!
```

---

## 8. Update `26m/registration.md`

Replace the entire file content with a placeholder that keeps the header and structure:

```markdown
---
title: Registration and How to Attend
layout: default
description: How to register
year: 2026
--- 

## Registration

Registration information for **MRI TogetherThon 2026** will be announced soon.

Aligned with the workshop's vision of inclusivity, registration will be free.

By participating in [**#MRITogether26**](https://twitter.com/hashtag/MRITogether) in any form you agree to the [**code of conduct**](/CODE_OF_CONDUCT).
```

---

## 9. Update `26m/news.md`

Replace the entire file content with:

```markdown
---
title: News from MRI Together
layout: default
description: News for MRI Together 2026
year: 2026
---

### June 2026
## MRI TogetherThon announced!

We are excited to announce that MRI Together 2026 will be a hackathon — the **MRI TogetherThon**! More details about the projects and how to participate will follow. Stay tuned!
```

---

## 10. Update `26m/jobboard.md`

Replace the entire file content with:

```markdown
---
title: Job Board
layout: default
description: MRI Together job board
year: 2026
---

To advertise a position on MRI Together's job board, please [email us](mailto:mritogether@esmrmb.org) your listing.

## Open Positions

*No open positions at the moment. Check back later.*
```

---

## 11. Update `26m/comingsoon.md`

Change only the front matter year:

**Find:**
```yaml
---
title: Coming Soon
layout: default
---
```

**Replace with:**
```yaml
---
title: Coming Soon
layout: default
year: 2026
---
```

---

## 12. Update `26m/programbook.md` (if it contains year-specific content)

Change `year: 2025` to `year: 2026` in the front matter. Strip any 2025-specific content from the body if present, leaving only headers.

---

## Summary of file operations

| Action | File |
|--------|------|
| Create | `_includes/preamble2026.html` |
| Create | `_includes/menu2026.html` |
| Modify | `_layouts/default.html` (slideshow text) |
| Modify | `26m/index.md` |
| Delete | `26m/abstracts.md` |
| Create | `26m/projects.md` |
| Modify (year only) | `26m/committee.md` |
| Modify | `26m/sponsors.md` |
| Modify | `26m/registration.md` |
| Modify | `26m/news.md` |
| Modify | `26m/jobboard.md` |
| Modify | `26m/comingsoon.md` |
| Modify (year only) | `26m/programbook.md` |
