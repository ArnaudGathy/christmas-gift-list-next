"use client";

import Link from "next/link";
import { menuItems } from "@/lib/constants/routes";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { logout } from "@/lib/actions/auth";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="absolute left-0 top-0 hidden w-full bg-[#052913] p-3 md:block">
      <div className="mx-auto flex max-w-[800px] justify-between px-4">
        <div className="flex gap-12">
          {menuItems.map(({ tabName, href, icon: Icon }) => (
            <Link href={href} key={href}>
              <div
                className={clsx(
                  "flex items-center gap-2 transition-transform active:scale-90",
                  {
                    "text-green-600": pathname !== href,
                    "font-bold text-green-100": pathname === href,
                  },
                )}
              >
                <Icon className="size-4" />
                {tabName}
              </div>
            </Link>
          ))}
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="flex gap-2 text-green-600 transition-transform active:scale-90"
          >
            <ArrowLeftStartOnRectangleIcon className="size-5" /> Se déconnecter
          </button>
        </form>
      </div>
    </div>
  );
}
