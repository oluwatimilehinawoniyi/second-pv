import { ReactNode } from "react";
import Top from "../UI/Top";
import Footer from "../UI/Footer";

interface LayoutProps {
  display: ReactNode;
  rightBar?: ReactNode;
  leftBar?: ReactNode;
}

export default function GridLayout({
  display,
  rightBar,
  leftBar,
}: LayoutProps) {
  return (
    <main className="layout relative w-full">
      <Top />
      <section className="left sticky top-0 h-screen">{leftBar}</section>
      <section className="mx-auto flex size-full flex-col gap-8 px-4 pb-14 md:px-0">
        {display}
      </section>
      <section className="right sticky top-0 h-screen">{rightBar}</section>
      <Footer />
    </main>
  );
}
