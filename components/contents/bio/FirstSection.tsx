import React from "react";

const FirstSection = () => {
  return (
    <>
      <div className="flex flex-col px-8 sm:px-10 md:px-24 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16">
        <div>
          <p className=" text-xl leading-9 mb-9 font-semibold">
            Zamua is a guitarist, singer, and songwriter. He was born in
            Sardinia to a Sardinian mother and a Burundian father.
          </p>
          <p className="text-xl leading-9 mb-9 ">
            His interest in singing and playing the guitar began almost by
            chance, during a long period of convalescence that saw him
            bedridden. Since then Zamua has devoted himself to music and
            writing, establishing{" "}
            <strong>
              a unique and thrilling combination of folk and soul-jazz that
              crosses over between analog and electronic music. The hybrid
              outcome is one in which the power of words is crucial.
            </strong>
          </p>
          <p className="text-xl leading-9 mb-9 ">
            His music continuously explores various musical styles, including
            soul, blues, folk, jazz, and reggae.
          </p>
          <p className="text-xl leading-9 mb-9 font-semibold">
            Music became a part of Zamua's life almost as a necessity, enabling
            him to build a bridge between his different roots.
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
