import React from "react";
import Image from "next/image";
import logoNoBackground from "@/images/landingpage/hack-wellness-high-resolution-logo-transparent.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LandingPageImage from "@/images/AuthorImages/PeterAttia.jpeg";

function page() {
  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div
        className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center flex-col items-center text-center">
            <div className="flex items-center w-1/2 h-20 mt-32">
              <Image priority src={logoNoBackground} alt="HackWellness"></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="w-1/3 ">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mt-12">
            Peter Attia
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Build your personalized protocol based on the advice of renowned
            biohackers like Andrew Huberman, Bryan Johnson, and Peter Attia.{" "}
            {/* <span className="text-indigo-600 dark:text-indigo-500">
                Let science optimize your routines.
              </span> */}
          </p>
        </div>
        <div className="flow-root ">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded:2xl lg:p-4">
            <Image
              // unoptimized
              src={LandingPageImage}
              alt="Biohacking library"
              width={400}
              height={200}
              className="rounded-ml shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}

export default page;
