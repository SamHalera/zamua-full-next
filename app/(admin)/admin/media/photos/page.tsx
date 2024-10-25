import UploadMediaComponent from "@/components/admin/media/UploadMediaComponent";
import React from "react";

const AdminPhotosPage = async () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE PHOTOS </h1>
      <div className="flex gap-6">
        <UploadMediaComponent />
      </div>
    </div>
  );
};

export default AdminPhotosPage;
