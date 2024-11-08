import { Playlist } from "@prisma/client";
import React from "react";
import PlaylistItem from "./PlaylistItem";

const PlaylistList = ({ playlists }: { playlists?: Playlist[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-20">
      {playlists &&
        playlists?.length > 0 &&
        playlists
          .sort((elt1: Playlist, elt2: Playlist) => {
            return parseFloat(elt1.priority) - parseFloat(elt2.priority);
          })
          .map((playlist: Playlist, index: number) => {
            return (
              <PlaylistItem
                key={playlist.id}
                playlist={playlist}
                index={index + 1}
              />
            );
          })}
    </div>
  );
};

export default PlaylistList;
