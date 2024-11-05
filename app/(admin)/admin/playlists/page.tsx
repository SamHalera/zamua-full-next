import PlaylistForm from "@/components/admin/playlist/PlaylistForm";
import LinkToPublicView from "@/components/globals/LinkToPublicView";
import React from "react";

const AdminPlaylistPage = async () => {
  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-6">MANAGE Playlists </h1>
      <LinkToPublicView path="/playlists" />
      <PlaylistForm />
    </div>
  );
};

export default AdminPlaylistPage;
