import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

const SecondaryHeroSection = ({
  title,
  imgSrc,
}: {
  title: JSX.Element;
  imgSrc: string;
}) => {
  console.log(imgSrc);
  return (
    <>
      <div
        className={cn(
          "relative mb-12 bg-cover bg-bottom px-8 py-24 lg:p-32 bg-scroll lg:bg-fixed  flex items-center h-[70vh]"
        )}
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      >
        <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl lg:text-start">
          {title}
        </h1>

        <Link
          href="#toScroll"
          className="absolute left-2/4 -bottom-24 md:-bottom-32 flex flex-col items-center gap-6"
        >
          <span
            className={cn(
              "[writing-mode:vertical-lr] line-scroll text-primary font-semibold"
            )}
          >
            scroll
          </span>
          <div className="w-[2px] h-28 md:h-36 lg:h-60 bg-primary"></div>
        </Link>
      </div>
      <div id="toScroll" className=" mb-40"></div>
    </>
  );
};

export default SecondaryHeroSection;
