---
title: Program Book
layout: default
---

## Day 1: December 6th
### **Embracing diversity in MRI: A journey towards globally inclusive science** (8:00-10:00 UTC)
#### **Harrison Aduluwa**: Scan With Me (SWiM) - a train-the-trainer initiative for improving access to high quality MRI in resource-limited settings
The majority of the world’s population do not have access to adequate MRI services. Besides the fundamental challenge of MRI scanner availability in low- and middle-income countries (LMICs), the scarcity of skilled MRI expertise to acquire high-quality MRI exacerbates the low MRI accessibility. In this talk, I will highlight the impact of the Scan with Me (SWiM) initiative from the Consortium for Advancement of MRI Education and Research in Africa (CAMERA), aimed at training a network of MRI technologists in LMICs who can train others to acquire high quality MR images.
#### **Maruf Adewole**: Role of AI in democratizing MRI in Africa
In Africa, limited access to advanced medical imaging, particularly Magnetic Resonance Imaging (MRI), due to economic constraints and healthcare infrastructure disparities is a significant challenge. Artificial Intelligence (AI) is playing a transformative role in democratizing MRI services across the continent. The Medical Artificial Intelligence Laboratory (MAI Lab), supported by the Consortium for the Advancement of MRI Education and Research in Africa (CAMERA), has been instrumental in this effort. Initiatives such as the creation of the BraTS-SSA dataset and challenge, the SPARK Academy and Project HASKE are established to enable access to MRI in the region and the resultant improvement in health outcomes.
#### **Johnes Obungoloch**: Embracing the ultra-low field MRI in Low and Middle Income Countries
Access to MRI still remains a challenge in low and middle income countries due to challenges such as cost, infrastructure, energy and technical complexities associated with conventional high field MRI systems. In the recent years, there has been emergence of ultra-low field MRI systems that take into considerations the challenges of developing countries. This talk will focus on some of the characteristics of these ultr-low field MRI systems that make them suitable for LMICs and will also highlight the efforts being taken to embrace these low field MRI systems.
#### **Steven Sourbron**: The Open Science Initiative for Perfusion Imaging

<br>

### **Building tomorrow's MRI: A roadmap to open source hardware** (13:00-15:00 UTC)
#### **Tom O'Reilly**: The Challenges of Replicating an Open-Source MRI Scanner Around the World
#### **Lukas Winter**: The Open Source MRI: From Dream to Reality
More affordable MR scanners, cheaper repair and maintenance, more accessible devices, more innovations, reproducible scientific results, better educational programs, more inclusive research and development, easier and faster translation into the clinic, blueprints for regulatory approval…this and many more are the promises of having an Open-Source MRI available. First low-field MRI prototypes have been designed and tested and the next generation is being constructed for easier reproduction, more robust imaging, and systematic performance evaluations.
#### **Kristen Zarcone**: Build my own MRI scanner? Where do I start?

<br>

### **Transparent innovation: Pioneering vendor-agnostic data acquisition** (20:00-22:00 UTC)
#### **Nikola Stikov**: A vendor-neutral approach to magnetic resonance imaging
This lecture will illustrate how vendor-neutral ecosystems can facilitate the standardization and reproducibility of MRI at multiple levels. The first part of the talk will introduce several vendor-neutral platforms for MRI pulse sequence development. The second half will focus on MRI applications that benefit from open-source software and vendor-neutral sequences, with special focus on myelin imaging.
#### **Andreia Gaspar**: Open-Source sequence developing in myocardial T1 mapping
Open-MOLLI - an open-source sequence for myocardial T1 mapping similar to MOLLI was developed with the aim to improve the robustness of quantitative methods for diagnosis and enable comparison between centers. Open-MOLLI will be presented and discussed along with the newest implementation with simultaneous multi-slice (Open-MOLLI-SMS) that  allows to accelerate quantitative T1 by obtaining all slices in a fast single shot avoiding cross-slice inconsistencies and minimizing patient discomfort associated to breath holding.
#### **Jon Tamir**: Reproducible MRI Reconstruction with BART
In this tutorial, we will review the basics of image reconstruction using the open-source BART toolbox (mrirecon.github.io/bart). BART is a multi-platform and vendor neutral MRI simulation and reconstruction framework. We will first create and process phantom data and demonstrate the so-called inverse crime. Next, we will reconstruct multi-coil MRI data following best practices in a reproducible manner.
#### **Kai Tobias Block and Leeor Alon**: Experience from the MRI4ALL Hackathon 2023
The goal of the MRI4ALL Hackathon, which took place in October 2023, was to create a fully-fledged low-field MRI scanner in just four days and to share everything as open-source resources. Development work was done in parallel by four teams that focused on the main magnet, gradient coils, RF hardware, and software platform. In this talk, we will discuss how the idea for this hackathon came together, present the created scanner design and components, and summarize the experience and feedback.
<br>
<br>

