import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Insurance Solutions - Dunefox",
  description:
    "Transform your insurance operations with advanced AI-driven solutions",
};

export default function InsurancePage() {
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
                  Insurance Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Enhance efficiency and customer service with our AI-powered
                tools tailored for the insurance industry. Reduce claims
                processing time and improve risk assessment accuracy.
              </p>
              <Button
                size="lg"
                className="bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://imsages.unsplash.com/photo-1521540121978-4b18b0e7d3f9?auto=format&fit=crop&q=80"
                alt="Insurance Office"
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
              Impact of AI on Insurance
            </h2>
            <p className="text-[#403D39]">
              Real-world results from implementing our AI solutions in over 250
              insurance companies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "40%", desc: "Increase in claims processing speed" },
              { stat: "35%", desc: "Reduction in operational costs" },
              { stat: "20%", desc: "Decrease in fraudulent claims" },
            ].map((item) => (
              <div
                key={item.desc}
                className="text-center p-6 bg-[#FFFFFF] rounded-xl"
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
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#252422] mb-8">
            Core Insurance Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Automated claims processing",
              "Enhanced fraud detection using AI",
              "Risk assessment models",
              "Customer service chatbots",
              "Policy personalization algorithms",
              "Data-driven premium adjustments",
              "Seamless policyholder data integration",
              "Regulatory compliance automation",
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
            Revolutionize Your Insurance Services
          </h2>
          <p className="text-white/80 mb-8">
            Join top insurers who leverage Dunefox to transform their operations
            and customer experiences.
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
