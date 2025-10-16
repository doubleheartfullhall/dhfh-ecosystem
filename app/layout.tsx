import type { Metadata } from "next";
import { DM_Serif_Display, Nunito_Sans, Noto_Sans_SC } from "next/font/google";
import type { ReactNode } from "react";

import AppProvider from "@/components/auth/AppProvider";

import "./globals.css";

const displayFont = DM_Serif_Display({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const sansFont = Nunito_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const hanFont = Noto_Sans_SC({ subsets: ["latin"], display: "swap", variable: "--font-han" });

export const metadata: Metadata = {
  title: "DHFH Ecosystem",
  description:
    "Double Heart Full Hall (DHFH) – Bilingual learning ecosystem blending books, play labs, and AI-powered storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} ${hanFont.variable}`}>
      <body className={`${sansFont.className} font-sans antialiased bg-porcelain text-dhfh-ink`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
