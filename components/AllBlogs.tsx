import Image from "next/image";
import AndrewHubermanAtGym from "@/images/AndrewHubermanImages/AndrewHubermanAtGym.jpeg";
import AndrewHubermanSleeping from "@/images/AndrewHubermanImages/AndrewHubermanSleeping.jpeg";
import AndrewHubermanDrinkingYerba from "@/images/AndrewHubermanImages/AndrewHubermanDrinkingYerba.png";
import AndrewHubermanPortrait from "@/images/AndrewHubermanImages/AndrewHubermanPortrait.jpeg";
import BryanJohnsonWakingUp from "@/images/BryanJohnsonImages/BryanJohnsonWakingUp.png";
import BryanJohnsonRedLightTherapy from "@/images/BryanJohnsonImages/BryanJohnsonRedLightTherapy.webp";
import BryanJohnsonPouringOliveOil from "@/images/BryanJohnsonImages/BryanJohnsonPouringOliveOil.jpg";
import BryanJohnsonWaterFlossing from "@/images/BryanJohnsonImages/BryanJohnsonWaterFlossing.jpeg";
import PeterAttiaWorkout from "@/images/PeterAttiaImages/PeterAttiaWorkout.jpg";

import { Post } from "@/types/Post";
import Link from "next/link";

const posts: Post[] = [
  {
    id: 1,
    title: "Fitness Protocol",
    href: "andrew-huberman/andrew-huberman-fitness-protocol",
    description:
      "Andrew Huberman’s fitness protocol is designed to help you achieve your fitness goals efficiently. He’s been following this protocol for over 20 years. Here's a breakdown of how you can implement this protocol.",
    category: "Fitness",
    articleImage: AndrewHubermanAtGym,
    articleImageAlt: "Andrew Huberman gym",
  },
  {
    id: 2,
    title: "Fitness Protocol",
    href: "peter-attia/peter-attia-fitness-protocol",
    description:
      "Peter Attia's fitness protocol for longevity includes stability, strength, zone 2, V02 Max, and the Attia Rule. Here's a look at Peter Attia's workout routine.",
    category: "Fitness",
    articleImage: PeterAttiaWorkout,
    articleImageAlt: "Peter Attia workout",
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
    title: "Red Light Therapy Protocol",
    href: "bryan-johnson/bryan-johnson-red-light-therapy-protocol",
    description:
      "Wondering if red light therapy lives up to the hype? Research suggests it might be worth it as it has shown to have multiple benefits such as improved mitochondrial function, reduced inflammation, and supported collagen production. Here’s a look at Bryan Johnson’s protocol to help you find the right product and dosing:",
    category: "Anti Aging",
    articleImage: BryanJohnsonRedLightTherapy,
    articleImageAlt: "Bryan Johnson red light therapy",
  },
  {
    id: 5,
    title: "Sleep Protocol",
    href: "andrew-huberman/andrew-huberman-sleep-protocol",
    description:
      "Andrew Huberman’s sleep protocol can help you level up your health, productivity, and overall well-being. Here are Andrew Huberman’s top ten tips for improving your sleep quality.",
    category: "Sleep",
    articleImage: AndrewHubermanSleeping,
    articleImageAlt: "Andrew Huberman sleep",
  },
  {
    id: 6,
    title: "Morning Routine",
    href: "bryan-johnson/bryan-johnson-morning-routine",
    description:
      "Bryan Johnson’s morning routine takes him a staggering 3-4 hours to finish. Here are all of the steps in the exact order that he does them in.",
    category: "Productivity",
    articleImage: BryanJohnsonWakingUp,
    articleImageAlt: "Bryan Johnson morning routine",
  },
  {
    id: 7,
    title: "ADHD Protocol",
    href: "andrew-huberman/andrew-huberman-adhd-protocol",
    description:
      "Ever been told you have ADHD? If you have difficulty sustaining attention, impulsivity, and high emotionality it’s possible that you do. Andrew Huberman’s ADHD protocol relies on maintaining high levels of dopamine to manage ADHD.",
    category: "Mental Health",
    articleImage: AndrewHubermanPortrait,
    articleImageAlt: "Andrew Huberman portrait",
  },
  {
    id: 8,
    title: "Yerba Mate Criteria",
    href: "andrew-huberman/andrew-huberman-yerba-mate-criteria",
    description:
      "Want a healthier alternative to coffee? According to Andrew Huberman yerba mate is the perfect choice. He has found that the energy boost from yerba mate is more sustained than that from coffee. Moreover, he does not have trouble falling asleep from drinking yerba mate in the late afternoon (at 2 or 3 pm), even though he usually sleeps on the earlier side (around 10 pm).",
    category: "Mental Health",
    articleImage: AndrewHubermanDrinkingYerba,
    articleImageAlt: "Andrew Huberman yerba mate",
  },
  {
    id: 9,
    title: "Oral routine",
    href: "bryan-johnson/bryan-johnson-oral-routine",
    description:
      "Bryan Johnson’s oral routine has helped him fix his rotting teeth and reverse age his gums such that his dentist now tells him he has the gums of a healthy teenager. If you’re looking to up your dental game, follow these steps for a healthier, brighter smile.",
    category: "Oral care",
    articleImage: BryanJohnsonWaterFlossing,
    articleImageAlt: "Bryan Johnson flossing",
  },
  {
    id: 10,
    title: "Sauna Protocol",
    href: "andrew-huberman/andrew-huberman-sauna-protocol",
    description:
      "Andrew Huberman’s sauna protocols are tailored to specific health outcomes such as boosting cardiovascular health, improving mood, and stimulating growth hormone release. Let's dive into how to incorporate saunas into your routine based on each of these goals.",
    category: "Cardiovascular Health",
    articleImage: AndrewHubermanPortrait,
    articleImageAlt: "Andrew Huberman portrait",
  },
  {
    id: 11,
    title: "Tongkat Ali Protocol",
    href: "andrew-huberman/andrew-huberman-tongkat-ali-protocol",
    description:
      "Andrew Huberman recommends taking Tongkat Ali to increase testosterone levels and overall vitality. Here are Huberman’s key tips on how to consume this powerful herb for optimal results.",
    category: "Testosterone",
    articleImage: AndrewHubermanPortrait,
    articleImageAlt: "Andrew Huberman portrait",
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto min-h-screen max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row space-x-12 items-center lg:max-w-none">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expert Protocols
            </h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to elevate your routines with expert advice.
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
