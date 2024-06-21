"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/firebase";

import AliAdbaalAvatar from "@/images/AuthorImages/AliAdbaal.jpeg";
import BryanJohnsonAvatar from "@/images/AuthorImages/BryanJohnson.jpeg";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import MaxLugavereAvatar from "@/images/AuthorImages/MaxLugavere.jpeg";
import DanielAmenAvatar from "@/images/AuthorImages/DanielAmen.webp";
import MarkHymanAvatar from "@/images/AuthorImages/MarkHyman.jpeg";
import PeterAttiaAvatar from "@/images/AuthorImages/PeterAttia.jpeg";
import RhondaPatrickAvatar from "@/images/AuthorImages/RhondaPatrick.png";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { fetchGoalByTitle } from "@/database";

interface SkillLevel {
  skillLevel: string;
  details: string;
}

interface Author {
  author: string;
  tip: string;
}

interface Habit {
  id: string;
  title: string;
  description: string;
  skillLevels: SkillLevel[];
  resourceLinks: string[];
  videoLinks: string[];
  authors: Author[];
}

interface Goal {
  id: string;
  title: string;
  habits: Habit[];
}

function page() {
  const [goalData, setGoalData] = useState<Goal | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGoalByTitle("Nutrition");
        setGoalData(data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const DaysOfTWeek: React.FC = () => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const toggleDay = (day: string) => {
      setSelectedDays((prevSelectedDays) =>
        prevSelectedDays.includes(day)
          ? prevSelectedDays.filter((d) => d !== day)
          : [...prevSelectedDays, day]
      );
    };

    return (
      <div className="space-x-1">
        {daysOfWeek.map((day) => (
          <Button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-2 py-2  ${
              selectedDays.includes(day)
                ? "bg-indigo-600 text-white focus:bg-indigo-600"
                : "bg-white text-black border border-input hover:bg-indigo-400 hover:text-white focus:bg-indigo-600 "
            }`}
          >
            {day}
          </Button>
        ))}
      </div>
    );
  };

  const SkillTable: React.FC = () => {
    const data = [
      {
        skillLevel: "Beginner",
        habit:
          "Consume at least 40g/day of plant protein. Aim for 1.2-1.6g of protein per kg/day.",
      },
      {
        skillLevel: "Intermediate",
        habit:
          "Consume at least 50g/day of plant protein. Aim for 1.2-1.6g of protein per kg/day.",
      },
      {
        skillLevel: "Advanced",
        habit:
          "Consume at least 60g/day of plant protein. Aim for 1.2-1.6g of protein per kg/day.",
      },
    ];

    return (
      <div className="overflow-x-auto">
        <div className="min-w-full border border-separate rounded-lg">
          <div className="bg-gray-100">
            <div className="flex">
              <div className="px-6 py-3 w-1/6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skill Level
              </div>
              <div className="px-6 py-3 w-2/3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Habit
              </div>
              <div className="px-6 py-3 w-1/6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Selection
              </div>
            </div>
          </div>
          <RadioGroup defaultValue="none">
            {data.map((row, index) => (
              <div key={index} className="flex bg-white border-b">
                <div className="px-6 py-4 w-1/6 text-sm font-medium text-gray-900">
                  {row.skillLevel}
                </div>
                <div className="px-6 py-4 w-2/3 text-sm text-gray-700">
                  {row.habit}
                </div>
                <div className="px-6 py-4 w-1/6 text-center">
                  <RadioGroupItem
                    id={`radio-${index}`}
                    value={row.skillLevel.toLowerCase()}
                    className="text-indigo-600 data-[state=unchecked]:border-gray-400 data-[state=checked]:border-indigo-600"
                  />
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    );
  };
  const videoUrls: string[] = [
    "https://www.youtube.com/embed/csubiPlvFWk?si=3jQEOQ1FbFvVLEUB&amp;controls=0",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example2&amp;controls=0",
    "https://www.youtube.com/embed/ScMzIvxBSi4?si=example3&amp;controls=0",
    // Add more video URLs as needed
  ];

  const ResponsiveIframe = ({ src }: any) => {
    return (
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="absolute top-0 left-0 w-full h-full border rounded-lg"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </AspectRatio>
    );
  };

  return (
    <div className="w-full py-5">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nutrition
        </p>
      </div>
      {goalData?.habits.map((habit, habitIndex) => (
        <div key={habitIndex} className="flex flex-col w-3/4 mt-12 m-auto">
          <div className="flex flex-col space-y-20">
            <div className="flex flex-col space-y-6">
              <div className="">
                <p className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-1">
                  {habit.title}
                </p>

                <p className=" text-gray-500 text-sm dark:text-gray-400 mt-1">
                  {habit.description}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold tracking-tighter sm:text-xl md:text-xl mb-3">
                  Tips from experts
                </p>
                <div className="space-y-4">
                  {habit.authors.map((author, authorIndex) => (
                    <div key={authorIndex} className="flex space-x-4 px-4">
                      <Avatar className={cn("bg-white text-black size-6 mt-1")}>
                        <Image
                          src={AndrewHubermanAvatar}
                          alt={"User name"}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </Avatar>

                      <div className="flex flex-col">
                        <p className="text-gray-500 italic">{author.tip}</p>
                        <div className="flex space-x-3">
                          <p className="font-semibold">- {author.author}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <SkillTable
                  data={habit.skillLevels.map((skillLevel) => ({
                    skillLevel: skillLevel.skillLevel,
                    habit: skillLevel.details,
                  }))}
                />
              </div>
              <div className="">
                <p className="text-xl font-bold tracking-tighter sm:text-xl md:text-xl mb-1">
                  References
                </p>
                <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {habit.videoLinks.map((url, index) => (
                    <ResponsiveIframe key={index} src={url} />
                  ))}
                </div>
              </div>
              <div className="">
                <p className="text-xl font-bold tracking-tighter sm:text-xl md:text-xl mb-3">
                  Links
                </p>
                <ul className="mt-1 list-disc px-8 text-sm underline space-y-2">
                  {habit.resourceLinks.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex gap-1 fixed bottom-14 right-10 bg-indigo-600 text-white px-5 py-4 rounded-full shadow-lg z-50 hover:bg-indigo-500 focus:outline-none">
            Add to routine
            <Plus />
          </button>
        </SheetTrigger>
        <SheetContent className="flex flex-col overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Confirm your Routine</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-4 mt-4 ">
            <div className="">
              <Input id="name" placeholder="Routine Title" className="" />
            </div>
            <div className="space-y-4 bg-muted/80 rounded-lg p-4 ">
              <div className="flex flex-col">
                <p className="font-bold text-lg">Habit 1</p>
                <p className="text-gray-600 text-sm">
                  Consume at least 40g/day of plant protein. Aim for 1.2-1.6g of
                  protein per kg/day.
                </p>
              </div>
              <div className="space-y-1">
                <p className="">Frequency per week?</p>
                <div className="flex justify-center">
                  <DaysOfTWeek />
                </div>
              </div>
              <div className="space-y-1">
                <p className="">Frequency per day?</p>
                <Input id="hot" type="number" placeholder="2" className="" />
              </div>
              <div className="space-y-1">
                <p className="">Durartions? (minutes)</p>
                <Input id="hot" type="number" placeholder="10" className="" />
              </div>
            </div>
            <div className="space-y-4 bg-muted/80 rounded-lg p-4 ">
              <div className="flex flex-col">
                <p className="font-bold text-lg">Habit 1</p>
                <p className="text-gray-600 text-sm">
                  Consume at least 40g/day of plant protein. Aim for 1.2-1.6g of
                  protein per kg/day.
                </p>
              </div>
              <div className="space-y-1">
                <p className="">Frequency per week?</p>
                <div className="flex justify-center">
                  <DaysOfTWeek />
                </div>
              </div>
              <div className="space-y-1">
                <p className="">Frequency per day?</p>
                <Input id="hot" type="number" placeholder="2" className="" />
              </div>
              <div className="space-y-1">
                <p className="">Durartions? (minutes)</p>
                <Input id="hot" type="number" placeholder="10" className="" />
              </div>
            </div>
          </div>
          <SheetFooter className="flex bottom-14 right-10 ">
            <SheetClose asChild>
              <Button
                className="bg-indigo-600 text-white px-5 py-4 hover:bg-indigo-500 focus:outline-none"
                type="submit"
              >
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default page;
