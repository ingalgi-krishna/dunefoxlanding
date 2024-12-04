"use client";

import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  value: string;
}

interface ProductMetricsProps {
  metrics: Metric[];
}

export function ProductMetrics({ metrics }: ProductMetricsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className={cn(
            "bg-[#FFFFFF] p-4 rounded-xl border border-[#CCC5B9] flex items-center"
          )}
        >
          <span className="text-[#EB6C33] font-bold text-2xl mr-3">
            {metric.value}
          </span>
          <p className="text-[#403D39] font-bold text-xs">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
