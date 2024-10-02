"use client";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PaperList({
  filteredPapers,
}: {
  filteredPapers: {
    id: string;
    title: string;
    date: string;
    slug: string;
    tag: string;
  }[];
}) {
  return (
    <div className="mt-10">
      <ul className="paper-list">
        {filteredPapers?.map(({ id, title, date, slug, tag }) => (
          <li key={id} className="paper border-b border-foreground">
            <Link
              href={`/papers/${slug}`}
              className="flex flex-col justify-between gap-1 py-4 md:flex-row md:items-center"
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
  );
}
