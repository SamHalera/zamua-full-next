import CreateOrUpdateProjectForm from "@/components/admin/projects/CreateOrUpdateProjectForm";
import React from "react";

const page = () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE NEW PROJECT</h1>
      <CreateOrUpdateProjectForm />
    </div>
  );
};

export default page;
