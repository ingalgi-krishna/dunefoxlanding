import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Real Estate Solutions - Dunefox",
  description:
    "Revolutionize real estate management and sales with cutting-edge AI tools",
};

export default function RealEstatePage() {
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
                  Real Estate Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Transform your real estate operations with our AI-driven
                platforms. Increase sales, optimize property management, and
                provide superior client service with targeted analytics and
                automation.
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
                src="https://imsages.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="Real Estate Projects"
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
              Data-Driven Real Estate Insights
            </h2>
            <p className="text-[#403D39]">
              Leveraging data from over 100 real estate portfolios
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "20%", desc: "Increase in property sales" },
              { stat: "15%", desc: "Reduction in vacancy rates" },
              { stat: "25%", desc: "Increase in rental income" },
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
            Key Features for Real Estate
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Automated property listing tools",
              "AI-driven pricing optimization",
              "Real-time market analytics",
              "Customer relationship management",
              "Virtual property tours",
              "Efficient lead management systems",
              "Cloud-based document management",
              "Compliance with property regulations",
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
            Transform Your Real Estate Business
          </h2>
          <p className="text-white/80 mb-8">
            Join the revolution in real estate with Dunefox. Enhance operations,
            improve client satisfaction, and achieve remarkable growth.
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
