import Link from "next/link";
import React from "react";

const BioSection = () => {
  return (
    <div className="flex flex-col px-8 sm:px-10 md:px-24 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16">
      <div className="text-xl leading-9 mb-9">
        <p className="italic">
          The first time I sang in front of someone, I was seven years old. It
          was in front of my family. I did something that vaguely sounded like
          rap music.
        </p>
        <p className=" italic">
          There was no rap music being played at home; in fact, I&apos;m still
          not sure where I got that powerful music from... My father often
          listened to jazz radio shows. I recall Louis Armstrong&apos;s trumpet
          playing in the mornings while we ate breakfast, as well as the vocals
          of Ladysmith Black Mambazo, Tracy Chapman, Luigi Tenco, Lucio Dalla,
          and Fabrizio De André.
        </p>
        <p className=" italic font-semibold">
          Today, when I listen to the recording of that first so-called
          performance, I understand that when the music hits, it leaves an
          indelible mark...
        </p>
        <p className="font-semibold">
          This sensation endures until one realizes that the greatest way to
          appreciate music is to create it, to bring it to life...
        </p>
      </div>

      <Link href={"/bio"} className="custom-btn">
        BIO
      </Link>
    </div>
  );
};

export default BioSection;
