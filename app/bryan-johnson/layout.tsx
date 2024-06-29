import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Bryan Johnson", template: `%s | Bryan Johnson` },
  description: "Bryan Johnson articles.",
  keywords: ["Bryan Johnson", "Biohacker", "Morning Routine", "Oral Care"],
  openGraph: {
    title: { default: "Bryan Johnson", template: `%s | Bryan Johnson` },
    description: "Bryan Johnson articles.",
    url: new URL("https://hack-wellness.vercel.app/bryan-johnson"),
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
