import { cn } from "@/lib/utils";
import { MusicFeature } from "@prisma/client";

import Link from "next/link";
import React from "react";

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
        <h2 className={cn("text-white text-3xl lg:text-4xl")}>
          {musicFeatureSingle.title} {musicFeatureSingle.subTitle}
        </h2>
        {/* <h3 className={cn("text-white text-xl")}>
          {musicFeatureSingle.subTitle}
        </h3> */}
      </div>
      <div className=" flex flex-col items-center">
        {musicFeatureSingle.cover && children}

        <div
          className="w-64  md:w-[320px]"
          id={musicFeatureSingle.id.toString()}
          dangerouslySetInnerHTML={{ __html: musicFeatureSingle.iframe }}
        />
      </div>

      <Link
        href={musicFeatureSingle.path}
        target="_blank"
        className="custom-btn"
      >
        LISTEN
      </Link>
    </div>
  );
};

export default MusicFeatureSingle;
