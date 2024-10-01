"use client";
import { Home, House } from "lucide-react";
import { GridLayout } from "@/app/components";
import Navigation from "@/app/components/common/Navigation";
import PaperList from "@/app/papers/PaperList";
import usePapers from "@/app/hooks/usePapers";
import { useState } from "react";
import PaperFilter from "./PaperFilter";
import React from "react";

export default function PaperPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["all"]);

  const { papers, loading } = usePapers();

  const filters = papers.map((item) => item.tag);

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
      display={
        <div className="relative pt-20">
          <div className="sticky top-6 mb-6 h-10 bg-background lg:hidden">
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
          {loading ? (
            <div className="mt-12">
              <p>fetching papers...</p>
            </div>
          ) : (
            <PaperList filteredPapers={filteredPapers} />
          )}
        </div>
      }
    />
  );
}
