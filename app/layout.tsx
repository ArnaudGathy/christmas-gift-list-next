import "@/app/globals.css";
import Image from "next/image";
import TabBar from "@/components/TabBar";
import PageHeading from "@/components/PageHeading";
import { inter } from "@/constants/fonts";
import background from "../public/background.svg";

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
        className={`${inter.className} relative bg-green-100 text-red-500 h-svh flex flex-col`}
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
        <PageHeading />
        <div className="relative overflow-scroll flex flex-1 p-4">
          {children}
        </div>
        <TabBar />
      </body>
    </html>
  );
}
