import React from "react";
import SecondaryHeroSection from "../SecondaryHeroSection";
import bgVideo from "@/public/images/picture-video.jpg";

import { getAllVideos } from "@/actions/video";
import VideoList from "./VideoList";

const VideoContent = async () => {
  const videos = await getAllVideos();
  const title = <span className="text-primary">VIDEOS</span>;
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgVideo.src} />
      <VideoList videos={videos} />
    </>
  );
};

export default VideoContent;
