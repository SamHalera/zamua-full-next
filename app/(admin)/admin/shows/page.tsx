import ShowForm from "@/components/admin/shows/ShowForm";

import LinkToPublicView from "@/components/globals/LinkToPublicView";
import React from "react";

const AdminShowPage = async () => {
  return (
    <div className="p-2 md:p-10 ">
      <div className="  flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          MANAGE Shows{" "}
        </h1>
        <LinkToPublicView path="/shows" />
      </div>
      <ShowForm />
    </div>
  );
};

export default AdminShowPage;
