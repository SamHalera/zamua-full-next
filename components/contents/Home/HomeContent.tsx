import React from "react";
import HeroSection from "./HeroSection";
import dynamic from "next/dynamic";

const BioSection = dynamic(() => import("./BioSection"));
const MusicFeatureSection = dynamic(() => import("./MusicFeatureSection"));
const ProjectsSection = dynamic(() => import("./ProjectsSection"));

const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <BioSection />
      <MusicFeatureSection />
      <ProjectsSection />
    </>
  );
};

export default HomeContent;
