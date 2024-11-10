import Image from "next/image";
import Link from "next/link";
import React from "react";
import spotifyLogo from "@/public/images/spotify-logo-black.png";
import deezerLogo from "@/public/images/deezer.png";
import appleLogo from "@/public/images/apple-music.svg";
import epCover from "@/public/images/pochette-ep.jpg";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

const HeroSection = () => {
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
                <Image
                  src={deezerLogo.src}
                  alt="spotify logo"
                  width={"110"}
                  height={"36"}
                  className="w-20 lg:w-28"
                />
                <Image
                  src={appleLogo.src}
                  alt="spotify logo"
                  width={"110"}
                  height={"36"}
                  className="w-20 lg:w-28"
                />
              </div>
            </Link>
          </div>
          <h1 className="text-black font-normal text-center text-3xl sm:text-4xl md:text-6xl xl:text-7xl lg:text-start w-full  lg:w-2/3 mb-3 flex flex-col gap-3">
            <motion.span
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ type: "tween", duration: 0.6 }}
              className="block"
            >
              When music enters your life,
            </motion.span>
            <motion.span
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.4, type: "tween", duration: 0.8 }}
              className="block"
            >
              it is bound to leave
            </motion.span>
            <motion.span
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.8, type: "tween", duration: 1 }}
              className="block"
            >
              an indelible mark
            </motion.span>
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
          <div className="w-[2px] h-28 md:h-36 lg:h-40 bg-primary"></div>
        </Link>
      </div>
      <div id="toScroll" className=" mb-40"></div>
    </>
  );
};

export default HeroSection;
