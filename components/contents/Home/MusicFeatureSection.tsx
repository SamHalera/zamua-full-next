import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import epCover from "@/public/images/pochette-ep.jpg";
import Link from "next/link";

const MusicFeatureSection = () => {
  return (
    <div className="flex flex-wrap justify-center md:gap-8 lg:gap-20 py-20 lg:py-32 px-10">
      <div className="mb-20 flex flex-col items-center gap-6">
        <div className={cn("text-end flex flex-col self-end gap-4 h-44 mr-40")}>
          <h2
            className={cn(
              "text-black text-6xl md:text-7xl lg:text-8xl custom-title font-semibold"
            )}
          >
            LITANIE
          </h2>
          <h3
            className={cn("text-black text-5xl md:text-7xl custom-title mr-10")}
          >
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
        <div className="lg:w-2/3 text-xl leading-9  pl-20 pr-5 py-10">
          <p className="">
            <strong>LITANIE</strong> is Zamua&apos;s first EP, produced by the
            young independent label OD MusicLab, founded by producer and sound
            designer Shay Mané, sound engineer Fabrice Ho-Shui-Ling, and
            photographer and artistic director Chloé Dupeyrat (Acidulée
            Production). His debut mini-album is{" "}
            <strong>a unique blend of ecstatic feelings and litanies,</strong>{" "}
            making it hard to categorize his art form yet essential to know
            about.
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
