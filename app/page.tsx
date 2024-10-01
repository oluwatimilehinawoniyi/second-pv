import React from "react";
import {
  Contact,
  GridLayout,
  Introduction,
  Projects,
} from "./components";
import Papers from "./components/UI/Papers";

export default function Home() {
  return (
    <GridLayout
      display={
        <>
          <Introduction />
          <Projects />
          <Papers />
          <Contact />
        </>
      }
    />
  );
}

