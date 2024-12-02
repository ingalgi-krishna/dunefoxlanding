"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MessageSquare, Phone, Bot, BarChart } from "lucide-react";

const products = [
  {
    name: "Web Chatbots",
    href: "/docs/web-chatbots",
    icon: MessageSquare,
    description: "Implement AI-powered chat on your website",
  },
  {
    name: "WhatsApp Bots",
    href: "/docs/whatsapp-bots",
    icon: Bot,
    description: "Automate WhatsApp business messaging",
  },
  {
    name: "Call Bots",
    href: "/docs/call-bots",
    icon: Phone,
    description: "Voice automation solutions",
  },
  {
    name: "Analytics Dashboard",
    href: "/docs/analytics",
    icon: BarChart,
    description: "Track and analyze performance",
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2 sticky top-24">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-[#403D39] px-3 py-2">
          Products
        </h2>
      </div>
      {products.map((product) => {
        const isActive = pathname === product.href;
        return (
          <Link
            key={product.href}
            href={product.href}
            className={cn(
              "flex items-start gap-3 px-3 py-2 rounded-lg transition-colors",
              "hover:bg-[#EB6C33]/10 hover:text-[#EB6C33]",
              isActive && "bg-[#EB6C33]/10 text-[#EB6C33]",
              !isActive && "text-[#403D39]"
            )}
          >
            <product.icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-[#403D39]/80">
                {product.description}
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
