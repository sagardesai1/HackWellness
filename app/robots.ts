import { MetadataRoute } from "next";
import { authors } from "@/app/authors";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"].concat(authors.map((author) => `/${author}`)),
      disallow: ["/auth/signIn"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
