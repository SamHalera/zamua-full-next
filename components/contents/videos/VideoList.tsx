import { Videos } from "@prisma/client";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }: { videos?: Videos[] }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-40">
        {videos &&
          videos
            .sort(
              (a: Videos, b: Videos) =>
                parseFloat(a.priority) - parseFloat(b.priority)
            )
            .map((video, index) => {
              return <VideoItem key={video.id} video={video} index={index} />;
            })}
      </div>
    </div>
  );
};

export default VideoList;
