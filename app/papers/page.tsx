import { House } from "lucide-react";
import { GridLayout } from "../components";
import Navigation from "@/app/components/common/Navigation";
import Link from "next/link";
import { title } from "process";

const papers = [
  { id: 1, title: "lorem ipsum", date: "01/08", slug: "lorem1" },
  { id: 2, title: "lorem ipsum two", date: "02/08", slug: "lorem2" },
  { id: 3, title: "lorem ipsum three", date: "03/08", slug: "lorem3" },
  { id: 4, title: "lorem ipsum four", date: "04/08", slug: "lorem4" },
  { id: 5, title: "lorem ipsum five", date: "05/08", slug: "lorem5" },
  { id: 6, title: "lorem ipsum six", date: "06/08", slug: "lorem6" },
  { id: 7, title: "lorem ipsum seven", date: "07/08", slug: "lorem7" },
  { id: 8, title: "lorem ipsum eight", date: "08/08", slug: "lorem8" },
  { id: 9, title: "lorem ipsum nine", date: "09/08", slug: "lorem9" },
  { id: 10, title: "lorem ipsum ten", date: "10/08", slug: "lorem10" },
  { id: 11, title: "lorem ipsum eleven", date: "11/08", slug: "lorem11" },
  { id: 12, title: "lorem ipsum twelve", date: "12/08", slug: "lorem12" },
  { id: 13, title: "lorem ipsum thirteen", date: "13/08", slug: "lorem13" },
  { id: 14, title: "lorem ipsum fourteen", date: "14/08", slug: "lorem14" },
  { id: 15, title: "lorem ipsum fifteen", date: "15/08", slug: "lorem15" },
  { id: 16, title: "lorem ipsum sixteen", date: "16/08", slug: "lorem16" },
];

export default function Blog() {
  return (
    <GridLayout
      leftBar={
        <div className="flex h-full w-full flex-col items-start pl-20 pt-20">
          <Navigation icon={<House size={16} />} title="home" to="/" />
        </div>
      }
      // rightBar={
      //   <div className="flex h-full w-auto flex-col items-center pt-20">
      //     <Navigation icon={<House size={16} />} title="home" to="/" />
      //   </div>
      // }
      display={
        <div className="pt-20">
          <h1 className="text-3xl font-bold capitalize">Papers</h1>
          <p>
            My introversion and curiosity often lead me to put pen to paper.
            Over time, I&apos;ve tried to be more technical in my writing,
            though I sometimes find myself drifting into a playful tone. I aim
            to make complex concepts more relatable by comparing them to
            everyday experiences. I hope you enjoy my{" "}
            <i className="blur-[1px]">technical</i> writings.
          </p>

          <div className="mt-12">
            <ul className="paper-list">
              {papers.map(({ id, title, date, slug }) => (
                <li key={id} className="paper border-t border-foreground">
                  <Link
                    href={`/papers/${slug}`}
                    className="flex items-center justify-between py-4"
                  >
                    <p className="">{title}</p>
                    <p className="text-sm">{date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    />
  );
}
