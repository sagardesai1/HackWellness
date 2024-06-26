import { MetadataRoute } from "next";
import { authors } from "@/app/authors";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"].concat(authors),
      disallow: [],
    },
    sitemap: "https://hack-wellness.vercel.app/sitemap.xml",
  };
}
