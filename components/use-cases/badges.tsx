"use client";

import Link from "next/link";
import {
  Building2,
  ShoppingBag,
  Heart,
  GraduationCap,
  Briefcase,
  Building,
  Plane,
  Landmark,
  Factory,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Enterprise", icon: Building2, href: "/use-cases/enterprise" },
  { name: "Retail", icon: ShoppingBag, href: "/use-cases/retail" },
  { name: "Healthcare", icon: Heart, href: "/use-cases/healthcare" },
  { name: "Education", icon: GraduationCap, href: "/use-cases/education" },
  {
    name: "Professional Services",
    icon: Briefcase,
    href: "/use-cases/professional-services",
  },
  { name: "Real Estate", icon: Building, href: "/use-cases/real-estate" },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    href: "/use-cases/travel-hospitality",
  },
  {
    name: "Financial Services",
    icon: Landmark,
    href: "/use-cases/financial-services",
  },
  { name: "Manufacturing", icon: Factory, href: "/use-cases/manufacturing" },
  { name: "Insurance", icon: ShieldCheck, href: "/use-cases/insurance" },
];

export function UseCasesBadges() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Industry Solutions
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Discover how businesses across different industries leverage our AI
            solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className={cn(
                "group flex flex-col items-center p-6 rounded-xl",
                "border border-[#CCC5B9] hover:border-[#EB6C33]",
                "transition-all duration-300 hover:shadow-lg",
                "bg-white hover:bg-[#EB6C33]/5"
              )}
            >
              <industry.icon className="h-8 w-8 text-[#EB6C33] mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-[#252422] text-center">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
