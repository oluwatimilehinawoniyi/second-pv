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
    <div className="mt-12">
      <ul className="paper-list">
        {filteredPapers?.map(({ id, title, date, slug, tag }) => (
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
  );
}
