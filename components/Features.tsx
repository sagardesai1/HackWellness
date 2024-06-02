import FeaturesImage from "@/images/landingpage/DarkSupplementsZoomedScreenshot.png";
import Image from "next/image";

const features = [
  {
    name: "Expert-Approved Routines.",
    description:
      "Follow 50+ proven routines designed by the world’s leading experts in biohacking to elevate your daily performance and well-being.",
    icon: "CloudArrowUpIcon",
  },
  {
    name: "Thoroughly Researched Supplements.",
    description:
      "Discover clean, high-quality supplements vetted for their purity.",
    icon: "LockClosedIcon",
  },
  {
    name: "Biohackers Community.",
    description:
      "Join a Discord of like minded individuals who share their insider tips and advice to help you achieve your health goals.",
    icon: "ServerIcon",
  },
];

function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Optimize now
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your go-to knowledge hub for all things wellness
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’ve spent hundreds of hours curating protocols and supplements
                from top biohackers so that you don’t have to.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={FeaturesImage}
            alt="Product screenshot"
            className="w-full sm:w-[48rem] md:w-[57rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
