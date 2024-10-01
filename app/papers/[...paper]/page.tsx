import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GridLayout } from "@/app/components";
import Navigation from "@/app/components/common/Navigation";
import { FileStack } from "lucide-react";
import React from "react";
import Head from "next/head";

export default function Page({ params }: { params: { paper: string[] } }) {
  const slug = params.paper.join("/");
  console.log(slug);

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
      <Head>
        <title>{slug.replaceAll("-", " ")}</title>
        <meta
          name="description"
          content={`Read about ${slug.replaceAll("-", " ")}`}
        />
      </Head>
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
            <div className="sticky top-6 mb-6 h-10 bg-background lg:hidden">
              <Navigation
                icon={<FileStack size={16} />}
                title="papers"
                to="/papers"
              />
            </div>
            <article className="">
              <h1 className="">{data.title}</h1>
              <MDXRemote source={content} />
            </article>
          </div>
        }
      />
    </>
  );
}
