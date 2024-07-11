import { StaticImageData } from "next/image";
import AndrewHubermanAtGym from "@/images/AndrewHubermanImages/AndrewHubermanAtGym.jpeg";
import AndrewHubermanSleeping from "@/images/AndrewHubermanImages/AndrewHubermanSleeping.jpeg";
import PeterAttiaFarmerCarry from "@/images/PeterAttiaImages/PeterAttiaWorkout.jpg";
import BryanJohnsonRedLightTherapy from "@/images/BryanJohnsonImages/BryanJohnsonRedLightTherapy.webp";

export interface Article {
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
  readLength: string;
}

export interface RelatedArticlesProps {
  articles: Article[];
}

export const articles: Article[] = [
  {
    href: "/andrew-huberman/andrew-huberman-fitness-protocol",
    title: "Andrew Huberman’s Fitness Protocol",
    description:
      "Andrew Huberman’s Foundational Fitness protocol is designed to help you achieve your fitness goals efficiently. He’s been following this protocol for over 20 years. Here's a breakdown of how you can implement this protocol into your routine.",
    image: AndrewHubermanAtGym,
    readLength: "12 minutes",
  },
  {
    href: "/andrew-huberman/andrew-huberman-sleep-protocol",
    title: "Andrew Huberman's Sleep Protocol",
    description:
      "Getting a good night's sleep is essential for our health, productivity, and overall well-being. Here are Andrew Huberman’s top ten tips for improving your sleep quality.",
    image: AndrewHubermanSleeping,
    readLength: "8 minutes",
  },
  {
    href: "/peter-attia/peter-attia-fitness-protocol",
    title: "Peter Attia’s Fitness Protocol",
    description:
      "Peter Attia's fitness protocol for longevity includes stability, strength, zone 2, V02 Max, and the Attia Rule. Here's a look at Peter Attia's workout routine.",
    image: PeterAttiaFarmerCarry,
    readLength: "4 minutes",
  },
  {
    href: "/bryan-johnson/bryan-johnson-red-light-therapy-protocol",
    title: "Bryan Johnson’s Red Light Therapy Protocol",
    description:
      "Wondering if red light therapy lives up to the hype? Research suggests it might be worth it as it has shown to have multiple benefits such as improved mitochondrial function, reduced inflammation, and supported collagen production. Here’s a look at Bryan Johnson’s protocol to help you find the right product and dosing.",
    image: BryanJohnsonRedLightTherapy,
    readLength: "5 minutes",
  },
];
