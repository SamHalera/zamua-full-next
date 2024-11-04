import { CurrentSlideType } from "@/components/contents/media/MediaGallery";
import { MediaType } from "@/types/types";

export function handleScrollSliderContainer(
  mediaGallery: MediaType[],
  indexNextItem: number,
  target: "next" | "prev"
) {
  const scrollableContainer = document.getElementById("scrollable");
  if (scrollableContainer) {
    if (target === "next") {
      if (indexNextItem > mediaGallery.length - 1) {
        scrollableContainer.scrollLeft = 0;
      } else {
        scrollableContainer.scrollLeft += 100;
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
        scrollableContainer.scrollLeft -= 100;
      }
    }
  }
}

export function getItemToSliderByControllers(
  currentSlideItem: CurrentSlideType,
  target: "next" | "prev",
  mediaGallery?: MediaType[]
) {
  if (mediaGallery) {
    const currentMediaItem = mediaGallery.find(
      (item) => item.source === currentSlideItem.src
    );
    if (currentMediaItem) {
      const indexItem = mediaGallery?.indexOf(currentMediaItem);
      let indexTarget: number = 0;

      if (target === "next") {
        const tempIndex = indexItem + 1;
        indexTarget = tempIndex > mediaGallery.length - 1 ? 0 : tempIndex;
        handleScrollSliderContainer(mediaGallery, tempIndex, "next");
      } else {
        const tempIndex = indexItem - 1;
        indexTarget = tempIndex < 0 ? mediaGallery.length - 1 : tempIndex;
        handleScrollSliderContainer(mediaGallery, tempIndex, "prev");
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
