import { UseCasesBadges } from "@/components/use-cases/badges";
import { UseCasesHero } from "@/components/use-cases/hero";

export const metadata = {
  title: "Use Cases - Dunefox",
  description: "Explore how different industries leverage our AI solutions",
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen pt-20">
      <UseCasesHero />
      <UseCasesBadges />
    </div>
  );
}
