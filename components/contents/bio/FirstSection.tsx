import React from "react";
import * as motion from "framer-motion/client";

const FirstSection = () => {
  return (
    <>
      <div className="flex flex-col px-8 sm:px-10 md:px-24 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
          className="text-6xl lg:text-8xl font-bold custom-title my-14 flex flex-col"
        >
          <span> SINGER,</span>{" "}
          <span className="ml-4 lg:ml-20">GUITARIST,</span>
          <span className="ml-8 lg:ml-40">SONGWRITER</span>
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
        >
          <p className=" text-xl leading-9 mb-9 font-semibold">
            I’m Zamua—a guitarist, singer, and songwriter, born in Sardinia to a
            Sardinian mother and a Burundian father.
          </p>
          <p className="text-xl leading-9 mb-9 ">
            My journey with music began unexpectedly, during a long period of
            convalescence when I found myself bedridden. Picking up the guitar
            and singing started almost by chance, but since then, it has become
            my passion and purpose.
          </p>
          <p className="text-xl leading-9 mb-9 ">
            Through my music, I blend the rich textures of folk and soul-jazz,
            moving fluidly between analog warmth and electronic depth, where
            words hold powerful weight. My style continues to evolve, weaving
            together influences from soul, blues, folk, jazz, and reggae: a
            reflection of the diverse roots that make up who I am.
          </p>
          <p className="text-xl leading-9 mb-9 font-semibold">
            Music has become essential, a bridge that connects the different
            parts of my heritage and life.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default FirstSection;
