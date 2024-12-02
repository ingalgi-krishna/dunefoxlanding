import { ProductFeatures } from "@/components/products/features";
import { ProductsHero } from "@/components/products/hero";
import { ProductList } from "@/components/products/product-list";
import { StatsSection } from "@/components/products/stats";

export default function WhatsappBotsPage() {
  return (
    <div className="pt-20">
      <ProductsHero />
      <ProductFeatures />
      <ProductList />
      <StatsSection />
    </div>
  );
}
