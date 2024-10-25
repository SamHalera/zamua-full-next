import { getPlaylists } from "@/actions/playlist";
import PlaylistsContent from "@/components/contents/playlists/PlaylistsContent";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata(): Promise<Metadata> {
  const title = "Zamua soul and folk song-writer";
  const description =
    "PLAY-THE-TAPE Playlists is a section dedicated to the music and artists I listen to, who inspire me every day and influence my creativity.";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXTAUTH_URL}/playlists`,
      images: [
        {
          url: `${process.env.NEXTAUTH_URL}/images/bg-home.jpg`,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}
const playlistsPage = async () => {
  const playlists = await getPlaylists();
  return <PlaylistsContent playlists={playlists} />;
};

export default playlistsPage;
