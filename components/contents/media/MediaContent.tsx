import { getAllMediaGallery } from "@/actions/media";
import React from "react";

import MediaGallery from "./MediaGallery";

const MediaContent = async () => {
  const mediaGallery = await getAllMediaGallery();

  return (
    <div className="p-10">
      <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl ">
        PHOTOS
      </h1>

      {mediaGallery && <MediaGallery mediaGallery={mediaGallery} />}
    </div>
  );
};

export default MediaContent;
