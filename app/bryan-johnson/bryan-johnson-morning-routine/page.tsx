import React from "react";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";
import YoutubePlayer from "@/components/YoutubePlayer";
import BryanJohnsonTakingSupplements from "@/images/BryanJohnsonImages/BryanJohnsonTakingSupplements.png";
import BryanJohnsonWakingUp from "@/images/BryanJohnsonImages/BryanJohnsonWakingUp.png";
import BryanJohnsonCycling from "@/images/BryanJohnsonImages/BryanJohnsonCycling.jpg";
import ArticleSidebar from "@/components/ArticleSidebar";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: {
    default: "Bryan Johnson’s Morning Routine",
    template: `%s | Bryan Johnson’s Morning Routine`,
  },
  description:
    "Bryan Johnson dedicates 3-4 hours for his morning routine. Here are all of his suggestions in the exact order that he does them every morning.",
  keywords: [
    "Bryan Johnson morning routine",
    "Bryan Johnson morning protocol",
    "Bryan Johnson routine",
  ],
  openGraph: {
    title: {
      default: "Bryan Johnson’s Morning Routine",
      template: `%s | Bryan Johnson’s Morning Routine`,
    },
    description:
      "Bryan Johnson dedicates 3-4 hours for his morning routine. Here are all of his suggestions in the exact order that he does them every morning.",
    url: new URL(`${BASE_URL}/bryan-johnson/bryan-johnson-morning-routine`),
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
          <h1 className="mt-8 text-3xl font-extrabold leading-8 text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Bryan Johnson's Morning Routine
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Bryan Johnson’s morning routine takes him a staggering 3-4 hours to
            finish. Here are all of the steps in the exact order that he does
            them in:
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <ol className="list-decimal pl-5">
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Wake Up with No Alarm</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal">
                      Don’t rely on an alarm clock to wake up so that you are
                      able to wake up more rested. Bryan Johnson wakes up
                      naturally between 4:30 and 6:00 am.
                    </div>
                  </li>
                  <figure className="my-14 flex flex-col items-center">
                    <Image
                      src={BryanJohnsonWakingUp}
                      alt="Bryan Johnson waking up"
                      className="rounded-lg w-full max-w-2xl"
                    />
                    <figcaption className="mt-2 text-lg leading-8 text-gray-600 text-center">
                      Bryan Johnson waking up
                    </figcaption>
                  </figure>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">UV Light Therapy</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      If you wake up before sunrise, use a UV light to help
                      kickstart your circadian rhythm. Bryan Johnson does this
                      at 10,000 Lux at a distance of 12 inches.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Morning Supplements - Part 1</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Take the following two supplements upon waking together:
                      <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                        <li className="">
                          <span className="font-semibold text-black">
                            Heme Iron (10mg):
                          </span>{" "}
                          <span className="text-gray-600">
                            Supports hemoglobin production and enhances oxygen
                            levels in the blood.
                          </span>
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Vitamin C (250mg):
                          </span>{" "}
                          <span className="text-gray-600">
                            Boosts iron absorption and strengthens the immune
                            system.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Blue Light Therapy</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Bryan Johnson does 5 minutes of blue light therapy to keep
                      his skin complexion clear.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Meditation</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Bryan Johnson does ten minutes of meditation to enhance
                      focus and prepare mentally for the day ahead.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Dry Eyes Therapy</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Bryan Johnson spends 30 seconds using a device that
                      stimulates the areas around his eyes to provide relief
                      from dry eyes. He also uses eye drops to prevent cataracts
                      and maintain long-term eye health.
                    </div>
                  </li>
                  <div className="my-10">
                    <YoutubePlayer
                      src="https://www.youtube.com/embed/7pfc7ga9X6c?si=wmmWakrlFe6MgOX9"
                      title="Bryan Johnson dry eyes therapy"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Morning Supplements - Part 2</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Take your key supplements before breakfast, with a green
                      juice drink. Bryan Johnson makes a green drink called
                      Green Giant and has the following supplements:
                      <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                        <li className="">
                          <span className="font-semibold text-black">
                            Blueprint Longevity Mix
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Collagen Peptides
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            GOS (Galactooligosaccharides)
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Inulin{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Blueprint Essentials{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Blueprint Soft Gel{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Blueprint NAC + Ginger + Curcumin{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Blueprint Red Yeast Rice + Odor-Free Garlic{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            EPA/DHA/DPA{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Garlic (Kyolic){" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            ProButyrate{" "}
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Proferrin{" "}
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <figure className="my-14 flex flex-col items-center">
                    <Image
                      src={BryanJohnsonTakingSupplements}
                      alt="Bryan Johnson supplements"
                      className="rounded-lg w-full max-w-2xl"
                    />
                    <figcaption className="mt-2 text-lg leading-8 text-gray-600 text-center">
                      Bryan Johnson's supplements
                    </figcaption>
                  </figure>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Red Light Therapy</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Wearing a red light cap, Bryan Johnson uses red light
                      therapy to fight hair loss while preparing his breakfast.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Morning Workout Routine</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Bryan Johnson’s workout routine usually lasts 45-60
                      minutes and includes Stretching, Strength training, and
                      High Intensity Interval training.
                    </div>
                  </li>
                  <figure className="my-14 flex flex-col items-center">
                    <Image
                      src={BryanJohnsonCycling}
                      alt="Bryan Johnson working out"
                      className="rounded-lg w-full max-w-2xl"
                    />
                    <figcaption className="mt-2 text-lg leading-8 text-gray-600 text-center">
                      Bryan Johnson working out
                    </figcaption>
                  </figure>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Breakfast</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Right after your workout, eat breakfast. Bryan Johnson has
                      super veggie for breakfast which is a puree of a few
                      pounds of vegetables along with 2 tbsp of extra virgin
                      olive oil.
                    </div>
                  </li>
                </div>
              </ol>
            </div>
          </div>
          <div className="mt-16">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Although this morning routine is overwhelmingly comprehensive,
              Bryan Johnson emphasizes that you do not need to do all of these
              steps in order to reap benefits - the importance lies in taking
              baby steps that will leave you feeling better off than the day
              before.
            </p>
          </div>
          <div className="mt-20 mb-40">
            <p className="mb-2 text-2xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-3xl dark:text-white overflow-hidden">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://www.youtube.com/watch?v=OJZ4pjzwDLU"}
                  rel="noopener noreferrer"
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=OJZ4pjzwDLU
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
