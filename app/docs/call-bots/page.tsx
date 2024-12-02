import { Phone } from "lucide-react";

export default function CallBotsPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
          <Phone className="h-6 w-6 text-[#EB6C33]" />
        </div>
        <h1 className="text-3xl font-bold text-[#252422]">Call Bots</h1>
      </div>

      <div className="prose prose-orange max-w-none">
        <p className="text-lg text-[#403D39]">
          Transform your call center operations with AI-powered voice
          automation.
        </p>

        <h2>Overview</h2>
        <p>
          Our Call Bot solution uses advanced speech recognition and natural
          language processing to handle customer calls efficiently.
        </p>

        <h2>Core Features</h2>
        <ul>
          <li>Speech Recognition</li>
          <li>Natural Language Understanding</li>
          <li>Voice Synthesis</li>
          <li>Call Routing</li>
          <li>Multi-language Support</li>
        </ul>

        <h2>Integration Steps</h2>
        <p>
          Learn how to integrate our Call Bot solution with your existing
          telephony infrastructure and CRM systems.
        </p>
      </div>
    </div>
  );
}
