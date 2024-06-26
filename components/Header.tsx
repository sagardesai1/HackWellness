import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import {
  ChevronLeftCircleIcon,
  ChevronRight,
  MenuIcon,
  MessagesSquareIcon,
  Trophy,
} from "lucide-react";
import UpgradeBanner from "./UpgradeBanner";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

          <div className="hidden md:flex space-x-4">
            <Button className={"border-0"} variant={"outline"}>
              <Link href={"/experts"}>Experts</Link>
            </Button>
            <UserButton session={session} />
            <Link
              href="/home/goals"
              className="inline-flex items-center rounded-3xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Dashboard
              <svg
                className="w-6 h-6 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
          {/* Show the menu button on small screens */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="shrink-0 md:hidden"
                  size="icon"
                  variant="outline"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <div className="mb-2 pb-6 border-b">
                    <Logo />
                  </div>
                  <div className="space-y-6 mt-4">
                    <Link
                      href="/home/goals"
                      className="flex items-center justify-between space-x-2"
                    >
                      <span>Dashbord</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/home/goals"
                      className="flex items-center justify-between space-x-2"
                    >
                      <span>Sign in</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/experts"
                      className="flex items-center justify-between space-x-2"
                    >
                      <span>Experts</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <UpgradeBanner />
    </header>
  );
}

export default Header;
