import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  let pathnames = pathname.split("/").filter((x) => x);

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const name = capitalizeFirstLetter(value)

          return isLast ? (
            <BreadcrumbItem key={value}>
              <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem key={value}>
              <BreadcrumbLink asChild>
                <Link href={href}>{name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
