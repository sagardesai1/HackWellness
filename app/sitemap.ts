import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hack-wellness.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://hack-wellness.vercel.app/experts/AndrewHuberman",
      lastModified: new Date(),
    },
    {
      url: "https://hack-wellness.vercel.app/experts/BryanJohnson",
      lastModified: new Date(),
    },
    {
      url: "https://hack-wellness.vercel.app/experts/JeffNippard",
      lastModified: new Date(),
    },
  ];
}
