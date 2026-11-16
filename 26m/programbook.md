---
title: Program Book
layout: default
description: Program
year: 2026
---

<style>
.tz-note { color: #555; font-size: .95rem; }
.day-block { margin: 2rem 0; border: 1px solid #c8c8c8; border-radius: 8px; overflow: hidden; }
.day-head { background: #d9def8; padding: .7rem .9rem; font-weight: 600; }
.day-head .day { color: #3f51b5; font-weight: 700; }
.day-head .date { color: #666; font-weight: 400; margin-left: .5em; }
.day-head .topic { margin-left: 1.5em; font-weight: 700; }
.cycles { display: grid; grid-template-columns: 1fr 1fr; }
.cycle { padding: .8rem; min-width: 0; }
.cycle + .cycle { border-left: 1px solid #e2e2e2; }
.cycle-title { font-size: .76rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #666; margin-bottom: .6rem; }
.single { padding: .8rem; }
.item { border: 1px solid #e2e2e2; border-radius: 6px; overflow: hidden; margin-bottom: .7rem; font-size: .95rem; }
.item:last-child { margin-bottom: 0; }
.item-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0 .8rem; padding: .35rem .7rem; }
.item-head .type { font-size: .76rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; }
.item-head .t-utc { font-weight: 600; font-size: .85rem; }
.item-head .t-local { flex-basis: 100%; text-align: right; font-size: .8rem; opacity: .85; }
.item-head .t-local:empty { display: none; }
.item-body { padding: .6rem .7rem; font-weight: 600; }
.item .speaker { display: block; margin-top: .3rem; color: #666; font-size: .88em; font-weight: 400; }
.opening .item-head, .closing .item-head { background: #dff2eb; color: #0b6b53; }
.talk .item-head { background: #ece9ff; color: #5b44b5; }
.handson .item-head, .workshop .item-head { background: #e7f3ff; color: #0b63b5; }
@media (max-width: 700px) {
  .cycles { grid-template-columns: 1fr; }
  .cycle + .cycle { border-left: none; border-top: 1px solid #e2e2e2; }
}
</style>

# MRITogether26 — *MRI TogetherThon: Refocusing the Community*

This year, MRI Together becomes a collaborative hackathon. The goal is to bring the community together around a shared practical challenge: building a fully open-source, end-to-end MRI pipeline for prenatal imaging—from sequence programming to image analysis.

<p class="tz-note">Each day runs twice, in two cycles at different hours, so that you can follow the one that suits your timezone. Times are in UTC, with the conversion to <strong>your timezone</strong> (<span id="tz-name">detected automatically</span>) shown beneath.</p>

<section class="day-block">
<div class="day-head"><span class="day">Day 1</span><span class="date">30 November</span><span class="topic">Sequence Programming</span></div>
<div class="single"><div class="item opening"><div class="item-head"><span class="type">Opening</span><span class="t-utc" data-start="2026-11-30T09:00:00Z" data-end="2026-11-30T09:30:00Z">09:00–09:30 UTC</span><span class="t-local"></span></div><div class="item-body">Introduction to MRITogether and the hackathon</div></div></div>
<div class="cycles">
<div class="cycle"><div class="cycle-title">Cycle 1</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-11-30T09:30:00Z" data-end="2026-11-30T10:00:00Z">09:30–10:00 UTC</span><span class="t-local"></span></div><div class="item-body">Open-source sequence programming<span class="speaker">Maxim Zeitsev — University Medical Center Freiburg, Freiburg, Germany</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-11-30T10:00:00Z" data-end="2026-11-30T10:30:00Z">10:00–10:30 UTC</span><span class="t-local"></span></div><div class="item-body">Optimisation of MRI sequences for diffusion placenta imaging<span class="speaker">Paddy Slator — Cardiff University, Cardiff, UK</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-11-30T10:30:00Z" data-end="2026-11-30T13:30:00Z">10:30–13:30 UTC</span><span class="t-local"></span></div><div class="item-body">Program and optimise a diffusion sequence for placenta application</div></div>
</div>
<div class="cycle"><div class="cycle-title">Cycle 2</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-11-30T17:30:00Z" data-end="2026-11-30T18:00:00Z">17:00–17:30 UTC</span><span class="t-local"></span></div><div class="item-body">Open-source sequence programming<span class="speaker">Jon-Fredrik Nielsen — University of Michigan, Ann Arbor, USA</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-11-30T17:00:00Z" data-end="2026-11-30T17:30:00Z">17:30–18:00 UTC</span><span class="t-local"></span></div><div class="item-body">Optimisation of MRI sequences for diffusion placenta imaging<span class="speaker">Nahla M.H. Elsaid — Children's National Hospital, Washington DC, USA</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-11-30T18:00:00Z" data-end="2026-11-30T21:00:00Z">18:00–21:00 UTC</span><span class="t-local"></span></div><div class="item-body">Program and optimise a diffusion sequence for placenta application</div></div>
</div>
</div>
</section>

<section class="day-block">
<div class="day-head"><span class="day">Day 2</span><span class="date">1 December</span><span class="topic">Reconstruction &amp; Simulation</span></div>
<div class="cycles">
<div class="cycle"><div class="cycle-title">Cycle 1</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-01T09:30:00Z" data-end="2026-12-01T10:00:00Z">09:30–10:00 UTC</span><span class="t-local"></span></div><div class="item-body">Introduction to numerical phantoms and MRI sequence simulation with KomaMRI<span class="speaker">Pablo Villacorta-Aylagas — Universidad de Valladolid, Valladolid, Spain</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-01T10:00:00Z" data-end="2026-12-01T10:30:00Z">10:00–10:30 UTC</span><span class="t-local"></span></div><div class="item-body">Reconstruction (BART, EPI reconstruction)<span class="speaker">Mengye Lyu — Shenzhen Technology University, Shenzhen, China</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-12-01T10:30:00Z" data-end="2026-12-01T13:30:00Z">10:30–13:30 UTC</span><span class="t-local"></span></div><div class="item-body">Building a Digital Placenta Phantom, Simulating Data, and Running Reconstructions</div></div>
</div>
<div class="cycle"><div class="cycle-title">Cycle 2</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-01T16:00:00Z" data-end="2026-12-01T16:30:00Z">16:00–16:30 UTC</span><span class="t-local"></span></div><div class="item-body">Introduction to numerical phantoms and MRI sequence simulation with KomaMRI<span class="speaker">Carlos Castillo-Passi — Stanford University, Stanford, USA</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-01T16:30:00Z" data-end="2026-12-01T17:30:00Z">16:30–17:30 UTC</span><span class="t-local"></span></div><div class="item-body">Reconstruction (BART, EPI reconstruction)<span class="speaker">Martin Uecker — Institute of Biomedical Imaging, Graz University of Technology, Graz, Austria</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-12-01T17:30:00Z" data-end="2026-12-01T20:30:00Z">17:30–20:30 UTC</span><span class="t-local"></span></div><div class="item-body">Building a Digital Placenta Phantom, Simulating Data, and Running Reconstructions</div></div>
</div>
</div>
</section>

<section class="day-block">
<div class="day-head"><span class="day">Day 3</span><span class="date">2 December</span><span class="topic">Motion Correction &amp; Post-processing</span></div>
<div class="cycles">
<div class="cycle"><div class="cycle-title">Cycle 1</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-02T09:00:00Z" data-end="2026-12-02T09:30:00Z">09:00–09:30 UTC</span><span class="t-local"></span></div><div class="item-body">Addressing Motion Artifacts in (prenatal) MRI<span class="speaker">Dimitra Flouri — CYENSE Centre of Excellence, Nicosia, Cyprus</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-02T09:30:00Z" data-end="2026-12-02T10:00:00Z">09:30–10:00 UTC</span><span class="t-local"></span></div><div class="item-body">Advanced Diffusion Post-Processing Pipelines for Prenatal Imaging<span class="speaker">Jana Hutter — Leibniz University Hannover, Hannover, Germany</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-12-02T10:00:00Z" data-end="2026-12-02T13:00:00Z">10:00–13:00 UTC</span><span class="t-local"></span></div><div class="item-body">Motion correction, denoising and post-processing of real and simulated MRI data</div></div>
</div>
<div class="cycle"><div class="cycle-title">Cycle 2</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-02T15:00:00Z" data-end="2026-12-02T15:30:00Z">15:00–15:30 UTC</span><span class="t-local"></span></div><div class="item-body">Addressing Motion Artifacts in (prenatal) MRI<span class="speaker">Thomas Küstner — University Hospital of Tübingen, Tübingen, Germany</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-02T15:30:00Z" data-end="2026-12-02T16:00:00Z">15:30–16:00 UTC</span><span class="t-local"></span></div><div class="item-body">Advanced Diffusion Post-Processing Pipelines for Prenatal Imaging<span class="speaker">Penny Anne Gowland — University of Nottingham, Nottingham, UK</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-12-02T18:00:00Z" data-end="2026-12-02T21:00:00Z">18:00–21:00 UTC</span><span class="t-local"></span></div><div class="item-body">Motion correction, denoising and post-processing of real and simulated MRI data</div></div>
</div>
</div>
</section>

<section class="day-block">
<div class="day-head"><span class="day">Day 4</span><span class="date">3 December</span><span class="topic">Analysis</span></div>
<div class="cycles">
<div class="cycle"><div class="cycle-title">Cycle 1</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-03T09:00:00Z" data-end="2026-12-03T09:30:00Z">09:00–09:30 UTC</span><span class="t-local"></span></div><div class="item-body">Quality metrics and reconstruction quality assessment<span class="speaker">Martin Styner — The University of North Carolina at Chapel Hill, Chapel Hill, USA</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-12-03T10:00:00Z" data-end="2026-12-03T13:00:00Z">10:00–13:00 UTC</span><span class="t-local"></span></div><div class="item-body">Applying image quality metrics and extracting quantitative parameters</div></div>
</div>
<div class="cycle"><div class="cycle-title">Cycle 2</div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-03T17:00:00Z" data-end="2026-12-03T17:30:00Z">17:00–17:30 UTC</span><span class="t-local"></span></div><div class="item-body">Quality metrics and reconstruction quality assessment<span class="speaker">Steven Meisler — University of Pennsylvania, Philadelphia, USA</span></div></div>
<div class="item talk"><div class="item-head"><span class="type">Talk</span><span class="t-utc" data-start="2026-12-03T17:30:00Z" data-end="2026-12-03T18:00:00Z">17:30–18:00 UTC</span><span class="t-local"></span></div><div class="item-body">Applications in placenta diffusion imaging<span class="speaker">Esra Abaci Turk — Boston Children's Hospital, Boston, USA</span></div></div>
<div class="item handson"><div class="item-head"><span class="type">Hands-on</span><span class="t-utc" data-start="2026-12-03T18:00:00Z" data-end="2026-12-03T21:00:00Z">18:00–21:00 UTC</span><span class="t-local"></span></div><div class="item-body">Applying image quality metrics and extracting quantitative parameters</div></div>
</div>
</div>
</section>

<section class="day-block">
<div class="day-head"><span class="day">Day 5</span><span class="date">4 December</span><span class="topic">Pipeline Assembly</span></div>
<div class="single"><div class="item workshop"><div class="item-head"><span class="type">Workshop</span><span class="t-utc">TBD</span></div><div class="item-body">Full Placenta MRI pipeline: integrating sequence programming, simulation, reconstruction, and analysis<span class="speaker">Jo Hajnal — King's College London, London, UK</span></div></div>
<div class="item closing"><div class="item-head"><span class="type">Closing</span><span class="t-utc">TBD</span></div><div class="item-body">Prize Announcements and closing talk</div></div></div>
</section>

<script>
(function () {
  var tz;
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { return; }
  if (!tz || tz === 'UTC' || tz === 'Etc/UTC') return;
  var hm = new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: tz });
  var day = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: tz });
  var abbr = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short', timeZone: tz });
  var name = function (d) {
    var p = abbr.formatToParts(d).filter(function (x) { return x.type === 'timeZoneName'; });
    return p.length ? p[0].value : tz;
  };
  var el = document.getElementById('tz-name');
  if (el) el.textContent = tz.replace(/_/g, ' ');
  document.querySelectorAll('.t-utc[data-start]').forEach(function (n) {
    var s = new Date(n.dataset.start), e = new Date(n.dataset.end);
    var txt = hm.format(s) + '–' + hm.format(e) + ' ' + name(s);
    if (day.format(s) !== new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(s))
      txt += ' (' + day.format(s) + ')';
    n.nextElementSibling.textContent = txt + ' — your time';
  });
})();
</script>
