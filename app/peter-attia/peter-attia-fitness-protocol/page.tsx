import React from "react";
import PeterAttiaImage from "@/images/AuthorImages/PeterAttia.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function page() {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg ">
          <header className="mb-4 lg:mb-6 not-format">
            <div className="inline-flex space-x-6 items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image
                src={PeterAttiaImage}
                alt={"User name"}
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
                  Peter Attia
                </a>
                <p className="text-base text-gray-500 dark:text-gray-400">MD</p>
              </div>
            </div>
          </header>
          <h1 className="mt-8 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Peter Attia’s Fitness Protocol
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Peter Attia is a longevity expert, author of book Outlive, and host
            of podcast The Drive. He is a medical doctor and has his own private
            practice Early Medical where he works on improving the longevity of
            his patients.
          </p>
          <div className="mt-16">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Peter Attia's Workout Advice
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Peter Attia suggests these four key elements for weekly workouts:
            </p>
            <div className="mt-6 text-lg leading-8 ">
              <ol className="list-decimal pl-5">
                <li className="mb-2">
                  <span className="font-semibold text-black">Stability:</span>{" "}
                  <span className="text-gray-600">
                    Should you decide to change the days in the above workout
                    schedule, it is important to note that ice baths can prevent
                    gains from that day's workout. As a result, it's best to
                    avoid ice baths immediately after resistance training.
                    According Andrew Huberman, saunas do not have this issue.
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-black">Strength:</span>{" "}
                  <span className="text-gray-600">
                    Devote three days each week to strength building. Peter
                    Attia alternates between the upper and lower body each day.
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-black">Zone 2:</span>{" "}
                  <span className="text-gray-600">
                    Three hours weekly, split into 3-4 sessions, are aimed at
                    increasing aerobic capacity. Zone 2 is a type of
                    cardiovascular exercise that pushes you to a level where
                    speaking would be difficult, but not impossible.
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-black">VO2 Max:</span>{" "}
                  <span className="text-gray-600">
                    One session a week is dedicated to improving anaerobic
                    performance. For Peter Attia VO2 Max training involves very
                    high intensity exercises (around 90 to 100 percent of max
                    heart rate) for 3 – 8 minute intervals.
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Peter Attia's Workout Schedule
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here's how Peter Attia recommends incorporating all four elements
              throughout the week:
            </p>
            <div className="mt-6">
              <ul className="list-disc pl-5 mt-8 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Monday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of lower body
                    strength training.
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-5 mt-4 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Tuesday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of zone 2
                    cardio.
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-5 mt-4 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Wednesday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of upper body
                    strength training.
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-5 mt-4 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Thursday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of zone 2
                    cardio.
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-5 mt-4 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Friday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of lower body
                    strength training.
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-5 mt-4 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Saturday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of zone 2
                    cardio; 30 minutes of zone 5 cardio.
                  </span>
                </li>
              </ul>
              <ul className="list-disc pl-5 mt-4 text-lg leading-8">
                <li className="mt-1">
                  <span className="font-semibold text-black">Sunday:</span>{" "}
                  <span className="text-gray-600">
                    10 minutes of a stability practice; 60 minutes of zone 2
                    cardio, 60 minutes of upper body strength training.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              The Attia Rule
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              For Peter Attia fitness is so important that on the Huberman
              podcast he suggested not even focusing on supplementation or diet
              until you are able to do the following exercises:
            </p>
            <div className="mt-6 text-lg leading-8 ">
              <ol className="list-decimal pl-5">
                <li className="mb-2">
                  <span className="font-semibold text-black">Dead Hang:</span>{" "}
                  <span className="text-gray-600">
                    2 minutes for males and 90 seconds for females
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-black">Wall Sit:</span>{" "}
                  <span className="text-gray-600">2 minutes</span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-black">
                    Farmer Carry Bodyweight:
                  </span>{" "}
                  <span className="text-gray-600">
                    Entire bodyweight for males, and 75% bodyweight for females
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-black underline">
                    <a
                      target="_blank"
                      href={"https://www.omnicalculator.com/sports/vo2-max"}
                    >
                      VO2 Max
                    </a>
                  </span>{" "}
                  <span className="text-gray-600">
                    in 75th percentile for age
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Scientific Rationale
            </p>
            <span className="mt-2 text-lg leading-8 text-gray-600">
              <a
                target="_blank"
                href={
                  "https://journals.sagepub.com/doi/10.1177/10998004221120945"
                }
                className="underline text-lg leading-8 text-gray-600"
              >
                Research
              </a>{" "}
              shows exercise improves general health, mental health, and social
              functioning.
            </span>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white overflow-hidden">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li className="mt-1">
                <a
                  target="_blank"
                  href={"https://peterattiamd.com/ama32/"}
                  className="underline text-lg leading-8 text-gray-600"
                >
                  https://peterattiamd.com/ama32/
                </a>
              </li>
              <li className="mt-1">
                <a
                  target="_blank"
                  href={"https://www.youtube.com/watch?v=jN0pRAqiUJU"}
                  className="underline text-lg leading-8 text-gray-600"
                >
                  https://www.youtube.com/watch?v=jN0pRAqiUJU
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-28 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Building Your Protocol Now
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default page;
