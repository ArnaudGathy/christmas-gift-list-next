import Filters from "@/components/list/Filters";
import { Suspense } from "react";
import OtherPeoplesLists from "@/app/(lists)/others/OtherPeoplesLists";
import ListSkeleton from "@/components/list/ListSkeleton";

type HomeProps = {
  searchParams?: {
    showUnclaimed?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="mb-4 flex flex-1 flex-col gap-4">
      <Suspense fallback={<div className="min-h-[28px]"></div>}>
        <Filters />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <OtherPeoplesLists
          showUnclaimed={searchParams?.showUnclaimed === "true"}
        />
      </Suspense>
    </div>
  );
}
