import { BarChart2, PhoneCall, MessageSquare, Activity } from "lucide-react";

const dashboardItems = [
  {
    icon: MessageSquare,
    title: "Web Chatbot Insights",
    description:
      "View detailed analytics on user interactions, satisfaction rates, and AI performance.",
    metrics: [
      { label: "Total Interactions", value: "24K" },
      { label: "Satisfaction Rate", value: "87%" },
      { label: "Queries Resolved", value: "21K" },
    ],
  },
  {
    icon: PhoneCall,
    title: "Call Bot Metrics",
    description:
      "Track call volumes, agent efficiency, and customer feedback for automated calls.",
    metrics: [
      { label: "Daily Calls", value: "5K" },
      { label: "Positive Feedback", value: "82%" },
      { label: "Average Handling Time", value: "2 min" },
    ],
  },
  {
    icon: Activity,
    title: "WhatsApp Bot Analytics",
    description:
      "Analyze engagement metrics, message throughput, and resolution effectiveness.",
    metrics: [
      { label: "Messages Sent", value: "30K" },
      { label: "Engagement Rate", value: "90%" },
      { label: "Conversion Rate", value: "76%" },
    ],
  },
];

export default function AnalyticsDashboard() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Unified Bot Analytics Dashboard
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
          {dashboardItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <item.icon className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="mb-4 text-gray-600">{item.description}</p>
              <ul>
                {item.metrics.map((metric, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between text-gray-800 mb-1"
                  >
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
