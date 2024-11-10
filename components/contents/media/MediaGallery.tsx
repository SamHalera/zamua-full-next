"use client";
import React, { Suspense, useState } from "react";

import { CldImage } from "next-cloudinary";
import { MediaType } from "@/types/types";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import * as motion from "framer-motion/client";
const SlideGalleryComponent = dynamic(() => import("./SlideGalleryComponent"));

export type CurrentSlideType = {
  id: number;
  src: string | null;
  caption: string | null;
  creditName: string | null;
  creditUrl: string | null;
};
const MediaGallery = ({
  mediaGallery,
  layout,
}: {
  mediaGallery: MediaType[];
  layout: "project" | "gallery";
}) => {
  const [isSlideView, setIsSlideView] = useState<boolean>(false);
  const [currentSlideItem, setCurrentSlideItem] =
    useState<CurrentSlideType | null>(null);
  const handleClickOnImage = (image: MediaType) => {
    const id = image.id;
    const src = image.source;
    const caption = image.caption ?? "";
    const creditName = image.credit?.name ?? "";
    const creditUrl = image.credit?.url ?? "";
    const currentObjectSlide = {
      id,
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
  };
  return (
    <div className="">
      <div className=" p-4 md:p-8">
        <div className="flex flex-wrap gap-5 justify-center" id="lightgallery">
          <Suspense
            fallback={
              <Skeleton className="bg-slate-300 h-[125px] w-[250px] rounded-xl" />
            }
          >
            {!isSlideView &&
              mediaGallery &&
              mediaGallery.map((image, index) => {
                return (
                  <motion.div
                    key={image.id}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index / 5,
                      type: "tween",
                      duration: 0.8,
                    }}
                  >
                    <CldImage
                      onClick={() => {
                        handleClickOnImage(image);
                      }}
                      className=" cursor-pointer  hover:opacity-75 duration-700 object-cover"
                      width={layout === "gallery" ? "300" : "200"}
                      height={layout === "gallery" ? "300" : "200"}
                      src={image.source}
                      sizes="100vw"
                      crop="fill"
                      alt="Description of my image"
                      priority
                    />
                  </motion.div>
                );
              })}
          </Suspense>
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
