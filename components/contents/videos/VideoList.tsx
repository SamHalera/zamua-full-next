import { Videos } from "@prisma/client";
import React from "react";

const VideoList = ({ videos }: { videos?: Videos[] }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-40">
        {videos &&
          videos.map((video) => {
            return (
              <div
                className=" max-w-full mx-auto md:w-[450px] w-72 sm:w-96 "
                key={video.id}
              >
                <div dangerouslySetInnerHTML={{ __html: video.iframe }} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VideoList;
