import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cta from "@/components/Cta";
import Faqs from "@/components/Faqs";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Features />
      <Faqs />
      {/* <Pricing /> */}
      <Cta />
    </main>
  );
}
