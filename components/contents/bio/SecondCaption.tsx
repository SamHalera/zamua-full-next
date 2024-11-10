import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import imgCaption from "@/public/images/zamua-studio.jpg";
import Link from "next/link";
import * as motion from "framer-motion/client";
const SecondCaption = () => {
  return (
    <div className="relative flex flex-col items-center mb-28 lg:mb-60">
      <div className="mb-4 flex flex-col gap-8">
        <motion.div
          className="z-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
        >
          <h2
            className={cn(
              "text-center lg:text-start custom-secondary-title font-bold text-4xl md:text-5xl md:w-[700px] z-10"
            )}
          >
            A borderline between analogue and electronica
          </h2>
        </motion.div>
        <div className=" z-30 self-center lg:self-end">
          <Link className=" custom-btn " href={"/music"}>
            MUSIC
          </Link>
        </div>
      </div>
      <div className="z-10">
        <motion.div
          className="z-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            // delay: 0.2,
            type: "tween",
            duration: 0.8,
          }}
        >
          <Image
            className="w-64 sm:w-96 md:w-[400px] lg:w-[500px]"
            height={500}
            width={500}
            src={imgCaption.src}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          type: "tween",
          duration: 0.8,
        }}
        className={cn(
          "hidden lg:block lg:absolute right-40 top-20 xl:right-80 xl:top-20 bg-black w-[450px] h-[500px]"
        )}
      ></motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          type: "tween",
          duration: 0.8,
        }}
        className={cn(
          "hidden lg:block lg:absolute left-40 top-96 xl:left-96 xl:top-96 bg-[#E3A53F] w-[500px] h-96"
        )}
      ></motion.div>
    </div>
  );
};

export default SecondCaption;
