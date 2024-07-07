import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProviders";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import SubscriptionProvider from "@/components/SubscriptionProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "HackWellness", template: `%s | HackWellness` },
  description:
    "Build your personalized protocol based on the advice of renowned biohackers like Andrew Huberman, Bryan Johnson, and Peter Attia.",
  keywords: [
    "Build personalized protocol",
    "renowned biohackers",
    "biohackers",
    "Andrew Huberman",
    "Bryan Johnson",
    "Peter Attia",
    "Jeff Nippard",
  ],
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}`,
  },
  openGraph: {
    title: { default: "HackWellness", template: `%s | HackWellness` },
    description:
      "Build your personalized protocol based on the advice of renowned biohackers like Andrew Huberman, Bryan Johnson, and Peter Attia.",
    url: new URL(BASE_URL),
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProviders>
      <Script
        id="google-analytics-tagmanger"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANAYLITCS_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANAYLITCS_ID}');  
        `}
      </Script>
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');
          `,
        }}
      ></Script>
      <html suppressHydrationWarning lang="en">
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {/* <Header /> */}
                {children}
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
