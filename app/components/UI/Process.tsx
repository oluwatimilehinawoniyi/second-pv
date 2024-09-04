export default function Process() {
  return (
    <section className="flex flex-col items-end gap-8 md:mt-10 md:h-[400px] md:flex-row">
      <div className="flex flex-col gap-4 md:w-2/5 md:gap-10">
        <h1 className="text-2xl font-bold">
          After trying a ton of things, I stuck with these principles
        </h1>
        <p className="md:text-justify">
          I love to build and I love to build well. Hence, amongst other
          principles, I adopt these battle tested ones to guide me while
          building either a product or side project.
        </p>
      </div>
      <div className="grid size-full grid-cols-2 grid-rows-2 gap-4 md:w-3/5 md:gap-2">
        {[
          "user-centered design",
          "progressive enhancement",
          "read the docs",
          "testing",
        ].map((process, index) => (
          <div className="card h-40 rounded-lg p-4 md:h-[unset]" key={index}>
            <p className="">{process}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
