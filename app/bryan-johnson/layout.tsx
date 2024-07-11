import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StartNowBanner from "@/components/StartNowBanner";
import UpgradeBanner from "@/components/UpgradeBanner";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Bryan Johnson", template: `%s | Bryan Johnson` },
  description:
    "Bryan Johnson is a longevity expert and has spent millions of dollars on refining blueprint. Here are articles on Bryan Johnson's routines.",
  keywords: [
    "Bryan Johnson routines",
    "Bryan Johnson protocols",
    "Bryan Johnson morning Routine",
    "Bryan Johnson red light therapy protocol",
    "Bryan Johnson olive oil criteria",
  ],
  openGraph: {
    title: { default: "Bryan Johnson", template: `%s | Bryan Johnson` },
    description:
      "Bryan Johnson is a longevity expert and has spent millions of dollars on refining blueprint. Here are articles on Bryan Johnson's routines.",
    url: new URL(`${BASE_URL}/bryan-johnson`),
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
