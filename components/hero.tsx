import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#1c1b1a] bg-grid-dark -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1c1b1a] via-[#1c1b1a]/90 to-[#EB6C33]/10 -z-10" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#EB6C33]/20 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
            <Sparkles className="h-4 w-4 mr-2 text-[#EB6C33]" />
            Empowering businesses with AI solutions
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-loose">
            <span className="text-white">Transform Your Business with </span>
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB6C33] to-orange-400">
              AI-Powered Solutions
            </span>
          </h1>

          {/* Subheading with feature list */}
          <p className="text-l sm:text-lg text-white/80 max-w-5xl mx-auto leading-relaxed">
            Discover intelligent automation solutions including Web Chatbots,
            WhatsApp Bots, and advanced analytics to streamline your customer
            interactions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#EB6C33] hover:bg-[#EB6C33]/90 text-white px-8 h-14 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-black hover:bg-white/10 h-14 text-lg"
            >
              <Bot className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              ["1M+", "Messages Handled"],
              ["500+", "Active Businesses"],
              ["98%", "Customer Satisfaction"],
              ["24/7", "Support Available"],
            ].map(([stat, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat}</div>
                <div className="text-white/60 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
