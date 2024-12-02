const useCases = [
  {
    industry: "Retail",
    title: "Enhance Customer Service with Instant Messaging",
    description:
      "Enable real-time customer support and personalized shopping assistance directly through WhatsApp.",
    metrics: [
      "40% increase in customer retention",
      "30% uplift in repeat purchases",
    ],
    image:
      "https://images.unsplash.com/photo-1523475496153-3d8e1a7e9a1e?auto=format&fit=crop&q=80",
  },
  {
    industry: "Finance",
    title: "Simplify Banking Processes",
    description:
      "Provide quick access to account information, transactions, and financial advice through secure messaging.",
    metrics: [
      "70% quicker transaction handling",
      "55% reduction in call center costs",
    ],
    image:
      "https://images.unsplash.com/photo-1591027489404-0552206b6f9b?auto=format&fit=crop&q=80",
  },
  {
    industry: "Hospitality",
    title: "Streamline Booking and Services",
    description:
      "Facilitate bookings, check-ins, customer queries, and more through a convenient WhatsApp interface.",
    metrics: [
      "50% faster booking process",
      "65% improvement in guest satisfaction",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
  },
];

export function WhatsappBotUseCases() {
  return (
    <section className="py-24 bg-[#FFFCF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Revolutionizing Industries with WhatsApp Bots
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Discover how our WhatsApp bots are transforming the way businesses
            interact with their customers.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-[#EB6C33]/10 text-[#EB6C33] text-sm font-medium">
                  {useCase.industry}
                </div>
                <h3 className="text-2xl font-bold text-[#252422]">
                  {useCase.title}
                </h3>
                <p className="text-[#403D39]">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="flex items-center text-[#252422]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EB6C33] mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src={useCase.image}
                  alt={useCase.industry}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
