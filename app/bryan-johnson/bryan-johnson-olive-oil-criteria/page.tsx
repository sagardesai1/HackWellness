import React from "react";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";
import BryanJohnsonPouringOliveOil from "@/images/BryanJohnsonImages/BryanJohnsonPouringOliveOil.jpg";
import YoutubePlayer from "@/components/YoutubePlayer";
import ArticleSidebar from "@/components/ArticleSidebar";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: {
    default: "Bryan Johnson’s Olive Oil Criteria",
    template: `%s | Bryan Johnson’s Olive Oil Criteria`,
  },
  description:
    "Bryan Johnson's #1 suggestion to reversing aging is extra virgin olive oil. Here is the criteria for buying the correct olive oil and the product he uses.",
  keywords: [
    "Bryan Johnson olive oil",
    "Bryan Johnson olive oil criteria",
    "Bryan Johnson anti aging food",
    "Blueprint olive oil",
  ],
  openGraph: {
    title: {
      default: "Bryan Johnson’s Olive Oil Criteria",
      template: `%s | Bryan Johnson’s Olive Oil Criteria`,
    },
    description:
      "Bryan Johnson's #1 suggestion to reversing aging is extra virgin olive oil. Here is the criteria for buying the correct olive oil and the product he uses.",
    url: new URL(`${BASE_URL}/bryan-johnson/bryan-johnson-olive-oil-criteria`),
    type: "article",
  },
};

function page() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg">
          <Link href={"/bryan-johnson"}>
            <div className="flex flex-row gap-2 items-center mb-10">
              <ChevronLeft className="w-5 h-5 text-gray-800" />
              <span className="text-sm font-semibold text-gray-800">
                More articles on Bryan Johnson{" "}
              </span>
            </div>
          </Link>
          <header className="mb-4 lg:mb-6 not-format">
            <div className="inline-flex space-x-6 items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image
                src={BryanJohnsonImage}
                alt={"Bryan Johnson"}
                width={58}
                height={58}
                className="rounded-full"
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Bryan Johnson
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Founder and CEO of Kernel
                </p>
              </div>
            </div>
          </header>
          <h1 className="mt-8 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Bryan Johnson’s Olive Oil Criteria
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            What’s the best food you can eat to slow down your speed of aging?
            According to Bryan Johnson olive oil is it. Studies have shown that
            it helps with weight management, blood pressure, blood sugar levels,
            cholesterol, heart health, brain health, and mood.
          </p>
          <figure className="my-14 flex flex-col items-center">
            <Image
              src={BryanJohnsonPouringOliveOil}
              alt="Bryan Johnson brand"
              className="rounded-lg w-full max-w-2xl"
            />
            <figcaption className="mt-2 text-lg leading-8 text-gray-600 text-center">
              Bryan Johnson brand
            </figcaption>
          </figure>
          <div className="mt-14">
            <span className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Bryan Johnson’s Olive Oil Pick
            </span>
            <p className="text-lg leading-8 text-gray-600 mt-8">
              Want to know what olive oil does Bryan Johnson uses? Bryan Johnson
              actually developed his own extra virgin olive oil called{" "}
              <a
                target="_blank"
                className="underline text-lg leading-8 text-indigo-600"
                rel="noopener noreferrer nofollow"
                href="https://www.amazon.com/Blueprint-Bryan-Johnson-Extra-Virgin/dp/B0CWN6W3QJ?crid=3CHDJPQZDNSHU&dib=eyJ2IjoiMSJ9.3BEYQDP9vQ9ELOXr9LqlI6QpxbEsrCaa3Krk-rCBHTJDCuOc6CHUK1rxj0r8yc08GIfF0U8wjxySssHNbqWqow3AEfQUD_86BVN94XPEnEcJKGqJb5Bq77QOvG4KLZ7sDlXqoFuw8Yggnhcl7IFAuCYITBdas4Tlwwz5XFBFtA03kgo8dSXIbCM9hBNB1HQ2rzyCg0IafmOo3TMPXOcIGlfmYudcQ1gZq24df5SrxWagiWdbrHE8F8uel2M1YdkZ8RK6GnOY-xyJb3lYWAVKwOU282wcwxIJP5KE-yCC58Y.EBsEPzWQqcQTqvu73hLZqn0TDhHhhcgMOEDv1B9Ex0I&dib_tag=se&keywords=blueprint+olive+oil&qid=1720048948&sprefix=blueprint+olive+oil,aps,828&sr=8-1&linkCode=sl1&tag=hackwellnes0c-20&linkId=b641f1f23d9329580db514426e7a2f00&language=en_US&ref_=as_li_ss_tl"
              >
                Snake Oil
              </a>{" "}
              which is third-party tested, and has a high polyphenol + oleic
              acid content (eg Blueprint EVOO (May Harvest 2023) has 72.26%
              oleic acid and 523.4 mg/kg total biophenols).
            </p>
          </div>
          <div className="mt-20">
            <div className="mt-10 leading-8 ">
              <span className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                Bryan Johnson’s Olive Oil Buying Criteria
              </span>
              <p className="text-lg leading-8 text-gray-600 mt-8">
                For those of you looking to make an informed decision of what
                olive oil to buy, here is what Bryan Johnson suggests looking
                out for:
              </p>
              <ol className="list-decimal pl-5">
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">Cold pressed</div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">
                      High polyphenol count (over 400 mg/kg)
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">High Oleic acid count (over 67%)</div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">
                      Harvest Date within the last year - Try to find EVOO with
                      a recent harvest date. The fresher the olives, the more
                      nutrients and less oxidation.{" "}
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">UV protectant bottle</div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">
                      Third-Party Tested - quality testing by a trustworthy
                      third party is important as there are a lot of issues with
                      purity in the olive oil market
                    </div>
                  </li>
                </div>
              </ol>
              <div className="my-10">
                <YoutubePlayer
                  src="https://www.youtube.com/embed/_yLibuuImYU?si=Hv0gOz-YD13UE-sd"
                  title="Andrew Huberman Yerba Mate vs coffee"
                />
              </div>
            </div>
          </div>
          <div className="mt-20 mb-40">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white overflow-hidden">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li className="mt-2">
                <a
                  target="_blank"
                  href={
                    "https://www.youtube.com/watch?v=bYLkSXq54k4&ab_channel=BryanJohnson"
                  }
                  rel="noopener noreferrer"
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=bYLkSXq54k4&ab_channel=BryanJohnson
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7468912/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7468912/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/34716791/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/34716791/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/31378629/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/31378629/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9736478/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9736478/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/35258870/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/35258870/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/28808791/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/28808791/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/34372670/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/34372670/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/34358723/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/34358723/
                </a>
              </li>
            </ul>
          </div>
        </article>
        <ArticleSidebar />
      </div>
      <RelatedArticles articles={articles} />
      <NewsLetter />
      <div className="my-20 flex items-center justify-center gap-x-6">
        <Link
          href="/home/goals"
          className="flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Start Building Your Protocol Now
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default page;
