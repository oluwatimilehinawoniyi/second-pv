"use client";
import usePapers from "@/app/hooks/usePapers";
import Link from "next/link";
import Links from "../common/Links";
import { Dot } from "lucide-react";

export default function Papers() {
  const { papers } = usePapers();
  return (
    <section className="mb-4 mt-8">
      <h1 className="mb-6 text-3xl font-bold capitalize">Papers</h1>
      <p>
        My introversion and curiosity often lead me to put pen to paper. Over
        time, I&apos;ve tried to be more technical in my writing, though I
        sometimes find myself drifting into a playful tone. I aim to make
        complex concepts more relatable by comparing them to everyday
        experiences.
      </p>
      <Links to="/papers">go to blog</Links>

      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <div className="w-full">
          <ul className="paper-list">
            {papers.slice(0, 5).map(({ id, title, date, slug, tag }) => (
              <li
                key={id}
                className="paper border-b border-foreground last:border-0"
              >
                <Link
                  href={`/papers/${slug}`}
                  className="items-cente flex flex-col justify-between gap-2 py-4 md:flex-row"
                >
                  <p className="">{title}</p>
                  <span className="flex items-center">
                    <p className="text-xs text-brown md:text-sm">{tag}</p>
                    <Dot />
                    <p className="text-xs md:text-sm">{date}</p>
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
