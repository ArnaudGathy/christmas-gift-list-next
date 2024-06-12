import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { inter } from "@/lib/constants/fonts";
import background from "../../public/background.svg";
import { Bounce, ToastContainer } from "react-toastify";

import Favicon from "@/app/favicon.ico";

export const metadata = {
  title: "Les cadeaux du père Gathy",
  description: "Liste de cadeaux de Noël",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} relative m-0 bg-green-100 p-0 text-white md:flex md:justify-center`}
      >
        <Image
          className="z-[-1]"
          src={background}
          alt="Forêt de sapins"
          fill
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <main className="flex h-dvh max-w-[800px] flex-1 flex-col">
          {children}
        </main>
        <ToastContainer
          position="top-center"
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
      </body>
    </html>
  );
}
