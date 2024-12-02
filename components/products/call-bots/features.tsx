import { Phone, Shield, BarChart, Cpu, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Automated Calling",
    description:
      "Automate routine calls and allow your staff to focus on high-value interactions.",
  },
  {
    icon: Shield,
    title: "Secure Communications",
    description:
      "Adheres to the strictest security standards to protect both you and your customers' privacy.",
  },
  {
    icon: BarChart,
    title: "Scalability",
    description:
      "Easily scales to handle increasing call volumes without the need for additional resources.",
  },
  {
    icon: Cpu,
    title: "Smart Routing",
    description:
      "Uses AI to route calls to the most appropriate agent or department based on caller needs.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connect with customers around the world with support for multiple languages.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Ensure your business is always reachable, day or night, with our reliable CallBot.",
  },
];

export function CallBotFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Features of CallBot
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Our CallBot comes packed with features to enhance your communication
            capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-[#CCC5B9] hover:border-[#EB6C33] transition-colors"
            >
              <feature.icon className="h-10 w-10 text-[#EB6C33] mb-4" />
              <h3 className="text-xl font-semibold text-[#252422] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#403D39]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
