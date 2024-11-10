import React from "react";
import * as motion from "framer-motion/client";

const FirstSection = () => {
  return (
    <>
      <div className="flex flex-col px-4 sm:px-10 md:px-16  xl:px-48  mx-auto sm:mb-4 md:mb-14 lg:mb-16">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold custom-title mb-10 flex flex-col"
        >
          <span>VOICE, SOUL</span>{" "}
          <span className=" lg:ml-40">AND PRESENCE</span>
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
          <p className=" text-xl leading-9 mb-9">
            Music emerges from a deep sense of urgency: a need to express one’s
            voice, soul, and presence.{" "}
            <strong>
              It’s a way of learning to think critically about what we see and
              experience,
            </strong>{" "}
            a journey on a cyclical path toward self-discovery and
            self-determination. Music is my medium for touching others’
            emotions, painting images and ideas that shape our view of reality,
            infusing it with deeper meaning.
          </p>
          <p className="text-xl leading-9 mb-9 ">
            <strong>
              For me, music connects the inner self with the outer world. It
              shapes those elusive, unspoken mysteries within us, giving them
              life through melody and rhythm.
            </strong>
          </p>

          <p className="text-xl leading-9 mb-9">
            When it comes to music, I’m overcome with passion: a feeling that’s
            been with me since childhood.
            <strong>
              Singing allows me to explore and reflect on themes close to my
              heart, like identity, in all its fluidity and complexity.
            </strong>{" "}
            I strive to dismantle any notions of division, challenging the
            imaginary line between ‘us’ and ‘them.’
          </p>
          <p className="text-xl leading-9 mb-9">
            Music has been and still is, a fundamental element of my existence.
            I don’t limit myself to any specific genre; my work begins simply
            with voice and guitar, building into stories that draw from the
            diverse foundations of my musical world—soul, jazz, reggae, and
            electronic influences. Carrying this rich blend has allowed me to
            create something unique, something distinctly hybrid.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default FirstSection;
