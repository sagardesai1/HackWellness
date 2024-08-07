import Image from "next/image";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import BryanJohnsonWakingUp from "@/images/BryanJohnsonImages/BryanJohnsonWakingUp.png";
import BryanJohnsonRedLightTherapy from "@/images/BryanJohnsonImages/BryanJohnsonRedLightTherapy.webp";
import BryanJohnsonPouringOliveOil from "@/images/BryanJohnsonImages/BryanJohnsonPouringOliveOil.jpg";
import BryanJohnsonWaterFlossing from "@/images/BryanJohnsonImages/BryanJohnsonWaterFlossing.jpeg";

import { Post } from "@/types/Post";
import Link from "next/link";

const posts: Post[] = [
  {
    id: 1,
    title: "Morning Routine",
    href: "bryan-johnson/bryan-johnson-morning-routine",
    description:
      "Bryan Johnson’s morning routine takes him a staggering 3-4 hours to finish. Here are all of the steps in the exact order that he does them in.",
    category: "Productivity",
    articleImage: BryanJohnsonWakingUp,
    articleImageAlt: "Bryan Johnson morning routine",
  },
  {
    id: 2,
    title: "Red Light Therapy Protocol",
    href: "bryan-johnson/bryan-johnson-red-light-therapy-protocol",
    description:
      "Wondering if red light therapy lives up to the hype? Research suggests it might be worth it as it has shown to have multiple benefits such as improved mitochondrial function, reduced inflammation, and supported collagen production. Here’s a look at Bryan Johnson’s protocol to help you find the right product and dosing:",
    category: "Anti Aging",
    articleImage: BryanJohnsonRedLightTherapy,
    articleImageAlt: "Bryan Johnson red light therapy",
  },
  {
    id: 3,
    title: "Olive Oil Criteria",
    href: "bryan-johnson/bryan-johnson-olive-oil-criteria",
    description:
      "What’s the best food you can eat to slow down your speed of aging? According to Bryan Johnson olive oil is it. Studies have shown that it helps with weight management, blood pressure, blood sugar levels, cholesterol, heart health, brain health, and mood.",
    category: "Anti Aging",
    articleImage: BryanJohnsonPouringOliveOil,
    articleImageAlt: "Bryan Johnson olive oil",
  },
  {
    id: 4,
    title: "Oral routine",
    href: "bryan-johnson/bryan-johnson-oral-routine",
    description:
      "Bryan Johnson’s oral routine has helped him fix his rotting teeth and reverse age his gums such that his dentist now tells him he has the gums of a healthy teenager. If you’re looking to up your dental game, follow these steps for a healthier, brighter smile.",
    category: "Oral care",
    articleImage: BryanJohnsonWaterFlossing,
    articleImageAlt: "Bryan Johnson flossing",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto min-h-screen max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center lg:max-w-none">
          <Image
            src={BryanJohnsonImage}
            alt="Bryan Johnson"
            className="h-24 w-24 rounded-full bg-gray-50"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Articles on Bryan Johnson
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to elevate your routines with expert Bryan Johnson's
              advice.
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-10 space-y-16 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <Link
              href={{
                pathname: post.href,
              }}
              key={post.id}
              className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0 lg:space-x-8"
            >
              <div className="w-full h-72 lg:w-1/3 lg:h-72 overflow-hidden rounded-lg">
                <Image
                  src={post.articleImage}
                  alt={post.articleImageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-semibold leading-8 text-gray-900 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <div className="flex items-center gap-x-4 text-xs mt-2">
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </div>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-8 text-gray-600">
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
