import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Professional Services - Dunefox",
  description:
    "Enhance your professional services with AI-driven solutions for better efficiency and client satisfaction",
};

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#252422] py-20">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-[#EB6C33]" />
                </div>
                <h1 className="text-3xl font-bold text-white">
                  Professional Services
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Elevate your service delivery with our AI-powered tools.
                Streamline operations, enhance client relationships, and drive
                growth with precision analytics and automated processes.
              </p>
              <Button
                size="lg"
                className="bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573166364524-6625c8b3e6b4?auto=format&fit=crop&q=80"
                alt="Professional Office"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#252422] mb-4">
              Efficiency and Client Satisfaction Metrics
            </h2>
            <p className="text-[#403D39]">
              Insights from over 300 implementations in professional settings
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "60%", desc: "Increase in process efficiency" },
              { stat: "50%", desc: "Improvement in client retention rates" },
              { stat: "45%", desc: "Reduction in operational costs" },
            ].map((item) => (
              <div
                key={item.desc}
                className="text-center p-6 bg-[#FFFCF2] rounded-xl"
              >
                <div className="text-3xl font-bold text-[#EB6C33] mb-2">
                  {item.stat}
                </div>
                <div className="text-[#403D39]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-[#FFFCF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#252422] mb-8">
            Key Features for Professional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Advanced CRM integration",
              "Automated administrative tasks",
              "Real-time data analytics tools",
              "Client engagement optimization",
              "Project management automation",
              "Regulatory compliance management",
              "Customized service delivery models",
              "High-security data protection",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-[#EB6C33] flex-shrink-0" />
                <span className="text-[#403D39]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#252422]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Drive Superior Service Delivery
          </h2>
          <p className="text-white/80 mb-8">
            Join the leading service providers enhancing their operations with
            Dunefox.
          </p>
          <Button
            size="lg"
            className="bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
