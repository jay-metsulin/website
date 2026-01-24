import {
  Target,
  Lightbulb,
  Handshake,
  FileText,
  TrendingUp,
  Heart,
  Mail,
} from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Clinical Rigor",
      description:
        "We maintain the highest standards of scientific evidence and clinical validation in everything we develop.",
      icon: <FileText className="h-8 w-8 text-[#0066cc]" />,
    },
    {
      title: "Innovation",
      description:
        "We push the boundaries of what's possible in biosensing and digital health technologies.",
      icon: <Lightbulb className="h-8 w-8 text-[#0066cc]" />,
    },
    {
      title: "Partnership",
      description:
        "We believe in collaborative relationships with healthcare providers, researchers, and patients.",
      icon: <Handshake className="h-8 w-8 text-[#0066cc]" />,
    },
    {
      title: "Evidence-Based",
      description:
        "All our interventions and technologies are grounded in peer-reviewed research and clinical evidence.",
      icon: <Target className="h-8 w-8 text-[#0066cc]" />,
    },
    {
      title: "Scalability",
      description:
        "We design solutions that can reach and benefit patients at scale, improving healthcare accessibility.",
      icon: <TrendingUp className="h-8 w-8 text-[#0066cc]" />,
    },
    {
      title: "Patient-Centered",
      description:
        "Patients are at the heart of everything we do. We design with their needs, experiences, and outcomes in mind.",
      icon: <Heart className="h-8 w-8 text-[#0066cc]" />,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Target className="h-16 w-16 text-[#0066cc] mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              Metsulin Corporation is building the infrastructure for precision care. We
              develop integrated platforms that combine continuous biosensing, clinical
              software, and behavioral health interventions to support disease
              prevention and remission.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Metsulin Corporation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600">
              We're building a multidisciplinary team of experts in biosensing,
              software development, clinical research, and behavioral health.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#0066cc] to-[#008b8b] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-lg text-white mb-6">
              If you're passionate about transforming healthcare through innovative
              technology and want to be part of a mission-driven team, we'd love to
              hear from you.
            </p>
            <a
              href="mailto:ceo@metsulin.com?subject=Career Inquiry"
              className="inline-block bg-white text-[#0066cc] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <Mail className="h-16 w-16 text-[#0066cc] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <p className="text-xl font-semibold text-gray-900 mb-2">
              <a
                href="mailto:ceo@metsulin.com"
                className="text-[#0066cc] hover:text-[#0052a3] transition-colors"
              >
                Sen an Email Us
              </a>
            </p>
            <p className="text-[#0066cc] font-semibold mt-4"></p>
          </div>
        </div>
      </section>
    </div>
  );
}
