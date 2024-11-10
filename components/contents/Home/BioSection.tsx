import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const BioSection = () => {
  return (
    <div className="flex flex-col gap-4 px-6 sm:px-6 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <h2 className="text-6xl lg:text-8xl font-bold custom-title block">
          MUSIC
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
        className="ml-8 lg:ml-40"
      >
        <h2 className="text-6xl lg:text-8xl font-bold custom-title mb-10 block">
          IS LIFE
        </h2>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 0.8,
        }}
        className="text-xl leading-9 mb-9"
      >
        <p className="italic">
          The first time I sang in front of someone, I was seven years old. It
          was in front of my family. I did something that vaguely sounded like
          rap music.
        </p>
        <p className=" italic">
          There was no rap music being played at home; in fact, I&apos;m still
          not sure where I got that powerful music from... My father often
          listened to jazz radio shows. I recall Louis Armstrong&apos;s trumpet
          playing in the mornings while we ate breakfast, as well as the vocals
          of Ladysmith Black Mambazo, Tracy Chapman, Luigi Tenco, Lucio Dalla,
          and Fabrizio De André.
        </p>
        <p className=" italic font-semibold">
          Today, when I listen to the recording of that first so-called
          performance, I understand that when the music hits, it leaves an
          indelible mark...
        </p>
        <p className="font-semibold">
          This sensation endures until one realizes that the greatest way to
          appreciate music is to create it, to bring it to life...
        </p>
      </motion.div>
      <motion.div
        className="self-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "tween",
          duration: 0.8,
        }}
      >
        <Link href={"/bio"} className="custom-btn">
          BIO
        </Link>
      </motion.div>
    </div>
  );
};

export default BioSection;
