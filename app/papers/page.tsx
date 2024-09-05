import { House } from "lucide-react";
import { GridLayout } from "../components";
import Navigation from "@/app/components/common/Navigation";

export default function Blog() {
  return (
    <GridLayout
      leftBar={
        <div className="flex h-full w-full flex-col items-center pt-20">
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
            <ul>
              {Array.from({ length: 16 }, (_, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-t border-foreground py-4"
                >
                  <p className="">lorem ipsum</p>
                  <p className="text-sm">01/08</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    />
  );
}
