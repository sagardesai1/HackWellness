"use client";
import React from "react";
import AndrewHubermanImage from "@/images/AuthorImages/AndrewHuberman.jpg";
import BryanJohnsonImage from "@/images/AuthorImages/BryanJohnson.jpeg";
import JeffNippardImage from "@/images/AuthorImages/JeffNippard.webp";
import PeterAttiaImage from "@/images/AuthorImages/PeterAttia.jpeg";

import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Expert {
  id: number;
  name: string;
  page: string;
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Andrew Huberman",
    page: "AndrewHuberman",
    imageUrl: AndrewHubermanImage,
    title: "PhD",
    description:
      "A neuroscientist and tenured professor in the Department of Neurobiology and by courtesy, Psychiatry and Behavioral Sciences at Stanford School of Medicine.",
  },
  {
    id: 2,
    name: "Bryan Johnson",
    page: "BryanJohnson",
    imageUrl: BryanJohnsonImage,
    title: "Founder/CEO of Kernel",
    description:
      "An American entrepreneur, venture capitalist, writer and author. He is the founder and CEO of Kernel, a company creating devices that monitor and record brain activity, and OS Fund, a venture capital firm that invests in early-stage science and technology companies.",
  },
  {
    id: 3,
    name: "Jeff Nippard",
    page: "JeffNippard",
    imageUrl: JeffNippardImage,
    title: "Bodybuilder/Powerlifter",
    description:
      "A Canadian natural pro bodybuilder and internationally-qualified powerlifter with a BSc in biochemistry/chemistry and a passion for science.",
  },
  {
    id: 4,
    name: "Peter Attia",
    page: "PeterAttia",
    imageUrl: PeterAttiaImage,
    title: "MD",
    description:
      "The founder of Early Medical, a medical practice that applies the principles of Medicine 3.0 to patients with the goal of lengthening their lifespan and simultaneously improving their healthspan. He is the host of The Drive, one of the most popular podcasts covering the topics of health and medicine.",
  },
  // Add more experts as needed
];

const ExpertsPage: React.FC = () => {
  const router = useRouter();
  const handleClick = (authorName: string) => {
    router.push(`/experts/${authorName}`);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row py-16 mx-6">
      {/* Left Section */}
      <div className="w-full md:w-1/3 p-10 md:fixed md:h-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Trusted Experts
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We've hand-selected highly qualified and experienced experts in their
          respective fields to provide you with the best BioHacking material.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 bg-white p-10 space-y-16 overflow-auto md:ml-[33.33%]">
        {experts.map((expert) => (
          <div
            key={expert.id}
            onClick={() => handleClick(expert.page)}
            className="flex flex-row items-center justify-between cursor-pointer hover:bg-gray-100 pb-10 border-b"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center w-full">
              <Image
                src={expert.imageUrl}
                alt={expert.name}
                className="object-cover w-48 h-56 rounded-xl overflow-hidden mb-4 md:mb-0 md:mr-4"
              />
              <div className="flex flex-col md:px-0 lg:px-5 md:w-2/3 lg:w-3/4 flex-grow">
                <div className="mb-4">
                  <p className="text-lg font-semibold leading-7 text-gray-900">
                    {expert.name}
                  </p>
                  <p className="text-md leading-8 text-gray-600">
                    {expert.title}
                  </p>
                </div>
                <p className="text-md leading-8 text-gray-600">
                  {expert.description}
                </p>
              </div>
            </div>
            <ChevronRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsPage;
