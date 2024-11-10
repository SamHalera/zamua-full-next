import { Playlist } from "@prisma/client";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";
const PlaylistItem = ({
  playlist,
  index,
}: {
  playlist: Playlist;
  index: number;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{
        delay: index / 5,
        type: "tween",
        duration: 0.8,
      }}
    >
      <Link
        href={`/playlists/${index + 1}/${playlist.slug}`}
        className=" w-52 h-52 sm:w-72 sm:h-72 bg-cover bg-center rounded-md block shadow-lg group"
        style={{
          backgroundImage: `url(${playlist.cover})`,
        }}
      >
        <div className="w-52 h-52 sm:w-72 sm:h-72 bg-slate-900/50 rounded-md relative flex justify-center  group-hover:bg-slate-900/80 duration-700">
          <h3 className="text-primary text-xl font-semibold py-9 absolute top-11 duration-700 group-hover:top-8">
            {playlist.title}
          </h3>
          <Link2 className=" size-9 text-primary absolute bottom-10 opacity-0 duration-500 group-hover:bottom-32 group-hover:opacity-100"></Link2>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlaylistItem;
