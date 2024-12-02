const useCases = [
  {
    industry: "Telecommunications",
    title: "Automate Customer Service Calls",
    description:
      "Handle routine queries like balance checks and service changes with automated responses, freeing up agents for complex issues.",
    metrics: [
      "50% reduction in call handling time",
      "40% decrease in customer wait times",
    ],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7f?auto=format&fit=crop&q=80",
  },
  {
    industry: "Healthcare",
    title: "Manage Appointment Scheduling",
    description:
      "Automate appointment booking, reminders, and rescheduling, ensuring patients never miss their healthcare needs.",
    metrics: ["30% increase in appointment efficiency", "20% fewer no-shows"],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  {
    industry: "Finance",
    title: "Simplify Banking Interactions",
    description:
      "Enable customers to perform transactions such as balance inquiries and bill payments through automated voice responses.",
    metrics: [
      "35% increase in transaction speed",
      "25% improvement in customer satisfaction",
    ],
    image:
      "https://images.unsplash.com/photo-1591957865901-b05ad05ce5f1?auto=format&fit=crop&q=80",
  },
];

export function CallBotUseCases() {
  return (
    <section className="py-24 bg-[#FFFCF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            CallBot Use Cases Across Industries
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Explore how our CallBot is transforming customer interactions across
            multiple sectors.
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
