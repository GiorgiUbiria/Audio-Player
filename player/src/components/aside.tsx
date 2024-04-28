"use client";

import Link from "next/link";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";
import NameIcon from "./name-icon";
import DashboardIcon from "./dashboard-icon";
import OrdersIcon from "./orders-icon";
import ProductsIcon from "./products-icon";
import CustomersIcon from "./customers-icon";
import { SettingsIcon } from "lucide-react";

function Aside() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Link
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            href="/"
          >
            <NameIcon />
            <span className="sr-only">AudioHub</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                href="/player"
              >
                <DashboardIcon />
                <span className="sr-only">Player</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Player</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                href="/player/convert"
              >
                <ProductsIcon />
                <span className="sr-only">Convert</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Convert</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                href="/friends"
              >
                <CustomersIcon />
                <span className="sr-only">Friends</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Friends</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                href="#"
              >
                <SettingsIcon />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}

export default Aside;
