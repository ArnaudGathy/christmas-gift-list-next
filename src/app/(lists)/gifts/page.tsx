import MyGiftsLists from "@/app/(lists)/gifts/MyGiftsLists";
import { Suspense } from "react";
import ListSkeleton from "@/components/list/ListSkeleton";

export default function Home() {
  return (
    <div className="my-4 flex-1">
      <Suspense fallback={<ListSkeleton />}>
        <MyGiftsLists />
      </Suspense>
    </div>
  );
}
