"use client";
import { Dot, Home, House } from "lucide-react";
import { GridLayout } from "../components";
import Navigation from "@/app/components/common/Navigation";
import Link from "next/link";
import { papers } from "../data/papers";
import { useState } from "react";

export default function Blog() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["all"]);

  const filters = Array.from(new Set(papers.map((item) => item.tag)));

  const handleSelected = (tag: string) => {
    if (tag === "all") {
      setSelectedFilters(["all"]);
    } else {
      setSelectedFilters((prevFilters) => {
        const newFilters = prevFilters.filter((item) => item !== "all");

        if (newFilters.includes(tag)) {
          return newFilters.filter((item) => item !== tag);
        } else {
          return [...newFilters, tag];
        }
      });
    }
  };

  const filteredPapers = selectedFilters.includes("all")
    ? papers
    : papers.filter((paper) => selectedFilters.includes(paper.tag));

  return (
    <GridLayout
      leftBar={
        <div className="hidden h-full w-full flex-col items-start pl-20 pr-8 pt-20 lg:flex">
          <Navigation icon={<House size={16} />} title="home" to="/" />
          <PaperFilter
            filters={filters}
            selectedFilters={selectedFilters}
            onHandleSelectedFilters={handleSelected}
          />
        </div>
      }
      // rightBar={
      //   <div className="flex h-full w-auto flex-col items-center pt-20">
      //     <Navigation icon={<House size={16} />} title="home" to="/" />
      //   </div>
      // }

      display={
        <>
          <div className="pt-20 relative">
            <div className="mb-6 lg:hidden sticky top-6 h-10 bg-background">
              <Navigation to="/" title="home" icon={<Home />} />
            </div>

            <h1 className="mb-6 text-justify text-3xl font-bold capitalize">
              Papers
            </h1>
            <p className="text-justify">
              My introversion and curiosity often lead me to put pen to paper.
              Over time, I&apos;ve tried to be more technical in my writing,
              though I sometimes find myself drifting into a playful tone. I aim
              to make complex concepts more relatable by comparing them to
              everyday experiences. I hope you enjoy my{" "}
              <i className="blur-[1px]">technical</i> writings.
            </p>

            <div className="mt-12">
              <ul className="paper-list">
                {filteredPapers.map(({ id, title, date, slug, tag }) => (
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
        </>
      }
    />
  );
}

function PaperFilter({
  filters,
  selectedFilters,
  onHandleSelectedFilters,
}: {
  filters: string[];
  selectedFilters: string[];
  onHandleSelectedFilters: (tag: string) => void;
}) {
  return (
    <div className="mt-12">
      <h1 className="capitalize">filter</h1>
      <div className="mt-4 flex flex-wrap gap-4">
        {["all", ...filters].map((tag, index) => (
          <Filter
            selectedFilters={selectedFilters}
            tag={tag}
            key={index}
            onClick={onHandleSelectedFilters}
          />
        ))}
      </div>
    </div>
  );
}

function Filter({
  tag,
  onClick,
  selectedFilters,
}: {
  tag: string;
  onClick: (tag: string) => void;
  selectedFilters: string[];
}) {
  const isActive = selectedFilters.includes(tag);

  return (
    <div
      onClick={() => onClick(tag)}
      key={tag}
      className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition-all duration-200 ease-linear ${isActive ? "border-brown bg-brown *:text-background" : "bg-transparent"}`}
    >
      <p className="">{tag}</p>
    </div>
  );
}
