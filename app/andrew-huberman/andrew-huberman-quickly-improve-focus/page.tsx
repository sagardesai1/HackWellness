import Image from "next/image";
import React from "react";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Footprints,
  Microscope,
  Highlighter,
  EarthLock,
  ListTodo,
  Telescope,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Metadata } from "next";
import NewsLetter from "@/components/NewsLetter";
import { articles } from "@/types/Articles";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: {
    default: "Andrew Huberman's Quickly Improve Focus",
    template: `%s | Andrew Huberman's Quickly Improve Focus`,
  },
  description:
    "Andrew Huberman, Ph.D., is a neuroscientist and tenured professor in the Department of Neurobiology and by courtesy, Psychiatry and Behavioral Sciences at Stanford School of Medicine.",
  keywords: [
    "Andrew Huberman",
    "Quickly Improve Focus",
    "Andrew Huberman Visual focus",
  ],
  openGraph: {
    title: {
      default: "Andrew Huberman's Quickly Improve Focus",
      template: `%s | Andrew Huberman's Quickly Improve Focus`,
    },
    description:
      "Andrew Huberman, Ph.D., is a neuroscientist and tenured professor in the Department of Neurobiology and by courtesy, Psychiatry and Behavioral Sciences at Stanford School of Medicine.",
    url: new URL(
      "https://hack-wellness.vercel.app/andrew-huberman/andrew-huberman-quickly-improve-focus"
    ),
    type: "article",
  },
};

function page() {
  return (
    <div className="flex flex-col mt-6">
      <Link href={"/andrew-huberman"}>
        <div className="flex flex-row gap-2 items-center mb-10 w-11/12 mx-auto">
          <ChevronLeft className="w-5 h-5 text-gray-800" />
          <span className="text-sm font-semibold text-gray-800">
            More articles on Andrew Huberman{" "}
          </span>
        </div>
      </Link>
      <div className="flex flex-col p-4 items-center justify-between mx-auto max-w-2xl text-center">
        <Image
          src={AndrewHubermanAvatar}
          alt={"Andrew Huberman"}
          width={150}
          height={150}
          className="rounded-full"
        />
        <p className="text-2xl font-semibold">Andrew Huberman</p>
        <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
          Andrew Huberman, Ph.D., is a neuroscientist and tenured professor in
          the Department of Neurobiology and by courtesy, Psychiatry and
          Behavioral Sciences at Stanford School of Medicine.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between mt-2">
        <p className="text-3xl font-bold">Quickly Improve Focus</p>
        <Badge
          className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-white mt-2"
          variant="outline"
        >
          Mental Health
        </Badge>
      </div>
      <div className="px-10 py-8">
        <div className="flex flex-col p-10 mt-6 shadow-lg rounded-xl">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <ListTodo className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Habits</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm">
            <li>
              Practice focusing your visual system at the precise distance from
              the work you intend to do
            </li>
            <li>
              Eliminate distractions, such as turning off Wi-Fi and putting your
              phone in another room
            </li>
            <li>
              Maintain visual focus on the task at hand, even if your attention
              drifts
            </li>
            <li>
              Use blinking strategically to reset your perception of time and
              space
            </li>
            <li>
              Devote your neurochemical resources to active learning experiences
              rather than passive ones
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Telescope className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Key Insights</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm">
            <li>
              Visual focus plays a crucial role in mental focus and attention.
              By training your visual system to focus on a specific target, you
              can improve cognitive abilities and increase depth and duration of
              focus.
            </li>
            <li>
              Timing is important for optimizing learning. Understanding your
              own alertness patterns and scheduling learning sessions during
              peak alertness can enhance focus and cognitive performance.
            </li>
            <li>
              Minimizing distractions, especially from devices like phones, is
              essential for improving focus. Creating a dedicated study
              environment and removing potential distractions can significantly
              enhance mental focus.
            </li>
            <li>
              Rest and deliberate disengagement are crucial for consolidating
              learning and promoting plasticity. Taking breaks, engaging in
              physical activities, or even mindlessly resting can enhance the
              brain’s ability to retain information and improve cognitive
              abilities.
            </li>
            <li>
              It’s important to find the right balance when it comes to
              alertness-enhancing substances like caffeine or medications for
              ADHD. Working with a qualified professional can help determine the
              appropriate use and potential risks associated with such
              substances.
            </li>
            <li>
              Focusing on meaningful and enriching activities rather than
              passive experiences can lead to greater personal growth and
              cognitive development. Allocating attention to tasks that align
              with your goals and values can result in more fulfilling outcomes.
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Highlighter className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Highlights</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm">
            <li>Visual focus is closely tied to mental focus and attention.</li>
            <li>
              Alertness can be achieved through various means, including
              caffeine and behavioral practices.
            </li>
            <li>
              Focusing your visual attention on a specific target can enhance
              mental focus and increase acetylcholine and epinephrine release.
            </li>
            <li>
              Limit distractions from phones and other devices to improve focus.
            </li>
            <li>
              Timing your learning sessions and incorporating rest periods can
              optimize plasticity and learning.
            </li>
            <li>
              Engaging in deliberate disengagement activities, such as walking
              or resting, after learning can enhance plasticity.
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Microscope className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Scientific Rationale</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm overflow-hidden underline">
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6165228/"}
            >
              <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6165228/</li>
            </Link>
            <Link href={"https://pubmed.ncbi.nlm.nih.gov/27269720/"}>
              <li>https://pubmed.ncbi.nlm.nih.gov/27269720/</li>
            </Link>
            <Link
              href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6430176/"}
            >
              <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6430176/</li>
            </Link>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <EarthLock className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Sources</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm overflow-hidden underline">
            <Link href={"https://www.hubermanlab.com/"}>
              <li>https://www.hubermanlab.com/</li>
            </Link>
          </ul>
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
    </div>
  );
}

export default page;
