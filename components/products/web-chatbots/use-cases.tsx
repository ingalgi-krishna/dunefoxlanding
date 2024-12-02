const useCases = [
  {
    industry: 'E-commerce',
    title: 'Boost Sales with 24/7 Shopping Assistance',
    description: 'Help customers find products, answer questions, and complete purchases around the clock.',
    metrics: ['35% increase in conversion rate', '42% reduction in cart abandonment'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
  },
  {
    industry: 'Healthcare',
    title: 'Streamline Patient Support',
    description: 'Provide instant answers to common health queries and appointment scheduling assistance.',
    metrics: ['60% faster response times', '45% reduction in support tickets'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  },
  {
    industry: 'Education',
    title: 'Enhance Student Experience',
    description: 'Guide students through enrollment, answer course queries, and provide resource access.',
    metrics: ['50% reduction in admin workload', '89% student satisfaction rate'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
  },
];

export function WebChatbotUseCases() {
  return (
    <section className="py-24 bg-[#FFFCF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Success Stories Across Industries
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            See how businesses are transforming customer engagement with our chatbots.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.industry}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
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
                    <li key={metric} className="flex items-center text-[#252422]">
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