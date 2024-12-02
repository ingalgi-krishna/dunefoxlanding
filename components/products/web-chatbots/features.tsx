import { Brain, Zap, Globe, Lock, Palette, BarChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Natural Language Processing',
    description: 'Advanced AI that understands context and intent for more natural conversations.',
  },
  {
    icon: Zap,
    title: 'Quick Integration',
    description: 'Simple implementation with just a few lines of code on any website platform.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Communicate with customers in their preferred language with automatic translation.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with data protection regulations.',
  },
  {
    icon: Palette,
    title: 'Customizable Design',
    description: 'Match your brand identity with customizable themes and layouts.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track performance and gather insights with detailed analytics.',
  },
];

export function WebChatbotFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#252422] mb-4">
            Powerful Features for Better Engagement
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Everything you need to create meaningful conversations with your website visitors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 rounded-xl border border-[#CCC5B9] hover:border-[#EB6C33] transition-colors"
            >
              <feature.icon className="h-10 w-10 text-[#EB6C33] mb-4" />
              <h3 className="text-xl font-semibold text-[#252422] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#403D39]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}