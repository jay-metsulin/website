import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  Cpu,
  Activity,
  FlaskConical,
} from "lucide-react";

export default function Home() {
  const phenotypes = [
    { code: "P1", name: "Beta-Cell Dysfunction" },
    { code: "P2", name: "Incretin Impairment" },
    { code: "P3", name: "Hepatic Insulin Resistance" },
    { code: "P4", name: "Muscular Insulin Resistance" },
    { code: "P5", name: "Clearance Defect" },
  ];

  const product = [
    {
      title: "Fingerstick Strip",
      description:
        "Insulin + glucose from ~20 µL whole blood. No wearable. No lab. No specialty equipment.",
      icon: <Droplet className="h-6 w-6" />,
      color: "text-[#f97316]",
      bg: "from-[#f97316]/10 to-[#f97316]/5",
    },
    {
      title: "CDSS",
      description:
        "Classifies each patient into a metabolic phenotype. Generates actionable guidance per result.",
      icon: <Cpu className="h-6 w-6" />,
      color: "text-[#0066cc]",
      bg: "from-[#0066cc]/10 to-[#0066cc]/5",
    },
    {
      title: "RPM Integration",
      description:
        "Fits into existing Remote Patient Monitoring workflows. No new billing infrastructure required.",
      icon: <Activity className="h-6 w-6" />,
      color: "text-[#008b8b]",
      bg: "from-[#008b8b]/10 to-[#008b8b]/5",
    },
  ];

  const problems = [
    { value: "38M", label: "Americans with Type 2 diabetes" },
    { value: "Zero", label: "at-home insulin tests exist" },
    { value: "Guessing", label: "Physicians are guessing on therapy" },
  ];

  const validation = [
    { value: "0.96 pM", label: "Limit of Detection" },
    { value: "98–99%", label: "Spike Recovery" },
    { value: "R² 0.999", label: "Linearity vs. ELISA" },
    { value: "94%", label: "Signal Stability" },
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
              Insulin · Glucose · Clinical Decision Support
            </div>

            <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Diabetes is heterogeneous.
              <br />
              <span className="gradient-text">We measure why.</span>
            </h1>

            <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              The first at-home rapid fingerstick test for insulin and glucose,
              paired with a clinical decision support system for metabolic
              phenotyping.
            </p>

            <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/science"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-7 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
              >
                Explore the Science
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/for-clinics"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                For Clinicians
              </Link>
            </div>
          </div>
        </div>

        {/* Problem Bar */}
        <div className="relative border-t border-white/5">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="animate-fade-in-delay-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {problems.map((problem, index) => (
                <div key={index}>
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {problem.value}
                  </div>
                  <div className="text-sm text-white/50">{problem.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
                The Insight
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The market is measuring
                <br />
                <span className="gradient-text">the wrong thing.</span>
              </h2>
              <p className="text-lg font-semibold text-gray-700 mb-6">
                One hormone. Five phenotypes.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Glucose tells you that diabetes exists. Insulin tells you why.
                The same HbA1c can reflect five completely different metabolic
                phenotypes — each requiring a different clinical response.
                Without insulin data, physicians are guessing.
              </p>
            </div>

            <div className="space-y-4">
              {phenotypes.map((phenotype) => (
                <div
                  key={phenotype.code}
                  className="glow-card flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5"
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#0066cc] to-[#008b8b] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">
                      {phenotype.code}
                    </span>
                  </div>
                  <span className="text-gray-800 font-medium text-[15px]">
                    {phenotype.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Product */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#008b8b] mb-3 tracking-wide uppercase">
              The Product
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A test, a decision engine, a workflow
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From a single drop of blood to a clinical decision — inside the
              care infrastructure physicians already use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.map((item, index) => (
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

      {/* Validation Strip - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#008b8b]/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm">
              <FlaskConical className="h-3.5 w-3.5" />
              Validated Performance
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {validation.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/science"
              className="group inline-flex items-center gap-2 text-[#008b8b] font-medium text-sm hover:gap-3 transition-all"
            >
              See full validation data
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066cc]/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Interested in the
            <br />
            <span className="gradient-text">technology?</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            We&apos;re working with clinicians, researchers, and industry
            partners.
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