## Day 2: December 7th
### **Cultivating openness: reproducible data acquisition** (1:00-2:30 UTC)
#### **Hongjian He**: Measuring Brain Microstructure Using the Multi-Compartment T2 Model
Our brain is comprised of complex structural components, and these components exhibit significant differences in magnetic resonance (MR) physical characteristics, providing an opportunity to analyze the brain's microstructure. In this talk, our main focus will be on MR relaxometry related mapping techniques that aim to identify these microstructure. We will begin with a demonstration of multicompartmental model of tissue signal and then introduce our development in quantitative relaxometry mapping utilizing the MR fingerprinting (MRF) technique. Additionally, we will show recent progress on a 3D ultra-short TE MRF method, which enables the direct detection of myelin-proton related signals.
#### **James Korte**: Magnetic resonance biomarker assessment software (MR-BIAS): an automated open-source tool for the ISMRM/NIST system phantom
Quantitative MRI phantoms are becoming an integral part of multicentre clinical trials investigating imaging biomarkers. We will present our open-source software, MR-BIAS, designed to allow anyone to analyse data from the ISMRM/NIST system phantom to quantify T1 and T2 measurements. We are currently extending the software to support the NIST/QIBA diffusion phantom.
#### **David Waddington**: Real-time deployment of open source tools for image reconstruction
What happens between k-space and the image you see on your screen? Often this is much more than a Fourier transform. Here, I will discuss open source tools such as the Gadgetron that we have used to implement our own image reconstruction methods that integrate artificial intelligence for real-time guidance of radiation beams on MRI-Linacs.

<br>

### **MRI data liberation: Sharing for a better future** (8:00-10:00 UTC)
#### **Camille Maumet**: Reusing neuroimaging derived data?
As shared datasets are becoming increasingly large, more and more initiatives focus on sharing derived datasets to reduce the required computation time. But how easy it is to reuse derived datasets? In this talk we will discuss neuroimaging reproducibility and dealing with datasets that were produces by different pipelines. Specifically we will focus on statistic map obtained in task-fMRI. We will review our recent efforts to better cope with and understand the different sources of pipeline-induced variability.
#### **Patricia Clement**: The Brain Imaging Data Structure (BIDS): As Easy as Baking a Cake
The Brain Imaging Data Structure, BIDS in short, is data organization standard for MRI, MEG, EEG, PET, and other data, as well as metadata. This structure is developed to increase reproducibility and facilitate data sharing. Although BIDS gained much interest and is being adopted by many conversion tools, many researchers are not familiar with the conversion procedure. Luckily, converting your dataset is as simple as baking a cake!
#### **João Jorge**: An overview of BigBrain-MR: a publicly-available high-resolution computational phantom to empower MRI methods development
R&D efforts in MRI can greatly benefit from simulation platforms that can adequately reproduce the biophysical characteristics of in-vivo acquisitions. In this talk, I will provide an overview of BigBrain-MR, a publicly-available computational phantom with realistic anatomical detail up to 100-µm resolution, including multiple MRI properties that affect image generation. I will showcase some applications, as well as validation tests we have performed to assess its value as a simulation platform.
#### **Stephan Heunis**: DataLad for decentralized research data management
I will present an overview of the open source tool DataLad and how it can help researchers to work with their data reproducibly and efficiently, whether it is with regards to a single project or a large global consortium. DataLad can help you make your research outputs Findable, Accessible, Interoperable and Reproducible, let's find out how!
#### **Chao-Gan Yan**: Research Progress and Blueprint of the Depression Imaging REsearch ConsorTium (DIRECT) Phase III
DIRECT Phase I pooled 2428 brain images for MDD research, and Phase II focused on the subgenual anterior cingulate cortex (sgACC) and its link to TMS outcomes. Analyzing 1660 MDD patients and 1341 controls, it mapped sgACC functional connectivity (FC) differences. A study on 25 treatment-resistant patients linked FC changes to rTMS outcomes, finding enhanced sgACC-DLPFC FC in MDD. A dual regression approach for personalized TMS targeting showed more effective outcomes with individualized loci. DIRECT Phase III will launch trials to validate these methods, aiming to improve TMS treatment and contribute to scientific research.

