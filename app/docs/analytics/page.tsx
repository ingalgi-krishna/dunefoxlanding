import { BarChart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-[#EB6C33]/10 rounded-lg">
          <BarChart className="h-6 w-6 text-[#EB6C33]" />
        </div>
        <h1 className="text-3xl font-bold text-[#252422]">
          Analytics Dashboard
        </h1>
      </div>

      <div className="prose prose-orange max-w-none">
        <p className="text-lg text-[#403D39]">
          Get detailed insights into your automation performance with our
          analytics dashboard.
        </p>

        <h2>Dashboard Overview</h2>
        <p>
          Learn how to use our analytics dashboard to track key metrics and
          improve your automation strategy.
        </p>

        <h2>Available Metrics</h2>
        <ul>
          <li>Conversation Analytics</li>
          <li>Response Times</li>
          <li>Customer Satisfaction</li>
          <li>Bot Performance</li>
          <li>Custom KPIs</li>
        </ul>

        <h2>Custom Reports</h2>
        <p>
          Create and schedule custom reports to track the metrics that matter
          most to your business.
        </p>
      </div>
    </div>
  );
}
