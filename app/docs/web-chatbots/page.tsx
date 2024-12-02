import { MessageSquare } from "lucide-react";

export default function WebChatbotsPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
          <MessageSquare className="h-6 w-6 text-[#EB6C33]" />
        </div>
        <h1 className="text-3xl font-bold text-[#252422]">Web Chatbots</h1>
      </div>

      <div className="prose prose-orange max-w-none">
        <p className="text-lg text-[#403D39]">
          Learn how to implement and customize AI-powered chatbots for your
          website.
        </p>

        <h2>Quick Start</h2>
        <p>
          Get started with our web chatbot solution in just a few minutes.
          Follow our step-by-step guide to integrate the chatbot into your
          website.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Natural Language Processing</li>
          <li>Customizable Responses</li>
          <li>Multi-language Support</li>
          <li>Real-time Analytics</li>
          <li>Seamless Integration</li>
        </ul>

        <h2>Implementation Guide</h2>
        <p>Follow these steps to add the chatbot to your website:</p>

        <pre>
          <code>{`<!-- Add this script to your HTML -->
<script src="https://cdn.dunefox.com/chatbot.js"></script>

<!-- Initialize the chatbot -->
<script>
  Dunefox.init({
    apiKey: 'your-api-key',
    theme: 'light'
  });
</script>`}</code>
        </pre>
      </div>
    </div>
  );
}
