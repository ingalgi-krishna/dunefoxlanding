import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Enterprise Solutions - Dunefox",
  description:
    "Transform your enterprise operations with AI-powered automation solutions",
};

export default function EnterprisePage() {
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
                  Enterprise Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Transform your enterprise operations with our comprehensive
                suite of AI-powered automation solutions. Scale your business
                efficiently while maintaining quality and compliance.
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Enterprise Office"
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
              Enterprise Impact Research
            </h2>
            <p className="text-[#403D39]">
              Based on data from over 500 enterprise implementations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "67%", desc: "Reduction in customer response time" },
              { stat: "85%", desc: "Increase in customer satisfaction" },
              { stat: "$2.5M", desc: "Average annual cost savings" },
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
            Enterprise-Grade Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Advanced security protocols and compliance measures",
              "Seamless integration with existing enterprise systems",
              "Customizable workflows and automation rules",
              "Real-time analytics and reporting dashboards",
              "Multi-language and multi-region support",
              "Dedicated enterprise support team",
              "Custom AI model training capabilities",
              "Scalable infrastructure with 99.9% uptime",
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-white/80 mb-8">
            Join leading enterprises that have revolutionized their operations
            with Dunefox.
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
