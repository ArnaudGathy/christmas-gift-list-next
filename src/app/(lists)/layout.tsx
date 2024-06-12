import PageHeading from "@/components/PageHeading";
import TabBar from "@/components/TabBar";

export default function ListsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeading />
      <div className="relative h-dvh overflow-auto px-4">{children}</div>
      <TabBar />
    </>
  );
}
