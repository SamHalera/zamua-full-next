import { gePlaylistBySlug } from "@/actions/playlist";
import { Metadata } from "next";

import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; index: number };
}): Promise<Metadata> {
  const { slug } = params;
  const playlist = await gePlaylistBySlug(slug[1]);
  const title = "Zamua soul and folk song-writer";
  const description =
    playlist?.description ??
    "PLAY-THE-TAPE Playlists is a section dedicated to the music and artists I listen to, who inspire me every day and influence my creativity.";

  const url = `${process.env.NEXTAUTH_URL}/playlists/${slug[0]}/${slug[1]}`;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${playlist?.cover}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}
const page = async ({
  params,
}: {
  params: { slug: string; index: number };
}) => {
  const { slug } = params;

  const playlist = await gePlaylistBySlug(slug[1]);

  if (!playlist) return;

  return (
    <div className="flex flex-col items-center justify-center p-5 md:p-10 gap-6">
      <Link
        href={"/playlists"}
        className="self-start bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
      >
        back to playlists
      </Link>
      <h1 className="text-4xl sm:text-6xl text-center md:text-start">
        PLAY THE TAPE{" "}
        <span className="text-primary font-semibold">#{slug[0]}</span>
      </h1>
      <h2 className="text-3xl sm:text-4xl text-primary font-semibold text-center md:text-start">
        {playlist.title}
      </h2>
      <div
        className="md:w-2/3"
        dangerouslySetInnerHTML={{ __html: playlist.description ?? "" }}
      />
      <div
        className="md:w-2/3"
        dangerouslySetInnerHTML={{ __html: playlist.iframe }}
      />
      <Link
        href={playlist.path}
        target="_blank"
        className="bg-primary text-black font-semibold border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
      >
        spotify
      </Link>
    </div>
  );
};

export default page;
