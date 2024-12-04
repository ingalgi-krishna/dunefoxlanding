"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ProductCard } from "./products/product-card";
import type { Product } from "@/lib/types";

const products: Product[] = [
  {
    title: "WhatsApp Bot",
    description:
      "Automate customer interactions on WhatsApp with intelligent responses.",
    details: [
      "Seamless integration with WhatsApp Business API",
      "Customizable conversation flows",
      "Instant response times",
      "Analytics to track customer engagement",
    ],
    metrics: [
      { label: "24/7 Availability", value: "✓" },
      { label: "1M+ Messages Handled", value: "✓" },
      { label: "GDPR Compliant", value: "✓" },
    ],
    image:
      "https://imsages.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80",
  },
  {
    title: "Call Bot",
    description:
      "Handle customer calls efficiently with AI-powered voice automation.",
    details: [
      "Natural language understanding",
      "Automated call routing and responses",
      "Multilingual support",
      "Real-time speech-to-text conversion",
    ],
    metrics: [
      { label: "500+ Businesses Supported", value: "✓" },
      { label: "99.9% Uptime SLA", value: "✓" },
      { label: "AI-Driven Call Analytics", value: "✓" },
    ],
    image:
      "https://imsages.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80",
    comingSoon: true,
  },
  {
    title: "Web Chatbot",
    description:
      "Engage website visitors 24/7 with smart conversation automation.",
    details: [
      "Pre-built templates for quick setup",
      "Seamless integration with web platforms",
      "Supports text and multimedia interactions",
      "Real-time user intent detection",
    ],
    metrics: [
      { label: "10K+ Websites Powered", value: "✓" },
      { label: "AI Personalization", value: "✓" },
      { label: "Unlimited Chat Histories", value: "✓" },
    ],
    image:
      "https://imsages.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80",
  },
  {
    title: "Analytics & Insights",
    description:
      "Track and analyze customer interactions for better decision making.",
    details: [
      "Detailed interaction metrics",
      "Customizable dashboards",
      "Actionable insights from data",
      "Predictive analytics for trends",
    ],
    metrics: [
      { label: "1B+ Events Tracked", value: "✓" },
      { label: "Advanced AI Models", value: "✓" },
      { label: "Custom Reports", value: "✓" },
    ],
    image:
      "https://imsages.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
];

export function Products() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252422] mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Comprehensive solutions designed to enhance your business
            communication.
          </p>
        </div>

        {/* Product Cards */}
        <div ref={ref} className="space-y-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={cn(
                "transform transition-all duration-700",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
                `delay-[${index * 200}ms]`
              )}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div
          className={cn(
            "text-center mt-16 transform transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            `delay-[${products.length * 200}ms]`
          )}
        >
          <p className="text-lg text-[#403D39] mb-6">
            Explore our products designed to revolutionize the way you interact
            with your customers.
          </p>
          <a
            href="/products"
            className="inline-flex items-center px-8 py-4 text-white bg-[#EB6C33] hover:bg-[#EB6C33]/90 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg group"
          >
            Explore More
            <svg
              className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
