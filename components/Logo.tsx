// import LogoImage from "@logos/black.svg";

import Link from "next/link";
import Image from "next/image";
import logoNoBackground from "@/images/landingpage/hack-wellness-high-resolution-logo-transparent.png";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-48 h-6">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={logoNoBackground}
            alt="HackWellness"
            // className="dark:filter dark:invert"
          ></Image>
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
