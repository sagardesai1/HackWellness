import Image from "next/image";
import React from "react";
import BryanJohnsonAvatar from "@/images/AuthorImages/BryanJohnson.jpeg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Footprints,
  Microscope,
  Highlighter,
  EarthLock,
  ListTodo,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: {
    default: "Bryan Johnson's Oral Care Routine",
    template: `%s | Bryan Johnson's Oral Care Routine`,
  },
  description:
    "Bryan Johnson is an American entrepreneur, venture capitalist, writer and author. He is the founder and CEO of Kernel, a company creating devices that monitor and record brain activity, and OS Fund, a venture capital firm that invests in early-stage science and technology companies.",
  keywords: [
    "Bryan Johnson",
    "Oral Care",
    "Bryan Johnson Oral Care",
    "Bryan Johnson Oral Health",
  ],
  openGraph: {
    title: {
      default: "Bryan Johnson's Oral Care Routine",
      template: `%s | Bryan Johnson`,
    },
    description:
      "Bryan Johnson is an American entrepreneur, venture capitalist, writer and author. He is the founder and CEO of Kernel, a company creating devices that monitor and record brain activity, and OS Fund, a venture capital firm that invests in early-stage science and technology companies.",
    url: new URL(
      "https://hack-wellness.vercel.app/bryan-johnson/bryan-johnson-oral-care-routine"
    ),
    type: "article",
  },
};

function page() {
  return (
    <div className="flex flex-col mt-6">
      <Link href={"/bryan-johnson"}>
        <div className="flex flex-row gap-2 items-center mb-10 w-11/12 mx-auto">
          <ChevronLeft className="w-5 h-5 text-gray-800" />
          <span className="text-sm font-semibold text-gray-800">
            More articles on Bryan Johnson{" "}
          </span>
        </div>
      </Link>
      <div className="flex flex-col p-4 items-center justify-between mx-auto max-w-2xl text-center">
        <Image
          src={BryanJohnsonAvatar}
          alt={"Bryan Johnson"}
          width={150}
          height={150}
          className="rounded-full"
        />
        <p className="text-2xl font-semibold">Bryan Johnson</p>
        <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
          Bryan Johnson is an American entrepreneur, venture capitalist, writer
          and author. He is the founder and CEO of Kernel, a company creating
          devices that monitor and record brain activity, and OS Fund, a venture
          capital firm that invests in early-stage science and technology
          companies.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between mt-2">
        <p className="text-3xl font-bold">Oral Care Routine 2024</p>
        <Badge
          className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-white mt-2"
          variant="outline"
        >
          Oral care
        </Badge>
      </div>
      <div className="px-10 py-8">
        <div className="flex flex-col p-10 mt-6 shadow-lg rounded-xl">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Wrench className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Tools</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm underline">
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/3Ky8E5q"}
            >
              <li>Water flosser</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/4aScRMf"}
            >
              <li>Oral-B Toothbrush</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/3yQWQsE"}
            >
              <li>Soft toothbrush heads</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/3VtyGgs"}
            >
              <li>Mouthwash</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/4eo1rmv"}
            >
              <li>Sensodyne Toothpaste</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/3VqsjKV"}
            >
              <li>Dr. Collins Biomin Tooth Sensitivity Toothpaste</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/4bOeWtL"}
            >
              <li>DrTungs Floss</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://amzn.to/3Ksewxg"}
            >
              <li>DrTungs Tongue Scraper</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={"https://somnomed.com"}
            >
              <li>SomnoDent Bruxism Device</li>
            </a>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Footprints className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Steps</p>
          </div>
          <ul className="mt-1 list-decimal px-8 text-sm">
            <li>Use a water pick to clean your mouth effectively </li>
            <li>Floss using a suitable flossing product</li>
            <li>Use an electric toothbrush for thorough cleaning</li>
            <li>Use a tongue scraper to clean your tongue </li>
            <li>Consider using mouthwash for fresh breath </li>
            <li>Address bruxism (teeth grinding) with a suitable device </li>
            <li>Regularly visit the dentist for check-ups and cleanings</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <ListTodo className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Simple habits</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm">
            <li>Avoid consuming excessive sugar</li>
            <li>Be mindful of acidic liquids that can harm teeth </li>
            <li>Check for dry mouth condition and consult your dentist</li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Highlighter className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Highlights</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm">
            <li>
              Water picking, flossing, and using an electric toothbrush are key
              components of a daily oral care routine. These practices help
              remove plaque and debris, ensuring a cleaner mouth and healthier
              teeth.
            </li>
            <li>
              Tongue scraping is often overlooked but plays a significant role
              in maintaining oral hygiene. It helps remove bacteria and debris
              from the tongue, improving overall oral health.
            </li>
            <li>
              Bruxism can cause significant damage to teeth and oral health.
              Finding a suitable mouth guard, such as the Sno Dent device, can
              help prevent further decay and protect the teeth from wear and
              tear.
            </li>
            <li>
              Regular dental visits are essential for professional teeth
              cleaning, stain removal, and monitoring overall oral health. They
              provide a comprehensive assessment and help detect any potential
              issues early on.
            </li>
            <li>
              Avoiding sugar and being mindful of acidic liquids can greatly
              reduce the risk of tooth decay and sensitivity. Dry mouth
              condition should also be addressed, as saliva plays a crucial role
              in maintaining a healthy oral environment.
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Microscope className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Scientific Rationale</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm overflow-hidden underline">
            <Link href={"https://pubmed.ncbi.nlm.nih.gov/22161438/"}>
              <li>https://pubmed.ncbi.nlm.nih.gov/22161438/</li>
            </Link>
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6242348/"}
            >
              <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6242348/</li>
            </Link>
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8751028/"}
            >
              <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8751028/</li>
            </Link>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <EarthLock className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Sources</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm overflow-hidden underline">
            <Link href={"https://protocol.bryanjohnson.com/#oral-health/"}>
              <li>https://protocol.bryanjohnson.com/#oral-health/</li>
            </Link>
          </ul>
        </div>
        <RelatedArticles articles={articles} />
        <NewsLetter />
        <div className="my-20 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Start Building Your Protocol Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
