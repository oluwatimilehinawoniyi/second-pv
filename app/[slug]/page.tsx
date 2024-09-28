import { Eye, Github, Home, House } from "lucide-react";
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
        <div className="hidden h-full w-full flex-col items-start pl-20 pr-4 pt-20 lg:flex">
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
        <div className="hidden h-full w-full flex-col items-center pt-20 lg:flex">
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
      display={
        <div className="relative pt-10">
          <h2 className="">hello world</h2>
          <div className="flex size-[400px] items-center justify-center bg-white p-8">
            <svg viewBox="0 0 93.024277 93.024818" version="1.1">
              <style>
                {/* .favicon
                {{
                  fill: "red",
                }} */}
                {
                  // fill: green;
                }
                {/* @media (prefers-color-scheme: dark) { */}
                {/* .favicon { */}
                {/* fill: rgb(129, 98, 65); */}
                {/* } */}
                {/* } */}
              </style>
              <g id="layer1" transform="translate(-55.571122,-108.18596)">
                <path
                  className="fill-[rgb(129,_98,_65)]"
                  d="m 102.08301,108.18597 a 46.512333,46.512333 0 0 0 -46.511888,46.51241 46.512333,46.512333 0 0 0 46.511888,46.5124 46.512333,46.512333 0 0 0 46.5124,-46.5124 46.512333,46.512333 0 0 0 -46.5124,-46.51241 z m 0,14.53141 a 31.981003,31.981003 0 0 1 31.98151,31.981 31.981003,31.981003 0 0 1 -31.98151,31.98099 31.981003,31.981003 0 0 1 -31.980992,-31.98099 31.981003,31.981003 0 0 1 31.980992,-31.981 z"
                />
              </g>
            </svg>
          </div>
          <div className="sticky top-6 mb-6 h-10 bg-background lg:hidden">
            <Navigation to="/" title="home" icon={<Home />} />
          </div>
        </div>
      }
    />
  );
}
