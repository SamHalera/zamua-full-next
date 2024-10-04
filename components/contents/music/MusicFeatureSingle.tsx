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
    <div className="mb-20 flex flex-col items-center gap-6">
      <div className={cn("text-center flex flex-col gap-4 h-28")}>
        <h2 className={cn("text-white text-4xl lg:text-5xl")}>
          {musicFeatureSingle.title}
        </h2>
        <h3 className={cn("text-white text-2xl")}>
          {musicFeatureSingle.subTitle}
        </h3>
      </div>
      <div className=" flex flex-col items-center">
        {musicFeatureSingle.cover && children}

        <div
          className="w-full"
          id={musicFeatureSingle.id.toString()}
          dangerouslySetInnerHTML={{ __html: musicFeatureSingle.iframe }}
        />
      </div>

      <Link href={musicFeatureSingle.path} className="custom-btn">
        LISTEN
      </Link>
    </div>
  );
};

export default MusicFeatureSingle;
