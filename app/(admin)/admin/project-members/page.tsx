import ProjectmembersForm from "@/components/admin/projectMembers/ProjectmembersForm";
import React from "react";

const AdminProjectMembersPage = () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE Project members</h1>
      <ProjectmembersForm />
    </div>
  );
};

export default AdminProjectMembersPage;