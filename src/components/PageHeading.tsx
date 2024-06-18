import Image from "next/image";
import snowflake from "../../public/snowflake.svg";
import { logout } from "@/lib/actions/auth";
import Button from "@/components/Button";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";
import PageName from "@/components/PageName";
import { clsx } from "clsx";

export default function PageHeading({ noPadding }: { noPadding?: boolean }) {
  return (
    <div
      className={clsx("flex items-center justify-between p-4 ", {
        "md:mt-12": !noPadding,
      })}
    >
      <div className="flex gap-2">
        <Image src={snowflake} height={24} width={24} alt="Flocon de neige" />
        <PageName />
      </div>
      <form action={logout} className="block md:hidden">
        <Button type="submit" round secondary>
          <ArrowLeftStartOnRectangleIcon className="size-5" />
        </Button>
      </form>
    </div>
  );
}
