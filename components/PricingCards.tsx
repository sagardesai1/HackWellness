import { CheckIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  // {
  //   name: "Starter",
  //   id: null,
  //   href: "#",
  //   priceMonthly: null,
  //   description: "Get chatting right away with anyone, anywhere!",
  //   features: [
  //     "20 Message Chat Limit in Chats",
  //     "2 Participants limit in Chat",
  //     "3 Chat Rooms limit",
  //     "Support 2 lanuages",
  //     "48-hour support response time",
  //   ],
  // },
  {
    name: "Lifetime membership",
    id: "lifetime",
    href: "#",
    priceMonthly: "$29",
    description: "Limited time early access discount",
    features: [
      "Explore Proven Habits",
      "Vetted Expert Recommendations",
      "Verified Source Citations",
      "Exclusive Discord Community Access",
      "Lifetime Updates",
    ],
  },
];
function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto max-w-md ">
        {tiers.map((tier, index) => (
          <div
            key={tier.id}
            className={`flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 ${
              index === 1 ? "border-2 border-indigo-600" : "" // Add purple border to the second card
            }`}
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className={`text-base font-semibold leading-2 ${
                  index === 1 ? "text-indigo-600" : ""
                } `}
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="line-through text-xl font-semibold leading-7 text-gray-600">
                      $49
                    </span>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-600">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {redirect ? (
              <Link
                href="/home/goals"
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointed disabled:opacity-80"
              >
                Get free access
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
