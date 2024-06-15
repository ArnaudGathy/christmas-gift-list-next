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
      className={`${mountainsOfChristmas.className} bg-gradient-to-b from-red-700 to-red-400 bg-clip-text text-3xl 
        font-semibold text-transparent antialiased`}
    >
      {currentPage?.heading ?? "On s'est perdu ?"}
    </span>
  );
}
