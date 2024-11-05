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
  return (
    <>
      <div
        className={cn(
          "relative mb-8 bg-cover bg-bottom bg-scroll lg:bg-fixed h-[50vh]"
        )}
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      >
        <div className="bg-black/60 h-[50vh] w-full  px-8 py-24 lg:p-32 flex items-center">
          <h1 className="font-bold text-center text-5xl sm:text-5xl md:text-6xl xl:text-7xl lg:text-start">
            {title}
          </h1>

          {/* <Link
            href="#toScroll"
            className="absolute left-2/4 -bottom-16 md:-bottom-12 flex flex-col items-center gap-6"
          >
            <span
              className={cn(
                "[writing-mode:vertical-lr] line-scroll text-primary font-semibold"
              )}
            >
              scroll
            </span>
            <div className="w-[2px] h-28 md:h-36 lg:h-40 bg-primary"></div>
          </Link> */}
        </div>
      </div>
      {/* <div id="toScroll" className=" mb-20"></div> */}
    </>
  );
};

export default SecondaryHeroSection;
