import {
  Clock,
  Building2,
  Layers,
  Droplet,
  Cpu,
  BarChart3,
  CheckCircle,
  XCircle,
  Activity,
  Brain,
  Microscope,
  Dumbbell,
  Filter,
} from "lucide-react";

export default function Science() {
  const contrastRows = [
    {
      label: "Speed",
      lab: "Days — send-out turnaround",
      metsulin: "Minutes — point-of-care result",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: "Setting",
      lab: "Specialty lab only",
      metsulin: "At-home fingerstick",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      label: "Analytes",
      lab: "Single analyte per assay",
      metsulin: "Insulin + glucose, multiplexed",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const validationStats = [
    {
      value: "0.96 pM",
      label: "Limit of Detection",
      description:
        "Insulin circulates at 25–600 pM. We detect far below that range.",
    },
    {
      value: "98–99%",
      label: "Spike Recovery",
      description: "Accuracy across low, medium, and high concentrations.",
    },
    {
      value: "R² = 0.999",
      label: "Linearity vs ELISA",
      description: "Correlated against the gold-standard immunoassay.",
    },
    {
      value: "94%",
      label: "Signal Stability (9 weeks)",
      description: "Bench-validated shelf-life performance.",
    },
  ];

  const sensorSteps = [
    {
      step: 1,
      title: "Whole Blood Sample",
      description:
        "~20 µL from a fingerstick. Passive capillary transport into the lateral-flow strip.",
      icon: <Droplet className="h-6 w-6" />,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      step: 2,
      title: "Multiplexed Electrochemistry",
      description:
        "NiOx electrocatalytic insulin detection on a closed bipolar electrode architecture, co-located with glucose sensing.",
      icon: <Cpu className="h-6 w-6" />,
      gradient: "from-[#0066cc] to-[#008b8b]",
    },
    {
      step: 3,
      title: "CDSS Output",
      description:
        "Insulin Sensitivity Score + Pancreatic Function Score fed into the 5-phenotype classification engine.",
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const phenotypes = [
    {
      code: "P1",
      title: "Beta-Cell Dysfunction",
      icon: <Activity className="h-5 w-5" />,
      color: "text-orange-500",
      bg: "from-orange-500/10 to-orange-400/10",
    },
    {
      code: "P2",
      title: "Incretin Impairment",
      icon: <Brain className="h-5 w-5" />,
      color: "text-emerald-500",
      bg: "from-emerald-500/10 to-emerald-400/10",
    },
    {
      code: "P3",
      title: "Hepatic Insulin Resistance",
      icon: <Microscope className="h-5 w-5" />,
      color: "text-sky-500",
      bg: "from-sky-500/10 to-sky-400/10",
    },
    {
      code: "P4",
      title: "Muscular Insulin Resistance",
      icon: <Dumbbell className="h-5 w-5" />,
      color: "text-violet-500",
      bg: "from-violet-500/10 to-violet-400/10",
    },
    {
      code: "P5",
      title: "Clearance Defect",
      icon: <Filter className="h-5 w-5" />,
      color: "text-rose-500",
      bg: "from-rose-500/10 to-rose-400/10",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066cc]/10 rounded-full blur-[120px] animate-float" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            The Science
          </span>
          <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Measuring insulin at
            <br />
            <span className="gradient-text">picomolar sensitivity</span>
          </h1>
          <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Insulin circulates at 25–600 pM — one million times more dilute than
            glucose. That is why insulin measurement has never left the
            laboratory. Until now.
          </p>
        </div>
      </section>

      {/* The Challenge - White */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
                The Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why insulin is hard to measure
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                It&apos;s a protein, not a small molecule. It can&apos;t be
                sensed continuously. No wearable sensor exists, and none is in
                the FDA pipeline. Specialty immunoassay labs are slow,
                expensive, and disconnected from primary care workflows.
              </p>
            </div>

            <div className="space-y-4">
              {contrastRows.map((row, index) => (
                <div
                  key={index}
                  className="glow-card rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#0066cc]/10 to-[#008b8b]/10 flex items-center justify-center text-[#0066cc]">
                      {row.icon}
                    </div>
                    <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">
                      {row.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-medium text-gray-400 mb-0.5">
                          Lab immunoassay
                        </div>
                        <div className="text-sm text-gray-500">{row.lab}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#008b8b] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-medium text-[#008b8b] mb-0.5">
                          Metsulin strip
                        </div>
                        <div className="text-sm text-gray-700 font-medium">
                          {row.metsulin}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Validation - bg-gray-50 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#008b8b] mb-3 tracking-wide uppercase">
              Bench Validation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The science works.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {validationStats.map((stat, index) => (
              <div
                key={index}
                className="glow-card rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="text-4xl font-bold gradient-text mb-3">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700">
              <span>0.01 s response time</span>
              <span className="text-gray-300">·</span>
              <span>10× reusable cycles</span>
            </div>
            <p className="text-sm text-gray-400 text-center max-w-xl">
              Bench-validated on plasma. Next milestone: whole-blood
              lateral-flow integration.
            </p>
          </div>
        </div>
      </section>

      {/* Sensor Architecture - White */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
              Sensor Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How the sensor works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sensorSteps.map((step) => (
              <div
                key={step.step}
                className="glow-card rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-5xl font-bold text-gray-100">
                    {step.step}
                  </span>
                </div>
                <div className="text-xs font-semibold tracking-wider uppercase text-[#008b8b] mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CDSS - bg-gray-50 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#008b8b] mb-3 tracking-wide uppercase">
              Clinical Decision Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Five metabolic phenotypes. One test.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The same fasting glucose can reflect five different disease
              mechanisms. The CDSS classifies each patient and surfaces the
              appropriate clinical action.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phenotypes.map((phenotype) => (
              <div
                key={phenotype.code}
                className="glow-card group rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`h-11 w-11 rounded-xl bg-gradient-to-br ${phenotype.bg} flex items-center justify-center ${phenotype.color}`}
                  >
                    {phenotype.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wider text-gray-300">
                    {phenotype.code}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {phenotype.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
