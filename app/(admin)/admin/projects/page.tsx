import ProjectsList from "@/components/admin/projects/ProjectsList";

import React from "react";

const AdminProjectPage = () => {
  return (
    <div className="p-2 md:p-10 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        MANAGE Projects
      </h1>
      <ProjectsList />
    </div>
  );
};

export default AdminProjectPage;
