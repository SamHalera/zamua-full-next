import PlaylistForm from "@/components/admin/playlist/PlaylistForm";
import React from "react";

const AdminPlaylistPage = async () => {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-semibold mb-6">MANAGE Playlists </h1>
      <PlaylistForm />
    </div>
  );
};

export default AdminPlaylistPage;
