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
      <section className="left sticky top-0 hidden md:block lg:h-screen">
        {leftBar}
      </section>
      <section className="mx-auto size-full px-4 pb-14 pt8 md:px-0 md:pt-0">
        {display}
      </section>
      <section className="right sticky top-0 hidden md:block lg:h-screen">
        {rightBar}
      </section>
      <Footer />
    </main>
  );
}
