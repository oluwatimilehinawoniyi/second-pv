"use client";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer, GridLayout, Top } from "./components";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Oluwatimilehin Awoniyi",
  description: "A personal portfolio of Oluwatimilehin Awoniyi",
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon1.svg",
  //       type: "image/svg+xml",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon2.svg",
  //       type: "image/svg+xml",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.className} ${playfair.className} relative min-h-screen`}
      >
        <ThemeProvider enableSystem={true} defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
