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
    default: "Andrew Huberman’s ADHD Protocol",
    template: `%s | Andrew Huberman’s ADHD Protocol`,
  },
  description:
    "Andrew Huberman suggests that the key to managing ADHD is to maintain high levels of dopamine. Here’s his advice on how to do this.",
  keywords: [
    "Andrew Huberman ADHD",
    "Andrew Huberman ADHD protocol",
    "Andrew Huberman focus",
  ],
  openGraph: {
    title: {
      default: "Andrew Huberman’s ADHD Protocol",
      template: `%s | Andrew Huberman’s ADHD Protocol`,
    },
    description:
      "Andrew Huberman suggests that the key to managing ADHD is to maintain high levels of dopamine. Here’s his advice on how to do this.",
    url: new URL(`${BASE_URL}/andrew-huberman/andrew-huberman-adhd-protocol`),
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
            Andrew Huberman’s ADHD Protocol
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Ever been told you have ADHD? If you have difficulty sustaining
            attention, impulsivity, and high emotionality it’s possible that you
            do. Also, being able to hyper-focus on tasks that capture your
            interest is another tell-tale ADHD trait. Huberman suggests that the
            key to managing ADHD relies on ensuring high levels of dopamine.
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Improving Focus</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    Here are some practical tips for using the dopamine system
                    to focus if you have ADHD:
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Expand Your Visual Field:
                        </span>{" "}
                        <span className="text-gray-600">
                          Practice consciously dilating your gaze to take in
                          more of your surroundings. This can help mitigate
                          hyper-focus on a single point.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Meditation:
                        </span>{" "}
                        <span className="text-gray-600">
                          Engaging in a 17-minute meditation session can rewire
                          internal circuitry, promoting better focus.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Blinking:
                        </span>{" "}
                        <span className="text-gray-600">
                          Blinking resets your perception of time, as the rate
                          of blinking is controlled by dopamine. This simple
                          action can help modulate your focus and perception.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Fidget Tools:
                        </span>{" "}
                        <span className="text-gray-600">
                          Using tools like a fidget spinner can provide a
                          tactile way to manage attention.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Pharmaceutical Treatments</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    It is important to combine medications with behavioral tools
                    to train the brain's circuits and taper off drug use over
                    time. Pharmaceutical treatments for ADHD include the
                    following:
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Ritalin and Adderall:
                        </span>{" "}
                        <span className="text-gray-600">
                          PThese drugs work by increasing dopamine levels,
                          thereby enhancing focus.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Modafinil and Armodafinil:
                        </span>{" "}
                        <span className="text-gray-600">
                          These weak dopamine reuptake inhibitors can aid in
                          focus.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Racetams:
                        </span>{" "}
                        <span className="text-gray-600">
                          These compounds interact with the cholinergic system,
                          enhancing cognitive capacity.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Non-Pharmaceutical Treatments</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    Non-pharmaceutical treatments can be used in place of or
                    alongside traditional medications to enhance focus. Some
                    effective strategies include:
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Omega-3 Supplements:
                        </span>{" "}
                        <span className="text-gray-600">
                          Above 300mg per day of DHA can positively influence
                          attention pathways.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Phosphatidylserine:
                        </span>{" "}
                        <span className="text-gray-600">
                          At 200mg per day in children, this supplement can
                          improve ADHD symptoms when used with traditional
                          drugs.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          L-Tyrosine:
                        </span>{" "}
                        <span className="text-gray-600">
                          This amino acid boosts dopamine levels, though dosing
                          can be tricky.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">PEA:</span>{" "}
                        <span className="text-gray-600">
                          This is another dopamine stimulating supplement.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Alpha GPC:
                        </span>{" "}
                        <span className="text-gray-600">
                          This substance is also naturally produced by the body
                          and increases acetylcholine transmission which
                          increases focus or cognition.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Transcranial Magnetic Stimulation (TMS):
                        </span>{" "}
                        <span className="text-gray-600">
                          This non-invasive tool can modulate brain activity,
                          though its precision is still evolving.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Food, Nutrition, and Attention</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    Diet plays a significant role in managing ADHD symptoms.
                    Here are some guidelines:
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Avoid simple sugars:
                        </span>{" "}
                        <span className="text-gray-600">
                          Individuals with ADHD often crave sugary foods that
                          temporarily boost dopamine levels. However, it's best
                          to avoid sugar due to its harmful health effects.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Omega-3:
                        </span>{" "}
                        <span className="text-gray-600">
                          Since this has been shown to have modest improvements
                          in focus, it’s good to have an omega 3 rich diet which
                          includes having seafood (especially cold-water fatty
                          fish, such as salmon, mackerel, tuna, herring, and
                          sardines), and lots of nuts and seeds (such as
                          flaxseed, chia seeds, and walnuts).
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Elimination diets:
                        </span>{" "}
                        <span className="text-gray-600">
                          Although the evidence to support{" "}
                          <a
                            href="https://health.clevelandclinic.org/elimination-diet"
                            className="underline text-indigo-600"
                            rel="noopener noreferrer"
                          >
                            elimination diets{" "}
                          </a>{" "}
                          is controversial, it’s still worth exploring potential
                          food allergies that could be contributing to ADHD
                          symptoms by cutting out common food allergens for a
                          few days and reintroducing them systematically to see
                          which one may be aggravating symptoms.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 text-gray-600 text-lg font-normal">
            {" "}
            <span>
              Andrew Huberman's ADHD protocol offers a comprehensive approach to
              managing and improving focus. Whether through diet, supplements,
              behavioral tools, or medication, there are multiple pathways to
              managing ADHD.
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
                    "https://www.hubermanlab.com/episode/adhd-and-how-anyone-can-improve-their-focus "
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.hubermanlab.com/episode/adhd-and-how-anyone-can-improve-their-focus
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
