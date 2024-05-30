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
      ${mountainsOfChristmas.className} antialiased text-red-600 font-semibold text-3xl
       p-4 flex gap-2 items-center`}
    >
      <Image src={snowflake} height={24} width={24} alt="Flocon de neige" />
      <span>{currentPage?.heading ?? "On s'est perdu ?"}</span>
    </div>
  );
}
