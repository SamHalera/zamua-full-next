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
        </div>
      </div>
    </>
  );
};

export default SecondaryHeroSection;
