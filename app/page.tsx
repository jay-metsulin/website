import Link from "next/link";
import { Activity, Shield, Brain, ArrowRight, Zap, BarChart3, Users } from "lucide-react";

export default function Home() {
  const platformComponents = [
    {
      title: "Biosensing Technologies",
      description:
        "Advanced continuous monitoring systems that track multiple biomarkers in real-time, enabling early detection and intervention.",
      icon: <Activity className="h-6 w-6" />,
      tag: "Hardware + Software",
      color: "text-orange-500",
      bg: "from-orange-500/10 to-orange-400/10",
      bgHover: "group-hover:from-orange-500/20 group-hover:to-orange-400/20",
    },
    {
      title: "Clinical Software (SaMD)",
      description:
        "FDA-compliant Software as a Medical Device solutions with clinical decision support and predictive analytics.",
      icon: <Shield className="h-6 w-6" />,
      tag: "Regulatory Ready",
      color: "text-emerald-500",
      bg: "from-emerald-500/10 to-emerald-400/10",
      bgHover: "group-hover:from-emerald-500/20 group-hover:to-emerald-400/20",
    },
    {
      title: "Behavioral Interventions",
      description:
        "Evidence-based digital therapeutics that combine continuous monitoring data with personalized behavior change programs.",
      icon: <Brain className="h-6 w-6" />,
      tag: "Evidence-Based",
      color: "text-violet-500",
      bg: "from-violet-500/10 to-violet-400/10",
      bgHover: "group-hover:from-violet-500/20 group-hover:to-violet-400/20",
    },
  ];

  const metrics = [
    { value: "3-Layer", label: "Integrated Platform", icon: <Zap className="h-5 w-5" />, color: "text-amber-400" },
    { value: "Real-time", label: "Biomarker Monitoring", icon: <BarChart3 className="h-5 w-5" />, color: "text-emerald-400" },
    { value: "FDA", label: "Compliance Pathway", icon: <Shield className="h-5 w-5" />, color: "text-sky-400" },
    { value: "Patient", label: "Centered Design", icon: <Users className="h-5 w-5" />, color: "text-rose-400" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066cc]/10 rounded-full blur-[120px] animate-float" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="text-center">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Building the future of precision care
            </div>

            <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Precision Biosensing
              <br />
              <span className="gradient-text">for Disease Prevention</span>
            </h1>

            <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              Metsulin develops biosensing technologies and Software as a
              Medical Device to support disease prevention and remission,
              integrating continuous monitoring with behavioral health
              interventions.
            </p>

            <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/technology"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-7 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
              >
                Explore Our Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="relative border-t border-white/5">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-fade-in-delay-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10 ${metric.color} mb-3`}>
                    {metric.icon}
                  </div>
                  <div className="text-lg font-semibold text-white">{metric.value}</div>
                  <div className="text-sm text-white/40">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
              Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Three integrated layers
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A comprehensive infrastructure combining hardware, software, and behavioral science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformComponents.map((component, index) => (
              <div
                key={index}
                className="glow-card group rounded-2xl p-8 border border-gray-200 bg-white transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${component.bg} flex items-center justify-center ${component.color} ${component.bgHover} transition-colors`}>
                    {component.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                    {component.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {component.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Area */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-[#008b8b] mb-3 tracking-wide uppercase">
                Initial Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Diabetes prevention
                <br />
                <span className="gradient-text">and remission</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our initial focus is on diabetes, with plans to expand to other
                chronic conditions that benefit from continuous monitoring and
                behavioral interventions.
              </p>
              <Link
                href="/technology"
                className="group inline-flex items-center gap-2 text-[#0066cc] font-medium text-sm hover:gap-3 transition-all"
              >
                See our technology stack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                "Continuous glucose monitoring integration",
                "Predictive analytics for hypo/hyperglycemia",
                "Personalized intervention protocols",
                "Behavioral health support for lifestyle changes",
              ].map((item, index) => (
                <div
                  key={index}
                  className="glow-card flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5"
                >
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0066cc] to-[#008b8b] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#008b8b]/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            Diabetes Remission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building the future of
            <br />
            <span className="gradient-text">precision care</span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Join us in transforming healthcare through innovative biosensing and
            behavioral health technologies.
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
