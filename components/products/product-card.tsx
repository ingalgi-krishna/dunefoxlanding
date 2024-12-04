"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductMetrics } from "./product-metrics";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center gap-8 mb-16 p-8 rounded-2xl",
        "bg-white border border-[#CCC5B9]",
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      )}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-[#252422] mb-2 flex items-center">
            {product.title}
            {product.comingSoon && (
              <span className="ml-3 bg-[#EB6C33] text-white text-sm px-3 py-1 rounded-full">
                Coming Soon
              </span>
            )}
          </h3>
          <p className="text-[#403D39] text-lg">{product.description}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#252422] mb-4">
            Key Features
          </h4>
          <ul className="space-y-3">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-center gap-3">
                <span className="flex-shrink-0 p-1 rounded-full bg-[#EB6C33]/10">
                  <Check className="h-5 w-5 text-[#EB6C33]" />
                </span>
                <span className="text-[#403D39] font-semibold">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <ProductMetrics metrics={product.metrics} />
      </div>
    </div>
  );
}
