import { Show } from "@prisma/client";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const ShowItemContent = ({ show, index }: { show: Show; index: number }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index / 10,
        type: "tween",
        duration: 0.8,
      }}
      key={show.id}
      className="bg-black flex-col lg:flex-row flex gap-6 items-center justify-center w-2/3 py-10 px-5"
    >
      <div>
        <div className="text-white font-semibold">
          {dayjs(show.date).format("DD-MM-YYYY HH:mm")}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around gap-8">
        <div className="text-white text-center font-semibold">
          <span className="font-semibold">{show.name}</span>
        </div>
        <div className="text-white flex gap-2 items-center justify-center">
          {show.venueUrl ? (
            <Link
              className="text-center text-primary hover:text-primary/80 duration-700"
              href={show.venueUrl ? show.venueUrl : ""}
            >
              {show.venue}
            </Link>
          ) : (
            <span className="text-center">{show.venue}</span>
          )}
        </div>
        <div className="text-white flex gap-2 items-center justify-center">
          {show.locationUrl ? (
            <Link
              className="text-center text-primary hover:text-primary/70 duration-700"
              href={show.locationUrl}
            >
              {show.location}
            </Link>
          ) : (
            <span>{show.location}</span>
          )}
        </div>
        <div className="text-primary">
          {show.ticketsUrl && (
            <Link
              className="text-center hover:text-primary/70 duration-700"
              href={show.ticketsUrl}
            >
              TICKETS
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ShowItemContent;
