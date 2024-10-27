import React from "react";

import { getAllVideos } from "@/actions/video";
import VideoList from "./VideoList";

const VideoContent = async () => {
  const videos = await getAllVideos();

  return (
    <div className="p-4 md:p-10">
      <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-10">
        VIDEOS
      </h1>

      <VideoList videos={videos} />
    </div>
  );
};

export default VideoContent;
