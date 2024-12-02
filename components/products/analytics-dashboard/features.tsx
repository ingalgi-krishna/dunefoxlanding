import {
  BarChart,
  Database,
  Activity,
  Globe,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: BarChart,
    title: "Comprehensive Data Visualization",
    description:
      "Transform complex datasets into clear and actionable visualizations to drive decision making.",
  },
  {
    icon: Database,
    title: "Real-Time Data Processing",
    description:
      "Stream and process data in real-time to ensure your dashboard always displays the most current insights.",
  },
  {
    icon: Activity,
    title: "Advanced Analytics",
    description:
      "Utilize machine learning models to analyze trends, predict outcomes, and discover valuable insights.",
  },
  {
    icon: Globe,
    title: "Global Data Integration",
    description:
      "Seamlessly integrate data from various global sources to provide a unified view of your business operations.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Safeguard your data with top-tier security measures, ensuring compliance with international data protection regulations.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring and Alerts",
    description:
      "Monitor your systems around the clock with automated alerts to keep you informed of any critical changes or anomalies.",
  },
];

export function AnalyticsDashboardFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Key Features of Our Analytics Dashboard
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Elevate your business intelligence with cutting-edge features
            designed to enhance your analytical capabilities.
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
