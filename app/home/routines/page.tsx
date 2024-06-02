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
import TimFerrissAvatar from "@/images/AuthorImages/TimFerriss.jpeg";

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
      <p className="text-3xl font-bold">Explore Science-Backed Routines</p>
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
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={BryanJohnsonAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">Reverse Gum Disease</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Bryan Johnson</p>
              <Badge
                className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-white"
                variant="outline"
              >
                Oral care
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              Blueprint oral care protocol for healthy teeth and gums.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>Use Waterpik along the gum line and around each tooth.</li>
                <li>
                  Use DrTungs floss (captures 25% more plaque than thinner
                  floss).
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={AndrewHubermanAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">7 Step Morning Routine</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Andrew Huberman, Ph.D</p>
              <Badge
                className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-white"
                variant="outline"
              >
                Energy
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              A morning ritual designed to supercharge your day from the get-go.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>Hydrate upon waking with water + LMNT electrolytes.</li>
                <li>
                  Get 5-10 mins of direct sunlight within 1 hour of waking.
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={AliAdbaalAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">
                Evidence-Based Sleep Routine
              </h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Ali Abdaal</p>
              <Badge
                className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-white"
                variant="outline"
              >
                Sleep
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              9 step evening routine to get an amazing night of sleep.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Dim lights (bright lights at night signal sunlight to the body
                  which triggers ...
                </li>
                <li>
                  Turn on the AC or fan (body temperature needs to decrease ...
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={MarkHymanAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">10 Day Detox Routine</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Mark Hyman, MD</p>
              <Badge
                className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-white"
                variant="outline"
              >
                Gut
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              Detox protocol for a healthy gut and blood sugar levels.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>Brisk walk (or other moderate exercise) for 30 mins.</li>
                <li>
                  Take Chromium, Zinc, alpha lipoic acid, cinnamon, green tea
                  catechins, fish oil, vitamin D3 ...
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={DanielAmenAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">Healthy Brain Routine</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Daniel Amen, MD</p>
              <Badge
                className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-white"
                variant="outline"
              >
                Brain
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              Tips for maintaining brain health.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Get 7-9 hours of high quality sleep. Increase sleep quality by
                  taking magnesium threonate, L-theanine, or 5-HTP.
                </li>
                <li>
                  Exercise brain for 15 minutes a day by learning, reading,
                  playing a musical instrument ...
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={AndrewHubermanAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">
                Testosterone Enhancement Workout Routine
              </h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Andrew Huberman, Ph.D</p>
              <Badge
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white"
                variant="outline"
              >
                Fitness
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              A practical and natural approach to hormone health for men.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Engage in resistance training with major compound movements
                  like squats, deadlifts, and chin-ups ...
                </li>
                <li>
                  Take tongkat ali, fadogia agrestis, zinc and boron at the
                  following dosages ...
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={BryanJohnsonAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">Anti Aging Routine</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Bryan Johnson</p>
              <Badge
                className="bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-white"
                variant="outline"
              >
                Skin care
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              Blueprint anti-aging protocol for healthy skin and youthful.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Wash face with CeraVe (2% salicylic acid) to remove any
                  blemishes.
                </li>
                <li>
                  Apply Adipeau Face Cream (adds fat cells to promote youthful
                  appearance).
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className={cn("bg-white text-black")}>
                <Image
                  src={TimFerrissAvatar}
                  alt={"User name"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Avatar>
              <h3 className="text-xl font-bold">Fueling Productivity</h3>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-bold">Tim Ferriss</p>
              <Badge
                className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-white"
                variant="outline"
              >
                Self care
              </Badge>
            </div>
            <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
              A daily routine for winning the day and self improvement.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Routine:</p>
              <ul className="list-disc pl-4 text-sm">
                <li>Practice transcendental meditation for 20 minutes.</li>
                <li>
                  5 minutes of journaling on the following: Things you’re
                  grateful for, things that would make the day great, daily
                  affirmations ...
                </li>
              </ul>

              <p className="text-gray-500 text-sm mt-1 dark:text-gray-400">
                Click to show more
              </p>
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
