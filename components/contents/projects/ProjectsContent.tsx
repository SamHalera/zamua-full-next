import { getProjects } from "@/actions/projects";
import React from "react";
import bgProjects from "@/public/images/bg-projects.jpg";
import SecondaryHeroSection from "../SecondaryHeroSection";
import dynamic from "next/dynamic";

const ProjectsList = dynamic(() => import("./ProjectsList"));
const ProjectsContent = async () => {
  const projects = await getProjects();
  const title = <span className="text-primary">PROJECTS</span>;
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgProjects.src} />
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectsContent;
