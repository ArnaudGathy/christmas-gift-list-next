"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { routes } from "@/constants/routes";
import { mountainsOfChristmas } from "@/constants/fonts";
import snowflake from "../public/snowflake.svg";

export default function PageHeading() {
  const pathname = usePathname();

  const routeName = pathname.split("/")[1];
  const currentPage = routeName === "" ? routes.home : routes[routeName];

  if (!currentPage) {
    return null;
  }

  return (
    <div
      className={`
      ${mountainsOfChristmas.className} antialiased text-red-500 font-semibold text-3xl
       p-4 flex gap-2 items-center`}
    >
      <Image src={snowflake} height={24} width={24} alt="Flocon de neige" />
      <span>{currentPage.heading}</span>
    </div>
  );
}