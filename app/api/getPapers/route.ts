import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const contentPath = path.join(process.cwd(), "app", "papers", "content");
  const files = fs.readdirSync(contentPath);

  const papers = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");

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
    const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
    let fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);
    const { date, tag, title } = data;

    console.log(data);
    
    return {
      title,
      id: slug,
      slug,
      date,
      tag,
    };
  });

  return NextResponse.json(papers);
}
