import { Videos } from "@prisma/client";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }: { videos?: Videos[] }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-40">
        {videos &&
          videos
            .sort((a: Videos, b: Videos) => a.priority - b.priority)
            .map((video) => {
              return <VideoItem key={video.id} video={video} />;
            })}
      </div>
    </div>
  );
};

export default VideoList;
