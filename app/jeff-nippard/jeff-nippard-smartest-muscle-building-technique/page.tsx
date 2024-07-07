import Image from "next/image";
import React from "react";
import JeffNippardAvatar from "@/images/AuthorImages/JeffNippard.webp";
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

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hack-wellness.com";

export const metadata: Metadata = {
  title: {
    default: "Jeff Nippard's Smartest Muscle Building Technique",
    template: `%s | Jeff Nippard's Smartest Muscle Building Technique`,
  },
  description:
    "Jeff Nippard is a pro natural bodybuilder, powerlifter, and science communicator to over 2 million YouTube subscribers.",
  keywords: [
    "Jeff Nippard",
    "Fitness Protocol",
    "Smartest Muscle Building Technique",
    "Long length partials",
  ],
  openGraph: {
    title: {
      default: "Jeff Nippard's Smartest Muscle Building Technique",
      template: `%s | Jeff Nippard`,
    },
    description:
      "Jeff Nippard is a pro natural bodybuilder, powerlifter, and science communicator to over 2 million YouTube subscribers.",
    url: new URL(
      `${BASE_URL}/jeff-nippard/jeff-nippard-smartest-muscle-building-technique`
    ),
    type: "article",
  },
};

function page() {
  return (
    <div className="flex flex-col mt-6">
      <Link href={"/jeff-nippard"}>
        <div className="flex flex-row gap-2 items-center mb-10 w-11/12 mx-auto">
          <ChevronLeft className="w-5 h-5 text-gray-800" />
          <span className="text-sm font-semibold text-gray-800">
            More articles on Jeff Nippard{" "}
          </span>
        </div>
      </Link>
      <div className="flex flex-col p-4 items-center justify-between mx-auto max-w-2xl text-center">
        <Image
          src={JeffNippardAvatar}
          alt={"Jeff Nippard"}
          className="w-48 h-48 rounded-full"
          style={{
            objectFit: "cover",
          }}
        />
        <p className="text-2xl font-semibold">Jeff Nippard</p>
        <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
          Jeff Nippard is a pro natural bodybuilder, powerlifter, and science
          communicator to over 2 million YouTube subscribers
        </p>
      </div>
      <div className="flex flex-col items-center justify-between mt-2">
        <p className="text-3xl font-bold">Smartest Muscle Building Technique</p>
        <Badge
          className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-white mt-2"
          variant="outline"
        >
          Strength Training
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
              Long length partials can be used as an intensity technique to
              extend the last set of a muscle beyond the typical failure point.
            </li>
            <li>
              They are particularly effective for muscles like the hamstrings
              and back, where additional partial reps can be performed.
            </li>
            <li>
              Standardizing the range of motion is important for tracking
              progress.
            </li>
            <li>
              Long length partials can be used on every rep of a set on the last
              set of several exercises.
            </li>
            <li>
              This allows for more time spent in the most anabolic part of the
              range of motion.
            </li>
            <li>
              Exercises like dumbbell flies and Smith machine press are suitable
              for long length partials.
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
              Multiple studies have shown that long length partials outperform
              both short length partials and full range of motion exercises in
              terms of muscle growth. This suggests that focusing on the
              stretched part of the muscle is more effective for hypertrophy.
            </li>
            <li>
              Long length partials can be used as an intensity technique to push
              beyond failure and target the remaining strength in a muscle. This
              is particularly useful for muscle groups like the back and
              hamstrings.
            </li>
            <li>
              The concept of stretch-mediated hypertrophy has been supported by
              research for years, and long length partials align with this idea
              by emphasizing the lengthened part of the range of motion.
            </li>
            <li>
              It is important to maintain control and proper form during long
              length partials, as they should be treated like any other rep.
              Momentum should be minimized, and a deep stretch should be felt at
              the bottom of the movement.
            </li>
            <li>
              It’s important to find the right balance when it comes to
              alertness-enhancing substances like caffeine or medications for
              ADHD. Working with a qualified professional can help determine the
              appropriate use and potential risks associated with such
              substances.
            </li>
            <li>
              While long length partials have gained attention in the fitness
              community, it is still advised to incorporate a combination of
              full range of motion exercises and long length partials for
              optimal muscle growth. Full range of motion exercises have a
              strong empirical foundation and provide variety in training.
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Highlighter className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Highlights</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm">
            <li>
              Long length partials have the most scientific evidence behind them
              and are more effective than other intensity techniques.
            </li>
            <li>
              Studies show that long length partials are better for muscle
              growth compared to short length partials and may even be better
              than full range of motion exercises.
            </li>
            <li>
              Long length partials involve focusing on the stretched part of the
              muscle, leading to greater muscle growth.
            </li>
            <li>
              Research supports the idea that stretch-mediated hypertrophy and
              lifting at long muscle lengths are effective for muscle growth.
            </li>
            <li>
              Long length partials can be used as an intensity technique to
              extend the last set of a muscle beyond failure, or incorporated
              into every rep of a set for maximum time in the most anabolic part
              of the range of motion.
            </li>
            <li>
              Common mistakes include losing control during partial reps and not
              limiting the range of motion enough.
            </li>
            <li>
              Long length partials should be combined with full range of motion
              exercises for optimal results in hypertrophy training.
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <Microscope className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Scientific Rationale</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm overflow-hidden underline">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/37015016/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/37015016/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/34616309/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/34616309/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/23625461/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/23625461/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/35819335/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/35819335/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://www.researchgate.net/publication/325298118_Triceps_Brachii_Muscle_Strength_and_Architectural_Adaptations_with_Resistance_Training_Exercises_at_Short_or_Long_Fascicle_Length"
              }
            >
              <li>
                https://www.researchgate.net/publication/325298118_Triceps_Brachii_Muscle_Strength_and_Architectural_Adaptations_with_Resistance_Training_Exercises_at_Short_or_Long_Fascicle_Length
              </li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/33009197/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/33009197/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/36828324/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/36828324/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/37015016/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/37015016/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/33465838/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/33465838/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/33977835/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/33977835/</li>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://pubmed.ncbi.nlm.nih.gov/31034463/"}
            >
              <li>https://pubmed.ncbi.nlm.nih.gov/33977835/</li>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://www.ecss2006.com/ASP/CONGRESS/TOOLS/SCIENTIFIC_PROGRAMME/Session_Data.asp?myTitleShort=OP-BM25"
              }
            >
              <li>
                https://www.ecss2006.com/ASP/CONGRESS/TOOLS/SCIENTIFIC_PROGRAMME/Session_Data.asp?myTitleShort=OP-BM25
              </li>
            </a>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-indigo-100 rounded-2xl p-1">
              <EarthLock className="text-indigo-600 h-5 w-5" />
            </div>
            <p className="text-2xl font-semibold">Sources</p>
          </div>
          <ul className="mt-1 list-disc px-8 text-sm overflow-hidden underline">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={"https://jeffnippard.com/"}
            >
              <li>https://jeffnippard.com/</li>
            </a>
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
