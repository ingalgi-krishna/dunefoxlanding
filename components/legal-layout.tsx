interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

export function LegalLayout({
  children,
  title,
  lastUpdated,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-4xl font-bold text-[#252422]">{title}</h1>
          <p className="mt-2 text-sm text-[#403D39]">
            Last updated: {lastUpdated}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
