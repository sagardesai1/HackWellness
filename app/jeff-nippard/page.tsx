import Image from "next/image";
import JeffNippardImage from "@/images/AuthorImages/JeffNippard.webp";
import { Post } from "@/types/Post";
import Link from "next/link";

const posts: Post[] = [
  {
    id: 1,
    title: "Smartest Muscle Building Technique",
    href: "jeff-nippard/jeff-nippard-smartest-muscle-building-technique",
    description:
      "Jeff Nippard covers the most evidence-based hypertrophy technique to date: long-length partials. We’ll look into the science behind them, how to perform them effectively, and three common mistakes people make.",
    category: "Fitness",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto min-h-screen max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center">
          <Image
            src={JeffNippardImage}
            alt="Jeff Nippard"
            className="h-24 w-24 rounded-full overflow-hidden bg-gray-50 "
            style={{
              objectFit: "cover",
            }}
          />
          <div className="flex flex-col ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Articles on Jeff Nippard
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
