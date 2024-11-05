import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ProjectsSection = () => {
  return (
    <div
      className={cn(
        " bg-cover bg-scroll bg-right-top lg:bg-fixed h-auto md:h-screen"
      )}
      style={{
        backgroundImage: `url(/images/bg-cta.jpg)`,
      }}
    >
      <div className="bg-black/60 h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-primary text-4xl text-center md:text-6xl lg:text-7xl custom-title font-semibold">
          ZAMUA&apos;S PROJECTS
        </h1>

        <div className="text-white text-xl md:text-2xl leading-10 px-7 md:px-28 flex flex-col items-center gap-8 ">
          <p className="text-center">
            Zamua is involved in different musical projects and he collaborates
            with many artists and performers.
          </p>
          <p className="text-center">
            Who are they? What these projects and featuring are about?
          </p>
          <p className="text-center">Let find out more!</p>
        </div>
        <Link href={"/projects"} className="custom-btn">
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
