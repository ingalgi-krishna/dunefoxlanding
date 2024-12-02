import React from "react";
import { AnalyticsDashboardHero } from "@/components/products/analytics-dashboard/hero";
import { AnalyticsDashboardFeatures } from "@/components/products/analytics-dashboard/features";
import { AnalyticsDashboardUseCases } from "@/components/products/analytics-dashboard/use-cases";
import { AnalyticsDashboardTestimonials } from "@/components/products/analytics-dashboard/testimonials";

export default function AnalyticsDashboardPage() {
  return (
    <div className="pt-20">
      <AnalyticsDashboardHero />
      <AnalyticsDashboardFeatures />
      <AnalyticsDashboardUseCases />
      <AnalyticsDashboardTestimonials />
    </div>
  );
}
