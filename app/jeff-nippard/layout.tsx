import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Jeff Nippard", template: `%s | Jeff Nippard` },
  description: "Jeff Nippard articles.",
  keywords: [
    "Jeff Nippard",
    "Science-based workouts",
    "Science based",
    "Smartest Muscle Building Technique",
  ],
  openGraph: {
    title: { default: "Jeff Nippard", template: `%s | Jeff Nippard` },
    description: "Jeff Nippard articles.",
    url: new URL(`${BASE_URL}/jeff-nippard`),
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
