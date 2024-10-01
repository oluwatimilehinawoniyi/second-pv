import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypePrism from "rehype-prism-plus";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GridLayout } from "@/app/components";
import Navigation from "@/app/components/common/Navigation";
import { FileStack } from "lucide-react";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";

interface PageProps {
  params: {
    paper: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const paper = params.paper[0];
  const formattedTitle = paper
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ");

  return {
    title: formattedTitle,
    description: `Read about ${formattedTitle}`,
  };
}

export default function Page({ params }: { params: { paper: string[] } }) {
  const slug = params.paper.join("/");

  const mdxPath = path.join(
    process.cwd(),
    "app",
    "papers",
    "content",
    `${slug}.mdx`,
  );

  const mdPath = path.join(
    process.cwd(),
    "app",
    "papers",
    "content",
    `${slug}.md`,
  );
  const paperPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  let fileContent;
  try {
    fileContent = fs.readFileSync(paperPath, "utf-8");
  } catch (error) {
    return (
      <GridLayout
        leftBar={
          <div className="hidden h-full w-full flex-col items-start pl-20 pt-20 lg:flex">
            <Navigation
              icon={<FileStack size={16} />}
              title="papers"
              to="/papers"
            />
          </div>
        }
        display={
          <div className="relative pt-20">
            <h1>Post not found</h1>
          </div>
        }
      />
    );
  }

  const { data, content } = matter(fileContent);

  return (
    <>
      <GridLayout
        leftBar={
          <div className="hidden h-full w-full flex-col items-start pl-20 pt-20 lg:flex">
            <Navigation
              icon={<FileStack size={16} />}
              title="papers"
              to="/papers"
            />
          </div>
        }
        display={
          <div className="relative pt-20">
            <article className="prose">
              <h1 className="mb-4 text-2xl md:text-3xl font-bold capitalize">
                {data.title}
              </h1>
              <MDXRemote
                source={content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypePrism],
                  },
                }}
              />
            </article>
          </div>
        }
      />
    </>
  );
}
