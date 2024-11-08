import { Project } from "@prisma/client";
import React from "react";
import ProjectThumbnail from "./ProjectThumbnail";

const ProjectsList = ({ projects }: { projects?: Project[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-10 mb-0 lg:mb-10">
      {projects &&
        projects.length > 0 &&
        projects
          .sort((a, b) => parseFloat(a.priority) - parseFloat(b.priority))
          .map((project: Project) => {
            return <ProjectThumbnail key={project.id} project={project} />;
          })}
    </div>
  );
};

export default ProjectsList;
