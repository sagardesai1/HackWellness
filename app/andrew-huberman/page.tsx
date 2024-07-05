import Image from "next/image";
import AndrewHubermanImage from "@/images/AuthorImages/AndrewHuberman.jpg";
import { Post } from "@/types/Post";
import Link from "next/link";

const posts: Post[] = [
  {
    id: 1,
    title: "Fitness Protocol",
    href: "andrew-huberman/andrew-huberman-fitness-protocol",
    description:
      "Andrew Huberman’s Foundational Fitness protocol is designed to help you achieve your fitness goals efficiently. He’s been following this protocol for over 20 years.",
    category: "Fitness",
  },
  {
    id: 2,
    title: "Sleep Protocol",
    href: "andrew-huberman/andrew-huberman-sleep-protocol",
    description:
      "Getting a good night's sleep is essential for our health, productivity, and overall well-being. Here are Andrew Huberman’s top ten tips for improving your sleep quality.",
    category: "Sleep",
  },
  {
    id: 2,
    title: "ADHD Protocol",
    href: "andrew-huberman/andrew-huberman-adhd-protocol",
    description:
      "Ever been told you have ADHD? If you have difficulty sustaining attention, impulsivity, and high emotionality it’s possible that you do. Also, being able to hyper-focus on tasks that capture your interest is another tell-tale ADHD trait. Huberman suggests that the key to managing ADHD relies on ensuring high levels of dopamine.",
    category: "Mental Health",
  },
  {
    id: 3,
    title: "Quickly Improve Focus",
    href: "andrew-huberman/andrew-huberman-quickly-improve-focus",
    description:
      "How to quickly improve focus. The key principal is mental focus follows visual focus.",
    category: "Mental Health",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl min-h-screen px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center">
          <Image
            src={AndrewHubermanImage}
            alt="Andrew Huberman"
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
