import { getProjectBySlug } from "@/actions/projects";
import ProjectSingle from "@/components/contents/projects/ProjectSingle";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
  if (!project) return;
  console.log("project==>", project);
  return (
    <div>
      <ProjectSingle project={project} />
    </div>
  );
};

export default page;
