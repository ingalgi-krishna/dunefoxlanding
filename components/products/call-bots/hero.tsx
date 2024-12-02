import { Button } from "@/components/ui/button";
import { PhoneOutgoing, Info } from "lucide-react";

export function CallBotHero() {
  return (
    <section className="relative overflow-hidden bg-[#252422] py-20">
      <div className="absolute inset-0 bg-grid-white/[0.1] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EB6C33]/10 text-[#EB6C33] mb-6">
              <PhoneOutgoing className="h-4 w-4 mr-2" />
              CallBot (Coming Soon)
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Revolutionize Customer Calls with AI
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Prepare to transform your call management with our intelligent
              CallBot—coming soon!
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-w-10 aspect-h-7">
              <div className="flex justify-center items-center rounded-2xl bg-gradient-to-tr from-[#EB6C33] to-[#EB6C33]/20 p-8">
                <Info className="h-24 w-24 text-[#EB6C33]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
