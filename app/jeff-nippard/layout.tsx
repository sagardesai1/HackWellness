import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

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
    url: new URL("https://hack-wellness.vercel.app/jeff-nippard"),
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
