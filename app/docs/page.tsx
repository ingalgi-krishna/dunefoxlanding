import { Bot } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
          <Bot className="h-6 w-6 text-[#EB6C33]" />
        </div>
        <h1 className="text-3xl font-bold text-[#252422]">Documentation</h1>
      </div>

      <div className="prose prose-orange max-w-none">
        <p className="text-lg text-[#403D39]">
          Welcome to Dunefox documentation. Choose a product from the sidebar to
          get started.
        </p>

        <h2>Getting Started</h2>
        <p>
          Our documentation provides comprehensive guides for all Dunefox
          products. Select a product from the navigation menu to explore its
          features, implementation guides, and best practices.
        </p>

        <h2>Need Help?</h2>
        <p>
          If you can't find what you're looking for, our support team is here to
          help. Contact us through the support portal or join our community
          forum.
        </p>
      </div>
    </div>
  );
}
