import {
  Contact,
  GridLayout,
  Introduction,
  Process,
  Projects,
} from "./components";

export default function Home() {
  return (
    <GridLayout
      display={
        <>
          <Introduction />
          <Process />
          <Projects />
          <Contact />
        </>
      }
    />
  );
}
