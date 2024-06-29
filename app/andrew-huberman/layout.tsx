import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Andrew Huberman", template: `%s | Andrew Huberman` },
  description: "Andrew Huberman articles.",
  keywords: [
    "Andrew Huberman",
    "Biohacker",
    "Fitness Protocol",
    "Quickly Improve Focus",
  ],
  openGraph: {
    title: { default: "Andrew Huberman", template: `%s | Andrew Huberman` },
    description: "Andrew Huberman articles.",
    url: new URL("https://hack-wellness.vercel.app/andrew-huberman"),
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
