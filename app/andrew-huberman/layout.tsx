import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Andrew Huberman", template: `%s | Andrew Huberman` },
  description: "Andrew Huberman articles.",
  keywords: [
    "Andrew Huberman",
    "Biohacker",
    "Andrew Huberman Fitness Protocol",
    "Andrew Huberman Sleep Protocol",
    "Andrew Huberman ADHD Protocol",
    "Quickly Improve Focus",
  ],
  openGraph: {
    title: { default: "Andrew Huberman", template: `%s | Andrew Huberman` },
    description: "Andrew Huberman articles.",
    url: new URL(`${BASE_URL}/andrew-huberman`),
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
