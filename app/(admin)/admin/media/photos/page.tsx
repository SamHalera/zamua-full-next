import UploadMediaComponent from "@/components/admin/media/UploadMediaComponent";
import Link from "next/link";
import React from "react";

const AdminPhotosPage = async () => {
  return (
    <div className="p-4 md:p-10 ">
      <Link href={"/admin/media"} className="btn btn-custom mb-4">
        back to media section
      </Link>
      <h1 className="text-3xl font-semibold mb-6 text-center">
        MANAGE PHOTOS{" "}
      </h1>
      <div className="flex gap-6 ">
        <UploadMediaComponent />
      </div>
    </div>
  );
};

export default AdminPhotosPage;
