import {
  Target,
  Lightbulb,
  Handshake,
  FileText,
  TrendingUp,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Clinical Rigor",
      description:
        "We maintain the highest standards of scientific evidence and clinical validation in everything we develop.",
      icon: <FileText className="h-5 w-5" />,
      color: "text-sky-500",
      bg: "from-sky-500/10 to-sky-400/10",
      bgHover: "group-hover:from-sky-500/20 group-hover:to-sky-400/20",
    },
    {
      title: "Innovation",
      description:
        "We push the boundaries of what's possible in biosensing and digital health technologies.",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "text-amber-500",
      bg: "from-amber-500/10 to-amber-400/10",
      bgHover: "group-hover:from-amber-500/20 group-hover:to-amber-400/20",
    },
    {
      title: "Partnership",
      description:
        "We believe in collaborative relationships with healthcare providers, researchers, and patients.",
      icon: <Handshake className="h-5 w-5" />,
      color: "text-emerald-500",
      bg: "from-emerald-500/10 to-emerald-400/10",
      bgHover: "group-hover:from-emerald-500/20 group-hover:to-emerald-400/20",
    },
    {
      title: "Evidence-Based",
      description:
        "All our interventions and technologies are grounded in peer-reviewed research and clinical evidence.",
      icon: <Target className="h-5 w-5" />,
      color: "text-orange-500",
      bg: "from-orange-500/10 to-orange-400/10",
      bgHover: "group-hover:from-orange-500/20 group-hover:to-orange-400/20",
    },
    {
      title: "Scalability",
      description:
        "We design solutions that can reach and benefit patients at scale, improving healthcare accessibility.",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-violet-500",
      bg: "from-violet-500/10 to-violet-400/10",
      bgHover: "group-hover:from-violet-500/20 group-hover:to-violet-400/20",
    },
    {
      title: "Patient-Centered",
      description:
        "Patients are at the heart of everything we do. We design with their needs, experiences, and outcomes in mind.",
      icon: <Heart className="h-5 w-5" />,
      color: "text-rose-500",
      bg: "from-rose-500/10 to-rose-400/10",
      bgHover: "group-hover:from-rose-500/20 group-hover:to-rose-400/20",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#0066cc]/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            About Metsulin
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Building the infrastructure for precision care through integrated
            biosensing, clinical software, and behavioral health.
          </p>
        </div>
      </section>

      {/* Mission Detail */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="glow-card rounded-2xl border border-gray-200 bg-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#008b8b] flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">What we're building</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Metsulin Corporation is building the infrastructure for precision care. We
              develop integrated platforms that combine continuous biosensing, clinical
              software, and behavioral health interventions to support disease
              prevention and remission.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to empower healthcare providers and patients with
              real-time, actionable insights that enable personalized interventions and
              improve health outcomes. We believe that the future of healthcare lies in
              the seamless integration of continuous monitoring, predictive analytics,
              and evidence-based behavioral interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dot-grid-light">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
              Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our values
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              These core values guide everything we do at Metsulin Corporation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="glow-card group rounded-2xl border border-gray-200 bg-white p-7 transition-all"
              >
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${value.bg} flex items-center justify-center ${value.color} ${value.bgHover} transition-colors mb-5`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#008b8b]/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            Careers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join our team
          </h2>
          <p className="text-lg text-white/50 mb-6 max-w-xl mx-auto">
            We're building a multidisciplinary team of experts in biosensing,
            software development, clinical research, and behavioral health.
          </p>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            If you're passionate about transforming healthcare through innovative
            technology and want to be part of a mission-driven team, we'd love to
            hear from you.
          </p>
          <a
            href="mailto:ceo@metsulin.com?subject=Career Inquiry"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-medium text-[#0066cc] mb-3 tracking-wide uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Have questions?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            We'd love to hear from you.
          </p>
          <a
            href="mailto:ceo@metsulin.com"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
