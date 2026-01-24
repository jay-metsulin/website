import { Activity, Shield, Brain, CheckCircle } from "lucide-react";

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
      icon: <Activity className="h-16 w-16 text-[#0066cc]" />,
      color: "bg-blue-50 border-blue-200",
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
      icon: <Shield className="h-16 w-16 text-[#008b8b]" />,
      color: "bg-teal-50 border-teal-200",
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
      icon: <Brain className="h-16 w-16 text-[#0066cc]" />,
      color: "bg-blue-50 border-blue-200",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Three-Layer Infrastructure
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our platform integrates biosensing technologies, clinical software, and
            behavioral health interventions to create a comprehensive solution for
            disease prevention and remission.
          </p>
        </div>
      </section>

      {/* Infrastructure Layers */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-7xl space-y-16">
          {infrastructureLayers.map((layer) => (
            <div
              key={layer.layer}
              className={`${layer.color} rounded-2xl p-8 md:p-12 border-2`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">{layer.icon}</div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-[#0066cc]">
                      Layer {layer.layer}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {layer.title}
                  </h2>
                  <p className="text-[#008b8b] font-medium mb-4">{layer.subtitle}</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {layer.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {layer.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0066cc] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-[#0066cc] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Excellence
            </h2>
            <p className="text-lg text-gray-600">
              We are committed to meeting the highest standards of medical device
              regulation and clinical validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                FDA Compliance
              </h3>
              <p className="text-gray-600">
                Our SaMD solutions are designed to meet FDA regulatory requirements,
                including 510(k) clearance pathways where applicable.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Clinical Validation
              </h3>
              <p className="text-gray-600">
                We conduct rigorous clinical studies to validate the safety and
                efficacy of our technologies, following Good Clinical Practice (GCP)
                guidelines.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reimbursement Ready
              </h3>
              <p className="text-gray-600">
                Our solutions are designed with healthcare economics in mind, ensuring
                pathways for insurance reimbursement and value-based care models.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
