import React from "react";
import Image from "next/image";
import Link from "next/link";
import DiscordImage from "@/images/logos/discord.jpg";

function page() {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Join the Community
      </h2>
      <div className="justify-center align-center text-center">
        <a
          target="_blank"
          href={"https://discord.gg/UyHn2cps"}
          className="mb-8 lg:mb-16 font-light text-center text-indigo-500 dark:text-gray-400 sm:text-xl underline"
        >
          https://discord.gg/UyHn2cps
        </a>
      </div>
      <div className="mt-16 flow-root sm:mt-24">
        <div className="-m-2 rounded-xl  lg:-m-4 lg:rounded:2xl lg:p-4">
          <Image
            // unoptimized
            src={DiscordImage}
            alt="HackWellness Discord"
            width={2432}
            height={1442}
            className="rounded-xl shadow-2xl "
          />
        </div>
      </div>
    </div>
  );
}

export default page;
