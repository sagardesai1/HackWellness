import Image from "next/image";
import PeterAttiaImage from "@/images/AuthorImages/PeterAttia.jpeg";
import { Post } from "@/types/Post";
import Link from "next/link";
import PeterAttiaWorkout from "@/images/PeterAttiaImages/PeterAttiaWorkout.jpg";

const posts: Post[] = [
  {
    id: 1,
    title: "Fitness Protocol",
    href: "peter-attia/peter-attia-fitness-protocol",
    description:
      "Peter Attia's fitness protocol for longevity includes stability, strength, zone 2, V02 Max, and the Attia Rule. Here's a look at Peter Attia's workout routine.",
    category: "Fitness",
    articleImage: PeterAttiaWorkout,
    articleImageAlt: "Peter Attia workout",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto min-h-screen max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center lg:max-w-none">
          <Image
            src={PeterAttiaImage}
            alt="Peter Attia"
            className="h-24 w-24 rounded-full bg-gray-50"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Articles on Peter Attia
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to elevate your routines with expert Peter Attia's
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
