import { Bot } from "lucide-react";

export default function WhatsAppBotsPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
          <Bot className="h-6 w-6 text-[#EB6C33]" />
        </div>
        <h1 className="text-3xl font-bold text-[#252422]">WhatsApp Bots</h1>
      </div>

      <div className="prose prose-orange max-w-none">
        <p className="text-lg text-[#403D39]">
          Automate your WhatsApp business messaging with AI-powered bots.
        </p>

        <h2>Getting Started</h2>
        <p>
          Learn how to set up and configure your WhatsApp Business API
          integration with Dunefox's automation platform.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>WhatsApp Business API Integration</li>
          <li>Automated Responses</li>
          <li>Rich Media Support</li>
          <li>Customer Profile Management</li>
          <li>Message Templates</li>
        </ul>

        <h2>Setup Guide</h2>
        <p>
          Follow our comprehensive guide to connect your WhatsApp Business
          account and start automating your customer interactions.
        </p>
      </div>
    </div>
  );
}
