import { Eye, Github, Home, House } from "lucide-react";
import { Contact, GridLayout } from "../components";
import Navigation from "../components/common/Navigation";
import Link from "next/link";
import Image from "next/image";

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
        <div className="relative flex flex-col gap-8 pt-20">
          {/* <div className="sticky z-50 top-6 mb-6 h-10 bg-background lg:hidden">
            <Navigation to="/" title="home" icon={<Home />} />
          </div> */}

          <h1 className="text-3xl font-bold capitalize">lorem ipsum</h1>

          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            assumenda quidem accusamus adipisci beatae incidunt, deleniti,
            blanditiis repellat deserunt molestias impedit, nemo laudantium cum
            autem aliquid? Magnam voluptatum voluptate cum error quam possimus.
            Dolor, rem itaque quaerat ducimus exercitationem nemo quidem quis!
            Quibusdam provident tempora neque, nemo nesciunt assumenda omnis?
          </p>

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

          <Contact />
        </div>
      }
    />
  );
}
