import Link from "next/link";
import React from "react";

const AdminMediaPage = async () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE Media </h1>
      <div className="flex gap-6 justify-center m-auto">
        <Link className="custom-btn" href={"/admin/media/photos"}>
          PHOTOS
        </Link>
        <Link className="custom-btn" href={"/admin/media/videos"}>
          VIDEOS
        </Link>
      </div>
    </div>
  );
};

export default AdminMediaPage;
