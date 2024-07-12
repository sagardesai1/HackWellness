import { StaticImageData } from "next/image";

// types.ts
export interface Author {
  name: string;
  role: string;
  bio: string;
  href: string;
  imageUrl: StaticImageData;
}

export interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  category: string;
  articleImage: StaticImageData;
  articleImageAlt: string;
}
