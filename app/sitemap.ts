import { getArticlesFromAuthors } from "@/actions/getArticlesFromAuthors";
import { MetadataRoute } from "next";
import path from "path";
import { authors } from "@/app/authors";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Create an array of author URLs
  const authorUrls = authors.map((author) => ({
    url: `${BASE_URL}/${author}`,
    lastModified: new Date(),
  }));

  // Get article URLs from authors
  const articleUrls = authors
    .flatMap((author) => {
      const directoryPath = path.join(process.cwd(), "app", author);
      return getArticlesFromAuthors(directoryPath);
    })
    .map((url) => ({
      url,
      lastModified: new Date(),
    }));

  // Combine base URL, author URLs, and article URLs
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...authorUrls,
    ...articleUrls,
  ];
}
