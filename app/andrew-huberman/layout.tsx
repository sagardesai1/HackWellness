import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Andrew Huberman", template: `%s | Andrew Huberman` },
  description:
    "Andrew Huberman is a neuroscientist and hosts a podcast Huberman Labs where he explores science backed biohacking techniques. Here are articles on his routines.",
  keywords: [
    "Andrew Huberman",
    "Andrew Huberman fitness protocol",
    "Andrew Huberman workout routine",
    "Andrew Huberman sleep protocol",
    "Andrew Huberman ADHD protocol",
    "Andrew Huberman sauna protocol",
    "Andrew Huberman tongkat ali protocol",
  ],
  openGraph: {
    title: { default: "Andrew Huberman", template: `%s | Andrew Huberman` },
    description:
      "Andrew Huberman is a neuroscientist and hosts a podcast Huberman Labs where he explores science backed biohacking techniques. Here are articles on his routines.",
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
