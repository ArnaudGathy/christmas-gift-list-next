import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import TabBar from "@/components/TabBar";
import PageHeading from "@/components/PageHeading";
import { inter } from "@/lib/constants/fonts";
import background from "../../public/background.svg";
import { Bounce, ToastContainer } from "react-toastify";

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
        className={`${inter.className} relative m-0 bg-green-100 p-0 text-white md:flex md:justify-center`}
      >
        <Image
          className="z-[-1]"
          src={background}
          alt="Forêt de sapins"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <main className="flex h-dvh max-w-[800px] flex-1 flex-col">
          <PageHeading />
          <div className="relative h-dvh overflow-auto px-4">{children}</div>
          <TabBar />
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            closeButton={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </main>
      </body>
    </html>
  );
}
