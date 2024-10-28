import { Videos } from "@prisma/client";
import React from "react";

const VideoList = ({ videos }: { videos?: Videos[] }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-40">
        {videos &&
          videos
            .sort((a: Videos, b: Videos) => a.priority - b.priority)
            .map((video) => {
              return (
                <div className=" w-full sm:w-[500px]" key={video.id}>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: video.iframe }}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default VideoList;
