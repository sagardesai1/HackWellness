import React from "react";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";

export const metadata: Metadata = {
  title: {
    default: "Andrew Huberman’s Fitness Protocol",
    template: `%s | Andrew Huberman’s Fitness Protocol`,
  },
  description:
    "Andrew Huberman’s Foundational Fitness protocol is designed to help you achieve your fitness goals efficiently. He’s been following this protocol for over 20 years. Here's a breakdown of how you can implement this protocol into your routine.",
  keywords: [
    "Andrew Huberman",
    "Andrew Huberman’s Fitness Protocol",
    "Fitness Protocol",
  ],
  openGraph: {
    title: {
      default: "Andrew Huberman’s Fitness Protocol",
      template: `%s | Andrew Huberman’s Fitness Protocol`,
    },
    description:
      "Andrew Huberman’s Foundational Fitness protocol is designed to help you achieve your fitness goals efficiently. He’s been following this protocol for over 20 years. Here's a breakdown of how you can implement this protocol into your routine.",
    url: new URL(
      "https://hack-wellness.vercel.app/andrew-huberman/andrew-huberman-fitness-protocol"
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
            Andrew Huberman’s Workout Routine
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Andrew Huberman’s Foundational Fitness protocol is designed to help
            you achieve your fitness goals efficiently. He’s been following this
            protocol for over 20 years. Here's a breakdown of how you can
            implement this protocol into your routine:
          </p>
          <div className="mt-16">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 1: Long Endurance Workout
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span> {">"}
              30 minutes, ideally 60-75 minutes
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Start your week with a long zone 2 cardio workout, doing an
              activity like jogging, rowing, cycling, swimming, or hiking. To
              increase difficulty, consider using a weighted vest or backpack
              and emphasize nasal breathing when possible.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 1: Long Endurance Workout
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span> 30
              minutes, ideally 60-75 minutes
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Start your week with a long zone 2 cardio workout, doing an
              activity like jogging, rowing, cycling, swimming, or hiking. To
              increase difficulty, consider using a weighted vest or backpack
              and emphasize nasal breathing when possible.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 2: Legs Resistance Training
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span>{" "}
              10-minute warmup + 50-60 minutes training
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Train quads with leg extensions or hack squats, hamstrings with
              leg curls or glute-ham raises, and calves with standing or seated
              raises. This will help you develop lower body muscles in a
              balanced manner.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 3: Heat & Cold Exposure/Recovery
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span> Sauna
              (20 minutes) + Ice Bath/Cold Shower (5 minutes), repeat 3-5 times
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Integrate deliberate heat and cold exposure into your routine.
              This can enhance recovery, boost endurance, and improve overall
              resilience. Start slowly and gradually increase exposure time.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 4: Torso & Neck Resistance Training
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span> {">"}
              10-minute warmup + 50-60 minutes training
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Train your chest with incline presses or cable crossovers, back
              with chin-ups or seated rows, shoulders with shoulder presses or
              lateral raises, and neck with specific neck exercises to reduce
              injury risk and improve posture.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 5: Moderate Intensity Cardio Training{" "}
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span> 35
              minutes
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Perform carido exercises at 75-80% of your maximum effort.
              Running, rowing, cycling, jumping jacks, stair-climbing, or jump
              rope are some great choices. Doing these exercises outdoors is the
              best to capitalize on sun exposure benefits.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 6: High-Intensity Interval Training (HIIT){" "}
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span> 20-60
              seconds all-out sprint + 10 seconds rest, 8-12 rounds
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Choose an exercise you can perform with great form to prevent
              injury. Some options include assault bike, sprint/jog intervals,
              rowing, skiing machine, or sand sprints. Push yourself to reach
              your maximum heart rate, calculated as 220 minus your age.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-2xl dark:text-white">
              Day 7: Arms, Neck & Calves Training{" "}
            </p>
            <p className="text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Duration:</span>{" "}
              10-minute warmup + 50-60 minutes training
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Train biceps with incline curls or dumbbell curls, triceps with
              overhead extensions or dips, and calves with standing or seated
              raises. Include neck exercises for comprehensive muscle
              engagement.
            </p>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Andrew Huberman’s Resistance Training Advice
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here are two of Andrew Huberman’s fitness tips for resistance
              training:
            </p>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <ol className="list-decimal pl-5">
                <li className="mb-2">
                  Alternate between Schedule A and B each month to enhance your
                  strength and muscle hypertrophy.:
                  <ul className="list-disc pl-5 mt-2">
                    <li className="mt-1">
                      <span className="font-semibold text-black">
                        Schedule A:
                      </span>{" "}
                      Perform 4-8 repetitions with heavier weights, 3-4 sets per
                      exercise, and rest for 2-4 minutes between sets.
                    </li>
                    <li className="mt-1">
                      <span className="font-semibold text-black">
                        Schedule B:
                      </span>{" "}
                      Execute 8-15 repetitions with moderate-lighter weights,
                      2-3 sets per exercise, and rest for approximately 90
                      seconds between sets.
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  Do two exercises per muscle group:
                  <ul className="list-disc pl-5 mt-2">
                    <li className="mt-1">
                      <span className="font-semibold text-black">
                        Exercise #1:
                      </span>{" "}
                      Bring the muscle into a shortened or maximally contracted
                      position at the end of the range of motion (eg. leg curl,
                      seated calf raise, bicep preacher curl, leg extension,
                      chest cable crossover).
                    </li>
                    <li className="mt-1">
                      <span className="font-semibold text-black">
                        Exercise #2:
                      </span>{" "}
                      Provide resistance for the muscle group when it is in
                      a lengthened position (eg. standing calf raises, incline
                      dumbbell curls, deep squats, glute-hamstring raises or
                      straight legged deadlifts, incline press).
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Andrew Huberman’s Other Tips
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here are some pieces of advice Huberman suggests to incorporate
              into your workouts:
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Ice Baths:</span>{" "}
              Should you decide to change the days in the above workout
              schedule, it is important to note that ice baths can prevent gains
              from that day's workout. As a result, it's best to avoid ice baths
              immediately after resistance training. According Andrew Huberman,
              saunas do not have this issue.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">
                Physiological Sigh:
              </span>{" "}
              During resistance training, lower your heart rate between sets
              using this breathing technique - take two full inhales through the
              nose followed by one full exhale through the mouth. After a
              training session, use 3-5 minutes of deliberate slow breathing to
              relax the nervous system so that they body can focus on muscle
              recovery.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <span className="font-semibold text-black">Flexibility:</span>{" "}
              Focusing on flexibility is often overlooked in fitness regimens.
              Try to hold each major muscle group in a static stretch for 30-60
              seconds and repeat between 3x/week and daily. Some ways to get
              this in could be during a wind down routine at night before going
              to bed, while cooking, or while at your office desk during a
              meeting. While holding the stretch, longer exhales help to further
              relax muscles so that you are able to deepen the stretch.
            </p>
          </div>
          <div className="mt-20">
            <p className="mb-2 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-3xl dark:text-white">
              Sources
            </p>
            <ul className="list-disc pl-5 mt-6 text-lg leading-8">
              <li className="">
                <a
                  target="_blank"
                  href={
                    "https://www.hubermanlab.com/newsletter/foundational-fitness-protocol"
                  }
                  className="underline text-lg leading-8 text-indigo-600"
                >
                  https://www.hubermanlab.com/newsletter/foundational-fitness-protocol
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
