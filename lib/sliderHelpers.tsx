import { CurrentSlideType } from "@/components/contents/media/MediaGallery";
import { MediaType, ToucheDataType } from "@/types/types";
import { TouchEvent } from "react";

export function handleScrollSliderContainer(
  mediaGallery: MediaType[],
  indexNextItem: number,
  target: "next" | "prev",
  scrollableContainer: HTMLElement
) {
  if (scrollableContainer) {
    if (target === "next") {
      if (indexNextItem > mediaGallery.length - 1) {
        scrollableContainer.scrollLeft = 0;
      } else {
        scrollableContainer.scrollLeft += 80;
      }
    } else {
      if (indexNextItem < 0) {
        const lastImageItem = mediaGallery[mediaGallery.length - 1];
        const lastImageHTMLElement = document.getElementById(
          `image_${lastImageItem.id}`
        );
        const position = lastImageHTMLElement?.getBoundingClientRect();
        if (position) scrollableContainer.scrollLeft = position.right;
      } else {
        scrollableContainer.scrollLeft -= 80;
      }
    }
  }
}

export function getItemToSliderByControllers(
  currentSlideItem: CurrentSlideType,
  target: "next" | "prev",
  scrollableContainer: HTMLElement | null,
  mediaGallery?: MediaType[]
) {
  if (mediaGallery && scrollableContainer) {
    const currentMediaItem = mediaGallery.find(
      (item) => item.source === currentSlideItem.src
    );
    if (currentMediaItem) {
      const indexItem = mediaGallery?.indexOf(currentMediaItem);
      let indexTarget: number = 0;

      if (target === "next") {
        const tempIndex = indexItem + 1;
        indexTarget = tempIndex > mediaGallery.length - 1 ? 0 : tempIndex;
        handleScrollSliderContainer(
          mediaGallery,
          tempIndex,
          "next",
          scrollableContainer
        );
      } else {
        const tempIndex = indexItem - 1;
        indexTarget = tempIndex < 0 ? mediaGallery.length - 1 : tempIndex;
        handleScrollSliderContainer(
          mediaGallery,
          tempIndex,
          "prev",
          scrollableContainer
        );
      }
      const image: MediaType = mediaGallery[indexTarget];
      const newSlideItem: CurrentSlideType = {
        id: image.id,
        src: image?.source,
        caption: image.caption ?? "",
        creditName: image.credit?.name ?? "",
        creditUrl: image.credit?.url ?? "",
      };
      return newSlideItem;
    }
    return currentMediaItem;
  }
  return currentSlideItem;
}

export const handleTouchStart = (
  e: TouchEvent<Element>,
  setTouchData: React.Dispatch<React.SetStateAction<ToucheDataType>>
) => {
  const touch = e.touches[0];

  setTouchData((prev) => ({
    ...prev,
    startX: touch.clientX,
    startY: touch.clientY,
  }));
};

export const handleTouchMove = (
  e: TouchEvent<Element>,
  setTouchData: React.Dispatch<React.SetStateAction<ToucheDataType>>
) => {
  const touch = e.touches[0];

  setTouchData((prev) => ({
    ...prev,
    moveX: touch.clientX,
    moveY: touch.clientY,
  }));
};

export const handleTouchEnd = (
  e: TouchEvent<Element>,
  touchData: ToucheDataType,
  setTouchData: React.Dispatch<React.SetStateAction<ToucheDataType>>
) => {
  const deltaX = touchData.moveX - touchData.startX;
  const deltaY = touchData.moveY - touchData.startY;

  setTouchData({
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
  });
  return deltaX > deltaY ? "prev" : "next";
};
