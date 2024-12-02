import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { VideoSection } from "@/components/video-section";
import { Products } from "@/components/products";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Products />
      <FAQ />
      <Pricing />
      <Contact />
    </>
  );
}
