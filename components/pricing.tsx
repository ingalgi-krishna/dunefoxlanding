import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "49",
    features: [
      "WhatsApp Bot Integration",
      "Basic Analytics",
      "1,000 messages/month",
      "8/5 Support",
    ],
  },
  {
    name: "Intermediate",
    price: "99",
    features: [
      "WhatsApp & Chat Bot",
      "Advanced Analytics",
      "5,000 messages/month",
      "24/7 Support",
      "Custom Integrations",
    ],
  },
  {
    name: "Pro",
    price: "199",
    features: [
      "All Bot Solutions",
      "Enterprise Analytics",
      "Unlimited messages",
      "Priority 24/7 Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252422] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Choose the plan that best fits your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white p-8 rounded-xl border border-[#CCC5B9] hover:border-[#EB6C33] transition-colors"
            >
              <h3 className="text-2xl font-bold text-[#252422] mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-[#EB6C33]">
                  ${plan.price}
                </span>
                <span className="text-[#403D39] ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-[#EB6C33] mr-2" />
                    <span className="text-[#403D39]">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg bg-[#EB6C33] text-white hover:bg-[#EB6C33]/90 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
