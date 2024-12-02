import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Manager',
    company: 'StyleHub',
    content: 'The chatbot has transformed our customer service. We\'ve seen a significant increase in customer satisfaction and sales conversion.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Digital Director',
    company: 'TechPro Solutions',
    content: 'Implementation was seamless, and the AI capabilities are impressive. Our support team can now focus on complex queries while the chatbot handles routine questions.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Emma Williams',
    role: 'Customer Success Lead',
    company: 'GlobalServe',
    content: 'The analytics provided by the chatbot have given us valuable insights into customer needs. This has helped us improve our services significantly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
];

export function WebChatbotTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            See what our customers have to say about their experience with our chatbots.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-xl border border-[#CCC5B9] hover:border-[#EB6C33] transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#EB6C33] fill-current"
                  />
                ))}
              </div>
              <p className="text-[#403D39] mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#252422]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#403D39]">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}