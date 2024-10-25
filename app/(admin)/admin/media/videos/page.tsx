import VideoForm from "@/components/admin/video/VideoForm";

import React from "react";

const AdminVideosPage = async () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE VIDEOS </h1>

      <VideoForm />
    </div>
  );
};

export default AdminVideosPage;
