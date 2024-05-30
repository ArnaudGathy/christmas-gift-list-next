"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { menuItems } from "@/lib/constants/routes";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="bg-black/50 w-full flex justify-around gap-4 p-2">
      {menuItems.map(({ tabName, href, icon: Icon }) =>
        Icon && tabName ? (
          <Link href={href} key={href}>
            <div
              className={clsx(
                "flex flex-col items-center active:scale-90 transform transition-transform",
                {
                  "text-green-600": pathname !== href,
                  "text-sky-300": pathname === href,
                },
              )}
            >
              <Icon className="size-8" />
              <span className="text-sm">{tabName}</span>
            </div>
          </Link>
        ) : null,
      )}
    </div>
  );
}