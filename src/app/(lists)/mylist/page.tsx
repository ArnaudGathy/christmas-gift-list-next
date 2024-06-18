import { routes } from "@/lib/constants/routes";
import Link from "next/link";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/solid";
import MyListForOtherPeople from "@/app/(lists)/mylist/MyListForOtherPeople";
import { Suspense } from "react";
import ListSkeleton from "@/components/list/ListSkeleton";
import MyList from "@/app/(lists)/mylist/MyList";

export default function Home() {
  return (
    <div className="relative h-full">
      <Link href={routes.add.href} className="hidden md:block">
        <Button secondary className="flex items-center gap-2 md:w-auto">
          <PlusIcon className="size-5" /> Ajouter un cadeau
        </Button>
      </Link>

      <div className="flex flex-1 flex-col gap-4 pb-[5.5rem] pt-4 md:pb-4">
        <Suspense fallback={<ListSkeleton />}>
          <MyList />
        </Suspense>
        <Suspense fallback={<ListSkeleton />}>
          <MyListForOtherPeople />
        </Suspense>
      </div>

      <Link
        href={routes.add.href}
        className="fixed bottom-[84px] right-4 md:right-[calc(50%-400px+2rem)] md:hidden"
      >
        <Button secondary round>
          <PlusIcon className="size-8" />
        </Button>
      </Link>
    </div>
  );
}
