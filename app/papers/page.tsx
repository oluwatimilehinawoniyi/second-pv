import { Dot, House } from "lucide-react";
import { GridLayout } from "../components";
import Navigation from "@/app/components/common/Navigation";
import Link from "next/link";
import { papers } from "../data/papers";


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
          <h1 className="mb-4 text-3xl font-bold capitalize">Papers</h1>
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
              {papers.map(({ id, title, date, slug, tag }) => (
                <li key={id} className="paper border-b border-foreground">
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
      }
    />
  );
}
