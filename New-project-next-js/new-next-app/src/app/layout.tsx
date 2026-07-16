import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";
import Navbar from "./componend/navbar";
import Fother from "./componend/fother";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
title:{
default:"nazanin Page",
template :"%s | Nazanin Page",
absolute: "Nazanin page"
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Fother/>
        </body>
    </html>
  );
}
  