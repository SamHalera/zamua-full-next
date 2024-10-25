import BioContent from "@/components/contents/bio/BioContent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Zamua soul and folk song-writer";
  const description =
    "Zamua has devoted himself to music and writing, establishing a unique combination of folk and soul-jazz that crosses over between analog and electronic music.";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXTAUTH_URL}/bio`,
      images: [
        {
          url: `${process.env.NEXTAUTH_URL}/images/bg-bio.jpg`,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}
const pageBio = () => {
  return <BioContent />;
};

export default pageBio;
