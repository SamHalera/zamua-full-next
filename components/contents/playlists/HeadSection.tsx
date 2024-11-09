import React from "react";

const HeadSection = () => {
  return (
    <div className="flex flex-col gap-8 items-center p-5 md:p-11">
      <h1 className="text-6xl text-center md:text-start">PLAY THE TAPE!</h1>
      <h2 className="text-4xl text-center md:text-start">SOME PLAYLISTS...</h2>
      <div className="flex flex-col gap-3">
        <p>
          PLAY-THE-TAPE is my personal space for sharing the music and artists
          who inspire me daily and shape my creativity.
        </p>
        <p className="">
          <strong>
            I’m captivated by the process of exploring, curating, and blending
            different musical styles, merging them into a cohesive stream. It’s
            a journey of discovery that constantly fuels my artistic vision.
          </strong>
        </p>

        <p>
          That’s why I’ve started creating and sharing playlists regularly, each
          one capturing a unique theme: an expression of various moods and
          reflections woven together.
        </p>
      </div>
    </div>
  );
};

export default HeadSection;
