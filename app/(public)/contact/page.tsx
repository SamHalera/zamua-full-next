import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
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
      url: `${process.env.NEXTAUTH_URL}/contact`,
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
const page = () => {
  return (
    <div
      className="bg-cover bg-fixed h-screen"
      style={{
        backgroundImage: `url(/images/bg-contact.jpeg)`,
      }}
    >
      <div className="bg-black/40 h-screen flex flex-col gap-12 justify-center items-center">
        <h1 className="text-white text-7xl font-semibold mb-10">CONTACT</h1>
        <h2 className="text-white text-4xl font-semibold">
          Booking and Management
        </h2>
        <a
          href="mailto:contact@zamuamusic.com"
          className="text-primary text-3xl font-semibold mb-10"
        >
          contact@zamuamusic.com
        </a>

        <div className="flex gap-7 ">
          <Link href={"https://www.facebook.com/zamua/"} target="_blank">
            <Facebook className="size-10 text-primary" />
          </Link>
          <Link
            href={"https://www.instagram.com/zamua_haleri/"}
            target="_blank"
          >
            <Instagram className="size-10 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
