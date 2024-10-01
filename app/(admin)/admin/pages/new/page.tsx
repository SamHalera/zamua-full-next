import CreatePageForm from "@/components/contents/Home/admin/pageManager/CreatePageForm";
import React from "react";

const page = () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE NEW PAGE</h1>

      <CreatePageForm />
    </div>
  );
};

export default page;
