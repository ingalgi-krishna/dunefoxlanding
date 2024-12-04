"use client";

import Link from "next/link";
import {
  CheckCircle,
  MessageSquare,
  Phone,
  Globe,
  Settings,
  Users,
  ShieldCheck,
  Clock,
} from "lucide-react";

const products = [
  {
    image: "/images/web-chatbots.png", // Replace with actual 3:2 vector image path
    title: "Intelligent Web Chatbots",
    description: "Enhance customer engagement with AI-powered chat solutions.",
    highlights: [
      { text: "24/7 Availability", icon: Clock },
      { text: "Instant Response", icon: MessageSquare },
      { text: "Seamless Integration", icon: Globe },
    ],
    benefits: [
      { text: "Boost customer satisfaction rates.", icon: Users },
      { text: "Automate repetitive tasks.", icon: Settings },
      { text: "Provide real-time query resolution.", icon: Clock },
    ],
    href: "/products/web-chatbots",
  },
  {
    image: "/images/call-bots.png", // Replace with actual 3:2 vector image path
    title: "Smart Call Automation",
    description:
      "Streamline customer support with voice-enabled AI assistants.",
    highlights: [
      { text: "Natural Language Processing", icon: Phone },
      { text: "Real-Time Call Analysis", icon: Clock },
      { text: "Multilingual Support", icon: Globe },
    ],
    benefits: [
      { text: "Reduce call handling times.", icon: ShieldCheck },
      { text: "Enhance customer service quality.", icon: Users },
      { text: "Scale support operations effortlessly.", icon: Settings },
    ],
    href: "/products/call-bots",
    comingSoon: true,
  },
  {
    image: "/images/whatsapp-bots.png", // Replace with actual 3:2 vector image path
    title: "WhatsApp Business Solutions",
    description:
      "Connect with customers on their preferred messaging platform.",
    highlights: [
      { text: "Easy Integration", icon: Settings },
      { text: "Personalized Messaging", icon: Users },
      { text: "Global Reach", icon: Globe },
    ],
    benefits: [
      {
        text: "Engage customers on their favorite platform.",
        icon: ShieldCheck,
      },
      {
        text: "Build stronger relationships with personalized messages.",
        icon: MessageSquare,
      },
      { text: "Expand your reach globally with minimal effort.", icon: Globe },
    ],
    href: "/products/whatsapp-bots",
  },
  {
    image: "/images/custom-solutions.png", // Replace with actual 3:2 vector image path
    title: "Custom AI Solutions",
    description:
      "Tailored automation solutions for your unique business needs.",
    highlights: [
      { text: "Scalable Solutions", icon: Globe },
      { text: "Custom Features", icon: Settings },
      { text: "Expert Support", icon: Users },
    ],
    benefits: [
      { text: "Address specific business challenges.", icon: Phone },
      { text: "Leverage advanced AI tools.", icon: ShieldCheck },
      { text: "Achieve unmatched efficiency and scalability.", icon: Settings },
    ],
    href: "/products/custom-solutions",
  },
];

export function ProductList() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Our Products
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Comprehensive solutions designed to enhance your business
            communication.
          </p>
        </div>

        {/* Product List */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`
                flex flex-col lg:flex-row items-center gap-8 p-6 rounded-xl border border-[#CCC5B9] 
                ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
              `}
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover aspect-[3/2]"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-[#252422] mb-4">
                  {product.title}
                  {product.comingSoon && (
                    <span className="ml-3 bg-[#EB6C33] text-white text-sm px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </h3>
                <p className="text-lg text-[#403D39] mb-4">
                  {product.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-[#252422] mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {product.highlights.map((highlight) => (
                      <li
                        key={highlight.text}
                        className="flex items-center gap-3 text-[#252422] font-semibold"
                      >
                        <highlight.icon className="h-5 w-5 text-[#EB6C33]" />
                        <span>{highlight.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-[#252422] mb-2">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit) => (
                      <li
                        key={benefit.text}
                        className="flex items-center gap-3 text-[#403D39] font-semibold bg-[#F9F9F9] p-3 rounded-lg border border-[#CCC5B9]"
                      >
                        <benefit.icon className="h-5 w-5 text-[#EB6C33]" />
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <Link
                  href={product.href}
                  className="inline-block px-6 py-3 bg-[#EB6C33] text-white rounded-lg text-sm font-medium hover:bg-[#D5542A] transition-colors mt-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
