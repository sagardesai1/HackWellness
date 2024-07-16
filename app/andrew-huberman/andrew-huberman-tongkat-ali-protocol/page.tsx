import React from "react";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import AndrewHubermanDrinkingYerba from "@/images/AndrewHubermanImages/AndrewHubermanDrinkingYerba.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";
import YoutubePlayer from "@/components/YoutubePlayer";
import ArticleSidebar from "@/components/ArticleSidebar";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: {
    default: "Andrew Huberman's Tongkat Ali Protocol",
    template: `%s | Andrew Huberman's Tongkat Ali Protocol`,
  },
  description:
    "Andrew Huberman recommends taking Tongkat Ali to increase testosterone levels and overall vitality. Here are his key tips on how to consume this powerful herb.",
  keywords: [
    "Andrew Huberman tonkgat ali",
    "Andrew Huberman tongkat ali dosage",
    "Andrew Huberman tongkat ali brand",
    "Andrew Huberman tongkat ali dosage",
    "Tongkat ali andrew huberman",
    "Tongkat ali andrew huberman brand",
  ],
  openGraph: {
    title: {
      default: "Andrew Huberman's Tongkat Ali Protocol",
      template: `%s | Andrew Huberman's Tongkat Ali Protocol`,
    },
    description:
      "Andrew Huberman recommends taking Tongkat Ali to increase testosterone levels and overall vitality. Here are his key tips on how to consume this powerful herb.",
    url: new URL(
      `${BASE_URL}/andrew-huberman/andrew-huberman-tongkat-ali-protocol`
    ),
    type: "article",
  },
};

