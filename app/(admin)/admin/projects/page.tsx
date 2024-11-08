import ProjectsListTable from "@/components/admin/projects/ProjectsListTable";
import Link from "next/link";

import React from "react";

const AdminProjectPage = () => {
  return (
    <div className="p-2 md:p-10 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        MANAGE Projects
      </h1>

      <div>
        <Link href={"/admin/projects/new"} className="custom-btn">
          new project
        </Link>

        <ProjectsListTable />
      </div>
    </div>
  );
};

export default AdminProjectPage;
