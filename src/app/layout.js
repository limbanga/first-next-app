import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";
import INavbar from "./_components/INavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lim's house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <nav>
            <INavbar />
          </nav>
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
