import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Peter Attia", template: `%s | Peter Attia` },
  description: "Peter Attia articles.",
  keywords: [
    "Peter Attia",
    "Biohacker",
    "Fitness Protocol",
    "Longevity expert",
  ],
  openGraph: {
    title: { default: "Peter Attia", template: `%s | Peter Attia` },
    description: "Peter Attia articles.",
    url: new URL(`${BASE_URL}/peter-attia`),
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
