import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Retail Solutions - Dunefox",
  description:
    "Enhance your retail operations with AI-powered solutions for increased sales and customer satisfaction",
};

export default function RetailPage() {
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
                  Retail Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Transform your retail business with our innovative AI solutions.
                Optimize inventory, enhance customer experience, and boost your
                sales with data-driven insights.
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
              Retail Performance Metrics
            </h2>
            <p className="text-[#403D39]">
              Achievements from deploying AI in over 500 retail locations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "30%", desc: "Increase in sales conversion rates" },
              { stat: "25%", desc: "Reduction in inventory waste" },
              { stat: "35%", desc: "Improvement in customer retention" },
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
            Key Features for Retail
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Predictive inventory management",
              "AI-driven customer behavior analysis",
              "Personalized marketing automation",
              "Real-time sales tracking",
              "Dynamic pricing optimization",
              "Enhanced security systems",
              "Customer feedback and sentiment analysis",
              "Seamless e-commerce integration",
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
            Revolutionize Your Retail Operations
          </h2>
          <p className="text-white/80 mb-8">
            Join the future of retail with Dunefox. Enhance your operational
            efficiency and elevate the customer experience.
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
