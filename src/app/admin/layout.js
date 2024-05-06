import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin dashboard",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