<br>

### **Coding the future: open source software** (13:00-14:20 UTC)
#### **Alexander Daniel**: The UKRIN Kidney Analysis Toolbox: Data Analysis for Multi-Vendor Studies
Multi-centre, multi-vendor validation studies are key to the clinical translation of renal MRI and as such, the development of harmonised, cross-vendor protocols is crucial. Although many vendors offer tools to calculate quantitative maps on the scanner, these methods are typically closed-source and as such, not suitable for multi-vendor studies. In this talk I’ll be discussing the UK Renal Imaging Network Kidney Analysis Toolbox (UKAT), a vendor agnostic Python analysis framework that enables harmonised quantitative MRI analysis with a focus on the kidneys.
#### **Rafael Neto Henriques**: Diffusion Imaging in Python (DIPY) and its contributions to open and reproducible research
Diffusion Imaging in Python (DIPY) stands as a large-scale collaborative open-source imaging software library, dedicated to providing reference implementations of processing and analysis tools for diffusion MRI or even for other medical imaging modalities. This talk offers an overview of DIPY’s capabilities, delves into its continuous development, and explores its contributions to the realms of open and reproducibility research.
#### **Carlos Castillo**: KomaMRI.jl: Framework for MRI Simulations with GPU Acceleration
#### **Lars Kasper**: PhysIO, UniQC and a TAPAStry of Tools: Open Source Development at the MRI Methods/Application Interface
At the interdisciplinary interface between MRI methods development and application, complex analysis pipelines are instrumental for scientific progress, while accessibility of the tools to non-experts is required. This challenge inspired the TAPAS software package, which provides building blocks for computational assays in psychiatry. Particularly, we will highlight the PhysIO and UniQC Toolboxes therein, which support model-based fMRI via physiological noise modeling and unified quality control.

### **Hands-on tutorial** (14:20-15:20 UTC)
#### **Eneko Urunuela**: Unlocking the Power of GitHub: A Guide to Open Source Collaboration
This educational talk provides a comprehensive introduction to using GitHub for collaborative open source development. It covers key concepts, techniques, and best practices for effective collaboration, version control, issue tracking, pull requests, and more. Attendees will gain practical knowledge to confidently contribute and collaborate on open source projects using GitHub.

<br>

### **Perspectives in practice: beyond academia** (20:00-22:00 UTC)
#### **Clifton Fuller**: MR-guidance and biomarkers for head-and-neck adaptive therapy

#### **Jade Anderson**: EDI (DEI) and Its Importance
#### **Mattieu Boudreau**: Beyond the Horizon: Navigating Reproducible Research Practices in MRI with MRM Highlights
Embark on a journey through MRI reproducible research practices with MRM Highlights. Since 2015, it spotlights MRM publications, pivoting in 2020 to emphasize reproducibility. This talk explores the open-source MRI landscape, covers recent updates, addresses code-sharing concerns, poses essential questions for authors, whether new or experienced, who are venturing into code sharing, and distills lessons from the reproducible research blog. Join us in shaping the future of MRI research.

#### **Jason Karamchandani and Samir Das**: Open science and clinical data: The C-BIG repository
The global sharing of clinical MRI data has encountered long standing obstacles, encompassing ethical, legal, and technical dimensions. Our examination will delve into these challenges through the lens of the C-BIG repository, an exemplar of Open Science Clinical repositories. C-BIG effectively fosters collaboration among clinicians, pharmaceutical entities, and academia, with the overarching mission of catalyzing scientific discovery.

<br>
<br>

