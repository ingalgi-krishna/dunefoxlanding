"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 98, label: "Customer Satisfaction", suffix: "%" },
  { value: 500, label: "Conversations Handled", suffix: "K+" },
  { value: 60, label: "Cost Reduction", suffix: "%" },
  { value: 24, label: "Availability", suffix: "/7" },
];

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) =>
            prev.map((count, i) => (i === index ? Math.floor(current) : count))
          );
        }, duration / steps);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#252422]">
            Driving Impact with Proven Results
          </h2>
          <p className="text-lg text-[#403D39] mt-2">
            Discover how our solutions deliver measurable success for your
            business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "bg-white rounded-xl shadow-lg p-6",
                "transform transition-all duration-700 hover:scale-105",
                "border border-[#CCC5B9] hover:border-[#EB6C33]",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
                `delay-[${index * 200}ms]`
              )}
            >
              <div className="text-3xl font-bold text-[#252422] mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm text-[#403D39]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
