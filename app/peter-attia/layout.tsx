import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Peter Attia", template: `%s | Peter Attia` },
  description:
    "Peter Attia is a longevity expert and has his own practice for helping clients reverse their aging. Here are articles on his routines and protocols.",
  keywords: [
    "Peter Attia routines",
    "Peter Attia protocols",
    "Peter Attia longevity expert",
    "Peter Attia’s fitness protocol",
    "Peter Attia’s workout routine",
  ],
  openGraph: {
    title: { default: "Peter Attia", template: `%s | Peter Attia` },
    description:
      "Peter Attia is a longevity expert and has his own practice for helping clients reverse their aging. Here are articles on his routines and protocols",
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
