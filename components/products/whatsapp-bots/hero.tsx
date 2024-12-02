import { Button } from "@/components/ui/button";
import { MessageSquareText, ArrowRight } from "lucide-react";

export function WhatsappBotHero() {
  return (
    <section className="relative overflow-hidden bg-[#252422] py-20">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EB6C33]/10 text-[#EB6C33] mb-6">
              <MessageSquareText className="h-4 w-4 mr-2" />
              WhatsApp Bots
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Streamline Communication with WhatsApp Bots
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Enhance your customer service with our AI-driven WhatsApp bots
              that offer instant responses and seamless integration for any
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#EB6C33] hover:bg-[#EB6C33]/90">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                See Features
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-[#EB6C33] to-[#EB6C33]/20 p-8">
              <img
                src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&q=80"
                alt="WhatsApp Bot Interface"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
