import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer/footer";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dunefox - Intelligent Business Solutions",
  description: "Empower your business with intelligent automation solutions",
  keywords: ["AI", "chatbot", "business automation", "customer service"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={raleway.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
