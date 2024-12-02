import { Brain, Zap, Globe, Lock, Smartphone, BarChart2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Automated Responses",
    description:
      "Efficiently handle inquiries with AI-driven responses that simulate real conversations.",
  },
  {
    icon: Smartphone,
    title: "Seamless Mobile Experience",
    description:
      "Optimized for mobile interactions, ensuring your bots perform perfectly on any device.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Reach customers worldwide with support for multiple languages and localized content.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Secure your conversations with end-to-end encryption, ensuring data privacy and security.",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description:
      "Send timely notifications and updates directly to your users' WhatsApp, enhancing user engagement.",
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description:
      "Monitor engagement metrics and optimize your strategies with comprehensive analytics tools.",
  },
];

export function WhatsappBotFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Enhance Your Customer Interactions
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Leverage our WhatsApp bot features to improve response times and
            customer satisfaction.
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
