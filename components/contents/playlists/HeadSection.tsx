import React from "react";

const HeadSection = () => {
  return (
    <div className="flex flex-col gap-8 items-center p-5 md:p-11">
      <h1 className="text-6xl text-center md:text-start">PLAY THE TAPE!</h1>
      <h2 className="text-4xl text-center md:text-start">SOME PLAYLISTS...</h2>
      <div>
        <p>
          PLAY-THE-TAPE is a section dedicated to the music and artists I listen
          to, who inspire me every day and influence my creativity.
        </p>
        <p className="mb-4">
          <strong>
            I am fascinated by the idea of researching, selecting, mixing
            different musical styles and finally bringing them together in one
            stream.
          </strong>
        </p>

        <p>
          That is why I have decided to publish playlists on a regular basis,
          each one collecting different moods and thoughts on a specific theme.
        </p>
      </div>
    </div>
  );
};

export default HeadSection;
