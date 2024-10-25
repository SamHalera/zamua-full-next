import { getMusicFeatures } from "@/actions/admin/musicFeature";
import MusicContent from "@/components/contents/music/MusicContent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Zamua soul and folk song-writer";
  const description =
    "Music emanates from a profound sense of urgency, a compelling need to share one's voice, soul, and presence. A means of learning to think critically about what we see and do in the environment in which we live";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXTAUTH_URL}/music`,
      images: [
        {
          url: `${process.env.NEXTAUTH_URL}/images/bg-music.jpg`,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}
const page = async () => {
  const musicFeatures = await getMusicFeatures();
  return <MusicContent musicFeatures={musicFeatures} />;
};

export default page;
