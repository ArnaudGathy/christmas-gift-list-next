import Image from "next/image";
import snowflake from "../../public/snowflake.svg";
import { logout } from "@/lib/actions/auth";
import Button from "@/components/Button";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";
import PageName from "@/components/PageName";

export default function PageHeading() {
  return (
    <div
      className={`
       flex items-center justify-between p-4`}
    >
      <div className="flex gap-2">
        <Image src={snowflake} height={24} width={24} alt="Flocon de neige" />
        <PageName />
      </div>
      <form action={logout}>
        <Button type="submit" round secondary>
          <ArrowLeftStartOnRectangleIcon className="size-5" />
        </Button>
      </form>
    </div>
  );
}
