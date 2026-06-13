# Metsulin Website — Project Brief

## What We Build
Metsulin Corporation is developing the first at-home rapid fingerstick test
that measures insulin AND glucose simultaneously, paired with a Clinical
Decision Support System (CDSS) for metabolic phenotyping of Type 2 diabetes.

## Who This Site Is For
- Primary care physicians and clinic leaders evaluating the technology
- Healthcare industry leaders and potential partners
- CDMOs, scientific collaborators, and advisors
- The site is NOT for investors — no fundraising language, no ask, no team bios

## Tone
Urgent and market-aware. Lead with the problem scale, then deliver
the science as the credible answer. Show that the opportunity is large,
the gap is real, and Metsulin is moving.
Confident, not academic. Think: a company that knows exactly what it's
building and why it matters right now — not a research paper.
Avoid hype words ("revolutionary", "game-changing") but don't soften
the urgency of the problem.

## The Core Clinical Insight
Diabetes is heterogeneous — like cancer. The same HbA1c or fasting glucose
can reflect five completely different metabolic phenotypes. Glucose alone
cannot distinguish them. Insulin is the missing signal.

Today, insulin is measured only in specialty labs — expensive, slow, not
scalable to primary care. Metsulin changes that.

## The Product
- Hardware: Fingerstick lateral-flow strip (~20 µL whole blood). No wearable.
  Measures insulin AND glucose from a single drop.
- Software: CDSS that classifies patients into metabolic phenotypes and
  generates actionable clinical guidance.
- Delivery model: Integrated into Remote Patient Monitoring (RPM) workflows —
  physicians monitor results monthly through existing care infrastructure.

## The Five Phenotypes (CDSS Output)
P1 — Beta-Cell Dysfunction
P2 — Incretin Impairment
P3 — Hepatic Insulin Resistance
P4 — Muscular Insulin Resistance
P5 — Clearance Defect

## Validated Science Claims (use these exact numbers — do not invent)
- 0.96 pM — Limit of detection (insulin, picomolar)
- 98–99% — Spike recovery across concentration range
- R² = 0.999 — Linearity vs. gold-standard ELISA
- 94% — Signal stability over 9 weeks
- 10× — Reusable measurement cycles
- 0.01 s — Sensor response time
- Insulin circulates at 25–600 pM in humans

## Market Urgency (weave these into problem sections)
- GLP-1 drugs are now mainstream — but clinicians have no way to know which patients will respond
- Metabolic health is the fastest-growing area of healthcare investment
- The diagnostic gap (no at-home insulin test) has existed for 40 years — the science to close it now exists
- Primary care sees the bulk of T2D patients but has the fewest phenotyping tools

## Key Market Facts (use only these — no invention)
- 38 million diagnosed Type 2 diabetics in the US (CDC)
- Insulin measurement has never left the specialty lab
- No wearable insulin sensor exists — insulin is a protein, not a small molecule
- RPM is an established care delivery framework for chronic disease management

## Design System
- Dark hero sections: bg-[#0a0a0f] with mesh-gradient-dark dot-grid classes
- Content sections: bg-white or bg-gray-50
- Primary: #0066cc | Teal: #008b8b | Orange accent: #f97316
- Cards: glow-card class, rounded-2xl, border border-gray-200 bg-white
- CTA buttons: rounded-full, bg-gradient-to-r from-[#0066cc] to-[#008b8b]
- Animations: animate-fade-in, animate-fade-in-delay-1/2/3/4, animate-float
- Font: Geist Sans (already configured in layout.tsx)

## Navigation (5 pages)
- Home → /
- Science → /science
- For Clinics → /for-clinics
- About → /about


## Do NOT Include
- Fundraising language, round size, SAFE terms
- Revenue sharing or billing splits
- Team bios or team member names
- Phone numbers
- "Reverse the disease" or "cure" language
- "Continuous insulin measurement" (it is a point-in-time test)
- CGM framing that implies competition (Metsulin is adjunctive to CGM)
- Consumer/patient-facing language