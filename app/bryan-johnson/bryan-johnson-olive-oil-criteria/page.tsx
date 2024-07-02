import React from "react";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";

export const metadata: Metadata = {
  title: {
    default: "Bryan Johnson's Olive Oil Criteria",
    template: `%s | Bryan Johnson's Olive Oil Criteria`,
  },
  description:
    "Ever wanted to know the #1 best food you can eat to slow down your speed of aging and reserve it? According to Bryan Johnson, the key to reverse aging is extra virgin olive. Studies have shown that it helps with weight management, blood pressure, blood sugar levels, cholesterol, heart health, brain health, and mood.",
  keywords: [
    "Bryan Johnson",
    "Olive Oil Criteria",
    "Bryan Johnson Olive Oil Criteria",
    "Bryan Johnson Anti aging food",
  ],
  openGraph: {
    title: {
      default: "Bryan Johnson's Olive Oil Criteria",
      template: `%s | Bryan Johnson's Olive Oil Criteria`,
    },
    description:
      "Ever wanted to know the #1 best food you can eat to slow down your speed of aging and reserve it? According to Bryan Johnson, the key to reverse aging is extra virgin olive. Studies have shown that it helps with weight management, blood pressure, blood sugar levels, cholesterol, heart health, brain health, and mood.",
    url: new URL(
      "https://hack-wellness.vercel.app/bryan-johnson/bryan-johnson-olive-oil-criteria"
    ),
    type: "article",
  },
};

function page() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg ">
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
            Ever wanted to know the #1 best food you can eat to slow down your
            speed of aging and reserve it? According to Bryan Johnson, the key
            to reverse aging is extra virgin olive. Studies have shown that it
            helps with weight management, blood pressure, blood sugar levels,
            cholesterol, heart health, brain health, and mood.
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <span className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                Bryan Johnson’s Olive Oil Buying Criteria
              </span>
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
                      <ul className="list-disc pl-5 mt-5">
                        <li className="mb-5">
                          Blueprint EVOO has 523.4 mg/kg total biophenols (HPLC)
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">
                      High Oleic acid count (over 67%)
                      <ul className="list-disc pl-5 mt-5">
                        <li className="mb-5">
                          Our current Blueprint EVOO (May Harvest 2023) has
                          72.26% oleic acid
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">
                      Harvest Date
                      <ul className="list-disc pl-5 mt-5">
                        <li className="mb-5">
                          Where possible, try to find EVOO with a recent harvest
                          date. This lets you know when the olives were picked.
                        </li>
                        <li className="mb-5">
                          The fresher the olives, the more nutrients they’ll
                          have.
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">Third-Party Tested</div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-gray-600 text-lg mt-4 font-normal">
                    <div className="">
                      Harvest Date
                      <ul className="list-disc pl-5 mt-5">
                        <li className="mb-5">
                          Every single batch of oil needs to be quality tested
                          by a trustworthy third party, so you know that it is
                          what it says on the bottle.
                        </li>
                        <li className="mb-5">
                          BP is rigorously 3rd-party tested - see the{" "}
                          <a
                            target="_blank"
                            className="underline text-lg leading-8 text-indigo-600"
                            href="https://blueprint.bryanjohnson.com/products/premium-extra-virgin-olive-oil?variant=45585598578973"
                          >
                            website
                          </a>{" "}
                          for more information.
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ol>
            </div>
          </div>
          <div className="mt-20">
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
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=bYLkSXq54k4&ab_channel=BryanJohnson
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7468912/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7468912/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://pubmed.ncbi.nlm.nih.gov/34716791/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/34716791/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://pubmed.ncbi.nlm.nih.gov/31378629/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/31378629/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9736478/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9736478/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://pubmed.ncbi.nlm.nih.gov/35258870/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/35258870/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://pubmed.ncbi.nlm.nih.gov/28808791/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/28808791/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://pubmed.ncbi.nlm.nih.gov/34372670/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/34372670/
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://pubmed.ncbi.nlm.nih.gov/34358723/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/34358723/
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <NewsLetter />
      <div className="mt-20 flex items-center justify-center gap-x-6">
        <Link
          href="/"
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
