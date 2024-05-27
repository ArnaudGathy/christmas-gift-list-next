import "@/app/globals.css";
import Image from "next/image";
import TabBar from "@/components/TabBar";
import PageHeading from "@/components/PageHeading";
import { inter } from "@/lib/constants/fonts";
import background from "@/public/background.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Liste de cadeaux de Noël</title>
      </head>
      <body
        className={`${inter.className} bg-green-100 text-white p-0 m-0 flex justify-center`}
      >
        <Image
          className="z-[-1]"
          src={background}
          alt="Forêt de sapin"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <main className="relative h-svh flex flex-col max-w-[800px] flex-1">
          <PageHeading />
          <div className="relative overflow-auto flex flex-1 p-4">
            {children}
          </div>
          <TabBar />
        </main>
      </body>
    </html>
  );
}
