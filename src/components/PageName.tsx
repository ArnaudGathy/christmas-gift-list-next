"use client";

import { mountainsOfChristmas } from "@/lib/constants/fonts";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/constants/routes";

export default function PageName() {
  const pathname = usePathname();

  const splittedRoute = pathname.split("/");
  const routeSuffix = splittedRoute[splittedRoute.length - 1];
  const currentPage = routes[routeSuffix];

  return (
    <span
      className={`${mountainsOfChristmas.className} text-3xl font-semibold 
        text-red-600 antialiased`}
    >
      {currentPage?.heading ?? "On s'est perdu ?"}
    </span>
  );
}