## Day 3: December 8th
### **Tools for all: open source data analysis** (1:00-2:30 UTC)
#### **Rob Finnegan**: Unlocking medical imaging with PlatiPy
In the evolving landscape of medical physics, open-source software is becoming increasingly pivotal. This talk will introduce PlatiPy, a Python library designed to revolutionise medical imaging. PlatiPy  offers a comprehensive, extensible, and continually expanding suite of tools, spanning all aspects of processing and analysis such as DICOM conversion, image registration, automatic segmentation, and a powerful visualisation toolkit.
#### **Fernanda Ribeiro**: Improving the robustness of deep learning segmentation models for medical image segmentation
Deep learning holds immense promise for unlocking medical imaging applications, yet its full potential is hindered by challenges in model generalisability and reliability. A notable setback lies in the observed performance degradation when deploying deep learning models on unseen datasets or new populations. In this talk, I will discuss some of the new developments to address these issues and increase segmentation robustness in real-world applications.
#### **Mingrui Xia**: Functional connectome features to study psychiatric disorders
Functional connectome derived from MRI data provides a framework for characterizing the organizational principles of brain networks that underlie normal cognition and brain disorders. This talk will introduce fundamental concepts for analyzing the functional human connectome based on MRI data. Subsequently, the discussion will focus on highlighting topological disruptions within functional brain networks in psychiatric disorders and insights into the identification of neurosubtypes in depression based on normative models.

### **Hands-on tutorial** (2:30-3:30 UTC)
#### **Yu Sun**: From DICOM to AI models - a workflow using Python for MR image processing
Python is a modern scripting language widely used in scientific computing. This talk will show you a workflow to extract voxel data from DICOM, apply filters, augment data and feed data to a deep learning model. It’s a close look of how Python is used in everyday clinical research. You'll find the beauty of how elegantly Python connects various pieces together. If you're relatively new to Python or want to build an automation pipeline, this talk will set you at a good position to get started.

<br>

