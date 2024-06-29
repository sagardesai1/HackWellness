"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import BryanJohnsonAvatar from "@/images/AuthorImages/BryanJohnson.jpeg";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import PeterAttiaAvatar from "@/images/AuthorImages/PeterAttia.jpeg";

import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SkillTable from "@/components/SkillTable";
import { fetchGoalByTitle } from "@/database";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import RoutineSheet from "@/components/RoutineSheet";
import {
  Check,
  X,
  CircleCheck,
  CornerRightDown,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import Loading from "@/components/Loading";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface SkillLevel {
  skillLevel: string;
  details: string;
}

interface Author {
  author: string;
  tip: string;
}

interface Myth {
  myth: string;
  rebuttal: string;
}

interface Habit {
  id: string;
  title: string;
  description: string;
  skillLevels: SkillLevel[];
  resourceLinks: string[];
  videoLinks: string[];
  authors: Author[];
  myths: Myth[];
}

interface Goal {
  id: string;
  title: string;
  habits: Habit[];
}

const Goal = ({ params, searchParams }: any) => {
  const [visibleSections, setVisibleSections] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleSectionVisibility = (index: number) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const [isSuccess, setIsSuccess] = useState(false);
  const [goalData, setGoalData] = useState<Goal | null>(null);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<
    { habitId: string; skillLevel: SkillLevel }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGoalByTitle(searchParams.goalTitle);
        setGoalData(data);
        const initialVisibility: { [key: number]: boolean } = {};
        data?.habits.forEach((_, index) => {
          initialVisibility[index] = true;
        });
        setVisibleSections(initialVisibility);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchGoalByTitle, searchParams]);

  const handleSaveSuccess = (success: boolean) => {
    setIsSuccess(success);
  };

  const getAvatarImage = (author: string) => {
    switch (author) {
      case "Andrew Huberman":
        return AndrewHubermanAvatar;
      case "Bryan Johnson":
        return BryanJohnsonAvatar;
      case "Peter Attia":
        return PeterAttiaAvatar;
      default:
        return AndrewHubermanAvatar; // default or a placeholder image if none matches
    }
  };

  // const DaysOfTWeek: React.FC = () => {
  //   const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  //   const [selectedDays, setSelectedDays] = useState<string[]>([]);

  //   const toggleDay = (day: string) => {
  //     setSelectedDays((prevSelectedDays) =>
  //       prevSelectedDays.includes(day)
  //         ? prevSelectedDays.filter((d) => d !== day)
  //         : [...prevSelectedDays, day]
  //     );
  //   };

  //   return (
  //     <div className="space-x-1">
  //       {daysOfWeek.map((day) => (
  //         <Button
  //           key={day}
  //           onClick={() => toggleDay(day)}
  //           className={`px-2 py-2  ${
  //             selectedDays.includes(day)
  //               ? "bg-indigo-600 text-white focus:bg-indigo-600"
  //               : "bg-white text-black border border-input hover:bg-indigo-400 hover:text-white focus:bg-indigo-600 "
  //           }`}
  //         >
  //           {day}
  //         </Button>
  //       ))}
  //     </div>
  //   );
  // };

  const handleSelectionChange = (
    habitId: string,
    selectedSkillLevel: string
  ) => {
    setSelectedSkillLevels((prev) => {
      const newSkillLevel = goalData?.habits
        .find((habit) => habit.id === habitId)
        ?.skillLevels.find((sl) => sl.skillLevel === selectedSkillLevel);

      if (newSkillLevel) {
        // Remove any existing selection for the same habit
        const filtered = prev.filter((item) => item.habitId !== habitId);
        return [...filtered, { habitId, skillLevel: newSkillLevel }];
      }
      return prev;
    });
  };

  const sortSkillLevels = (skillLevels: SkillLevel[]) => {
    const order = ["beginner", "intermediate", "advanced"];
    return skillLevels.sort(
      (a, b) => order.indexOf(a.skillLevel) - order.indexOf(b.skillLevel)
    );
  };

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

  if (!goalData) {
    return <Loading />;
  }

  return (
    <div className="w-full py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {searchParams?.goalTitle}
        </p>
      </div>
      <div className="space-y-44 mt-20">
        {goalData?.habits.map((habit, habitIndex) => (
          <div key={habitIndex} className="flex flex-col w-10/12 m-auto">
            <div className="flex flex-col space-y-10">
              <div className="">
                <div
                  className="pb-4 flex flex-row justify-between items-end border-b hover:cursor-pointer"
                  onClick={() => toggleSectionVisibility(habitIndex)}
                >
                  <p className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                    {habit.title}
                  </p>
                  {visibleSections[habitIndex] ? (
                    <ChevronDown />
                  ) : (
                    <ChevronUp />
                  )}
                </div>
                <p className=" text-gray-500 text-lg dark:text-gray-400 mt-2">
                  {habit.description}
                </p>
              </div>
              {visibleSections[habitIndex] && (
                <>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl mb-4">
                      Tips from experts
                    </p>
                    <div className="space-y-4">
                      {habit.authors.map((author, authorIndex) => (
                        <div key={authorIndex} className="flex space-x-8 px-4">
                          <Avatar className="bg-white text-black size-9 mt-1">
                            <Image
                              src={getAvatarImage(author.author)}
                              alt={author.author}
                              width={100}
                              height={100}
                              className="rounded-full"
                            />
                          </Avatar>
                          <div className="flex flex-col text-lg">
                            <p className="text-gray-500 italic">
                              "{author.tip}"
                            </p>
                            <div className="flex space-x-3">
                              <p className="font-semibold">- {author.author}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl mb-4">
                      Common Myths
                    </p>
                    <div className="space-y-4">
                      {habit.myths.map((myth, mythIndex) => (
                        <div key={mythIndex} className="flex space-x-4 px-4">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <Badge
                                variant="outline"
                                className="relative flex items-center gap-2 bg-red-500 text-white mt-2 p-2 py-2 rounded-full pl-6"
                              >
                                <div className="absolute left-0 -translate-x-1/2 transform flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg shadow-red-600/50 border-4 border-red-500">
                                  <X className="w-5 h-5 text-red-500" />
                                </div>
                                <p className="tracking-wide font-md w-14 text-center">
                                  MYTH
                                </p>
                              </Badge>
                              <p className="font-semibold pl-6 text-lg">
                                {myth.myth}
                              </p>
                            </div>
                            <div className="flex items-start space-x-2 text-lg">
                              <Badge
                                variant="outline"
                                className="relative flex items-center gap-2 bg-green-500 text-white mt-2 p-2 py-2 rounded-full pl-6"
                              >
                                <div className="absolute left-0 -translate-x-1/2 transform flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg shadow-green-600/50 border-4 border-green-500">
                                  <Check className="w-5 h-5 text-green-500" />
                                </div>
                                <p className="tracking-wide font-md w-14 text-center">
                                  FACT
                                </p>
                              </Badge>
                              <p className="font-md text-gray-500 pl-6">
                                {myth.rebuttal}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <SkillTable
                      data={sortSkillLevels(habit.skillLevels).map(
                        (skillLevel) => ({
                          skillLevel: skillLevel.skillLevel,
                          habit: skillLevel.details,
                        })
                      )}
                      onSelectionChange={(selectedSkillLevel) => {
                        if (selectedSkillLevel !== null) {
                          handleSelectionChange(habit.id, selectedSkillLevel);
                        }
                      }}
                    />
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl mb-2">
                      References
                    </p>
                    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {habit.videoLinks.map((url, index) => (
                        <ResponsiveIframe key={index} src={url} />
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <p className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl mb-4">
                      Links
                    </p>
                    <ul className="mt-1 list-disc px-8 text-lg underline space-y-2">
                      {habit.resourceLinks.map((link, index) => (
                        <li key={index}>{link}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedSkillLevels.length > 0 ? (
        <>
          <RoutineSheet
            selectedSkillLevels={selectedSkillLevels}
            onSaveSuccess={handleSaveSuccess}
          />
          {isSuccess && (
            <div
              className="flex shadow-lg fixed top-20 right-3 items-center space-x-2 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <CircleCheck className="w-5 h-5 text-green-800" />
              <div className="flex items-center">
                <p className="font-medium">
                  Your routine has been saved successfully under&nbsp;
                </p>
                <Link href="/home/routines">
                  <p className="font-medium underline">Routines tab.</p>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex gap-1 fixed bottom-14 right-10 bg-indigo-400 text-white px-5 py-4 rounded-full shadow-lg z-50 ">
                Add to routine
                <Plus />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="p-2 font-semibold">Make a selection on the table</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        //   <button className="flex gap-1 fixed bottom-14 right-10 bg-indigo-400 text-white px-5 py-4 rounded-full shadow-lg z-50 ">
        //   Add to routine
        //   <Plus />
        // </button>
      )}
    </div>
  );
};

export default Goal;
