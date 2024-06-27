import { getArticlesFromAuthors } from "@/actions/getArticlesFromAuthors";
import { MetadataRoute } from "next";
import path from "path";
import { authors } from "@/app/authors";

const BASE_URL = "https://hack-wellness.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = authors.flatMap((author) => {
    const directoryPath = path.join(process.cwd(), "app", author);
    return getArticlesFromAuthors(directoryPath);
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...urls.map((url) => ({
      url,
      lastModified: new Date(),
    })),
  ];
}
