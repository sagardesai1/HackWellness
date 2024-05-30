import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cta from "@/components/Cta";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Faqs />
      <Pricing />
      <Cta />
    </main>
  );
}
