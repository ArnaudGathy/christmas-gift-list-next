"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { routes } from "@/lib/constants/routes";
import { mountainsOfChristmas } from "@/lib/constants/fonts";
import snowflake from "../../public/snowflake.svg";
import { logout } from "@/lib/actions/auth";
import Button from "@/components/Button";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";

export default function PageHeading() {
  const pathname = usePathname();

  const splittedRoute = pathname.split("/");
  const routeSuffix = splittedRoute[splittedRoute.length - 1];
  const currentPage = routes[routeSuffix];

  return (
    <div
      className={`
       flex items-center justify-between p-4`}
    >
      <div className="flex gap-2">
        <Image src={snowflake} height={24} width={24} alt="Flocon de neige" />
        <span
          className={`${mountainsOfChristmas.className} bg-gradient-to-b from-red-700 to-red-400 bg-clip-text text-3xl 
        font-semibold text-transparent antialiased`}
        >
          {currentPage?.heading ?? "On s'est perdu ?"}
        </span>
      </div>

      <form action={logout}>
        <Button type="submit" round secondary>
          <ArrowLeftStartOnRectangleIcon className="size-5" />
        </Button>
      </form>
    </div>
  );
}
