import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden bg-[#252422] py-20">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Solutions for Every Industry
          </h1>
          <p className="text-lg text-white/80 mb-8">
            From retail to healthcare, our AI-powered automation solutions help
            businesses across industries streamline operations and enhance
            customer experience.
          </p>
          <Button size="lg" className="bg-[#EB6C33] hover:bg-[#EB6C33]/90">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
