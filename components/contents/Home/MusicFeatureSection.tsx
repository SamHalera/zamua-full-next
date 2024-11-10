import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import epCover from "@/public/images/pochette-ep.jpg";
import Link from "next/link";
import * as motion from "framer-motion/client";
const MusicFeatureSection = () => {
  return (
    <div className="flex flex-wrap justify-center md:gap-8 lg:gap-20 py-20 lg:py-32 px-10">
      <div className="mb-20 flex flex-col items-center gap-6">
        <div className={cn("text-center flex flex-col gap-4 h-44 mb-10")}>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {" "}
            <h2
              className={cn(
                "text-black text-6xl md:text-7xl lg:text-8xl custom-title font-semibold"
              )}
            >
              LITANIE
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              delay: 0.3,
              type: "tween",
              duration: 0.5,
            }}
          >
            <h3 className={cn("text-black text-5xl md:text-7xl custom-title")}>
              EP
            </h3>
          </motion.div>
        </div>

        <div className=" flex flex-col items-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              duration: 0.8,
            }}
          >
            <Image
              className="w-64 md:w-[420px]"
              src={epCover.src}
              width="320"
              height="320"
              alt="Zamua dans la couverture de son EP"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "tween",
              duration: 0.8,
            }}
            className="w-full mb-10"
          >
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
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            type: "tween",
            duration: 0.8,
          }}
          className="lg:w-2/3 text-xl leading-9"
        >
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
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            type: "tween",
            duration: 0.8,
          }}
        >
          <Link href={"/music"} className="custom-btn">
            MUSIC
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MusicFeatureSection;
