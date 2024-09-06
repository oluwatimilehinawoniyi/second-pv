import Link from "next/link";
import Links from "../common/Links";

export default function Projects() {
  const projects = [
    { title: "vibemerge", link: "", details: "" },
    { title: "kicks", link: "", details: "" },
    { title: "prism", link: "", details: "" },
    {
      title: "CSS unit converter",
      link: "",
      details: "",
    },
    { title: "paladin", link: "", details: "" },
    {
      title: "kicks (admin dashboard)",
      link: "",
      details: "",
    },
  ];
  return (
    <section className="mt-6">
      <h1 className="mb-4 text-3xl font-bold capitalize">projects</h1>
      <p className="">
        These are a reflection of either the need to apply some knowledge or
        gut-based-eureka-moment-ideas to a perceived need. I simply love to have
        something going to keep my skills shapened.
      </p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 md:gap-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex h-60 flex-col justify-end rounded-lg p-4"
          >
            <p className="text-lg capitalize">{project.title}</p>
            <p>{project.details}</p>
            <Links to={project.link}>project details</Links>
          </div>
        ))}
      </div>
    </section>
  );
}
