import { Dot } from "lucide-react";
import {
  Contact,
  GridLayout,
  Introduction,
  Process,
  Projects,
} from "./components";
import Link from "next/link";
import { papers } from "./data/papers";
import Links from "./components/common/Links";

export default function Home() {
  return (
    <GridLayout
      display={
        <>
          <Introduction />
          <Projects />
          <Process />
          <Papers />
          <Contact />
        </>
      }
    />
  );
}

function Papers() {
  return (
    <section className=" mt-8 mb-4">
      <h1 className="mb-6 text-3xl font-bold capitalize">Papers</h1>
      <p>
        My introversion and curiosity often lead me to put pen to paper. Over
        time, I&apos;ve tried to be more technical in my writing, though I
        sometimes find myself drifting into a playful tone. I aim to make
        complex concepts more relatable by comparing them to everyday
        experiences.
      </p>
      <Links to="/papers">go to blog</Links>

      <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end">
        <div className="md:w-1/2">
          <div className="">
            <div className="mb-4 h-40 w-full overflow-hidden rounded-lg border border-red-400">
              <img src="" alt="" />
            </div>
            <h1 className="mb-2 text-2xl font-semibold">Lorem, ipsum dolor</h1>
            <p className="line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              provident nobis sint est nostrum ad rem hic distinctio eligendi
              vero error reiciendis, dolores et nam, fugiat tempora!
              Consectetur, eos velit!
            </p>
            <Links to="/papers">read more</Links>
          </div>
        </div>
        <div className="md:w-1/2">
          <ul className="paper-list">
            {papers.slice(0, 5).map(({ id, title, date, slug, tag }) => (
              <li
                key={id}
                className="paper border-b border-foreground last:border-0"
              >
                <Link
                  href={`/papers/${slug}`}
                  className="flex items-center justify-between py-4"
                >
                  <p className="">{title}</p>
                  <span className="flex items-center">
                    <p className="text-sm text-brown">{tag}</p>
                    <Dot />
                    <p className="text-sm">{date}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
