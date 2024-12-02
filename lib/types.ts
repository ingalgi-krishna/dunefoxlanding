import { LucideIcon } from "lucide-react";

export interface Industry {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  features: string[];
}
