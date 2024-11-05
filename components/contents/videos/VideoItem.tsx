import { Videos } from "@prisma/client";
import React from "react";

const VideoItem = ({ video }: { video: Videos }) => {
  return (
    <div className=" w-full sm:w-[500px]" key={video.id}>
      <div className="" dangerouslySetInnerHTML={{ __html: video.iframe }} />
    </div>
  );
};

export default VideoItem;
