"use client";
import React, { useEffect } from "react";
import { MediaType } from "@/types/types";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { CurrentSlideType } from "./MediaGallery";
import { cn } from "@/lib/utils";

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
      src: image.source,
      caption: image.caption ?? "",
      creditName: image.credit?.name ?? "",
      creditUrl: image.credit?.url ?? "",
    };
    setCurrentSlideItem(newSlideItem);
  };

  const handleSlideByControllers = (
    currentSlideItem: CurrentSlideType,
    target: "next" | "prev"
  ) => {
    if (mediaGallery) {
      const currentMediaItem = mediaGallery.find(
        (item) => item.source === currentSlideItem.src
      );
      if (currentMediaItem) {
        const indexItem = mediaGallery?.indexOf(currentMediaItem);

        const indexItemTarget =
          target === "next" ? indexItem + 1 : indexItem - 1;
        const image: MediaType =
          indexItemTarget < 0
            ? mediaGallery[mediaGallery.length - 1]
            : mediaGallery[indexItemTarget];

        const newSlideItem: CurrentSlideType = {
          src: image?.source,
          caption: image.caption ?? "",
          creditName: image.credit?.name ?? "",
          creditUrl: image.credit?.url ?? "",
        };
        setCurrentSlideItem(newSlideItem);
      }
    }
  };

  const handleClickOnArrowKey = (e: KeyboardEvent) => {
    let target: "next" | "prev" = "next";
    switch (e.key) {
      case "ArrowRight":
        target = "next";
        break;
      case "ArrowLeft":
        target = "prev";
        break;
    }

    if (currentSlideItem) {
      handleSlideByControllers(currentSlideItem, target);
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

      <div className="duration-700 relative">
        {currentSlideItem?.src && (
          <div className="flex items-center gap-14">
            <ChevronLeft
              onClick={() => {
                handleSlideByControllers(currentSlideItem, "prev");
              }}
              className="text-primary cursor-pointer"
              size={40}
            />
            <div className="flex flex-col items-center gap-2">
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
              <div className="absolute w-full bg-black/60 bottom-0 text-center p-2">
                <span className="text-white">{currentSlideItem.caption}</span>
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
            </div>
            <ChevronRight
              onClick={() => {
                handleSlideByControllers(currentSlideItem, "next");
              }}
              className="text-primary cursor-pointer"
              size={40}
            />
          </div>
        )}
      </div>
      <div className="flex flex-nowrap w-3/3 overflow-scroll">
        {mediaGallery &&
          mediaGallery.map((image) => {
            return (
              <CldImage
                onClick={() => handleToggleSlide(image)}
                key={image.id}
                className={cn(
                  " cursor-pointer  hover:opacity-75 duration-700 border border-transparent hover:border-primary/75 rounded-sm",
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
