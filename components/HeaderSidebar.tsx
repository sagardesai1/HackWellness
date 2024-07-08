"use client";

import { useState } from "react";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ChevronUp, MenuIcon } from "lucide-react";
import Link from "next/link";

import React from "react";
import Logo from "./Logo";

function HeaderSidebar() {
  const [isExpertsDropdownOpen, setIsExpertsDropdownOpen] = useState(false);

  const toggleExpertsDropdown = () => {
    setIsExpertsDropdownOpen(!isExpertsDropdownOpen);
  };
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
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
                <span>Dashboard</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/home/goals"
                className="flex items-center justify-between space-x-2"
              >
                <span>Sign in</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <div className="flex flex-col space-y-4">
                <div
                  className="flex items-center justify-between space-x-2 cursor-pointer"
                  onClick={toggleExpertsDropdown}
                >
                  <span>Experts</span>
                  {isExpertsDropdownOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
                {isExpertsDropdownOpen && (
                  <div className="pl-4 flex flex-col space-y-6 ">
                    <Link
                      href="/andrew-huberman"
                      className="flex items-center justify-between space-x-2"
                    >
                      <span>Andrew Huberman</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/bryan-johnson"
                      className="flex items-center justify-between space-x-2"
                    >
                      <span>Bryan Johnson</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/peter-attia"
                      className="flex items-center justify-between space-x-2"
                    >
                      <span>Peter Attia</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default HeaderSidebar;
