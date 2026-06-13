Read CLAUDE.md first. This is a 5-page credibility website for clinicians
and industry leaders — not investors, not consumers.

Use parallel subagents to build each page independently. Each subagent
must read CLAUDE.md before writing anything.

─────────────────────────────────────────
SUBAGENT 1 — Navigation + Footer
─────────────────────────────────────────
Update components/Navigation.tsx and components/Footer.tsx.

Navigation:
- Links: Home | Science | For Clinics | About
- Right side: "Get in Touch" button → http://linkedin.com/company/metsulin (open in new tab)
  Style: rounded-full border border-white/20 px-5 py-2 text-sm
  (white when scrolled=false, dark border when scrolled=true)
- Keep existing scroll detection and mobile menu logic

Footer:
- Left: Logo + tagline: "The first at-home rapid test for insulin and glucose."
- Center: Nav links (all 5)
- Right: LinkedIn icon linking to http://linkedin.com/company/metsulin + "Menlo Park, CA"
- Add LinkedIn icon (use lucide-react Linkedin icon) in footer bottom bar as well
- Bottom bar: © {year} Metsulin Corporation. All rights reserved. · LinkedIn icon → http://linkedin.com/company/metsulin
- Keep existing dark bg-[#0a0a0f] styling

─────────────────────────────────────────
SUBAGENT 2 — Homepage (app/page.tsx)
─────────────────────────────────────────
Rewrite app/page.tsx with these sections:

1. HERO — dark bg-[#0a0a0f]
   Eyebrow pill: "Insulin · Glucose · Clinical Decision Support"
   H1: "Diabetes is heterogeneous."
       "We measure why."
   Subhead: "The first at-home rapid fingerstick test for insulin and glucose,
   paired with a clinical decision support system for metabolic phenotyping."
   Two CTAs: "Explore the Science" → /science  |  "For Clinicians" → /for-clinics

2. PROBLEM BAR — dark, 3 stats side by side
   "38M Americans with Type 2 diabetes" / "Zero at-home insulin tests exist" / "Physicians are guessing on therapy"
   Each stat should feel like a market gap, not a background fact.

3. THE INSIGHT — white section, 2-column
   Left: heading "The market is measuring the wrong thing."
   Subheading: "One hormone. Five phenotypes."
   Body: "Glucose tells you that diabetes exists. Insulin tells you why.
   The same HbA1c can reflect five completely different metabolic phenotypes —
   each requiring a different clinical response. Without insulin data,
   physicians are guessing."
   Right: 5 phenotype cards (P1–P5) listed cleanly with name only

4. THE PRODUCT — gray-50 section
   3 cards side by side:
   Card 1 — Fingerstick Strip: "Insulin + glucose from ~20 µL whole blood.
   No wearable. No lab. No specialty equipment."
   Card 2 — CDSS: "Classifies each patient into a metabolic phenotype.
   Generates actionable guidance per result."
   Card 3 — RPM Integration: "Fits into existing Remote Patient Monitoring
   workflows. No new billing infrastructure required."

5. VALIDATION STRIP — dark, 4 horizontal stat callouts
   0.96 pM LOD | 98–99% Spike Recovery | R² 0.999 vs ELISA | 94% Signal Stability
   Link: "See full validation data →" → /science

6. DARK CTA
   Heading: "Interested in the technology?"
   Subhead: "We're working with clinicians, researchers, and industry partners."
   Button: "Connect on LinkedIn" → http://linkedin.com/company/metsulin (open in new tab)

─────────────────────────────────────────
SUBAGENT 3 — Science page (app/science/page.tsx)
─────────────────────────────────────────
Create app/science/page.tsx. Delete app/technology/ after.

1. HERO — dark
   H1: "Measuring insulin at picomolar sensitivity."
   Subhead: "Insulin circulates at 25–600 pM — one million times more dilute
   than glucose. That is why insulin measurement has never left the laboratory.
   Until now."

2. THE CHALLENGE — white, 2-column
   Left: heading "Why insulin is hard to measure"
   Body: It's a protein, not a small molecule. It can't be sensed continuously.
   No wearable sensor exists, and none is in the FDA pipeline.
   Specialty immunoassay labs are slow, expensive, and disconnected from
   primary care workflows.
   Right: 3 contrast cards — "Lab immunoassay" vs "Metsulin strip"
   (slow vs fast / lab-only vs at-home / single analyte vs multiplexed)

3. VALIDATION — gray-50
   Section label: "Bench Validation"
   H2: "The science works."
   4 large stat cards:
   - 0.96 pM — Limit of Detection
     "Insulin circulates at 25–600 pM. We detect far below that range."
   - 98–99% — Spike Recovery
     "Accuracy across low, medium, and high concentrations."
   - R² = 0.999 — Linearity vs ELISA
     "Correlated against the gold-standard immunoassay."
   - 94% — Signal Stability (9 weeks)
     "Bench-validated shelf-life performance."
   Below: secondary stats row — "0.01 s response time · 10× reusable cycles"
   Footer note: "Bench-validated on plasma. Next milestone: whole-blood
   lateral-flow integration."

4. SENSOR ARCHITECTURE — white
   H2: "How the sensor works"
   3-step horizontal flow:
   Step 1 — Whole Blood Sample: "~20 µL from a fingerstick. Passive capillary
   transport into the lateral-flow strip."
   Step 2 — Multiplexed Electrochemistry: "NiOx electrocatalytic insulin
   detection on a closed bipolar electrode architecture, co-located with
   glucose sensing."
   Step 3 — CDSS Output: "Insulin Sensitivity Score + Pancreatic Function
   Score fed into the 5-phenotype classification engine."

5. CDSS — gray-50
   H2: "Five metabolic phenotypes. One test."
   Intro: "The same fasting glucose can reflect five different disease
   mechanisms. The CDSS classifies each patient and surfaces the
   appropriate clinical action."
   5 phenotype cards in a grid:
   P1 — Beta-Cell Dysfunction
   P2 — Incretin Impairment
   P3 — Hepatic Insulin Resistance
   P4 — Muscular Insulin Resistance
   P5 — Clearance Defect

─────────────────────────────────────────
SUBAGENT 4 — For Clinics page (app/for-clinics/page.tsx)
─────────────────────────────────────────
Create app/for-clinics/page.tsx.

1. HERO — dark
   H1: "The diagnostic gap has been open for 40 years."
   Subhead: "For the first time, primary care clinicians can differentiate
   insulin resistance from beta-cell dysfunction — at home, from a fingerstick,
   without a specialty lab. No new equipment. No specialty referral."

2. THE CLINICAL GAP — white, 2-column
   Left: "What glucose cannot tell you"
   Body: Today's standard of care — HbA1c and fasting glucose — tells you
   that a patient has Type 2 diabetes. It cannot tell you why.
   Without knowing the underlying mechanism, first-line therapy is a guess.
   Metformin works for insulin resistance. It does not address beta-cell
   failure. The wrong choice accelerates disease progression.
   Right: Simple visual — "Glucose → Diagnosis only" vs
   "Glucose + Insulin → Phenotype + Therapy guidance"

3. HOW IT INTEGRATES — gray-50
   H2: "Fits into how you already practice."
   3 steps:
   Step 1: Patient performs a fingerstick test at home — same workflow as
   glucometer self-monitoring.
   Step 2: Results are transmitted through the Remote Patient Monitoring
   infrastructure. No new equipment or training required.
   Step 3: The CDSS generates a metabolic phenotype and clinical guidance
   in your existing care management workflow.

4. WHAT YOU GET — white
   H2: "Actionable output per patient."
   2 score cards side by side (styled visually):
   Card 1 — Insulin Sensitivity Score (78/100)
   "Reflects how effectively the body responds to insulin."
   Card 2 — Pancreatic Function Score (34/100)
   "Reflects beta-cell reserve and insulin secretion capacity."
   Below: "Combined, these scores classify the patient into one of
   five metabolic phenotypes — each with a distinct clinical pathway."

5. CLINICAL RATIONALE — gray-50
   H2: "Why this matters now."
   3 horizontal cards:
   - GLP-1 selection: "GLP-1 prescriptions are surging. Without phenotyping,
     clinicians cannot predict response. Insulin data changes that."
   - Progression monitoring: "Serial insulin + glucose measurements
     track beta-cell decline before it becomes irreversible."
   - Adjunctive to CGM: "CGM tells you what glucose is doing.
     Insulin data tells you why. Both are needed."

6. DARK CTA
   H2: "Interested in early access?"
   Subhead: "We're establishing partnerships with primary care clinics
   for our clinical pilot program."
   Button: "Connect on LinkedIn" → http://linkedin.com/company/metsulin (open in new tab)

─────────────────────────────────────────
SUBAGENT 5 — About + Contact pages
─────────────────────────────────────────
A) Rewrite app/about/page.tsx:

1. HERO — dark
   H1: "Our Mission"
   Subhead: "Bringing insulin measurement out of the laboratory
   and into primary care."

2. ORIGIN — white
   H2: "Seven years. Three ventures. One conviction."
   Body: "Forty years of glucometers. Zero at-home insulin tests.
   We spent seven years across three ventures learning why — and building
   the technology to close that gap. Metsulin is the result."
   3 milestone cards:
   2019–2022 — Kazelnut: Broad-omics metabolic research (proteomics,
   metabolomics, RNA, DNA). Learned: the multi-omics path was too long
   to reach patients.
   2023–2024 — Insula Health: Consumer insulin-resistance device and app.
   Learned: defensible revenue needs a payer, not a paywall.
   2025–Now — Metsulin: Same hormone, same science — now with a clinical
   product and reimbursement infrastructure that pays from day one.

3. WHAT WE BELIEVE — gray-50
   H2: "Principles"
   4 value cards:
   - Clinical Rigor: We validate everything on the bench before making
     any clinical claims.
   - Mechanistic Precision: Phenotype before you treat. Mechanism before
     you intervene.
   - Infrastructure Thinking: We build for primary care at scale —
     not specialty clinics.
   - Open Collaboration: The best diagnostics are built with clinicians,
     not delivered to them.

4. DARK CTA
   H2: "Want to learn more?"
   Button: "Connect on LinkedIn" → http://linkedin.com/company/metsulin (open in new tab)

B) Create app/contact/page.tsx:

1. HERO — dark
   H1: "Get in Touch"
   Subhead: "We work with clinicians, researchers, and industry partners."

2. CONTACT SECTION — white, centered
   Three contact cards:
   Card 1 — Clinical Partnerships: "Primary care clinics interested in
   our RPM pilot program."
   Email link: [not disclosed on site] | Subject: Clinical Partnership Inquiry
   Card 2 — Research & Collaboration: "Scientific advisors, CDMOs,
   and research institutions."
   Email link: [not disclosed on site] | Subject: Research Collaboration
   Card 3 — Industry & Press: "Industry partners, conference organizers,
   media inquiries."
   Email link: [not disclosed on site] | Subject: Industry Inquiry

3. LOCATION — gray-50
   "Metsulin Corporation · Menlo Park, CA"

─────────────────────────────────────────
AFTER ALL SUBAGENTS COMPLETE
─────────────────────────────────────────
1. Confirm Navigation.tsx has all 4 routes: / /science /for-clinics /about
2. Confirm Footer.tsx has all 4 routes + LinkedIn link
3. Delete app/technology/ directory
4. Run: npm run build
5. Report any TypeScript or lint errors