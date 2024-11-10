import { getProjects } from "@/actions/projects";
import React from "react";
import bgProjects from "@/public/images/bg-projects.jpg";
import SecondaryHeroSection from "../SecondaryHeroSection";
import dynamic from "next/dynamic";
import * as motion from "framer-motion/client";

const ProjectsList = dynamic(() => import("./ProjectsList"));
const ProjectsContent = async () => {
  const projects = await getProjects();
  const title = (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.8 }}
      className="text-primary text-4xl md:text-6xl lg:text-7xl"
    >
      PROJECTS
    </motion.span>
  );
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgProjects.src} />
      <ProjectsList projects={projects} />
    </>
  );
};

export default ProjectsContent;
