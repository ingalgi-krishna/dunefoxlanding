"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI chatbot work?",
    answer:
      "Our AI chatbot uses advanced natural language processing to understand and respond to customer queries in real-time. It learns from interactions to provide increasingly accurate and helpful responses.",
  },
  {
    question: "What platforms can I integrate the chatbot with?",
    answer:
      "Our chatbots can be integrated with various platforms including websites, WhatsApp, Facebook Messenger, and other popular messaging platforms. We provide easy-to-use APIs and plugins for seamless integration.",
  },
  {
    question: "How secure is the data handling?",
    answer:
      "We implement bank-grade encryption and follow strict data protection protocols. All data is processed in compliance with GDPR and other relevant privacy regulations.",
  },
  {
    question: "Can I customize the chatbot's responses?",
    answer:
      "Yes, you can fully customize the chatbot's responses, personality, and knowledge base. Our platform provides an intuitive interface for training and customizing your chatbot.",
  },
  {
    question: "What kind of analytics do you provide?",
    answer:
      "We provide comprehensive analytics including conversation metrics, user satisfaction rates, response times, and custom KPIs. Our dashboard gives you real-time insights into your chatbot's performance.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#403D39]">
            Find answers to common questions about our AI solutions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-[#CCC5B9] px-6"
            >
              <AccordionTrigger className="text-lg font-medium text-[#252422] hover:text-[#EB6C33]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#403D39]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
