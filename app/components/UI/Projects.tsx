import Link from "next/link";
import Links from "../common/Links";

export default function Projects() {
  const projects = [
    {
      title: "vibemerge",
      link: "",
      details:
        "lorem ipsum dotor sum loquitor delorum. lorem ipsum dotor sum loquitor delorum.",
    },
    {
      title: "kicks",
      link: "",
      details:
        "lorem ipsum dotor sum loquitor delorum. lorem ipsum dotor sum loquitor delorum.",
    },
    // {
    //   title: "prism",
    //   link: "",
    //   details:
    //     "lorem ipsum dotor sum loquitor delorum. lorem ipsum dotor sum loquitor delorum.",
    // },
    {
      title: "CSS unit converter",
      link: "",
      details:
        "lorem ipsum dotor sum loquitor delorum. lorem ipsum dotor sum loquitor delorum.",
    },
    {
      title: "paladin",
      link: "",
      details:
        "lorem ipsum dotor sum loquitor delorum. lorem ipsum dotor sum loquitor delorum.",
    },
    {
      title: "kicks (admin dashboard)",
      link: "",
      details:
        "lorem ipsum dotor sum loquitor delorum. lorem ipsum dotor sum loquitor delorum.",
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
      <div className="gri gridcols-[repeat(auto-fit,minmax(280px,1fr))] mt-8 flex flex-col gap-4 md:gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex h-auto items-start justify-between rounded-lg p-4"
          >
            <div className="w-2/3">
              <p className="mb-2 text-lg font-semibold capitalize">
                {project.title}
              </p>
              <p>{project.details}</p>
            </div>
            <Links to={project.link}>project details</Links>
          </div>
        ))}
      </div>
    </section>
  );
}