### **Connecting minds: Communities for open and reproducible science** (8:00-10:00 UTC)
#### **Esther Warnert**: Networking for Science: the story of GliMR 2.0
In this talk I will discuss our journey in creating a community for glioma MRI research across Europe, from getting together with a few to write an EU grant for a COST Action back in 2018 to having a network of 300 members across 30 countries in 2023.  
#### **Stefano Moia**: The gains and hurdles of making science a community effort: the case of Physiopy
Open science practices push toward reducing competition and increasing collaboration fostering the development of international scientific communities. We will look at the case of physiopy, an international, voluntary, community based open development project for physiological data handling in neuroimaging, to discuss how science can benefit from such realities, as well as what are their strengths and their weaknesses.
#### **Serena Bonaretti**: Introducing the Open and Reproducible Musculoskeletal Imaging Research (ORMIR) Community
The Open and Reproducible Musculoskeletal Imaging Research (ORMIR) community (https://ormircommunity.github.io) includes more than 40 international researchers in musculoskeletal (MSK) imaging and keeps growing. Our aims include creating and sharing computational workflows in Python with use cases in Jupyter notebooks, and standardizing data acquisitions and management. In this presentation, the focus will be on our activities, including successes and margins for improvement.
#### **Alexandra Ljimani**: Transformation of renal imaging: From PARENCHIMA to Renalmri.org
In the last few years, decisive progress has been made towards the clinical translation of functional renal MRI  techniques. This was made possible by successful international and interdisciplinary COST project, PARENCHIMA. This lecture will present this path and highlight the future horizons of renal MR imaging, promising new dimensions and transformative prospects, as renalmri.org.
#### **ESMRMB Reproducibility Highlights**

<br>

### **From lab to life: in vitro and pre-clinical MRI with transparency** (13:00-14:30 UTC)
#### **Henning M. Reimann**: Novel Ways of Science Communication and Collaboration: OpenMinds – Enabling the 3Rs for Animal Welfare by Promoting the 3Rs for Scientific Value
Rodent functional magnetic resonance imaging (fMRI) can replace more invasive readouts for assessing brain activity. However, the necessity to anesthetize animals during examination has a prominent impact on study outcome and comparability with human studies. Anesthesia affects overall physiology, including brain states, functional networks, information transfer, sensory processing and hemodynamic integrity—i.e., the physiological translation of neuronal activity into hemodynamic responses captured by fMRI. Thereby, different anesthetics affect the above measures in distinct ways, which pose a further challenge for data interpretation. With “OpenMinds” we proposed an open encyclopedia for anesthetic effects as platform to report and share findings and data with the mouse fMRI community. The goal is to provide a powerful web-based infrastructure for fast and easy dissemination of findings, data, and protocols to gain a better understanding of anesthetic effects. The initial goal was to establish optimized anesthetic protocols and define robust experimental conditions for functional neuroimaging studies, and in turn foster scientific quality and reduce animal numbers. Now we are taking OpenMinds to a new level by expanding the framework both in terms of content and functionality to create a tool for novel ways of science communication and collaboration.
#### **Joanes Grandjean**: Animal Imagers Unite! Lessons learnt from working together and path forward
How to best acquire rodent preclinical functional MRI data? Every laboratory has an opinion on this, but are they truly objective? It has become apparent that we work with different data quality, with different potentials to capture functional connectivity phenomena, and these discrepancies cannot only be linked to preprocessing differences and analysis schemes. I describe our community effort to describe dataset performance, identify potential best practices, and test them out in laboratory conditions
#### **Cristiana Tisca**: MRI-histology studies in the same brain: Identifying the biological determinants of MRI signal change
Advancing our knowledge of brain structure can benefit from combining different imaging techniques and scales, such as MRI and histology. This approach can facilitate relating microscale tissue properties to macroscale brain features. Further, quantitative comparisons between MRI and histology can help circumvent MRI's inherent lack of specificity, pinpointing the molecular mechanisms MRI is sensitive to. This talk will introduce current techniques employed in MRI-histology preclinical studies, highlighting key challenges such as obtaining high-quality MRI-histology data, reliable quantitative histological staining estimates and accurate MRI-to-histology registration.

<br>

### **Shaping the future of MRI: closing thoughts** (20:00-22:00 UTC)
#### **Benjamin Tendler**: Why Every Lab Needs a Handbook
A lab handbook is a flexible document describing how your lab operates. It aims to outline your lab ethos: the culture, expectations, and opportunities for members in your lab. In this talk, I will give an overview of why a lab handbook is a key document for any research group, and how it benefits members at different career stages. I will describe how our lab approached writing a handbook, and highlight several publicly available resources that we have developed to help you build your own.  
#### **Nicola Dinsdale**: Challenges for machine learning in clinical translation of big data imaging studies
Combining deep learning image analysis methods and large-scale imaging datasets offers many opportunities to neuroscience imaging and epidemiology. However, despite these opportunities and successes, significant barriers continue to limit the impact of large-scale datasets and analysis tools. I will examine the main challenges and the approaches that have been explored to overcome them, focusing on issues relating to data availability, interpretability, evaluation, and logistical challenges.
#### **Kate Hanneman**: Environmental Sustainability in MRI: Time for Action
The environmental impact of MRI has recently come into focus, including the substantial demand for electricity compared to other imaging modalities and contamination of water bodies with gadolinium related to contrast administration. Given the pressing threat of climate change, addressing these challenges to improve the environmental sustainability of MRI is imperative. This presentation will outline opportunities and actions to address environmental sustainability in MRI. The approaches discussed with include strategies to reduce greenhouse gas (GHG) emissions from MRI during production and use phases, other approaches to reduce the environmental impact of MRI including the preservation of finite resources, and development of adaption plans to prepare for the impact of climate change.  
#### **Shella Keilholz**: Moving Towards Open and Accessible Scientific Publishing
Science relies on the dissemination of research results. Traditional publishing models block this content behind paywalls, whereas open access models allow content to be reached freely. However, in many cases, open access publishing simply shifts the financial burden from the reader to the author. The potential and challenges of open and accessible scientific publishing will be discussed in the context of the recent editorial resignation from NeuroImage and the founding of the non-profit journal Imaging Neuroscience.
#### **Agah Karakuzu**: Are zombie code and mummified data haunting your PDFs? Resurrect your publications with Neurolibre Living Preprints
#### **Francesco Santini**: MRI Together and the ESMRMB: synergy and opportunity
MRI Together was born in 2021 out of the desire of passionate researchers to create a virtual, inclusive place, to connect with likeminded people and discuss and share the topics of open, reproducible, and inclusive science. We wanted it to be a self-organized event, with a slightly crazy schedule. We thus approached the ESMRMB to receive technical and logistical support, and this was the beginning of a beautiful partnership. Since then, MRI Together has become an integral part of the ESMRMB itself, while maintaining its creative and organizational independence. Follow me in this talk about the history and the hopes for MRI Together.




