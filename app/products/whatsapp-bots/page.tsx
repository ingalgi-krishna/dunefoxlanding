import { WhatsappBotHero } from "@/components/products/whatsapp-bots/hero";
import { WhatsappBotFeatures } from "@/components/products/whatsapp-bots/features";
import { WhatsappBotUseCases } from "@/components/products/whatsapp-bots/use-cases";
import { WhatsappBotTestimonials } from "@/components/products/whatsapp-bots/testimonials";

export default function WhatsappBotsPage() {
  return (
    <div className="pt-20">
      <WhatsappBotHero />
      <WhatsappBotFeatures />
      <WhatsappBotUseCases />
      <WhatsappBotTestimonials />
    </div>
  );
}
