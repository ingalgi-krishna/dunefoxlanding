import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Financial Services - Dunefox",
  description: "Enhance your financial operations with our AI-driven solutions",
};

export default function FinancialServicesPage() {
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
                  Financial Services
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Optimize financial operations and customer experiences with our
                cutting-edge AI tools. Enhance accuracy, compliance, and client
                satisfaction.
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
                src="https://imsages.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80"
                alt="Financial Planning"
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
              Impact of AI in Financial Services
            </h2>
            <p className="text-[#403D39]">
              Insights from over 300 implementations in finance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "45%", desc: "Increase in loan processing speed" },
              { stat: "30%", desc: "Reduction in operational costs" },
              { stat: "50%", desc: "Improvement in risk management" },
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
            Financial-Grade Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Automated compliance tracking",
              "Real-time fraud detection algorithms",
              "Seamless integration with banking systems",
              "Data-driven investment insights",
              "Enhanced customer profiling",
              "Secure blockchain transactions",
              "Customizable AI-driven financial advising tools",
              "High-availability architecture for 24/7 trading",
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
            Empower Your Financial Operations
          </h2>
          <p className="text-white/80 mb-8">
            Join the leading financial institutions that have transformed their
            services with Dunefox.
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
