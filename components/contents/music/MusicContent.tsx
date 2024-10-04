import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgMusic from "@/public/images/bg-music.jpg";
import FirstSection from "./FirstSection";
import MusicFeatures from "./MusicFeatures";
import { MusicFeature } from "@prisma/client";

const MusicContent = ({
  musicFeatures,
}: {
  musicFeatures: MusicFeature[] | null;
}) => {
  const title = (
    <>
      <span className="text-primary">MUSIC </span>
      <span className="text-white">IS...</span>
    </>
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
