---
title: Timetable
layout: default
javascript: [ timezone.js ]
---

Select your time zone to see the adapted times in the program below: <select id="timezone_select" onchange="adaptTime()"></select>

* TOC
{:toc}

# Meeting timetable

The content will be offered live across multiple time zones, this means that each workshop will be repeated twice. While the general topics will be the same for the two session times, the speakers and the content of the specific talks will change.


## Session times
We have identified 4 session times:

|           | Time (UTC)  | Time (CET)  | Time (EST)  | Time (PST)  | Time (Beijing) | Time (Tokyo) | Time (IST) |
| --------- | ----------- | ----------- | ----------- | ----------- | -------------- | ----------- | ----------- |
| Atlantic  | 12:00-14:00 | 13:00-15:00 | 07:00-09:00 | 04:00-06:00 | 20:00-22:00    | 21:00-23:00 | 17:30-19:30 |
| Pacific   | 00:00-02:00 | 01:00-03:00 | 19:00-21:00 | 08:00-10:00 | 08:00-10:00    | 09:00-11:00 | 5:30-7:30 |
| Indian    | 06:00-08:00 | 07:00-09:00 | 01:00-03:00 | 22:00-00:00 | 14:00-16:00    | 15:00-17:00 | 11:30-13:30 |
| Caribbean | 18:00-20:00 | 19:00-21:00 | 13:00-15:00 | 10:00-12:00 | 02:00-04:00    | 03:00-05:00 | 23:30-01:30 |

On the following map, yellow represents the *Atlantic*, blue represents the *Pacific*,  green represents the *Indian*, and red represents the *Caribbean* session times.
<img src="/images/worldmap_timezones.png" alt="World map with session times" style="max-width: 100%;"/>

## Opening Sessions: 
### Atlantic Opening Session - <span class="timezone_adapt" data-date="13" data-start-time="12" data-end-time="14"></span>
**Reproducible science**
- **Moderator:** Francesco Santini
- **Welcome and overview of the meeting** - Francesco Santini
- **Introduction to Open Science and Reproducibility** - Cassandra Gould van Praag
- **Reproducibility in MRI: Good and Bad** - Maria Eugenia Caligiuri
- **MRI - journal perspectives on reproducibilty** - David Norris
- **Debate: Open Science in the MR Community** - Serena Bonaretti, H. Steven Scholte


### Pacific Opening Session - <span class="timezone_adapt" data-date="14" data-start-time="00" data-end-time="02"></span>
**Open Source and Commercial development**
- **Moderator:** Laura Bell
- **Welcome and overview of the meeting** - Laura Bell
- **MATLAB for Open Science in MRI** - Reza Fazel-Rezai and Rob Holt
- **3D Slicer: Long-term sustainability of a large open-source project** - Andras Lasso
- **Hyperfine: Ensuring good science and reproducibility within closed development** - Michael Poole
- *Title Pending (Open source development for commerical software)* - Travis Oliphant

## Parallel Sessions A: Data

Indian session time: <span class="timezone_adapt" data-date="14" data-start-time="06" data-end-time="08"></span><br/>
Caribbean session time: <span class="timezone_adapt" data-date="14" data-start-time="18" data-end-time="20"></span>

<div class="session-container">
<div class="session-element" markdown="1">
<h3>Session A1</h3>
**Ethics and practices for data sharing**
<h4>Indian</h4>
- **Moderator:** Penny Hubbard Cristinacce
- **Building a collaborative partnership with research hospitals in China: From inception to publications** - Mark Haacke
- **(MRI) Data sharing in Europe** - Stephan Heunis
- TBA
- *Social break*
- **XNAT - data sharing in multicentre studies** - Simon Doran
<h4>Caribbean</h4>
- **Moderator:** Florian Knoll
- **Data repositories: where to look, how to share** - Greg Cron
- **Defacing and curation for sharing MR brain imaging data** - Stephen Arnott
- **Implementation of parametric DICOM for perfusion** - Ina Kompan
- *Social break*
- **Data anonymization tutorial** (Provisional title) - David Gutman
</div>
<div class="session-element" markdown="1">
<h3>Session A2</h3>
**Data Formats**
<h4>Indian</h4>
- **Moderator:** Julia Guiomar Niso Galan
- **Best practices for data sharing** - Thomas Nichols
- **Open science for functional connectomics** - Xi-Nian Zuo
- **Overview of data format: DICOMs (enhanced dicoms), niftis, analyze, bids - why so many formats? why is this hard?** - Michele Larobina
- *Social break*
- **Image data conversion / how to work with BIDS: Hands-On/Interactive session** - Patricia Clement
<h4>Caribbean</h4>
- **Moderator:** Eric Borisch
- **Raw Data Conversion** - Philip Ehses
- **Image analysis on PACS** - Mariam Aboian 
- **DICOM: testament of time** - David Clunie
- *Social break*
- **Hands-on with vendor-agnostic MRI data: conversion to MRD (ISMRMRD)** - Ahsan Javed and Raj Ramasawmy
</div>
</div>

