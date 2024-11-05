import { getProjectById } from "@/actions/projects";
import CreateOrUpdateProjectForm from "@/components/admin/projects/CreateOrUpdateProjectForm";
import LinkToPublicView from "@/components/globals/LinkToPublicView";
import { Eye } from "lucide-react";
import Link from "next/link";

import React from "react";

const page = async ({ params }: { params: { id: string[] } }) => {
  const id = parseFloat(params.id[0]);
  const project = await getProjectById(id);

  return (
    <div className="p-2 md:p-10 ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          MANAGE Project
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {project?.fullTitle.toUpperCase()}
        </h2>

        <LinkToPublicView path={`/projects/${project?.slug}`} />
      </div>

      <CreateOrUpdateProjectForm project={project} />
    </div>
  );
};

export default page;
