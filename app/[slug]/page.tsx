import { Eye, Github, House } from "lucide-react";
import { Contact, GridLayout } from "../components";
import Navigation from "../components/common/Navigation";
import Link from "next/link";
import Image from "next/image";
import Links from "../components/common/Links";
import { projects } from "@/app/data/projects";
import React from "react";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const projectTitle = params.slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ");

  return {
    title: projectTitle,
    description: `Read about ${projectTitle}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const otherProjects = projects.filter(
    (project) => project.slug.slice(1) !== params.slug,
  );
  const currentProject = projects.filter(
    (project) => project.slug.slice(1) === params.slug,
  );

  console.log(Object.keys(currentProject[0]));
  const { title, category, details, link, slug, stack } = currentProject[0];
  return (
    <>
      <GridLayout
        leftBar={
          <div className="hidden h-full w-full flex-col items-start pl-20 pr-4 pt-20 lg:flex">
            <Navigation icon={<House size={16} />} title="home" to="/" />

            <div className="pt-10">
              <ul className="flex flex-col gap-4">
                {Object.keys(currentProject[0]).map((key) => {
                  if (
                    key === "title" ||
                    key === "stack" ||
                    key === "category" ||
                    key === "link"
                  ) {
                    if (!Array.isArray(currentProject[0][key])) {
                      return (
                        <li key={key} className="">
                          <h1 className="capitalize">{key}:</h1>
                          <p className="capitalize">{currentProject[0][key]}</p>
                        </li>
                      );
                    } else {
                      return (
                        <li key={key} className="">
                          <h1 className="mb-1 capitalize">{key}:</h1>
                          {currentProject[0][key].map((item) => (
                            <Link
                              href={item.link}
                              target="_blank"
                              className="mb-2 flex items-center gap-2 capitalize underline underline-offset-2"
                              key={item.title}
                            >
                              <p>{item.title}</p>
                            </Link>
                          ))}
                        </li>
                      );
                    }
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
              {otherProjects.map(({ slug, title }, index) => (
                <li key={index} className="capitalize hover:underline">
                  <Link href={slug}>
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
        display={
          <div className="relative flex flex-col gap-8 pb-4 pt-20">
            <h1 className="text-2xl font-bold capitalize md:text-3xl">
              {title}
            </h1>

            <p className="md:text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              assumenda quidem accusamus adipisci beatae incidunt, deleniti,
              blanditiis repellat deserunt molestias impedit, nemo laudantium
              cum autem aliquid? Magnam voluptatum voluptate cum error quam
              possimus. Dolor, rem itaque quaerat ducimus exercitationem nemo
              quidem quis! Quibusdam provident tempora neque, nemo nesciunt
              assumenda omnis?
            </p>

            <ul className="grid grid-cols-2 gap-4 lg:hidden">
              {Object.keys(currentProject[0]).map((key) => {
                if (
                  key === "title" ||
                  key === "stack" ||
                  key === "category" ||
                  key === "link"
                ) {
                  if (!Array.isArray(currentProject[0][key])) {
                    return (
                      <li key={key} className="">
                        <h1 className="capitalize">{key}:</h1>
                        <p className="capitalize">{currentProject[0][key]}</p>
                      </li>
                    );
                  } else {
                    return (
                      <li key={key} className="">
                        <h1 className="mb-1 capitalize">{key}:</h1>
                        {currentProject[0][key].map((item) => (
                          <Link
                            href={item.link}
                            target="_blank"
                            className="mb-2 flex items-center gap-2 capitalize underline underline-offset-2"
                            key={item.title}
                          >
                            <p>{item.title}</p>
                          </Link>
                        ))}
                      </li>
                    );
                  }
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
              <h2 className="mb-2 text-xl font-bold capitalize md:text-2xl">
                project purpose
              </h2>
              <p className="md:text-justify">
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
              <h2 className="mb-2 text-xl font-bold capitalize md:text-2xl">
                web stack explanation
              </h2>
              <p className="md:text-justify">
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
              <h2 className="mb-2 text-xl font-bold capitalize md:text-2xl">
                problems and lessons
              </h2>
              <p className="md:text-justify">
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
              <h2 className="mb-2 text-xl font-bold capitalize md:text-2xl">
                other projects
              </h2>
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="card flex h-auto flex-col items-start justify-between gap-4 rounded-lg p-4 md:flex-row"
                >
                  <div className="w-full md:w-3/4">
                    <p className="mb-2 text-lg font-semibold capitalize">
                      {project.title}
                    </p>
                    <p className="text-sm md:text-base">{project.details}</p>
                  </div>
                  <Links to={project.slug}>project details</Links>
                </div>
              ))}
            </div>

            <Contact />
          </div>
        }
      />
    </>
  );
}
