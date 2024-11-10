import { Videos } from "@prisma/client";
import React from "react";
import * as motion from "framer-motion/client";
const VideoItem = ({ video, index }: { video: Videos; index: number }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{
        delay: index / 5,
        type: "tween",
        duration: 0.8,
      }}
      className=" w-full sm:w-[500px]"
    >
      <div className="" dangerouslySetInnerHTML={{ __html: video.iframe }} />
    </motion.div>
  );
};

export default VideoItem;
