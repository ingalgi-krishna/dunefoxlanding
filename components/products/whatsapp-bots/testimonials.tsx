import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Smith",
    role: "Operations Manager",
    company: "QuickRetail",
    content:
      "Our WhatsApp bot has revolutionized how we handle customer queries. We’ve seen a tremendous increase in response efficiency and customer satisfaction.",
    avatar:
      "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?auto=format&fit=crop&q=80",
  },
  {
    name: "James Lee",
    role: "Marketing Coordinator",
    company: "HealthPlus",
    content:
      "The bot was incredibly easy to integrate and has significantly improved our patient engagement by providing timely and relevant health information.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
  },
  {
    name: "Sophia Martinez",
    role: "Client Relations Head",
    company: "EduTech",
    content:
      "Thanks to the WhatsApp bot, our student support has become more accessible and responsive, greatly enhancing our service quality.",
    avatar:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d38?auto=format&fit=crop&q=80",
  },
];

export function WhatsappBotTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Hear from Our Clients
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Our clients share their success stories and the impact of our
            WhatsApp bots on their businesses.
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
