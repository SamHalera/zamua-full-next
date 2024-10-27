import ShowsContent from "@/components/admin/shows/ShowsContent";
import React from "react";

const AdminShowPage = async () => {
  return (
    <div className="p-2 md:p-10 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">MANAGE Shows </h1>
      <ShowsContent />
    </div>
  );
};

export default AdminShowPage;
