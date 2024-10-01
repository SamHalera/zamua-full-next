import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import spotifyLogo from "@/public/images/spotify-logo-black.png";
import deezerLogo from "@/public/images/deezer.png";
import appleLogo from "@/public/images/apple-music.svg";
import epCover from "@/public/images/pochette-ep.jpg";
import { Button } from "../../ui/button";

const HomeContent = () => {
  return (
    <>
      <div
        className={cn(
          "relative mb-12 bg-cover bg-bottom px-8 py-24 lg:p-32 bg-scroll lg:bg-fixed  flex justify-center h-auto lg:h-screen"
        )}
        style={{
          backgroundImage: `url(/images/bg-home.jpg)`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          <div className="">
            <Link
              href="https://ditto.fm/litanie-zamua"
              className="flex flex-col gap-8 items-center"
            >
              <Image
                className="lg:w-96 w-72 shadow-lg"
                src={epCover.src}
                width="500"
                height="500"
                alt="Zamua dans la couverture de son EP"
              />
              <div className="flex justify-between items-center gap-4">
                <Image
                  src={spotifyLogo.src}
                  alt="spotify logo"
                  width={"110"}
                  height={"36"}
                  className="w-20 lg:w-28 "
                />
                <img
                  src={deezerLogo.src}
                  alt="spotify logo"
                  width={"110"}
                  height={"36"}
                  className="w-20 lg:w-28"
                />
                <img
                  src={appleLogo.src}
                  alt="spotify logo"
                  width={"110"}
                  height={"36"}
                  className="w-20 lg:w-28"
                />
              </div>
            </Link>
          </div>
          <h1 className="text-black font-normal text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl lg:text-start w-full  lg:w-2/3 mb-3">
            When music enters your life, it is bound to leave an indelible mark
          </h1>
        </div>

        <Link
          href="#toScroll"
          className="absolute left-2/4 -bottom-24 md:-bottom-32 flex flex-col items-center gap-6"
        >
          <span
            className={cn("[writing-mode:vertical-lr] line-scroll", {
              // "text-primary": !component.isHomePage,
            })}
          >
            scroll
          </span>
          <div className=" w-[2px] h-28 md:h-36 lg:h-60 bg-primary"></div>
        </Link>
      </div>
      <div id="toScroll" className=" mb-40"></div>

      {/* SECTION TEXT */}
      <div className="flex flex-col px-8 sm:px-10 md:px-24 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16">
        <div className=" text-xl leading-9 mb-9">
          <p className=" italic">
            "The first time I sang in front of someone, I was seven years old.
            It was in front of my family. I did something that vaguely sounded
            like rap music.
          </p>
          <p className=" italic">
            There was no rap music being played at home; in fact, I'm still not
            sure where I got that powerful music from... My father often
            listened to jazz radio shows. I recall Louis Armstrong's trumpet
            playing in the mornings while we ate breakfast, as well as the
            vocals of Ladysmith Black Mambazo, Tracy Chapman, Luigi Tenco, Lucio
            Dalla, and Fabrizio De André.
          </p>
          <p className=" italic font-semibold">
            Today, when I listen to the recording of that first so-called
            performance, I understand that when the music hits, it leaves an
            indelible mark... "
          </p>
          <p className="font-semibold">
            This sensation endures until one realizes that the greatest way to
            appreciate music is to create it, to bring it to life...
          </p>
        </div>

        <Link
          href={"/bio"}
          className="font-semibold text-2xl self-center bg-primary text-black hover:bg-transparent transition-all border-2 border-primary hover:text-primary h-12 w-28 flex justify-center items-center"
        >
          BIO
        </Link>
      </div>
    </>
  );
};

export default HomeContent;
