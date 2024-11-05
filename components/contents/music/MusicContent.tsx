import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgMusic from "@/public/images/bg-music.jpg";
import { MusicFeature } from "@prisma/client";
import dynamic from "next/dynamic";
const FirstSection = dynamic(() => import("./FirstSection"));
const MusicFeatures = dynamic(() => import("./MusicFeatures"));

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
