export interface Article {
  href: string;
  title: string;
  description: string;
  image: string;
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
    image:
      "https://plungereviews.com/wp-content/uploads/2023/11/AndrewHubermanTattoo-scaled.jpg",
    readLength: "12 minutes",
  },
  {
    href: "/andrew-huberman/andrew-huberman-sleep-protocol",
    title: "Andrew Huberman's Sleep Protocol",
    description:
      "Getting a good night's sleep is essential for our health, productivity, and overall well-being. Here are Andrew Huberman’s top ten tips for improving your sleep quality.",
    image:
      "https://acadia.optum.com/content/dam/content-ecosystem/healthier-you/raw-images/healthy-living/sb2-healthysleep-web-1200x800-72_11.jpg",
    readLength: "8 minutes",
  },
  {
    href: "/peter-attia/peter-attia-fitness-protocol",
    title: "Peter Attia’s Fitness Protocol",
    description:
      "Peter Attia is a longevity expert, author of book Outlive, and host of podcast The Drive. He is a medical doctor and has his own private practice Early Medical where he works on improving the longevity of his patients.",
    image:
      "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F979dd659-080c-4924-b183-3a9c2ff9d928.jpg?crop=5000%2C2813%2C0%2C260&resize=1200",
    readLength: "4 minutes",
  },
  {
    href: "/bryan-johnson/bryan-johnson-red-light-therapy-protocol",
    title: "Bryan Johnson’s Red Light Therapy Protocol",
    description:
      "Wondering if red light therapy lives up to the hype? Research suggests it might be worth it as it has shown to have multiple benefits such as improved mitochondrial function, reduced inflammation, and supported collagen production. Here’s a look at Bryan Johnson’s protocol to help you find the right product and dosing.",
    image:
      "https://api.time.com/wp-content/uploads/2023/09/Bryan-Johnson-Blueprint-6.jpeg",
    readLength: "5 minutes",
  },
];
