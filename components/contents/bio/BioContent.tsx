import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgBio from "@/public/images/bg-bio.jpg";
import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./FirstSection"));
const FirstCaption = dynamic(() => import("./FirstCaption"));
const SecondSection = dynamic(() => import("./SecondSection"));
const SecondCaption = dynamic(() => import("./SecondCaption"));

const BioContent = () => {
  const title = (
    <>
      <span className="text-primary">BIO</span>
      <span className="text-white">GRAPHY</span>
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
