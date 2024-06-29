"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AliAdbaalAvatar from "@/images/AuthorImages/AliAdbaal.jpeg";
import BryanJohnsonAvatar from "@/images/AuthorImages/BryanJohnson.jpeg";
import AndrewHubermanAvatar from "@/images/AuthorImages/AndrewHuberman.jpg";
import MaxLugavereAvatar from "@/images/AuthorImages/MaxLugavere.jpeg";
import DanielAmenAvatar from "@/images/AuthorImages/DanielAmen.webp";
import MarkHymanAvatar from "@/images/AuthorImages/MarkHyman.jpeg";
import PeterAttiaAvatar from "@/images/AuthorImages/PeterAttia.jpeg";
import RhondaPatrickAvatar from "@/images/AuthorImages/RhondaPatrick.png";

import { cn } from "@/lib/utils";

import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

function Convert() {
  return (
    <div className="flex flex-col items-center my-8">
      {/* <div className="relative w-full max-w-md">
        <Input
          className="w-full rounded-full py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200"
          placeholder="Search routines..."
          type="search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div> */}
      <p className="text-3xl font-bold">Explore Supplements</p>
      <div className="flex ml-auto gap-4 px-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Influencer
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Byran</DropdownMenuItem>
            <DropdownMenuItem>Luke</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Category
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Beauty sleep</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <MoonIcon className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold">Magnesium</h3>
            </div>
            <div className="flex items-center justify-end mt-2">
              <Badge
                className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-white"
                variant="outline"
              >
                Sleep
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Andrew Huberman, Ph.D</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Live Momentous</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Natural Stacks</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Having not just Magnesium Threonate, but also 2 other highly
                  bioavailable forms of magnesium ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="items-center justify-end gap-2 flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={AndrewHubermanAvatar}
                  alt={"Andrew Huberman"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <BrainIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold">Omega 3</h3>
            </div>
            <div className="flex items-center justify-end mt-2 gap-2">
              <Badge
                className="bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-white"
                variant="outline"
              >
                Cognition
              </Badge>
              <Badge
                className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-white"
                variant="outline"
              >
                Mental Health
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Andrew Huberman, Ph.D</p>
              <p className="font-semibold">Bryan Johnson</p>
              <p className="font-semibold">Peter Attia, MD</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Live Momentous</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Nordic</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Nordic Naturals Omega 3 has one of the highest concentration
                  ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="items-center justify-end gap-2 flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={AndrewHubermanAvatar}
                  alt={"Andrew Huberman"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={BryanJohnsonAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={PeterAttiaAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <ShieldIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Vitamin C</h3>
            </div>
            <div className="flex items-center justify-end mt-2">
              <Badge
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white"
                variant="outline"
              >
                Immunity
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Bryan Johnson</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Solgar</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>The Synergy Company</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Pure synergy uses a naturally occurring source of vitamin C
                  which is superior ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="justify-end	flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={BryanJohnsonAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <ShieldIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Ashwagandha</h3>
            </div>
            <div className="flex items-center justify-end mt-2 gap-2">
              <Badge
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white"
                variant="outline"
              >
                Immunity
              </Badge>
              <Badge
                className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-white"
                variant="outline"
              >
                Mental Health
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Peter Attia, MD</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Himalaya</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Gaia Herbs</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Gaia’s Ashwagandha Root Liquid Phyto-Caps offers the power of
                  a concentrated liquid ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="justify-end	flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={PeterAttiaAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <CloudLightningIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold">Green powder</h3>
            </div>
            <div className="flex items-center justify-end mt-2">
              <Badge
                className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-white"
                variant="outline"
              >
                Energy
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Andrew Huberman, Ph.D</p>
              <p className="font-semibold">Peter Attia, MD</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>AG1</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Ancient Nutrition</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Ancient Nutrition’s Green powder is certified organic which
                  means ingredients are grown ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="items-center justify-end gap-2 flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={AndrewHubermanAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={PeterAttiaAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <BoneIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Vitamin D + K</h3>
            </div>
            <div className="flex items-center justify-end mt-2">
              <Badge
                className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-white"
                variant="outline"
              >
                Bone
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Rhonda Patrick, Ph.D</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Life Extension</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Pure Therapro Rx</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Therapro vitamin d + k has a liquid liposomal delivery system
                  that makes it ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="items-center justify-end gap-2 flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={RhondaPatrickAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <ShieldIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Curcumin</h3>
            </div>
            <div className="flex items-center justify-end mt-2 gap-2">
              <Badge
                className="bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-white"
                variant="outline"
              >
                Cognition
              </Badge>
              <Badge
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white"
                variant="outline"
              >
                Immunity
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Peter Attia, MD</p>
              <p className="font-semibold">Rhonda Patrick, Ph.D</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Natural Factors</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Garden of Life</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Garden of Life Turmeric offers a high concentration of
                  curcuminoids (95%) with a black pepper ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="items-center justify-end gap-2 flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={PeterAttiaAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={RhondaPatrickAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <DumbbellIcon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Whey Protein Powder</h3>
            </div>
            <div className="flex items-center justify-end mt-2">
              <Badge
                className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-white"
                variant="outline"
              >
                Muscle
              </Badge>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Peter Attia, MD</p>
              <p className="font-semibold">Rhonda Patrick, Ph.D</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Live Momentous</li>
                </ul>
              </a>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Our Pick</p>
              <a
                href="#"
                className="underline text-gray-500 text-sm mt-1 dark:text-gray-400"
              >
                <ul className="list-disc pl-4 text-sm">
                  <li>Raw Organic Whey</li>
                </ul>
              </a>
              <div className="mt-2">
                <p className="font-semibold text-sm">Scientific rationale</p>
                <p className="text-sm">
                  Having not just Magnesium Threonate, but also 2 other highly
                  bioavailable forms of magnesium ...
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                Click to show more
              </p>
            </div>
            <div className="items-center justify-end gap-2 flex">
              <Avatar className={cn("bg-white text-black size-6")}>
                <Image
                  src={AndrewHubermanAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <SkullIcon className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold">Morning Mediation</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting the skin, hair, and nails, such as eczema,
              psoriasis, and skin cancer.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <DessertIcon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold">Rise and Shine</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting the digestive system, such as irritable bowel
              syndrome, Crohn's disease, and ulcers.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <HeartIcon className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold">Perfect Night Routine</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting the blood, such as anemia, leukemia, and
              bleeding disorders.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <EyeIcon className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold">
                Testosterone Enhancement Sleep Routine
              </h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting the eyes, such as cataracts, glaucoma, and
              macular degeneration.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <EarIcon className="w-6 h-6 text-lime-500" />
              </div>
              <h3 className="text-xl font-bold">Otological Conditions</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting the ears, such as hearing loss, tinnitus, and
              ear infections.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <DiamondIcon className="w-6 h-6 text-fuchsia-500" />
              </div>
              <h3 className="text-xl font-bold">Dental Conditions</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting the teeth, gums, and oral cavity, such as
              cavities, gum disease, and oral cancer.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <BrainIcon className="w-6 h-6 text-violet-500" />
              </div>
              <h3 className="text-xl font-bold">Mental Health Conditions</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions affecting mental and emotional well-being, such as
              depression, anxiety, and bipolar disorder.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <BiohazardIcon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold">Infectious Diseases</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions caused by pathogens, such as viruses, bacteria, and
              fungi, including COVID-19, influenza, and HIV/AIDS.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <RadiationIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold">Oncological Conditions</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400">
              Conditions involving the abnormal growth and spread of cells,
              including various types of cancer.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                <RecycleIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold">Reproductive Conditions</h3>
            </div>
            <p className="text-gray-500 mt-2 dark:text-gray-400" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Convert;

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function AirVentIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </svg>
  );
}

function BiohazardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="11.9" r="2" />
      <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
      <path d="m8.9 10.1 1.4.8" />
      <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
      <path d="m15.1 10.1-1.4.8" />
      <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
      <path d="M12 13.9v1.6" />
      <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
      <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
      <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
    </svg>
  );
}

function BoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </svg>
  );
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function DessertIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8" />
      <path d="M3.2 14.8a9 9 0 0 0 17.6 0" />
    </svg>
  );
}

function DiamondIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  );
}

function EarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </svg>
  );
}

function EggIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
    </svg>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function RadiationIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12h0.01" />
      <path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" />
      <path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" />
      <path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" />
    </svg>
  );
}

function RecycleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}

function ShieldOffIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 2 20 20" />
      <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
      <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
    </svg>
  );
}

function SkullIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M8 20v2h8v-2" />
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
    </svg>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function DumbbellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function CloudLightningIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}
