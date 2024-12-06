import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Manufacturing Solutions - Dunefox",
  description:
    "Optimize your manufacturing processes with our AI-driven solutions",
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#252422] py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-[#EB6C33]" />
                </div>
                <h1 className="text-3xl font-bold text-white">
                  Manufacturing Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Enhance productivity and efficiency with our state-of-the-art AI
                solutions. Streamline operations, reduce downtime, and boost
                production capabilities.
              </p>
              <Button
                size="lg"
                className="bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#252422] mb-4">
              Manufacturing Efficiency Metrics
            </h2>
            <p className="text-[#403D39]">
              Proven outcomes from over 350 manufacturing implementations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "50%", desc: "Increase in production output" },
              { stat: "40%", desc: "Reduction in machine downtime" },
              { stat: "30%", desc: "Decrease in operational costs" },
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
            Key Features for Manufacturing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Real-time production monitoring",
              "Predictive maintenance using AI",
              "Automated quality control systems",
              "Supply chain optimization algorithms",
              "Energy consumption analytics",
              "Customizable machine learning models",
              "Integration with existing ERP systems",
              "Compliance with industry safety standards",
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
            Revolutionize Your Manufacturing Processes
          </h2>
          <p className="text-white/80 mb-8">
            Join leading manufacturers worldwide who have transformed their
            operations with Dunefox.
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
