import { Show } from "@prisma/client";
import React from "react";
import bgShows from "@/public/images/bg-shows.jpg";
import SecondaryHeroSection from "../SecondaryHeroSection";
import ShowsListContent from "./ShowsListContent";

const ShowsContent = ({ shows }: { shows?: Show[] }) => {
  const title = (
    <>
      <span className="text-primary">ZAMUA'S </span>
      <span className="text-white">SHOWS</span>
    </>
  );
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgShows.src} />
      <ShowsListContent shows={shows} />
    </>
  );
};

export default ShowsContent;
