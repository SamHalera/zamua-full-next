// const scrollableContainer = document.getElementById("scrollable");

//     if (mediaGallery) {
//       // document.getElementById(`image_${}`)
//       const lastImageItem = mediaGallery[mediaGallery.length - 1];
//       const lastImageHTMLElement = document.getElementById(
//         `image_${lastImageItem.id}`
//       );
//       console.log(lastImageHTMLElement);
//       const position = lastImageHTMLElement?.getBoundingClientRect();
//       console.log(position?.right);
//       const currentMediaItem = mediaGallery.find(
//         (item) => item.source === currentSlideItem.src
//       );
//       if (currentMediaItem) {
//         const indexItem = mediaGallery?.indexOf(currentMediaItem);

//         let indexTarget: number = 0;
//         if (target === "next") {
//           const tempIndex = indexItem + 1;
//           indexTarget = tempIndex > mediaGallery.length - 1 ? 0 : tempIndex;
//           if (scrollableContainer) {
//             console.log("tempIndex==>", tempIndex);
//             console.log("length==>", mediaGallery.length - 1);
//             // const valueToScroll = tempIndex > mediaGallery.length - 1 ? 0 : 100;
//             if (tempIndex > mediaGallery.length - 1) {
//               scrollableContainer.scrollLeft = 0;
//             } else {
//               scrollableContainer.scrollLeft += 100;
//             }
//           }
//         } else {
//           const tempIndex = indexItem - 1;
//           indexTarget = tempIndex < 0 ? mediaGallery.length - 1 : tempIndex;
//           if (scrollableContainer) {
//             scrollableContainer.scrollLeft -= 100;
//           }
//         }

//         const image: MediaType = mediaGallery[indexTarget];

//         const newSlideItem: CurrentSlideType = {
//           id: image.id,
//           src: image?.source,
//           caption: image.caption ?? "",
//           creditName: image.credit?.name ?? "",
//           creditUrl: image.credit?.url ?? "",
//         };
//         setCurrentSlideItem(newSlideItem);
//       }
//     }
