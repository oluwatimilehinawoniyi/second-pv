import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer, Top } from "./components";
import { ThemeProvider } from "next-themes";

const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oluwatimilehin awoniyi",
  description: "A personal portfolio of Oluwatimilehin Awoniyi",
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
          <Top />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
