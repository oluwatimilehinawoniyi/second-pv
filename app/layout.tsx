"use client";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Oluwatimilehin Awoniyi",
  description: "A personal portfolio of Oluwatimilehin Awoniyi",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon-light.png",
        href: "/images/icon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon-dark.png",
        href: "/images/icon-dark.png",
      },
    ],
  },
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
