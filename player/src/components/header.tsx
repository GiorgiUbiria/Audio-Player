import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import NameIcon from "./name-icon";
import ToggleMenuIcon from "./toggle-menu-icon";
import DashboardIcon from "./dashboard-icon";
import OrdersIcon from "./orders-icon";
import ProductsIcon from "./products-icon";
import CustomersIcon from "./customers-icon";
import SettingsIcon from "./settings-icon";
import HeaderAvatar from "./header-avatar";
import Breadcrumbs from "./breadcrumbs";

export default async function Header() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="sm:hidden" size="icon" variant="outline">
              <ToggleMenuIcon />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-xs" side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                href="#"
              >
                <NameIcon />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                href="#"
              >
                <DashboardIcon />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 text-foreground"
                href="#"
              >
                <OrdersIcon />
                Orders
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                href="#"
              >
                <ProductsIcon />
                Products
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                href="#"
              >
                <CustomersIcon />
                Customers
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                href="#"
              >
                <SettingsIcon />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumbs />
        <div className="relative ml-auto flex-1 md:grow-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <Input
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            placeholder="Search..."
            type="search"
          />
        </div>
        <HeaderAvatar />
      </header>
    </div>
  );
}
