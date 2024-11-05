"use client";
import React, { useEffect } from "react";
import { MediaType } from "@/types/types";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { CurrentSlideType } from "./MediaGallery";
import { cn } from "@/lib/utils";
import { getItemToSliderByControllers } from "@/lib/sliderHelpers";

const SlideGalleryComponent = ({
  mediaGallery,
  setIsSlideView,
  isSlideView,
  currentSlideItem,
  setCurrentSlideItem,
}: {
  mediaGallery?: MediaType[];
  setIsSlideView: React.Dispatch<React.SetStateAction<boolean>>;
  isSlideView: boolean;
  currentSlideItem: CurrentSlideType | null;
  setCurrentSlideItem: React.Dispatch<
    React.SetStateAction<CurrentSlideType | null>
  >;
}) => {
  const handleToggleSlide = (image: MediaType) => {
    const newSlideItem: CurrentSlideType = {
      id: image.id,
      src: image.source,
      caption: image.caption ?? "",
      creditName: image.credit?.name ?? "",
      creditUrl: image.credit?.url ?? "",
    };
    setCurrentSlideItem(newSlideItem);
  };

  const handleClickOnArrowKey = (e: KeyboardEvent) => {
    let target: string = "";
    switch (e.key) {
      case "ArrowRight":
        target = "next";
        break;
      case "ArrowLeft":
        target = "prev";
        break;
    }
    if (currentSlideItem && (target === "next" || target === "prev")) {
      const slideItem = getItemToSliderByControllers(
        currentSlideItem,
        target,
        mediaGallery
      );
      if (slideItem) setCurrentSlideItem(slideItem);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleClickOnArrowKey);
    return () => {
      document.removeEventListener("keydown", handleClickOnArrowKey);
    };
  }, [currentSlideItem]);
  return (
    <div className="bg-black absolute w-full h-auto z-50 top-0 bottom-0 left-0 right-0 p-10 flex flex-col gap-8 items-center">
      <CircleX
        onClick={() => {
          setIsSlideView(!isSlideView);
        }}
        className="size-10 text-primary cursor-pointer self-end"
      />

      <div className="duration-700  flex-1">
        {currentSlideItem?.src && (
          <div className="flex items-center gap-14 bg-white">
            <div className="flex flex-col items-center gap-2">
              <div className="relative group">
                <CldImage
                  className="duration-700"
                  width="500"
                  height="500"
                  src={currentSlideItem.src}
                  sizes="100vw"
                  crop="fill"
                  alt="Description of my image"
                  priority
                />
                {currentSlideItem.caption && (
                  <div className="absolute w-full bg-black/60 bottom-0 text-center p-2">
                    <span className="text-white">
                      {currentSlideItem.caption}
                    </span>
                    <div className="flex gap-2 items-center justify-center">
                      <span className="text-white">
                        {currentSlideItem.creditName}
                      </span>
                      {currentSlideItem.creditUrl && (
                        <Link
                          className="text-primary font-semibold hover:text-primary/80 duration-500"
                          href={currentSlideItem.creditUrl}
                          target="_blank"
                        >
                          {currentSlideItem.creditUrl}
                        </Link>
                      )}
                    </div>
                  </div>
                )}

                <ChevronLeft
                  onClick={() => {
                    const prevSlideItem = getItemToSliderByControllers(
                      currentSlideItem,
                      "prev",
                      mediaGallery
                    );
                    if (prevSlideItem) setCurrentSlideItem(prevSlideItem);
                  }}
                  className="text-primary cursor-pointer absolute top-28 lg:top-56 duration-500 opacity-0 size-14 left-6 group-hover:opacity-100 group-hover:left-0"
                />
                <ChevronRight
                  onClick={() => {
                    const nextSlideItem = getItemToSliderByControllers(
                      currentSlideItem,
                      "next",
                      mediaGallery
                    );
                    if (nextSlideItem) setCurrentSlideItem(nextSlideItem);
                  }}
                  className="text-primary cursor-pointer absolute top-28 lg:top-56  duration-500 opacity-0 size-14 right-6 group-hover:opacity-100 group-hover:right-2"
                  size={40}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        id="scrollable"
        className="flex flex-nowrap w-3/3  overflow-scroll scroll-smooth"
      >
        {mediaGallery &&
          mediaGallery.map((image) => {
            return (
              <CldImage
                id={`image_${image.id}`}
                onClick={() => handleToggleSlide(image)}
                key={image.id}
                className={cn(
                  " cursor-pointer hover:opacity-75 duration-700 border border-transparent hover:border-primary/75 rounded-sm",
                  {
                    "border-primary": image.source === currentSlideItem?.src,
                  }
                )}
                width="100"
                height="100"
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
  );
};

export default SlideGalleryComponent;
