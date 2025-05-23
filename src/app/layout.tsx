import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const adamina = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PathSnap",
  description: "A link shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${adamina.variable} antialiased relative min-h-screen flex flex-col bg-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
