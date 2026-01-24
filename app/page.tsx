import Link from "next/link";
import { Activity, Shield, Brain, Heart } from "lucide-react";

export default function Home() {
  const platformComponents = [
    {
      title: "Biosensing Technologies",
      description:
        "Advanced continuous monitoring systems that track multiple biomarkers in real-time, enabling early detection and intervention for chronic conditions.",
      icon: <Activity className="h-12 w-12 text-[#0066cc]" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Clinical Software (SaMD)",
      description:
        "FDA-compliant Software as a Medical Device solutions that integrate seamlessly with healthcare workflows, providing clinical decision support and predictive analytics.",
      icon: <Shield className="h-12 w-12 text-[#008b8b]" />,
      color: "bg-teal-50 border-teal-200",
    },
    {
      title: "Behavioral Health Interventions",
      description:
        "Evidence-based digital therapeutics and behavior change programs that combine continuous monitoring data with personalized interventions.",
      icon: <Brain className="h-12 w-12 text-[#0066cc]" />,
      color: "bg-blue-50 border-blue-200",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#0066cc] via-[#008b8b] to-[#0066cc] bg-clip-text text-transparent">
              Precision Biosensing
            </span>
            <br />
            <span className="text-gray-900">for Disease Prevention</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Metsulin Corporation develops biosensing technologies and Software as a
            Medical Device (SaMD) to support disease prevention and remission programs
            including diabetes, integrating continuous monitoring with behavioral health
            interventions.
          </p>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Platform Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformComponents.map((component, index) => (
              <div
                key={index}
                className={`${component.color} rounded-2xl p-8 border-2 transition-all hover:shadow-lg hover:scale-105`}
              >
                <div className="mb-4">{component.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {component.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Conditions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-[#0066cc] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Target Conditions
            </h2>
            <p className="text-lg text-gray-600">
              Our initial focus is on diabetes prevention and remission, with plans to
              expand to other chronic conditions that benefit from continuous monitoring
              and behavioral interventions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Diabetes Focus
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are developing comprehensive solutions for both Type 1 and Type 2
              diabetes, focusing on:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0066cc] mr-2">•</span>
                <span>Continuous glucose monitoring integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0066cc] mr-2">•</span>
                <span>Predictive analytics for hypoglycemia and hyperglycemia</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0066cc] mr-2">•</span>
                <span>Personalized intervention protocols</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0066cc] mr-2">•</span>
                <span>Behavioral health support for lifestyle modifications</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0066cc] to-[#008b8b]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold">Diabetes Remission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building the Future of Precision Care
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in transforming healthcare through innovative biosensing and
            behavioral health technologies.
          </p>
          {/*<a
            href="mailto:info@metsulin.com"
            className="inline-block bg-white text-[#0066cc] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </a>*/}
        </div>
      </section>
    </div>
  );
}