## Parallel Sessions B: Basic reproducibility

Atlantic session time: <span class="timezone_adapt" data-date="14" data-start-time="12" data-end-time="14"></span><br/>
Pacific session time: <span class="timezone_adapt" data-date="15" data-start-time="00" data-end-time="02"></span>

<div class="session-container">
<div class="session-element" markdown="1">
<h3>Session B1</h3>
**Study design and interpretation. The reproducibility crisis**
<h4>Atlantic</h4>
- **Moderator:** Tugba Akinci D'Antonoli
- **P-values and the replicability of results** - Valentin Amrhein
- **The replication crisis in science - Lessons learned across disciplines** - Sabine Hoffmann
- **Bayesian statistics and reproducible science** - Andrew Gelman
- *Social break*
- **A white hat guidfe to p-hacking** - Xeni Deligianni
<h4>Pacific</h4>
- **Moderator:** Katy Keenan
- **The reproducibility crisis - is most published research wrong?** - Stuart Buck
- **Making practical or clinical relevance a key part of statistical analysis** - Megan Higgs
- **The new statistics for reproducible science** - Geoff Cumming
- *Social break*
- **A white hat guide to p-hacking** - Pierre Levan
</div>
<div class="session-element" markdown="1">
<h3>Session B2</h3>
**Ensuring reproducibility: phantoms and preclinical imaging**
<h4>Atlantic</h4>
- **Moderator:** Shaihan Malik
- **The metrics of quantitative evaluation for phantom studies: bias and precision** - Sebastian Weingärtner
- **Designing digital phantoms using numerical approximation informed by in vivo scans** - José Marques
- **Application of diffusion phantoms for reproducible ADC mapping across MRI vendor platforms: absolute accuracy, linearity and uniformity** - Dariya Malyarenko
- *Social break*
- **Hands on/Interactive session: Designing a Digital Reference Object for Arterial Spin Labelling (ASL DRO)** - Aaron Oliver-Taylor
<h4>Pacific</h4>
- **Moderator:** Cornelius Faber
- **Reproducibility in preclinical research** (provisional title) - Steven Conolly
- **Age-related neurodegenerative diseases models** - Joanes Grandjean
- **Preclinical tumor models: opportunities and challenges in translation to human studies** - Thomas Yankeelov
- *Social break*
- **Opportunities & Challenges of magnetic resonance spectroscopy research (Hands on/Interactive session)** - Georg Oeltzschner
</div>
</div>

## Parallel Sessions C: Acquisition and reconstruction

Indian session time: <span class="timezone_adapt" data-date="15" data-start-time="06" data-end-time="08"></span><br/>
Caribbean session time: <span class="timezone_adapt" data-date="15" data-start-time="18" data-end-time="20"></span>

<div class="session-container">
<div class="session-element" markdown="1">
<h3>Session C1</h3>
**Vendor-independent pulse sequences**
<h4>Indian</h4>
- **Moderator:** Lukas Winter
- **GammaStar** - Daniel Hoinkiss
- **Integrated acquisition/simulation/reconstruction** - Marten Veldman
- **Open and reproducible magnetization-prepared pulse sequences with Pulseq-CEST** - Kai Herz
- *Social break*
- **Pulseq on Siemens (Hands on/Interactive session)** - Maxim Zaitsev
<h4>Caribbean</h4>
- **Moderator:** Matthias Günther
- **HeartVista/RTHawk** - Eric Peterson
- **PyPulseq** - Keerthi Sravan Ravi
- **Hardware design of the MaRCoS open-source MRI environment** - Benjamin Menküc
- **Software and firmware design of the MaRCoS open-source MRI environment** - Vlad Negnevitsky
- *Social break*
- **Pulseq on GE (Hands on/Interactive session)** - Maxim Zaitsev
</div>
<div class="session-element" markdown="1">
<h3>Session C2</h3>
**Image Reconstruction**
<h4>Indian</h4>
- **Moderator:** Justin Haldar
- **Subtle Data Crimes** - Efrat Shimron
- **The connected imaging instrument** - Michael Hansen
- **Image Recon with ML & AI** - Akshay Chaudhari
- *Social break*
- **A Hands-On Introduction to BART** - Martin Uecker
<h4>Caribbean</h4>
- **Moderator:** Jon Tamir
- **Decentralized reconstruction in academia** - Tobias Block
- **Gadgetron: Enabling advanced imaging AI with global clinical deployment** - Hui Xue
- **Cloud MR** - Riccardo Lattanzi
- *Social break*
- **MIRT: Hands on/Interactive session** - Jeff Fessler
</div>
</div>

