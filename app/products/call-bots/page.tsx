  import { CallBotHero } from "@/components/products/call-bots/hero";
  import { CallBotFeatures } from "@/components/products/call-bots/features";
  import { CallBotUseCases } from "@/components/products/call-bots/use-cases";
  import { CallBotTestimonials } from "@/components/products/call-bots/testimonials";

  export default function CallBotsPage() {
    return (
      <div className="pt-20">
        <CallBotHero />
        <CallBotFeatures />
        <CallBotUseCases />
        <CallBotTestimonials />
      </div>
    );
  }
