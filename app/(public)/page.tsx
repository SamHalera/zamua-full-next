import { createUser } from "@/actions/user";
import HomeContent from "@/components/contents/Home/HomeContent";
import { Metadata } from "next";

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
      url: process.env.NEXTAUTH_URL,
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
export default async function Home() {
  return <HomeContent />;
}
