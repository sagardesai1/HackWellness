import Image from "next/image";
import PeterAttiaImage from "@/images/AuthorImages/PeterAttia.jpeg";
import { Post } from "@/types/Post";
import Link from "next/link";

const posts: Post[] = [
  {
    id: 1,
    title: "Fitness Protocol",
    href: "peter-attia/peter-attia-fitness-protocol",
    description:
      "Peter Attia is a longevity expert, author of book Outlive, and host of podcast The Drive. He is a medical doctor and has his own private practice Early Medical where he works on improving the longevity of his patients.",
    category: "Fitness",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center">
          <Image
            src={PeterAttiaImage}
            alt="Peter Attia"
            className="h-24 w-24 rounded-full overflow-hidden bg-gray-50 "
            style={{
              objectFit: "cover",
            }}
          />
          <div className="flex flex-col ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Articles on Peter Attia
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
