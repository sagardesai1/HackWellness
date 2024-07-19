import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import UpgradeBanner from "./UpgradeBanner";
import React from "react";
import { cn } from "@/lib/utils";
import HeaderSidebar from "./HeaderSidebar";
import { ChevronRight } from "lucide-react";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white border-b dark:bg-gray-900">
      <nav className="flex sm:flex-row items-center py-4 px-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
            </>
          ) : (
            <Link href={"pricing"}>Pricing</Link>
          )}

          <DarkModeToggle /> */}

          <div className="hidden md:flex space-x-4 items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Experts</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 space-y-2 md:w-[200px] lg:w-[250px]">
                      <NavigationMenuLink asChild>
                        <a
                          href={"/andrew-huberman"}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            Andrew Huberman
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href={"/bryan-johnson"}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            Bryan Johnson
                          </div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href={"/peter-attia"}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            Peter Attia
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <UserButton session={session} />
            {/* <Link
              href="/home/goals"
              className="inline-flex items-center rounded-3xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Build Protocol Now
              <ChevronRight className="w-5 h-5" />
            </Link> */}
          </div>
          {/* Show the menu button on small screens */}
          <HeaderSidebar />
        </div>
      </nav>
      {/* <UpgradeBanner /> */}
    </header>
  );
}

export default Header;
