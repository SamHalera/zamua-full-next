import { getPlaylists } from "@/actions/playlist";
import PlaylistsContent from "@/components/contents/playlists/PlaylistsContent";
import React from "react";

const playlistsPage = async () => {
  const playlists = await getPlaylists();
  return <PlaylistsContent playlists={playlists} />;
};

export default playlistsPage;
