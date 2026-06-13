import {
  ArrowRight,
  Droplet,
  Activity,
  Stethoscope,
  Smartphone,
  Radio,
  ClipboardList,
  Pill,
  LineChart,
  Layers,
} from "lucide-react";

export default function ForClinics() {
  const steps = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Patient tests at home",
      description:
        "Patient performs a fingerstick test at home — same workflow as glucometer self-monitoring.",
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Results transmit via RPM",
      description:
        "Results are transmitted through the Remote Patient Monitoring infrastructure. No new equipment or training required.",
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "CDSS guidance arrives",
      description:
        "The CDSS generates a metabolic phenotype and clinical guidance in your existing care management workflow.",
    },
  ];

  const rationale = [
    {
      icon: <Pill className="h-6 w-6" />,
      title: "GLP-1 selection",
      description:
        "GLP-1 prescriptions are surging. Without phenotyping, clinicians cannot predict response. Insulin data changes that.",
      color: "text-orange-500",
      bg: "from-orange-500/10 to-orange-400/10",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Progression monitoring",
      description:
        "Serial insulin + glucose measurements track beta-cell decline before it becomes irreversible.",
      color: "text-[#008b8b]",
      bg: "from-teal-500/10 to-teal-400/10",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Adjunctive to CGM",
      description:
        "CGM tells you what glucose is doing. Insulin data tells you why. Both are needed.",
      color: "text-[#0066cc]",
      bg: "from-blue-500/10 to-blue-400/10",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066cc]/10 rounded-full blur-[120px] animate-float" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
          <div className="text-center">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              For primary care
            </div>

            <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              The diagnostic gap has been
              <br />
              <span className="gradient-text">open for 40 years.</span>
            </h1>

            <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              For the first time, primary care clinicians can differentiate
              insulin resistance from beta-cell dysfunction — at home, from a
              fingerstick, without a specialty lab. No new equipment. No
              specialty referral.
            </p>
          </div>
        </div>
      </section>

      {/* The Clinical Gap */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
                The Clinical Gap
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What glucose cannot tell you
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Today&apos;s standard of care — HbA1c and fasting glucose — tells
                you that a patient has Type 2 diabetes. It cannot tell you why.
                Without knowing the underlying mechanism, first-line therapy is a
                guess. Metformin works for insulin resistance. It does not
                address beta-cell failure. The wrong choice accelerates disease
                progression.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glow-card rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                    <Droplet className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                    Today
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-semibold">
                  Glucose
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-500 font-medium">Diagnosis only</span>
                </div>
              </div>

              <div className="glow-card rounded-2xl border border-gray-200 bg-white p-6 ring-1 ring-[#0066cc]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#008b8b] flex items-center justify-center text-white">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-[#0066cc] border border-[#0066cc]/20 bg-[#0066cc]/5 rounded-full px-3 py-1">
                    With Metsulin
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-gray-900 font-semibold">
                  Glucose + Insulin
                  <ArrowRight className="h-4 w-4 text-[#0066cc]" />
                  <span className="gradient-text">
                    Phenotype + Therapy guidance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Integrates */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#008b8b] mb-3 tracking-wide uppercase">
              Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fits into how you already practice.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glow-card group rounded-2xl p-8 border border-gray-200 bg-white transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0066cc]/10 to-[#008b8b]/10 flex items-center justify-center text-[#0066cc]">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
              Output
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Actionable output per patient.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glow-card rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0066cc]/10 to-[#008b8b]/10 flex items-center justify-center text-[#008b8b]">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Insulin Sensitivity Score
                </h3>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-6xl font-bold gradient-text">78</span>
                <span className="text-2xl font-semibold text-gray-300">/100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100 mb-5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b]"
                  style={{ width: "78%" }}
                />
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Reflects how effectively the body responds to insulin.
              </p>
            </div>

            <div className="glow-card rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-400/10 flex items-center justify-center text-orange-500">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Pancreatic Function Score
                </h3>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-6xl font-bold text-orange-500">34</span>
                <span className="text-2xl font-semibold text-gray-300">/100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100 mb-5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
                  style={{ width: "34%" }}
                />
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Reflects beta-cell reserve and insulin secretion capacity.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto mt-10">
            Combined, these scores classify the patient into one of five
            metabolic phenotypes — each with a distinct clinical pathway.
          </p>
        </div>
      </section>

      {/* Clinical Rationale */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#008b8b] mb-3 tracking-wide uppercase">
              Clinical Rationale
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why this matters now.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rationale.map((item, index) => (
              <div
                key={index}
                className="glow-card group rounded-2xl p-8 border border-gray-200 bg-white transition-all"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center ${item.color} mb-6`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#008b8b]/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            Clinical Pilot Program
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Interested in early access?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            We&apos;re establishing partnerships with primary care clinics for
            our clinical pilot program.
          </p>
          <a
            href="http://linkedin.com/company/metsulin"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
          >
            Connect on LinkedIn
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
