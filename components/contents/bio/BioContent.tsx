import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgBio from "@/public/images/bg-bio.jpg";
import dynamic from "next/dynamic";

import * as motion from "framer-motion/client";

const FirstSection = dynamic(() => import("./FirstSection"));
const FirstCaption = dynamic(() => import("./FirstCaption"));
const SecondSection = dynamic(() => import("./SecondSection"));
const SecondCaption = dynamic(() => import("./SecondCaption"));

const BioContent = () => {
  const title = (
    <div className="flex ">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="text-primary "
      >
        BIO
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.1, type: "tween", duration: 1 }}
        className="text-white"
      >
        GRAPHY
      </motion.div>
    </div>
  );
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgBio.src} />
      <FirstSection />
      <FirstCaption />
      <SecondSection />
      <SecondCaption />
    </>
  );
};

export default BioContent;
