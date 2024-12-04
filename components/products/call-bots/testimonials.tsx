import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Green",
    role: "Customer Service Manager",
    company: "LogiCom",
    content:
      "Our CallBot has significantly streamlined how we manage call traffic, enhancing our customer service efficiency.",
    avatar:
      "https://imsages.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
  },
  {
    name: "Maria Lopez",
    role: "Operations Director",
    company: "HealthConnect",
    content:
      "Thanks to CallBot, our patients can now handle their appointment needs autonomously, which has drastically improved our operational efficiency.",
    avatar:
      "https://imsages.unsplash.com/photo-1543269664-56d93c5c2d96?auto=format&fit=crop&q=80",
  },
  {
    name: "Linda Wu",
    role: "IT Project Manager",
    company: "FinTech Solutions",
    content:
      "Implementing the CallBot for our customer helpline has reduced wait times and increased satisfaction rates.",
    avatar:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  },
];

export function CallBotTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Learn from the experiences of companies that have integrated our
            CallBot into their daily operations.
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
