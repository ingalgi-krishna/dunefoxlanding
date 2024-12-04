import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Education Solutions - Dunefox",
  description: "Revolutionize education with our AI-driven tools and platforms",
};

export default function EducationPage() {
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
                  Education Solutions
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8">
                Enhance the educational experience with our comprehensive suite
                of AI-powered tools. Drive better learning outcomes and
                streamline administrative tasks.
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
                src="https://imsages.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
                alt="Classroom Technology"
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
              Educational Impact Research
            </h2>
            <p className="text-[#403D39]">
              Data-driven insights from over 200 school implementations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "80%", desc: "Improvement in student engagement" },
              { stat: "65%", desc: "Increase in standardized test scores" },
              { stat: "50%", desc: "Reduction in administrative workload" },
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
            Key Features for Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Customized learning pathways",
              "AI-powered tutoring and assistance",
              "Automated grading and feedback systems",
              "Data analytics for performance tracking",
              "Interactive and immersive learning environments",
              "Comprehensive administrative platforms",
              "Integration with existing educational software",
              "Secure data privacy protocols",
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
            Transform Your Educational Environment
          </h2>
          <p className="text-white/80 mb-8">
            Join the many institutions that have enhanced their educational
            capabilities with Dunefox.
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
