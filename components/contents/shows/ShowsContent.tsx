import { Show } from "@prisma/client";
import React from "react";
import bgShows from "@/public/images/bg-shows.jpg";
import SecondaryHeroSection from "../SecondaryHeroSection";
import ShowsListContent from "./ShowsListContent";
import * as motion from "framer-motion/client";

const ShowsContent = ({ shows }: { shows?: Show[] }) => {
  const title = (
    <div className="flex gap-3">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="text-primary "
      >
        ZAMUA'S{" "}
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.1, type: "tween", duration: 1 }}
        className="text-white"
      >
        SHOWS
      </motion.div>
    </div>
  );
  return (
    <>
      <SecondaryHeroSection title={title} imgSrc={bgShows.src} />
      <ShowsListContent shows={shows} />
    </>
  );
};

export default ShowsContent;
