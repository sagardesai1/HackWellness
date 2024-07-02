import Image from "next/image";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import { Post } from "@/types/Post";
import Link from "next/link";

const posts: Post[] = [
  {
    id: 1,
    title: "Morning Routine",
    href: "bryan-johnson/bryan-johnson-morning-routine",
    description:
      "Have you ever wondered how Bryan Johnson, the visionary entrepreneur dedicated to anti-aging, kickstarts his day? Here are all of his suggestions in the exact order that he does them from his 3-4 hour morning routine.",
    category: "Productivity",
  },
  {
    id: 2,
    title: "Olive Oil Criteria",
    href: "bryan-johnson/bryan-johnson-olive-oil-criteria",
    description:
      "Ever wanted to know the #1 best food you can eat to slow down your speed of aging and reserve it? According to Bryan Johnson, the key to reverse aging is extra virgin olive. Studies have shown that it helps with weight management, blood pressure, blood sugar levels, cholesterol, heart health, brain health, and mood.",
    category: "Anti Aging",
  },
  {
    id: 3,
    title: "Oral Care Routine",
    href: "bryan-johnson/bryan-johnson-oral-care-routine",
    description:
      "How Bryan Johnson fixed his terrible oral health in just 7 steps.",
    category: "Oral Care",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center">
          <Image
            src={BryanJohnsonImage}
            alt="Bryan Johnson"
            className="h-24 w-24 rounded-full bg-gray-50 "
          />
          <div className="flex flex-col ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Articles on Bryan Johnson
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to elevate your routines with expert advice.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 space-y-16 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              href={{
                pathname: post.href,
              }}
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="group relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </div>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
