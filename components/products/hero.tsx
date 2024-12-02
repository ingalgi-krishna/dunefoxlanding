"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProductsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#252422]">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-[#252422] via-[#252422]/95 to-transparent",
          "transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EB6C33]/10 text-[#EB6C33] mb-8">
            <Bot className="h-4 w-4 mr-2" />
            AI-Powered Solutions
          </div>

          <h1
            className={cn(
              "text-4xl sm:text-6xl font-bold text-white mb-6",
              "transition-all duration-1000 delay-300",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
          >
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB6C33] to-orange-400">
              Intelligent Automation
            </span>
          </h1>

          <p
            className={cn(
              "text-xl text-white/80 max-w-2xl mb-8",
              "transition-all duration-1000 delay-500",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
          >
            Discover our suite of AI-powered solutions that drive efficiency and
            growth
          </p>

          <Button
            size="lg"
            className={cn(
              "bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white group",
              "transition-all duration-1000 delay-700",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
              "animate-pulse"
            )}
          >
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
