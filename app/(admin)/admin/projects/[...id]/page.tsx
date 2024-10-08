import { getProjectById } from "@/actions/projects";
import CreateOrUpdateProjectForm from "@/components/admin/projects/CreateOrUpdateProjectForm";

import React from "react";

const page = async ({ params }: { params: { id: string[] } }) => {
  const id = parseFloat(params.id[0]);
  const project = await getProjectById(id);
  console.log("project inside page==>", project);
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        MANAGE Project
      </h1>

      <CreateOrUpdateProjectForm project={project} />
    </div>
  );
};

export default page;
