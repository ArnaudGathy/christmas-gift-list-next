import { ReactNode } from "react";

type ListContainerProps = {
  title: ReactNode;
  children: ReactNode;
};

export default function ListContainer({ title, children }: ListContainerProps) {
  return (
    <div className="rounded-lg bg-gradient-to-r from-red-600/95 to-red-500/75 shadow-lg">
      <div className="border-b border-b-white/30 px-4 py-2">{title}</div>
      <div className="space-y-2 p-2">{children}</div>
    </div>
  );
}
