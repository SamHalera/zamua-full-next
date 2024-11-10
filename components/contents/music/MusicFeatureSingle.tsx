import { cn } from "@/lib/utils";
import { MusicFeature } from "@prisma/client";

import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const MusicFeatureSingle = ({
  musicFeatureSingle,
  children,
}: {
  musicFeatureSingle: MusicFeature;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-20 flex flex-col gap-6  ">
      <div className={cn("text-center flex flex-col items-center gap-4")}>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          <h2 className={cn("text-white text-3xl")}>
            {musicFeatureSingle.title} {musicFeatureSingle.subTitle}
          </h2>
        </motion.div>
      </div>
      <div className=" flex flex-col items-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "tween", duration: 0.8 }}
        >
          {musicFeatureSingle.cover && children}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "tween", duration: 0.8 }}
        >
          <div
            className="w-64  md:w-[320px]"
            id={musicFeatureSingle.id.toString()}
            dangerouslySetInnerHTML={{ __html: musicFeatureSingle.iframe }}
          />
        </motion.div>
      </div>
      <motion.div
        className="self-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "tween", duration: 0.8 }}
      >
        <Link
          href={musicFeatureSingle.path}
          target="_blank"
          className="custom-btn"
        >
          LISTEN
        </Link>
      </motion.div>
    </div>
  );
};

export default MusicFeatureSingle;
