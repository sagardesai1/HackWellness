import React from "react";
import Image from "next/image";
import Nutrition from "@/images/GoalImages/Nutrition.jpeg";
import Fitness from "@/images/GoalImages/Fitness.jpeg";
import MentalHealth from "@/images/GoalImages/MentalHealth.jpeg";
import Sleep from "@/images/GoalImages/Sleep.jpeg";
import Link from "next/link";

const ScrollableCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Nutrition",
      src: Nutrition,
    },
    {
      id: 2,
      title: "Fitness",
      src: Fitness,
    },
    {
      id: 3,
      title: "Sleep",
      src: Sleep,
    },
    {
      id: 4,
      title: "Mental Health",
      src: MentalHealth,
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-10">
      {cardData.map((card) => (
        <Link
          href={{
            pathname: `goals/${card.title}`,
            query: { goalTitle: card.title },
          }}
          key={card.id}
          className="overflow-hidden rounded-lg border border-input shadow-md"
        >
          <div className="relative h-72">
            <Image
              src={card.src}
              alt="HackWellness Goals"
              fill={true}
              sizes="100% 100%"
              style={{
                objectFit: "cover",
              }}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl text-center font-semibold">{card.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ScrollableCards;
