import React from "react";
import * as motion from "framer-motion/client";

const SecondSection = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.8,
        }}
        className="flex flex-col px-8 sm:px-10 md:px-24 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16"
      >
        <div>
          <p className=" text-xl leading-9 mb-9 ">
            My passion for experimentation is at the heart of how I write and
            create.
          </p>
          <p className="text-xl leading-9 mb-9 ">
            In my music, I dig into themes that resonate deeply with me:
            <strong>
              identity, migration, racism, and the journey—both physical and
              spiritual
            </strong>{" "}
            These themes aren’t just inspirations; they’re the foundation of my
            work and my own inner reflection. Many of my songs carry the feeling
            of a sacred journey, of moving away from the familiar and stable.
            Though I may not state it outright, each song tells a layered{" "}
            <strong>
              story of how we connect with others and how life’s events shape
              our emotions and experiences.
            </strong>
          </p>
          <p className="text-xl leading-9 mb-9 ">
            In 2013, I had the privilege of collaborating with the team at OD
            MusicLab—Shay Mané, Fabrice Ho-Shui-Ling, and Chloé Dupeyrat—to
            release my debut EP, LITANIE.
          </p>
          <p className="text-xl leading-9 mb-9 font-semibold">
            Now, as I split my time between France and Italy, I’m immersed in
            creating my first full album.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SecondSection;
