import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgMusic from "@/public/images/bg-music.jpg";
import { MusicFeature } from "@prisma/client";
import dynamic from "next/dynamic";
import * as motion from "framer-motion/client";
const FirstSection = dynamic(() => import("./FirstSection"));
const MusicFeatures = dynamic(() => import("./MusicFeatures"));

const MusicContent = ({
  musicFeatures,
}: {
  musicFeatures: MusicFeature[] | null;
}) => {
  const title = (
    <div className="flex gap-3">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="text-primary"
      >
        MUSIC{" "}
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.1, type: "tween", duration: 1 }}
        className="text-white"
      >
        {" "}
        IS...
      </motion.div>
    </div>
  );
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgMusic.src} />
      <FirstSection />
      <MusicFeatures musicFeatures={musicFeatures} />
    </>
  );
};

export default MusicContent;
