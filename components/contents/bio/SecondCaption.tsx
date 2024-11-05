import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import imgCaption from "@/public/images/zamua-studio.jpg";
import Link from "next/link";

const SecondCaption = () => {
  return (
    <div className="relative flex flex-col items-center mb-28 lg:mb-60">
      <div className="mb-4 flex flex-col gap-8">
        <h2
          className={cn(
            "text-center lg:text-start custom-secondary-title font-bold text-4xl md:text-5xl md:w-[700px] z-10"
          )}
        >
          A borderline between analogue and electronica
        </h2>
        <div className=" z-30 self-center lg:self-end">
          <Link className=" custom-btn " href={"/music"}>
            MUSIC
          </Link>
        </div>
      </div>
      <div className="z-10">
        <Image
          className="w-64 sm:w-96 md:w-[400px] lg:w-[500px]"
          height={500}
          width={500}
          src={imgCaption.src}
          alt=""
        />
      </div>
      <div
        className={cn(
          "hidden lg:block lg:absolute right-40 top-20 xl:right-80 xl:top-20 bg-black w-[450px] h-[500px]"
        )}
      ></div>
      <div
        className={cn(
          "hidden lg:block lg:absolute left-40 top-96 xl:left-96 xl:top-96 bg-[#E3A53F] w-[500px] h-96"
        )}
      ></div>
    </div>
  );
};

export default SecondCaption;
