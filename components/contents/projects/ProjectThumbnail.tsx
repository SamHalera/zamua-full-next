import { Project } from "@prisma/client";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const ProjectThumbnail = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_FRONT}/projects/${project.slug}`}>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{
          delay: index / 10,
          type: "tween",
          duration: 0.8,
        }}
        className="h-72 w-72 sm:h-[400px] sm:w-[400px] bg-cover bg-bottom shadow-lg group"
        style={{
          backgroundImage: `url(${project.cover})`,
        }}
      >
        <div className="h-72 w-72 sm:h-[400px] sm:w-[400px] bg-black/50 transition-all hover:bg-black/80 flex justify-center items-center ">
          <div className="h-64 w-64 md:h-[330px] md:w-[330px] border border-primary flex justify-center items-center gap-2 relative">
            <h3 className="absolute left-10 bottom-16 text-primary text-[18px] font-semibold duration-500 group-hover:bottom-24">
              {project.primaryTitleString.toUpperCase()}
            </h3>
            <div className="absolute left-[120px] bottom-14 bg-primary w-[2px] h-0 group-hover:h-14 duration-500"></div>
            <h3 className="absolute left-32 bottom-16 text-primary text-[18px] font-semibold duration-500 group-hover:bottom-14">
              {project.secondaryTitleString.toUpperCase()}
            </h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectThumbnail;
