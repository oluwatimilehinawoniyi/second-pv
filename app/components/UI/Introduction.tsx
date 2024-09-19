import Image from "next/image";
import Visualizer from "./Name/AudioVisualizer";
import Links from "../common/Links";

// const TOP_PADDING = 100;

export default function Introduction() {
  return (
    <section className="intro pt20 flex w-full flex-col md:justify-center">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end md:h-40 md:gap-8">
        <div className="relative hidden h-40 w-full overflow-hidden rounded-lg sm:block md:w-2/5">
          <Image
            src="/profile.webp"
            priority={true}
            alt=""
            fill
            className="absolute object-cover object-top"
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:h-full md:justify-between">
          <h1 className="text-4xl font-extrabold capitalize sm:text-5xl">
            oluwatimilehin <br className="" /> awoniyi
          </h1>
          <p className="text-lg font-medium opacity-50">
            Frontend and UX Engineer
          </p>
        </div>
      </div>

      {/* about me */}
      <div className="mt-8">
        <p className="mb-2 md:text-justify">
          {/* I love learning continously and solving problems at the same time: Programming offers me this. knowing how things work and dictating them */}
          I am keen on great user experience (UX) while building market-fit
          products. Currently polishing my skills/knowldege on performance
          optimization and creating appealing SVG animations.
          <br />
          I’m on a lifelong mission to fusing technology (particularly Internet
          of Things) with education, agriculture, and defence industry.
        </p>
        <Links to="/about">read my story</Links>
      </div>
    </section>
  );
}
