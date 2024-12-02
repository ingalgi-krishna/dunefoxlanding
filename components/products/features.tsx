"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { BarChart, TrendingUp, Zap, Globe } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    title: "Increased Efficiency",
    value: "85%",
    description: "Average improvement in response time",
  },
  {
    icon: BarChart,
    title: "Cost Savings",
    value: "60%",
    description: "Reduction in operational costs",
  },
  {
    icon: Zap,
    title: "Fast Integration",
    value: "24h",
    description: "Average implementation time",
  },
  {
    icon: Globe,
    title: "Global Scale",
    value: "150+",
    description: "Countries supported",
  },
];

export function ProductFeatures() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Performance Metrics
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Real results from businesses using our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className={cn(
                "p-6 rounded-xl bg-white",
                "border border-[#CCC5B9]",
                "transform transition-all duration-500",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
                `delay-[${index * 200}ms]`
              )}
            >
              <metric.icon className="h-8 w-8 text-[#EB6C33] mb-4" />
              <div className="text-3xl font-bold text-[#252422] mb-2">
                {metric.value}
              </div>
              <div className="font-medium text-[#252422] mb-1">
                {metric.title}
              </div>
              <p className="text-sm text-[#403D39]">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
