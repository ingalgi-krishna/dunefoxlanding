import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Healthcare Solutions - Dunefox",
  description: "Empower healthcare with AI-driven efficiency and accuracy",
};

export default function HealthcarePage() {
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
                  Healthcare Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Revolutionize patient care and operational efficiency with our
                AI-powered healthcare solutions. Enhance diagnostics, treatment,
                and patient management.
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
                src="https://images.unsplash.com/photo-1576765607921-d078c3e11353?auto=format&fit=crop&q=80"
                alt="Healthcare Technology"
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
              Impact in Healthcare
            </h2>
            <p className="text-[#403D39]">
              Based on outcomes from over 400 healthcare deployments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "30%", desc: "Reduction in diagnosis errors" },
              { stat: "40%", desc: "Increase in patient throughput" },
              { stat: "25%", desc: "Cost savings in patient care" },
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
            Advanced Healthcare Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "AI-enhanced diagnostic tools",
              "Automated patient data analysis",
              "Machine learning for treatment personalization",
              "Remote patient monitoring capabilities",
              "Efficient healthcare workflow automation",
              "Secure patient data management",
              "Integration with existing healthcare systems",
              "Compliance with health regulations and standards",
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
            Enhance Your Healthcare Services
          </h2>
          <p className="text-white/80 mb-8">
            Join the forefront of healthcare innovation with Dunefox.
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