import { Stethoscope, FlaskConical, Newspaper, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const channels = [
    {
      title: "Clinical Partnerships",
      description:
        "Primary care clinics interested in our RPM pilot program.",
      subject: "Clinical Partnership Inquiry",
      icon: <Stethoscope className="h-5 w-5" />,
      color: "text-[#0066cc]",
      bg: "from-[#0066cc]/10 to-[#0066cc]/5",
    },
    {
      title: "Research & Collaboration",
      description:
        "Scientific advisors, CDMOs, and research institutions.",
      subject: "Research Collaboration",
      icon: <FlaskConical className="h-5 w-5" />,
      color: "text-[#008b8b]",
      bg: "from-[#008b8b]/10 to-[#008b8b]/5",
    },
    {
      title: "Industry & Press",
      description:
        "Industry partners, conference organizers, media inquiries.",
      subject: "Industry Inquiry",
      icon: <Newspaper className="h-5 w-5" />,
      color: "text-[#f97316]",
      bg: "from-[#f97316]/10 to-[#f97316]/5",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark dot-grid" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#0066cc]/10 rounded-full blur-[120px] animate-float" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Contact
          </span>
          <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Get in Touch
          </h1>
          <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            We work with clinicians, researchers, and industry partners.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dot-grid-light">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="glow-card group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center items-center transition-all"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${channel.bg} flex items-center justify-center ${channel.color} mb-5`}
                >
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                  {channel.description}
                </p>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-6">
                  {channel.subject}
                </p>
                <a
                  href="http://linkedin.com/company/metsulin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#008b8b] px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0066cc]/25 hover:scale-105"
                >
                  Connect on LinkedIn
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#008b8b] text-white mb-6">
            <MapPin className="h-5 w-5" />
          </div>
          <p className="text-lg font-semibold text-gray-900">
            Metsulin Corporation · Menlo Park, CA
          </p>
        </div>
      </section>
    </div>
  );
}
