import Image from "next/image";
import PeterAttiaImage from "@/images/AuthorImages/PeterAttia.jpeg";
import AndrewHubermanImage from "@/images/AuthorImages/AndrewHuberman.jpg";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import { Post, Author } from "@/types/Post";
import Link from "next/link";

const AndrewHubermanPosts: Post[] = [
  {
    id: 1,
    title: "Fitness Protocol",
    href: "andrew-huberman/andrew-huberman-fitness-protocol",
    component: "AndrewHubermanFitnessProtocol",
    description:
      "Andrew Huberman’s Foundational Fitness protocol is designed to help you achieve your fitness goals efficiently. He’s been following this protocol for over 20 years.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: "Fitness",
  },
  {
    id: 2,
    title: "Quickly Improve Focus",
    href: "andrew-huberman/andrew-huberman-quickly-improve-focus",
    component: "AndrewHubermanQuicklyImproveFocus",
    description:
      "How to quickly improve focus. The key principal is mental focus follows visual focus.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: "Mental Health",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center">
          <Image
            src={AndrewHubermanImage}
            alt=""
            className="h-24 w-24 rounded-full bg-gray-50 "
          />
          <div className="flex flex-col ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Articles on Andrew Huberman
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to elevate your routines with expert advice.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 space-y-16 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {AndrewHubermanPosts.map((post) => (
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