## Parallel Sessions D: Postprocessing

Atlantic session time: <span class="timezone_adapt" data-date="15" data-start-time="12" data-end-time="14"></span><br/>
Pacific session time: <span class="timezone_adapt" data-date="16" data-start-time="00" data-end-time="02"></span>

<div class="session-container">
<div class="session-element" markdown="1">
<h3>Session D1</h3>
**Image Analysis**
<h4>Atlantic</h4>
- **Moderator:** Berkin Bilgic
- **Image Analysis in Brain MR** - Henk Mutsaerts
- **Reproducible post processing for cardiac MRI** - Alistair Young
- **Musculoskeletal MRI segmentation** - Valentina Pedoia
- *Social break*
- **Retrospective motion correction toolbox (Hands on/Interactive session)** -  Daniel Gallichan
<h4>Pacific</h4>
- **Moderator:** Martijn Cloos
- **Semi-automated tool for cerebral microbleed detection and volume segmentation** - Melanie Morrison
- **Reproducible Image Analysis using containerized workflows at scale - Introducing the NeuroDesk project** - Steffen Bollmann
- **Reproducible open source solutions for AI in clinical workflows** - Spyridon Bakas, Sarthak Pati 
- *Social break*
- **OSIPI experience on scientific validation of community-contributed code for perfusion imaging – A demo/discussion** - Sirisha Tadimalla
</div>
<div class="session-element" markdown="1">
<h3>Session D2</h3>
**AI in clinical imaging**
<h4>Atlantic</h4>
- **Moderators:** Jan Kirschke and Benedikt Wiestler
- **Computational Magnetic Resonance Imaging (MRI) Approaches for Brain Tumor Classification** - Michael Oluwaseun Dada
- **Limitations of AI in postprocessing** - Marleen de Bruijne
- **Deep Neuro - segmentation GBM** - Kalpathy-Cramer
- *Social break*
- **How to validate AI algorithms in image analysis tools Hands on/Interactive session** - Georg Langs
<h4>Pacific</h4>
- **Moderator:** Veit Sandfort
- **AI Challenges in Pediatric Imaging** - Marius George Linguraru
- **Deep Learning in Breast Screening: research and implementation** - Joseph Ledsam
- **MR fingerprinting: challenges and opportunities** - Dan Ma
- *Social break*
- **AI in Image Registration Hands on/Interactive session ** - Adrian Dalca
</div>
</div>

## Closing Sessions
### Indian Closing Session - <span class="timezone_adapt" data-date="16" data-start-time="06" data-end-time="08"></span>
**Better science, for everybody: reproducibility and accessibility**
- **Moderators:** Emma Biondetti and Sanam Assili
- **Publishing Reproducible science** - Iratxe Puebla
- **EIBALL** - Aad van der Lugt
- **Accessibility of imaging in India and how open technology and innovations can help** - Sonal Krishan
- **Panel discussion: MRI research worldwide: challenges and perspectives** - Godwin Ogbole, Udunna Anazodo, Tchoyoson Lim, Won-Jin Moon, Valerij Kiselev

### Caribbean Closing Session - <span class="timezone_adapt" data-date="16" data-start-time="18" data-end-time="20"></span>
**Community-driven development**
- **Moderator:** TBA
- **arXiv and Open Science** - Alison Fromme
- **PyRadiomics** - Joost van Griethuysen
- **Publishing and Sharing Open Science** - Brian Nosek
- **The QIBA profiles** - Ona Wu
