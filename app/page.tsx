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
          <Projects />
          <Process />
          <Contact />
        </>
      }
    />
  );
}
