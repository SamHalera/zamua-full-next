import { getShowsNotPast } from "@/actions/show";
import ShowsContent from "@/components/contents/shows/ShowsContent";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Zamua soul and folk song-writer";
  const description =
    "Zamua is an italian and burundian song-writer, singer and guitarist based in Paris. His music is a fusion between pop-folk and soul-jazz.";
  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXTAUTH_URL}/shows`,
      images: [
        {
          url: `${process.env.NEXTAUTH_URL}/images/bg-shows.jpg`,
          width: 800,
          height: 600,
        },
      ],
    },
  };

  return metadata;
}
const showPage = async () => {
  const shows = await getShowsNotPast();

  return <ShowsContent shows={shows} />;
};

export default showPage;
