import { Show } from "@prisma/client";
import React from "react";
import ShowItemContent from "./ShowItemContent";

const ShowsListContent = ({ shows }: { shows?: Show[] }) => {
  return (
    <div className="flex flex-col items-center py-16 px-4 gap-6">
      {shows?.length === 0 ? (
        <h3 className="font-semibold text-3xl text-center">
          New shows will be announced soon. Stay tuned!
        </h3>
      ) : (
        shows &&
        shows.length > 0 &&
        shows.map((item, index) => {
          return <ShowItemContent key={item.id} show={item} index={index} />;
        })
      )}
    </div>
  );
};

export default ShowsListContent;
