import React from "react";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";

export const metadata: Metadata = {
  title: {
    default: "Bryan Johnson’s Red Light Therapy Protocol",
    template: `%s | Bryan Johnson’s Red Light Therapy Protocol`,
  },
  description:
    "Wondering if red light therapy lives up to the hype? Research suggests it might be worth it as it has shown to have multiple benefits such as improved mitochondrial function, reduced inflammation, and supported collagen production. Here’s a look at Bryan Johnson’s protocol to help you find the right product and dosing.",
  keywords: [
    "Bryan Johnson",
    "Bryan Johnson’s Red Light Therapy",
    "Bryan Johnson Anti Aging",
    "Bryan Johnson’s Red Light Therapy Protocol",
  ],
  openGraph: {
    title: {
      default: "Bryan Johnson’s Red Light Therapy Protocol",
      template: `%s | Bryan Johnson’s Red Light Therapy Protocol`,
    },
    description:
      "Wondering if red light therapy lives up to the hype? Research suggests it might be worth it as it has shown to have multiple benefits such as improved mitochondrial function, reduced inflammation, and supported collagen production. Here’s a look at Bryan Johnson’s protocol to help you find the right product and dosing.",
    url: new URL(
      "https://hack-wellness.vercel.app/bryan-johnson/bryan-johnson-red-light-therapy-protocol"
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
            Bryan Johnson’s Red Light Therapy Protocol
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Wondering if red light therapy lives up to the hype? Research
            suggests it might be worth it as it has shown to have multiple
            benefits such as improved mitochondrial function, reduced
            inflammation, and supported collagen production. Here’s a look at
            Bryan Johnson’s protocol to help you find the right product and
            dosing:
          </p>
          <div className="mt-14">
            <div className="mt-10 leading-8 ">
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Full Body Therapy</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Device:
                        </span>{" "}
                        <span className="text-gray-600">
                          Bryan Johnson recommends using an LED panel emiting
                          light at wavelengths of 630 nm and 830 nm.{" "}
                          <a
                            target="_blank"
                            href={
                              "https://www.amazon.com/dp/B097NGSQJZ?&linkCode=sl1&tag=hackwellnes0c-20&linkId=ab1f782be32aa104c672969a0949d352&language=en_US&ref_=as_li_ss_tl"
                            }
                            className="underline text-lg leading-8 text-indigo-600"
                          >
                            Hooga’s full body red light panel
                          </a>{" "}
                          is a device that satisfies these requirements and
                          offers more comprehensive benefits compared to
                          smaller, portable panels. However, smaller panels such
                          as{" "}
                          <a
                            target="_blank"
                            href={
                              "https://www.amazon.com/Infrared-Adjustable-Clinical-Performance-HGPRO300/dp/B08Z73FNZN?dib=eyJ2IjoiMSJ9.GfY8oQ_xyRQ2x9PPFzeyDHoJo4vw7KChulRxx2YonFMNwIfaM_MuevlNCoZRIz9YymOAiVmBnRUQHEa9OuaywoMp19Vh64JrF2FfDOWkFivjeaOkmcBGMvU-L8QjFSjt4BUT1mMyS6JeSRePp1zPiXr9OVOT3ejQg8tLaqcEwCZSkJRg_eM9Ae0m9OecfVOdjEh3f8xWXvudHupJO45-TcUcPl41kbGuoP49MwABPR556hsn299n35mD2MOkXAV4UAJig3zpHuEXwLAmF9vYAJEn5m-03tZSqGr64Mbesi0.4xvbkEzvCdsgMb9LBKuaZz1DM91DKrYJTu0SvbFs_ZM&dib_tag=se&keywords=red+light+therapy+panel&qid=1719987582&sr=8-9&linkCode=sl1&tag=hackwellnes0c-20&linkId=8498914bd420aae379926db2a762d44f&language=en_US&ref_=as_li_ss_tl"
                            }
                            className="underline text-lg leading-8 text-indigo-600"
                          >
                            Hooga’s face and body panel
                          </a>{" "}
                          are a great place for those who are new to red light
                          therapy to start.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Usage Frequency:
                        </span>{" "}
                        <span className="text-gray-600">
                          Unlike some manufacturers recommendations that suggest
                          daily use, Bryan Johnson suggests doing red light
                          therapy three times a week, for 12 minutes per
                          session.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Benefits:
                        </span>{" "}
                        <span className="text-gray-600">
                          Bryan Johnson has reported increased energy levels,
                          better skin, and improved mental clarity.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Targeted Therapy</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Device:
                        </span>{" "}
                        <span className="text-gray-600">
                          Bryan Johnson uses a wearable device called{" "}
                          <a
                            target="_blank"
                            href={"https://recharge.health/"}
                            className="underline text-lg leading-8 text-indigo-600"
                          >
                            FlexBeam
                          </a>{" "}
                          for targeted healing of body parts.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Usage Frequency:
                        </span>{" "}
                        <span className="text-gray-600">
                          Manufacturer’s recommendation suggests using FlexBeam
                          twice a day for the first three days. After that, use
                          it for 20 minutes every day until the symptoms are
                          resolved.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Benefits:
                        </span>{" "}
                        <span className="text-gray-600">
                          Bryan Johnson uses targeted red light therapy for
                          healing of his vein after blood tests and for other
                          minor injuries.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
                  <span className="">Hair Treatment</span>{" "}
                  <div className="text-gray-600 text-lg mt-4 font-normal	">
                    <ul className="list-disc pl-5 mt-6 text-lg leading-8">
                      <li className="">
                        <span className="font-semibold text-black">
                          Device:
                        </span>{" "}
                        <span className="text-gray-600">
                          Bryan Johnson uses a cap called{" "}
                          <a
                            target="_blank"
                            href={
                              "https://www.amazon.com/Capillus-Bluetooth-enabled-Thinning-Androgenetic/dp/B0BSP3NJ4X?&linkCode=sl1&tag=hackwellnes0c-20&linkId=0f46d64972522c841aa30fec6c93de3e&language=en_US&ref_=as_li_ss_tl"
                            }
                            className="underline text-lg leading-8 text-indigo-600"
                          >
                            Capillus
                          </a>{" "}
                          for helping improve hair growth.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Usage Frequency:
                        </span>{" "}
                        <span className="text-gray-600">
                          Manufacturer’s recommendation suggests using Capillus
                          for 6 minutes everyday.
                        </span>
                      </li>
                      <li className="mt-6">
                        <span className="font-semibold text-black">
                          Benefits:
                        </span>{" "}
                        <span className="text-gray-600">
                          Bryan Johnson uses the red light therapy cap to
                          increase hair growth, which works by upregulating
                          cellular energy production in the hair follicles.
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
              Overall, the scientific basis and Bryan Johnson’s personal
              experience make a compelling case for considering red light
              therapy as part of a holistic approach to health and vitality.
            </span>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-5">
              <li className="mt-2">
                <a
                  target="_blank"
                  href={
                    "https://www.capillus.com/blogs/all/bryan-johnsons-fountain-of-youth-red-light-therapy-and-healthy-habits"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.capillus.com/blogs/all/bryan-johnsons-fountain-of-youth-red-light-therapy-and-healthy-habits
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={"https://protocol.bryanjohnson.com/Home"}
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://protocol.bryanjohnson.com/Home
                </a>
              </li>
              <li className="mt-2">
                <a
                  target="_blank"
                  href={
                    "https://www.instagram.com/p/Cwa3_UjPJKX/?utm_source=ig_embed&ig_rid=dd6fd91d-3056-4583-8e95-92015223f355&img_index=1"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.instagram.com/p/Cwa3_UjPJKX/?utm_source=ig_embed&ig_rid=dd6fd91d-3056-4583-8e95-92015223f355&img_index=1
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <NewsLetter />
      <div className="mt-28 flex items-center justify-center gap-x-6">
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
