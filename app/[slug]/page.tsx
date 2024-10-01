import { Eye, Github, House } from "lucide-react";
import { Contact, GridLayout } from "../components";
import Navigation from "../components/common/Navigation";
import Link from "next/link";
import Image from "next/image";
import Links from "../components/common/Links";
import { projects } from "@/app/data/projects";

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
        <div className="items-left hidden h-full w-full flex-col pl-20 pt-20 lg:flex">
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
        <div className="relative flex flex-col gap-8 pt-20">
          <h1 className="text-3xl font-bold capitalize">lorem ipsum</h1>

          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            assumenda quidem accusamus adipisci beatae incidunt, deleniti,
            blanditiis repellat deserunt molestias impedit, nemo laudantium cum
            autem aliquid? Magnam voluptatum voluptate cum error quam possimus.
            Dolor, rem itaque quaerat ducimus exercitationem nemo quidem quis!
            Quibusdam provident tempora neque, nemo nesciunt assumenda omnis?
          </p>

          <ul className="grid grid-cols-2 gap-4 lg:hidden">
            {[
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

          <div className="relative h-[350px] w-full">
            <Image
              src={"/images/placeholder.jpg"}
              alt="placeholder"
              fill
              className="object-cover"
            />
          </div>

          <div className="">
            <h2 className="mb-2 text-2xl font-bold capitalize">
              project purpose
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              assumenda quidem accusamus adipisci beatae incidunt, deleniti,
              blanditiis repellat deserunt molestias impedit, nemo laudantium
              cum autem aliquid? Magnam voluptatum voluptate cum error quam
              possimus. Dolor, rem itaque quaerat ducimus exercitationem nemo
              quidem quis! Quibusdam provident tempora neque, nemo nesciunt
              assumenda omnis?
            </p>
          </div>
          <div className="">
            <h2 className="mb-2 text-2xl font-bold capitalize">
              web stack explanation
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              assumenda quidem accusamus adipisci beatae incidunt, deleniti,
              blanditiis repellat deserunt molestias impedit, nemo laudantium
              cum autem aliquid? Magnam voluptatum voluptate cum error quam
              possimus. Dolor, rem itaque quaerat ducimus exercitationem nemo
              quidem quis! Quibusdam provident tempora neque, nemo nesciunt
              assumenda omnis?
            </p>
          </div>

          <div className="relative h-[350px] w-full">
            <Image
              src={"/images/placeholder.jpg"}
              alt="placeholder"
              fill
              className="object-cover"
            />
          </div>

          <div className="">
            <h2 className="mb-2 text-2xl font-bold capitalize">
              problems and lessons
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              assumenda quidem accusamus adipisci beatae incidunt, deleniti,
              blanditiis repellat deserunt molestias impedit, nemo laudantium
              cum autem aliquid? Magnam voluptatum voluptate cum error quam
              possimus. Dolor, rem itaque quaerat ducimus exercitationem nemo
              quidem quis! Quibusdam provident tempora neque, nemo nesciunt
              assumenda omnis?
            </p>
          </div>

          <div className="gri gridcols-[repeat(auto-fit,minmax(280px,1fr))] flex flex-col gap-4 border-t border-footer-border pt-8 md:gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card flex h-auto items-start justify-between rounded-lg p-4"
              >
                <div className="w-3/4">
                  <p className="mb-2 text-lg font-semibold capitalize">
                    {project.title}
                  </p>
                  <p>{project.details}</p>
                </div>
                <Links to={project.link}>project details</Links>
              </div>
            ))}
          </div>

          <Contact />
        </div>
      }
    />
  );
}
