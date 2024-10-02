import React from "react";
import { Contact, GridLayout, Introduction, Projects } from "./components";
import Papers from "./components/UI/Papers";

export const metadata = {
  title: "Oluwatimilehin Awoniyi",
  description: "Welcome to the portfolio of Oluwatimilehin Awoniyi",
};

export default function Home() {
  return (
    <>
      <GridLayout
        display={
          <div className="flex flex-col gap-4 pt-40 md:gap-8 md:pt-0">
            <Introduction />
            <Projects />
            <Papers />
            <Contact />
          </div>
        }
      />
    </>
  );
}
