import Header from "@/components/Header";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="relative flex justify-end mr-20 mt-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Explore</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Authors</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/experts/AndrewHuberman"}>Andrew Huberman</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/experts/BryanJohnson"}>Bryan Johnson</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/experts/JeffNippard"}>Jeff Nippard</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {children}
    </div>
  );
}
