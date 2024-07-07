import React from "react";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: {
    default: "Andrew Huberman's Sleep Protocol",
    template: `%s | Andrew Huberman's Sleep Protocol`,
  },
  description:
    "Getting a good night's sleep is essential for our health, productivity, and overall well-being. Here are Andrew Huberman’s top ten tips for improving your sleep quality.",
  keywords: [
    "Andrew Huberman",
    "Andrew Huberman Sleep",
    "Andrew Huberman Sleep Protocol",
    "Sleep Protocol",
  ],
  openGraph: {
    title: {
      default: "Andrew Huberman's Sleep Protocol",
      template: `%s | Andrew Huberman's Sleep Protocol`,
    },
    description:
      "Getting a good night's sleep is essential for our health, productivity, and overall well-being. Here are Andrew Huberman’s top ten tips for improving your sleep quality.",
    url: new URL(
      "https://hack-wellness.vercel.app/andrew-huberman/andrew-huberman-sleep-protocol"
    ),
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
            Andrew Huberman's Sleep Protocol
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Getting a good night's sleep is essential for our health,
            productivity, and overall well-being. Here are Andrew Huberman’s top
            ten tips for improving your sleep quality.
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <ol className="list-decimal pl-5">
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">
                      Start your day with morning sunlight
                    </span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Get outside within 30-60 minutes of waking up. Second best
                      is to do this in the late afternoon before sunset, in case
                      you miss the morning window. Exposure to natural light
                      helps regulate your circadian rhythm, which controls your
                      sleep-wake cycle. Here’s how to adapt your time in the
                      natural light based on the weather:
                      <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                        <li className="">
                          <span className="font-semibold text-black">
                            Bright, clear days:
                          </span>{" "}
                          <span className="text-gray-600">10 minutes</span>
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Cloudy days:
                          </span>{" "}
                          <span className="text-gray-600">20 minutes</span>
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            Very overcast days:
                          </span>{" "}
                          <span className="text-gray-600">30-60 minutes</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        If natural light is scarce where you live, consider
                        using a light therapy lamp that can artificially
                        substitute sunlight. Avoid wearing sunglasses during
                        sunglight exposure, but eyeglasses and contact lenses
                        are fine. Also don’t look directly at the sun - instead
                        simply look in the general direction of the sun.
                      </div>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Wake up at the same time each day</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Going to bed when you first feel sleepy helps prevent
                      waking up in the middle of the night. Avoid pushing
                      through the sleepy feeling and going to bed too late,
                      which can disrupt your sleep.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Limit caffeine intake</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Avoid caffeine within 8-10 hours of bedtime. Some experts,
                      like Dr. Matt Walker, suggest even longer—up to 12-14
                      hours. Huberman personally is okay with drinking coffee
                      until 2 PM if he sleeps around 10-11 PM.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Try Self-Hypnosis</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      If you struggle with sleep disturbances or anxiety, the
                      Reveri app offers research-supported self-hypnosis
                      protocols. Just 10-15 minutes, three times a week, can
                      help you relax and improve your sleep.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Dim the lights at night</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Avoid bright lights, especially overhead lights, between
                      10 PM and 4 AM. Use just enough light to move safely. Blue
                      blockers can help, but dimming all lights is best.
                      Candlelight and moonlight are fine.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Limit daytime naps</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Keep naps to less than 90 minutes, or skip them
                      altogether. Huberman enjoys 30-minute naps most
                      afternoons, sometimes up to 45 minutes.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Manage mid-night awakenings</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      It’s normal to wake up once during the night. If you can’t
                      fall back asleep, Andrew Huberman recommends doing a{" "}
                      <a
                        target="_blank"
                        className="underline text-indigo-600"
                        rel="noopener noreferrer"
                        href={
                          "https://www.youtube.com/watch?v=AKGrmY8OSHM&ab_channel=VirtusanApp"
                        }
                      >
                        Non-Sleep Deep Rest (NSDR) protocol
                      </a>{" "}
                      or Yoga Nidra.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Consider taking supplements</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      About 30-60 minutes before bed, consider taking the
                      following:
                      <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                        <li className="">
                          <span className="font-semibold text-black">
                            145 mg Magnesium Threonate or 200 mg Magnesium
                            Bisglycinate
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            50 mg Apigenin
                          </span>{" "}
                        </li>
                        <li className="mt-6">
                          <span className="font-semibold text-black">
                            100-400 mg Theanine
                          </span>{" "}
                        </li>
                      </ul>
                      <div className="mt-6">
                        Huberman also takes 2 g of Glycine and 100 mg GABA 3-4
                        nights per week. Start with one supplement and add
                        others as needed after a few days of seeing how each
                        supplement feels. Avoid theanine if you have intense
                        dreams, sleep-walk, or experience night terrors.
                      </div>
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">Keep your room cool and dark</span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      A drop in body temperature by 1-3 degrees is necessary for
                      falling and staying asleep. Keep your room cool and use
                      removable blankets to adjust your temperature.
                    </div>
                  </li>
                </div>
                <div className="mb-8">
                  <li className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                    <span className="">
                      Avoid Alcohol and Sleep Medications
                    </span>{" "}
                    <div className="text-gray-600 text-lg mt-4 font-normal	">
                      Both alcohol and sleep meds can disrupt your sleep, so
                      it’s best to eliminate them completely.
                    </div>
                  </li>
                </div>
              </ol>
            </div>
          </div>
          <div className="mt-20 text-gray-600 text-lg font-normal">
            {" "}
            <span>
              By incorporating even a small minority of these tips, you can
              improve your sleep quality significantly. Consistency and
              awareness are key — listen to your body and feel free to make
              adjustments as needed.
            </span>
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
                    "https://www.hubermanlab.com/newsletter/toolkit-for-sleep"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.hubermanlab.com/newsletter/toolkit-for-sleep
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
