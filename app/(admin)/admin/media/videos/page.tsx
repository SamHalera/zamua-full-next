import VideoForm from "@/components/admin/video/VideoForm";
import Link from "next/link";

import React from "react";

const AdminVideosPage = async () => {
  return (
    <div className="p-4 md:p-10 ">
      <Link href={"/admin/media"} className="btn btn-custom mb-4">
        back to media section
      </Link>
      <h1 className="text-3xl font-semibold mb-6 text-center">
        MANAGE VIDEOS{" "}
      </h1>

      <VideoForm />
    </div>
  );
};

export default AdminVideosPage;
