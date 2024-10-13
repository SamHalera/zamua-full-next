import { Media } from "@prisma/client";
import React from "react";
import LightGalleryComponent from "./LightGalleryComponent";

const MediaGallery = ({ mediaGallery }: { mediaGallery?: Media[] }) => {
  return (
    <div>
      <div className=" p-8">
        <LightGalleryComponent images={mediaGallery} />
      </div>
    </div>
  );
};

export default MediaGallery;
