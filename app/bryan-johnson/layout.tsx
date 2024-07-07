import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: { default: "Bryan Johnson", template: `%s | Bryan Johnson` },
  description: "Bryan Johnson articles.",
  keywords: [
    "Bryan Johnson",
    "Bryan Johnson Biohacker",
    "Bryan Johnson Morning Routine",
    "Bryan Johnson Red Light Therapy Protocol",
    "Bryan Johnson Olive Oil Criteria",
    "Bryan Johnson Oral Care Routine",
  ],
  openGraph: {
    title: { default: "Bryan Johnson", template: `%s | Bryan Johnson` },
    description: "Bryan Johnson articles.",
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
