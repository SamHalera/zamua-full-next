import { Playlist } from "@prisma/client";
import React from "react";

import HeadSection from "./HeadSection";
import PlaylistList from "./PlaylistList";

const PlaylistsContent = ({ playlists }: { playlists?: Playlist[] }) => {
  return (
    <div>
      <HeadSection />
      <PlaylistList playlists={playlists} />
    </div>
  );
};

export default PlaylistsContent;
