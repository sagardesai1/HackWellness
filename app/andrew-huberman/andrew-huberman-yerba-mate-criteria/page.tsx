import React from "react";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: {
    default: "Andrew Huberman’s Yerba Mate Criteria",
    template: `%s | Andrew Huberman’s Yerba Mate Criteria`,
  },
  description:
    "Andrew Huberman strongly promotes sleep for health, productivity, and overall well-being. Here are his top ten tips for improving your sleep quality.",
  keywords: [
    "Andrew Huberman sleep",
    "Andrew Huberman sleep protocol",
    "Andrew Huberman sleep cocktail",
    "Andrew Huberman sleep routine",
  ],
  openGraph: {
    title: {
      default: "Andrew Huberman’s Yerba Mate Criteria",
      template: `%s | Andrew Huberman’s Yerba Mate Criteria`,
    },
    description:
      "Andrew Huberman strongly promotes sleep for health, productivity, and overall well-being. Here are his top ten tips for improving your sleep quality.",
    url: new URL(`${BASE_URL}/andrew-huberman/andrew-huberman-sleep-protocol`),
    type: "article",
  },
};

function page() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg ">
          <Link href={"/andrew-huberman"}>
            <div className="flex flex-row gap-2 items-center mb-10">
              <ChevronLeft className="w-5 h-5 text-gray-800" />
              <span className="text-sm font-semibold text-gray-800">
                More articles on Andrew Huberman{" "}
              </span>
            </div>
          </Link>
          <header className="mb-4 lg:mb-6 not-format">
            <div className="inline-flex space-x-6 items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image
                src={AndrewHubermanAvatar}
                alt={"Andrew Huberman"}
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
                  Andrew Huberman
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Ph.D.
                </p>
              </div>
            </div>
          </header>
          <h1 className="mt-8 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Andrew Huberman’s Yerba Mate Criteria
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Want a healthier alternative to coffee? According to Andrew Huberman
            yerba mate is the perfect choice. He has found that the energy boost
            from yerba mate is more sustained than that from coffee. Moreover,
            he does not have trouble falling asleep from drinking yerba mate in
            the late afternoon (at 2 or 3 pm), even though he usually sleeps on
            the earlier side (around 10 pm).
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Yerba Mate Health Benefits</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    Andrew Huberman says yerba mate offers several health
                    benefits that coffee does not:
                    <ol className="list-decimal pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Appetite Regulation:
                        </span>{" "}
                        <span className="text-gray-600">
                          Increases GLP-1 and leptin levels, which can suppress
                          appetite and regulate blood sugar levels.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Antioxidants:
                        </span>{" "}
                        <span className="text-gray-600">
                          High in antioxidants, which help reduce oxidative
                          stress and protect cellular health.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Neuroprotective properties:
                        </span>{" "}
                        <span className="text-gray-600">
                          Protects dopaminergic neurons in the brain, which are
                          the brain cells responsible for producing dopamine,
                          that affects movement and motivation.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Electrolytes:
                        </span>{" "}
                        <span className="text-gray-600">
                          Provides electrolytes such as sodium, potassium, and
                          magnesium, which support neural transmission and
                          overall brain function.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">
                    Andrew Huberman’s Yerba Mate Criteria
                  </span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    When looking for what{" "}
                    <a
                      href="https://www.amazon.com/s?k=yerba+mate&i=grocery&language=en_US&crid=3UIFZ64FIVLFY&linkCode=sl2&linkId=40adf3857f90b8a38e752b93f4facb51&sprefix=yerba+mate%2Cgrocery%2C337&tag=hackwellnes0c-20&ref=as_li_ss_tl"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      className="underline text-lg leading-8 text-indigo-600"
                    >
                      yerba mate to buy,
                    </a>{" "}
                    here is what Andrew Huberman suggests looking out for:
                    <ol className="list-decimal pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Non smoked variety:
                        </span>{" "}
                        <span className="text-gray-600">
                          smoked varieties may cause cancer.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Low sugar
                        </span>{" "}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">
                    Andrew Huberman’s Yerba Mate Brand Pick
                  </span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    Want to know what yerba mate brand Andrew Huberman
                    recommends? He has partnered with a company called{" "}
                    <a
                      href="https://drinkmateina.com/pages/huberman"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline text-lg leading-8 text-indigo-600"
                    >
                      Mateina
                    </a>{" "}
                    to produce low sugar yerba mate varieties. His favorite is
                    the zero sugar cold brew with lemon and ginger.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-40">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.youtube.com/watch?v=aXvDEmo6uS4&ab_channel=AndrewHuberman"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=aXvDEmo6uS4&ab_channel=AndrewHuberman
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.youtube.com/watch?v=QmOF0crdyRU&ab_channel=AndrewHuberman"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=QmOF0crdyRU&ab_channel=AndrewHuberman
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.instagram.com/hubermanlab/p/C2nqM6qScQF/?hl=en"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.instagram.com/hubermanlab/p/C2nqM6qScQF/?hl=en
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://pubmed.ncbi.nlm.nih.gov/19695149/"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://pubmed.ncbi.nlm.nih.gov/19695149/
                </a>
              </li>
            </ul>
          </div>
        </article>
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
  );
}

export default page;
