import ListContainer from "@/components/list/ListContainer";

const SkeletonLine = () => (
  <div className="flex h-10 items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="min-w-4">
        <div className="h-4 animate-pulse rounded-md bg-white/30"></div>
      </div>
      <div className="h-4 w-[200px] animate-pulse rounded-md bg-white/30"></div>
    </div>
    <div className="h-4 w-6 animate-pulse rounded-md bg-white/30"></div>
  </div>
);

export default function ListSkeleton() {
  return (
    <ListContainer
      title={
        <div className="flex h-8 flex-col justify-center">
          <div className="h-6 w-full animate-pulse rounded-md bg-white/30"></div>
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
      </div>
    </ListContainer>
  );
}
