import { Activity, Shield, Brain, CheckCircle, ArrowRight } from "lucide-react";

export default function Technology() {
  const infrastructureLayers = [
    {
      layer: 1,
      title: "Biosensing Technologies",
      subtitle: "Multiplex Biomarkers • Point-of-Care to Wearables",
      description:
        "Our biosensing platform enables continuous monitoring of multiple biomarkers simultaneously. From point-of-care devices to wearable sensors, we're building the infrastructure for real-time health data collection.",
      features: [
        "Multiplex biomarker detection",
        "Point-of-care devices",
        "Wearable sensor integration",
        "Real-time data streaming",
        "Non-invasive monitoring",
      ],
      icon: <Activity className="h-6 w-6" />,
      gradient: "from-orange-500 to-amber-500",
      checkColor: "text-orange-500",
    },
    {
      layer: 2,
      title: "Software as Medical Device",
      subtitle: "Clinical Decision Support • Predictive Analytics",
      description:
        "Our SaMD solutions provide clinicians with actionable insights through advanced analytics and clinical decision support tools. Built to FDA standards, our software integrates seamlessly with existing healthcare infrastructure.",
      features: [
        "Clinical decision support",
        "Predictive analytics",
        "Risk stratification",
        "Treatment recommendations",
        "HIPAA-compliant data management",
      ],
      icon: <Shield className="h-6 w-6" />,
      gradient: "from-emerald-500 to-teal-500",
      checkColor: "text-emerald-500",
    },
    {
      layer: 3,
      title: "Behavioral Health Interventions",
      subtitle: "Digital Therapeutics • Behavior Change",
      description:
        "Our behavioral health platform combines continuous monitoring data with evidence-based interventions. Through digital therapeutics and personalized behavior change programs, we support patients in achieving better health outcomes.",
      features: [
        "Digital therapeutics",
        "Personalized interventions",
        "Behavior change programs",
        "Patient engagement tools",
        "Outcome tracking",
      ],
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500",
      checkColor: "text-violet-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#008b8b]/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Our Technology
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Three-layer
            <br />
            <span className="gradient-text">infrastructure</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Our platform integrates biosensing technologies, clinical software, and
            behavioral health interventions to create a comprehensive solution for
            disease prevention and remission.
          </p>
        </div>
      </section>

      {/* Infrastructure Layers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-5xl space-y-8">
          {infrastructureLayers.map((layer) => (
            <div
              key={layer.layer}
              className="glow-card rounded-2xl border border-gray-200 bg-white p-8 md:p-10 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {layer.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-3 py-1 rounded-full">
                      Layer {layer.layer}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {layer.title}
                  </h2>
                  <p className="text-[#008b8b] font-medium text-sm mb-4">{layer.subtitle}</p>
                  <p className="text-gray-500 text-[15px] mb-6 leading-relaxed max-w-2xl">
                    {layer.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {layer.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        <CheckCircle className={`h-4 w-4 ${layer.checkColor} flex-shrink-0`} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
              Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Regulatory excellence
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We are committed to meeting the highest standards of medical device
              regulation and clinical validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "FDA Compliance",
                description:
                  "Our SaMD solutions are designed to meet FDA regulatory requirements, including 510(k) clearance pathways where applicable.",
                color: "text-sky-500",
                bg: "from-sky-500/10 to-sky-400/10",
              },
              {
                title: "Clinical Validation",
                description:
                  "We conduct rigorous clinical studies to validate the safety and efficacy of our technologies, following Good Clinical Practice guidelines.",
                color: "text-emerald-500",
                bg: "from-emerald-500/10 to-emerald-400/10",
              },
              {
                title: "Reimbursement Ready",
                description:
                  "Our solutions are designed with healthcare economics in mind, ensuring pathways for insurance reimbursement and value-based care models.",
                color: "text-amber-500",
                bg: "from-amber-500/10 to-amber-400/10",
              },
            ].map((item, index) => (
              <div key={index} className="glow-card rounded-2xl border border-gray-200 bg-white p-7">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center ${item.color} mb-5`}>
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Interested in our technology?
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
            We're always looking for partners in healthcare innovation.
          </p>
          <a
            href="mailto:ceo@metsulin.com"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
