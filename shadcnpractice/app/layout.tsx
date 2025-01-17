import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MySidebar from "@/components/MySidebar";
import MyHeader from "@/components/MyHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <div className="hidden lg:flex min-w-[300px] min-h-screen">
          <MySidebar />
        </div>
        <main className="grid h-full w-full">
          <MyHeader />
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
