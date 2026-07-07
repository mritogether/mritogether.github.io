---
title: Program Book
layout: default
description: Program
year: 2026
---

<style>
.schedule {
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;
  border: 1px solid #c8c8c8;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.96rem;
}

.schedule col.type-col {
  width: 12%;
}

.schedule col.text-col {
  width: 88%;
}

.schedule td {
  padding: 0.7rem 0.9rem;
  border-top: 1px solid #e2e2e2;
  vertical-align: top;
}

.schedule tr:first-child td {
  border-top: none;
}

.schedule .header td {
  background: #d9def8;
  font-weight: 600;
}

.schedule .day {
  color: #3f51b5;
  font-weight: 700;
}

.schedule .date {
  color: #666;
  font-weight: 400;
  margin-left: .5em;
}

.schedule .topic {
  margin-left: 1.5em;
  font-weight: 700;
}

.schedule .type {
  font-size: .76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  white-space: nowrap;
}

.schedule .opening {
  background: #dff2eb;
  color: #0b6b53;
}

.schedule .talk {
  background: #ece9ff;
  color: #5b44b5;
}

.schedule .handson {
  background: #e7f3ff;
  color: #0b63b5;
}

.schedule .workshop {
  background: #dfeeff;
  color: #0b63b5;
}

.schedule .closing {
  background: #dff2eb;
  color: #0b6b53;
}

.schedule .speaker {
  display: block;
  margin-top: .3rem;
  color: #666;
  font-size: .88em;
}

@media (max-width: 600px) {
  .schedule {
    font-size: 0.85rem;
  }

  .schedule .type {
    white-space: normal !important;
    overflow-wrap: anywhere;
    word-break: break-word;
    font-size: .65rem;
    line-height: 1.1;
  }

  .schedule td {
    padding: 0.5rem 0.3rem;
  }
}
</style>

# MRITogether26 — *MRI TogetherThon: Refocusing the Community*

This year, MRI Together becomes a collaborative hackathon. The goal is to bring the community together around a shared practical challenge: building a fully open-source, end-to-end MRI pipeline for prenatal imaging—from sequence programming to image analysis.

<table class="schedule">
<colgroup>
  <col class="type-col">
  <col class="text-col">
</colgroup>

<tr class="header">
<td colspan="2">
<span class="day">Day 1</span>
<span class="date">30 November</span>
<span class="topic">Sequence Programming</span>
</td>
</tr>

<tr>
<td class="type opening">Opening</td>
<td>Introduction to MRITogether and the hackathon</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Open-source sequence programming</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>
Optimisation of MRI sequences for prenatal imaging
<span class="speaker">Nahla M. Elkaid — Children's National Hospital, Washington DC</span>
</td>
</tr>

<tr>
<td class="type handson">Hands-on</td>
<td>Program and optimise a sequence together (group exercise)</td>
</tr>

</table>

<table class="schedule">
<colgroup>
  <col class="type-col">
  <col class="text-col">
</colgroup>

<tr class="header">
<td colspan="2">
<span class="day">Day 2</span>
<span class="date">1 December</span>
<span class="topic">Reconstruction &amp; Simulation</span>
</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Reconstruction</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Introduction to numerical phantoms and MRI sequence simulation with KomaMRI</td>
</tr>

<tr>
<td class="type handson">Hands-on</td>
<td>Run your sequence on a digital phantom and reconstruct data</td>
</tr>

</table>

<table class="schedule">
<colgroup>
  <col class="type-col">
  <col class="text-col">
</colgroup>

<tr class="header">
<td colspan="2">
<span class="day">Day 3</span>
<span class="date">2 December</span>
<span class="topic">Motion Correction &amp; Post-processing</span>
</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Motion correction in MRI</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Motion correction in prenatal imaging</td>
</tr>

<tr>
<td class="type handson">Hands-on</td>
<td>Simulate motion-affected k-space data and correct them</td>
</tr>

</table>

<table class="schedule">
<colgroup>
  <col class="type-col">
  <col class="text-col">
</colgroup>

<tr class="header">
<td colspan="2">
<span class="day">Day 4</span>
<span class="date">3 December</span>
<span class="topic">Analysis</span>
</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Quality metrics and reconstruction quality assessment</td>
</tr>

<tr>
<td class="type talk">Talk</td>
<td>Applications in prenatal body imaging</td>
</tr>

<tr>
<td class="type handson">Hands-on</td>
<td>Apply quality metrics to assess and compare reconstruction outputs</td>
</tr>

</table>

<table class="schedule">
<colgroup>
  <col class="type-col">
  <col class="text-col">
</colgroup>

<tr class="header">
<td colspan="2">
<span class="day">Day 5</span>
<span class="date">4 December</span>
<span class="topic">Pipeline Assembly</span>
</td>
</tr>

<tr>
<td class="type workshop">Workshop</td>
<td>Full fetal MRI pipeline: integrating sequence programming, simulation, reconstruction and analysis</td>
</tr>

<tr>
<td class="type closing">Closing</td>
<td>Closing talk</td>
</tr>

</table>