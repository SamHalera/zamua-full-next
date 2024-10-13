import { getAllMediaGallery } from "@/actions/media";
import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgMedia from "@/public/images/bg-photos.jpg";
import MediaGallery from "./MediaGallery";

const MediaContent = async () => {
  const mediaGallery = await getAllMediaGallery();
  const title = <span className="text-primary">PHOTOS</span>;
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgMedia.src} />
      <MediaGallery mediaGallery={mediaGallery} />
    </>
  );
};

export default MediaContent;
