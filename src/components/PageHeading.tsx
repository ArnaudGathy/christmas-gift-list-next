"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { routes } from "@/lib/constants/routes";
import { mountainsOfChristmas } from "@/lib/constants/fonts";
import snowflake from "../../public/snowflake.svg";

export default function PageHeading() {
  const pathname = usePathname();

  const routeName = pathname.split("/")[1];
  const currentPage = routeName === "" ? routes.home : routes[routeName];

  return (
    <div
      className={`
      ${mountainsOfChristmas.className} flex items-center gap-2 p-4
       text-3xl font-semibold text-red-600 antialiased`}
    >
      <Image src={snowflake} height={24} width={24} alt="Flocon de neige" />
      <span>{currentPage?.heading ?? "On s'est perdu ?"}</span>
    </div>
  );
}
