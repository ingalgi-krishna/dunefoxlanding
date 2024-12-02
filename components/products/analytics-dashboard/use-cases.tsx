const useCases = [
  {
    industry: "Retail",
    title: "Enhance Consumer Insights",
    description:
      "Leverage detailed analytics to understand consumer behavior, track purchase patterns, and optimize marketing strategies.",
    metrics: [
      "45% increase in targeted campaign effectiveness",
      "30% growth in customer retention rates",
    ],
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80",
  },
  {
    industry: "Manufacturing",
    title: "Optimize Production Processes",
    description:
      "Use predictive analytics to streamline production, manage inventory efficiently, and reduce operational costs.",
    metrics: [
      "20% reduction in production downtime",
      "25% improvement in supply chain efficiency",
    ],
    image:
      "https://images.unsplash.com/photo-1567606404640-c3d24e156985?auto=format&fit=crop&q=80",
  },
  {
    industry: "Healthcare",
    title: "Improve Patient Care Management",
    description:
      "Analyze patient data to enhance treatment plans, predict patient outcomes, and ensure optimal resource allocation.",
    metrics: [
      "35% reduction in patient readmission rates",
      "40% increase in treatment efficiency",
    ],
    image:
      "https://images.unsplash.com/photo-1581579188485-60c2ac92cb75?auto=format&fit=crop&q=80",
  },
];

export function AnalyticsDashboardUseCases() {
  return (
    <section className="py-24 bg-[#FFFCF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Transformative Impact Across Industries
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Discover how our Analytics Dashboard empowers sectors with deep
            insights and data-driven decisions.
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
                  alt={useCase.industry + " analytics"}
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
