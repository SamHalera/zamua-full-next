import React from "react";
import FirstSection from "./FirstSection";
import FirstCaption from "./FirstCaption";
import SecondSection from "./SecondSection";
import SecondCaption from "./SecondCaption";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgBio from "@/public/images/bg-bio.jpg";

const BioContent = () => {
  const title = (
    <>
      <span className="text-primary">BIO</span>
      <span className="text-white">GRAFY</span>
    </>
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
