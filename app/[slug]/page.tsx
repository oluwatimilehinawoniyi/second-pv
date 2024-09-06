import { Eye, Github, House } from "lucide-react";
import { GridLayout } from "../components";
import Navigation from "../components/common/Navigation";
import Link from "next/link";

const projects = [
  { title: "lorem ipsum", link: "#" },
  { title: "lorem ipsum", link: "#" },
  { title: "lorem ipsum", link: "#" },
  { title: "lorem ipsum", link: "#" },
];

export default function Page() {
  return (
    <GridLayout
      leftBar={
        <div className="flex h-full w-full flex-col items-start pl-20 pr-4 pt-20">
          <Navigation icon={<House size={16} />} title="home" to="/" />

          <div className="pt-10">
            <ul className="flex flex-col gap-4">
              {[
                { item: "title", value: "vibemerge" },
                { item: "category", value: "fullstack app" },
                { item: "role", value: "developer, designer" },
                { item: "stacks", value: "react, node/expressJS" },
                {
                  item: "links",
                  value: [
                    {
                      title: "github",
                      icon: <Github size={16} />,
                      link: "#",
                    },
                    { title: "live site", icon: <Eye size={16} />, link: "#" },
                  ],
                },
              ].map((list) => {
                if (!Array.isArray(list.value)) {
                  return (
                    <li key={list.item} className="">
                      <h1 className="capitalize">{list.item}:</h1>
                      <p className="capitalize">{list.value}</p>
                    </li>
                  );
                } else {
                  return (
                    <li key={list.item} className="">
                      <h1 className="mb-1 capitalize">{list.item}:</h1>
                      {list.value.map((item, index) => (
                        <Link
                          href={""}
                          target="_blank"
                          className="mb-2 flex items-center gap-2 capitalize hover:underline"
                          key={index}
                        >
                          {item.icon}
                          <p>{item.title}</p>
                        </Link>
                      ))}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      }
      rightBar={
        <div className="flex h-full w-full flex-col items-center pt-20">
          <h1 className="capitalize">other projects</h1>
          <ul className="mt-4 flex flex-col gap-4">
            {projects.map(({ link, title }, index) => (
              <li key={index} className="capitalize hover:underline">
                <Link href={link}>
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
      display={<div className=""></div>}
    />
  );
}
