import { MessageSquare, Phone, Bot, BarChart } from "lucide-react";

const products = [
  {
    title: "WhatsApp Bot",
    description:
      "Automate customer interactions on WhatsApp with intelligent responses.",
    icon: MessageSquare,
  },
  {
    title: "Call Bot",
    description:
      "Handle customer calls efficiently with AI-powered voice automation.",
    icon: Phone,
  },
  {
    title: "Chatbot",
    description:
      "Engage website visitors 24/7 with smart conversation automation.",
    icon: Bot,
  },
  {
    title: "Analytics & Insights",
    description:
      "Track and analyze customer interactions for better decision making.",
    icon: BarChart,
  },
];

export function Products() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252422] mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Comprehensive solutions designed to enhance your business
            communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="p-6 rounded-xl border border-[#CCC5B9] hover:border-[#EB6C33] transition-colors"
            >
              <product.icon className="h-12 w-12 text-[#EB6C33] mb-4" />
              <h3 className="text-xl font-semibold text-[#252422] mb-2">
                {product.title}
              </h3>
              <p className="text-[#403D39]">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
