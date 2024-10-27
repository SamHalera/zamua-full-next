"use client";
import { MusicFeature } from "@prisma/client";
import React from "react";
import MusicFeatureSingle from "./MusicFeatureSingle";
import { CldImage } from "next-cloudinary";

const MusicFeatures = ({
  musicFeatures,
}: {
  musicFeatures: MusicFeature[] | null;
}) => {
  return (
    <div className="bg-black flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-20 py-32 px-10">
      {musicFeatures &&
        musicFeatures.length > 0 &&
        musicFeatures.map((item: MusicFeature) => {
          return (
            <MusicFeatureSingle key={item.id} musicFeatureSingle={item}>
              {item.cover && (
                <CldImage
                  className="w-64 md:w-[320px] shadow-lg rounded-md"
                  width="400"
                  height="400"
                  src={item.cover}
                  sizes="100vw"
                  alt="Description of my image"
                />
              )}
            </MusicFeatureSingle>
          );
        })}
    </div>
  );
};

export default MusicFeatures;
