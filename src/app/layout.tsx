import { Roboto } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={clsx(`${roboto.className} bg-red-500 text-white`)}>
        {children}
      </body>
    </html>
  );
}
