import { WebChatbotHero } from '@/components/products/web-chatbots/hero';
import { WebChatbotFeatures } from '@/components/products/web-chatbots/features';
import { WebChatbotUseCases } from '@/components/products/web-chatbots/use-cases';
import { WebChatbotTestimonials } from '@/components/products/web-chatbots/testimonials';

export default function WebChatbotsPage() {
  return (
    <div className="pt-20">
      <WebChatbotHero />
      <WebChatbotFeatures />
      <WebChatbotUseCases />
      <WebChatbotTestimonials />
    </div>
  );
}