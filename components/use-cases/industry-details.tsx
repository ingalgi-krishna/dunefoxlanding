import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Industry } from "@/lib/types";

interface IndustryDetailsProps {
  industry: Industry;
}

export function IndustryDetails({ industry }: IndustryDetailsProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden bg-[#252422] py-20">
        <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
              <industry.icon className="h-6 w-6 text-[#EB6C33]" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              {industry.name} Solutions
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl">
            {industry.description}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#252422] mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {industry.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <Check className="h-5 w-5 text-[#EB6C33] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#403D39]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#252422] mb-6">
                Features
              </h2>
              <ul className="space-y-4">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-[#EB6C33] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#403D39]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-[#EB6C33] hover:bg-[#EB6C33]/90">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
