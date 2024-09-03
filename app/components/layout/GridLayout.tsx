import { ReactNode } from "react";

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
    <main className="layout w-full pb-8">
      <section className="">{leftBar}</section>
      <section className="mx-auto flex w-full flex-col gap-8 px-4 md:px-0">
        {display}
      </section>
      <section className="">{rightBar}</section>
    </main>
  );
}
