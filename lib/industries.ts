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

export const industries = [
  {
    name: "Enterprise",
    slug: "enterprise",
    icon: Building2,
    description:
      "Streamline operations and enhance productivity across large organizations",
    benefits: [
      "Automated customer support",
      "Internal process automation",
      "Data-driven insights",
      "Scalable solutions",
    ],
    features: [
      "Enterprise-grade security",
      "Custom integrations",
      "Advanced analytics",
      "Multi-department support",
    ],
  },
  // Add similar detailed objects for other industries
  {
    name: "Retail",
    slug: "retail",
    icon: ShoppingBag,
    description: "Transform customer experience and optimize retail operations",
    benefits: [
      "24/7 customer support",
      "Personalized shopping assistance",
      "Inventory management",
      "Order tracking automation",
    ],
    features: [
      "Product recommendations",
      "Order status updates",
      "Stock availability checks",
      "Return process automation",
    ],
  },
  // Continue with other industries...
];
