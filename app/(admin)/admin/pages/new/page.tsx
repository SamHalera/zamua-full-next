import ContentPageForm from "@/components/admin/pageManager/ContentPageForm";
import React from "react";

const page = () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE NEW PAGE</h1>
      <ContentPageForm />
    </div>
  );
};

export default page;
