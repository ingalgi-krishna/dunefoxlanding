"use client";

import Link from "next/link";
import { MessageSquare, Phone, Bot, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const products = [
  {
    icon: MessageSquare,
    title: "Intelligent Web Chatbots",
    description: "Enhance customer engagement with AI-powered chat solutions",
    href: "/products/web-chatbots",
  },
  {
    icon: Phone,
    title: "Smart Call Automation",
    description: "Streamline customer support with voice-enabled AI assistants",
    href: "/products/call-bots",
  },
  {
    icon: Bot,
    title: "WhatsApp Business Solutions",
    description: "Connect with customers on their preferred messaging platform",
    href: "/products/whatsapp-bots",
  },
  {
    icon: Settings,
    title: "Custom AI Solutions",
    description: "Tailored automation solutions for your unique business needs",
    href: "/products/custom-solutions",
  },
];

export function ProductList() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-[#FFFCF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Comprehensive solutions designed to enhance your business
            communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.title}
              href={product.href}
              className={cn(
                "group p-8 rounded-xl bg-white",
                "border border-[#CCC5B9] hover:border-[#EB6C33]",
                "transform transition-all duration-500 hover:scale-[1.02]",
                "hover:shadow-xl",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
                `delay-[${index * 200}ms]`
              )}
            >
              <product.icon className="h-12 w-12 text-[#EB6C33] mb-6 transform transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-[#252422] mb-3">
                {product.title}
              </h3>
              <p className="text-[#403D39]">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