function page() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg">
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
          <h1 className="mt-8 text-3xl font-extrabold leading-8 text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Andrew Huberman’s Tongkat Ali Protocol
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Andrew Huberman recommends taking Tongkat Ali to increase
            testosterone levels and overall vitality. Here are Huberman’s key
            tips on how to consume this powerful herb for optimal results.
          </p>
          {/* <figure className="my-14 flex flex-col items-center">
            <Image
              src={AndrewHubermanDrinkingYerba}
              alt="Andrew Huberman drinking Yerba Mate"
              className="rounded-lg w-full max-w-2xl"
            />
            <figcaption className="mt-2 text-lg leading-8 text-gray-600 text-center">
              Andrew Huberman drinking Yerba Mate
            </figcaption>
          </figure> */}
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    <ol className="list-decimal pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">Brand:</span>{" "}
                        <span className="text-gray-600">
                          Huberman recommends the{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={
                              "https://www.amazon.com/Momentous-Huberman-Stack-Tongkat-Servings/dp/B09WX9VHVX?crid=1056A9V7P3VQ9&dib=eyJ2IjoiMSJ9.umPf0n2LyTEuekG7vQuTtkwCXrkVLXeU8qesthdTKi6PbIcf9VmCA4CPSlvGKWkV0r6ZRIaPIz1-nLlZ15EP31rqulgSMxuB8E2io_hg6N0kbbjXTyHgksZPbglezmrsJzcaUzDtau6_ibX5RdLgMa_5RRTAn-suMyWDyXDRO7c39BCI5fTTUS4fkWhs3lcx_ZpxnOY05EyeP_43Q3Fko34s7PtWX74zaQgszP7gv8eCMWx9J5aE0hRTwJxXier_pmDjlUcTu1ZYKgXuCTQSX4DhvT48ty-i53NGSczR1yo.q8L_mSkSfVfPqL9rvSYQcZRkwbVv2JFP8ETosTAIoxA&dib_tag=se&keywords=tongkat+ali+momentous&qid=1721027772&rdc=1&s=hpc&sprefix=tongkat+ali+momentous,hpc,146&sr=1-1&linkCode=sl1&tag=hackwellnes0c-20&linkId=65f4ec1c74d3baa6d87e503982721e3d&language=en_US&ref_=as_li_ss_tl"
                            }
                            className="underline text-lg leading-8 text-indigo-600"
                          >
                            Momentous brand for Tongkat
                          </a>{" "}
                          Ali which sources the herb from Indonesia and contains
                          100% Eurycoma Longifolia root powder.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Dosage:
                        </span>{" "}
                        <span className="text-gray-600">
                          Start with a minimum of 200 milligrams per day,
                          adjusting up to 600 milligrams based on body size and
                          response. The goal is to find the minimal effective
                          dose through careful adjustment and monitoring.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Objective and Subjective Measures:
                        </span>{" "}
                        <span className="text-gray-600">
                          Use blood work to monitor testosterone levels and pay
                          attention to subjective experiences such as libido and
                          vitality. If no effect is noticed at lower doses,
                          slightly increase the dosage without exceeding 600
                          milligrams per day.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Cycling:
                        </span>{" "}
                        <span className="text-gray-600">
                          Though Tongkat Ali doesn't need to be cycled, for
                          those who want to err on the side of caution a cycle
                          of eleven months on and one month off is ideal.
                          Huberman personally takes it continuously without
                          cycling.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Combination with Other Supplements:
                        </span>{" "}
                        <span className="text-gray-600">
                          For greater results, Tongkat Ali can be combined with
                          other supplements like Fadogia Agrestis at 600mg per
                          day. Try starting out with just one supplement for a
                          while before adding another, as combining both from
                          the start can lead to you not knowing which supplement
                          is benefiting you the most.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Extended Usage Effects:
                        </span>{" "}
                        <span className="text-gray-600">
                          The effects of Tongkat Ali may take 8 to 12 weeks to
                          show up, with cumulative benefits over time, possibly
                          through neural pathways impacting libido and vitality.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="text-2xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
                  <h2 className="">Tongkat Ali Benefits</h2>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    Tongkat Ali has a wide range of hormal benefits, some of
                    which include the following:
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <h3 className="">Libido Enhancement</h3>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    Tongkat Ali is known for its ability to boost libido in both
                    men and women. According to Huberman, the herb does this by
                    lowering Sex Hormone Binding Globulin (SHBG), a protein that
                    binds to testosterone and reduces its availability in the
                    body, which in turn helps elevate the amount of free, active
                    testosterone in the body. Apart from lowering SHBG, Tongkat
                    Ali also interacts with neural pathways, contributing to
                    cumulative libido benefits over time.
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <h3 className="">Hormonal Effects</h3>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    In addition to boosting free testosterone, Tongkat Ali also
                    increases luteinizing hormone, which plays a crucial role in
                    regulating testosterone production. Huberman also mentions
                    that Tongkat Ali increases DHEA levels, a hormone involved
                    in the production of testosterone and estrogen. Moreover,
                    Tongkat Ali also weakly reduces estrogen levels by
                    interacting with aromatase, an enzyme that converts
                    testosterone into estrogen, which can help women who have
                    issues resulting from being estrogen dominant.
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <h3 className="">Fertility</h3>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    Tongkat Ali isn't just for libido and testosterone; it can
                    also improve fertility. By enhancing spermatogenesis through
                    its impact on testosterone levels, it offers a boost to both
                    men's and women's fertility. This makes it an important
                    supplement for those looking to conceive or enhance their
                    reproductive health.
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <div className="text-gray-600 text-lg mt-4 font-normal">
                    Ultimately, whether you're looking to boost libido, enhance
                    fertility, or improve overall hormone health, Tongkat Ali
                    offers a natural and effective solution, particularly when
                    taken in accordance with Huberman’s protocol.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-40">
            <p className="mb-2 text-2xl font-extrabold leading-8 text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.youtube.com/watch?v=tLS6t3FVOTI"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=tLS6t3FVOTI
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.youtube.com/watch?v=ncSoor2Iw8k&ab_channel=AndrewHuberman"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=ncSoor2Iw8k&ab_channel=AndrewHuberman
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.youtube.com/watch?v=O640yAgq5f8&ab_channel=AndrewHuberman"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.youtube.com/watch?v=O640yAgq5f8&ab_channel=AndrewHuberman
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
