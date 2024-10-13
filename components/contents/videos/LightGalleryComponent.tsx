"use client";
import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Media } from "@prisma/client";
import { CldImage } from "next-cloudinary";

const LightGalleryComponent = ({ images }: { images?: Media[] }) => {
  return (
    <LightGallery
      // dynamic={true}
      elementClassNames={"masonry-gallery-demo"}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      <div className="flex flex-wrap gap-5 justify-center">
        {images &&
          images.map((image) => {
            return (
              <a
                key={image.id}
                data-lg-size="1600-1067"
                className=" cursor-pointer  hover:opacity-75 duration-700 bg-slate-400 w-[400px]"
                data-src={`${image.source}`}
                data-sub-html={image.caption ?? ""}
              >
                <CldImage
                  width="400"
                  height="400"
                  src={image.source}
                  sizes="100vw"
                  crop="fill"
                  alt="Description of my image"
                />
              </a>
            );
          })}
      </div>
    </LightGallery>
  );
};

export default LightGalleryComponent;
