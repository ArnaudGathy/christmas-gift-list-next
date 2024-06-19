import MyGiftsLists from "@/app/(lists)/gifts/MyGiftsLists";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  return (
    <div className="my-4 flex-1">
      <Suspense fallback={<LoadingSpinner />}>
        <MyGiftsLists />
      </Suspense>
    </div>
  );
}
