"use client";
import React, { useState } from "react";

import { CldImage } from "next-cloudinary";
import SlideGalleryComponent from "./SlideGalleryComponent";
import { MediaType } from "@/types/types";

export type CurrentSlideType = {
  src: string | null;
  caption: string | null;
  creditName: string | null;
  creditUrl: string | null;
};
const MediaGallery = ({ mediaGallery }: { mediaGallery: MediaType[] }) => {
  const [isSlideView, setIsSlideView] = useState<boolean>(false);
  const [currentSlideItem, setCurrentSlideItem] =
    useState<CurrentSlideType | null>(null);
  return (
    <div className="">
      <div className=" p-8">
        <div className="flex flex-wrap gap-5 justify-center" id="lightgallery">
          {!isSlideView &&
            mediaGallery &&
            mediaGallery.map((image) => {
              console.log(image);
              return (
                <CldImage
                  onClick={() => {
                    const src = image.source;
                    const caption = image.caption ?? "";
                    const creditName = image.credit?.name ?? "";
                    const creditUrl = image.credit?.url ?? "";
                    const currentObjectSlide = {
                      src,
                      caption,
                      creditName,
                      creditUrl,
                    };
                    setCurrentSlideItem(currentObjectSlide);
                    setIsSlideView(!isSlideView);
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  key={image.id}
                  className=" cursor-pointer  hover:opacity-75 duration-700 w-[300px] object-cover"
                  width="300"
                  height="300"
                  src={image.source}
                  sizes="100vw"
                  crop="fill"
                  alt="Description of my image"
                  priority
                />
              );
            })}
        </div>
      </div>
      {isSlideView && (
        <SlideGalleryComponent
          mediaGallery={mediaGallery}
          setIsSlideView={setIsSlideView}
          isSlideView={isSlideView}
          currentSlideItem={currentSlideItem}
          setCurrentSlideItem={setCurrentSlideItem}
        />
      )}
    </div>
  );
};

export default MediaGallery;
