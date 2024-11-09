import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import epCover from "@/public/images/pochette-ep.jpg";
import Link from "next/link";

const MusicFeatureSection = () => {
  return (
    <div className="flex flex-wrap justify-center md:gap-8 lg:gap-20 py-20 lg:py-32 px-10">
      <div className="mb-20 flex flex-col items-center gap-6">
        <div className={cn("text-center flex flex-col gap-4 h-44 mb-10")}>
          <h2
            className={cn(
              "text-black text-6xl md:text-7xl lg:text-8xl custom-title font-semibold"
            )}
          >
            LITANIE
          </h2>
          <h3 className={cn("text-black text-5xl md:text-7xl custom-title")}>
            EP
          </h3>
        </div>

        <div className=" flex flex-col items-center">
          <Image
            className="w-64 md:w-[420px]"
            src={epCover.src}
            width="320"
            height="320"
            alt="Zamua dans la couverture de son EP"
          />

          <div className="w-full mb-10">
            <iframe
              className=" rounded-lg"
              src="https://open.spotify.com/embed/album/49xV7avbfOOiy1b3EWVvIV?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="lg:w-2/3 text-xl leading-9">
          <p className="">
            <strong>LITANIE</strong> is my debut EP, brought to life with the
            support of OD MusicLab, an independent label founded by a close-knit
            trio: producer and sound designer Shay Mané, sound engineer Fabrice
            Ho-Shui-Ling, and artistic director Chloé Dupeyrat of Acidulée
            Production. This mini-album is a personal exploration—a space where
            <strong> litanies and ecstatic emotions intertwine.</strong> It’s
            more than music; it’s a journey that resists easy labels yet feels
            essential, a reflection of my deepest thoughts and dreams, brought
            into sound.
          </p>
        </div>

        <Link href={"/music"} className="custom-btn">
          MUSIC
        </Link>
      </div>
    </div>
  );
};

export default MusicFeatureSection;
