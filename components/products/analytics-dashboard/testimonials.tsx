import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena Brooks",
    role: "Data Analyst",
    company: "MarketVision",
    content:
      "The analytics dashboard has revolutionized the way we understand customer behavior and market trends. It's an indispensable tool for our team.",
    avatar:
      "https://images.unsplash.com/photo-1560298809-cf6a6d5ad4d0?auto=format&fit=crop&q=80",
  },
  {
    name: "Raj Patel",
    role: "Chief Technology Officer",
    company: "Innovatech Solutions",
    content:
      "Thanks to this dashboard, we've seen a marked improvement in our ability to track performance metrics and make agile business decisions.",
    avatar:
      "https://images.unsplash.com/photo-1559526640-f58b9e2f1cb3?auto=format&fit=crop&q=80",
  },
  {
    name: "Jessica Liu",
    role: "Marketing Manager",
    company: "Creative Dynamics",
    content:
      "Our marketing team relies heavily on this dashboard for real-time analytics, which has greatly enhanced our campaign strategies.",
    avatar:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
  },
];

export function AnalyticsDashboardTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Hear how our analytics dashboard is empowering teams to make
            smarter, data-driven decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
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
