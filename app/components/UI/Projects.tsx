import Links from "../common/Links";
import projects from "@/app/data/projects.json";

export default function Projects() {
  return (
    <section className="mt-6">
      <h1 className="mb-4 text-2xl font-bold capitalize md:text-3xl">
        projects
      </h1>
      <p className="">
        These are a reflection of either the need to apply some knowledge or
        gut-based-eureka-moment-ideas to a perceived need. I simply love to have
        something going to keep my skills shapened.
      </p>
      <div className="gri gridcols-[repeat(auto-fit,minmax(280px,1fr))] mt-8 flex flex-col gap-4 md:gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex h-auto flex-col items-start justify-between gap-4 rounded-lg p-4 md:flex-row"
          >
            <div className="w-full md:w-3/4">
              <p className="mb-2 text-lg font-semibold capitalize">
                {project.title}
              </p>
              <p className="text-sm md:text-base">{project.details.split('.').slice(0, 2).join('.')}</p>
            </div>
            <Links to={project.slug}>project details</Links>
          </div>
        ))}
      </div>
    </section>
  );
}
