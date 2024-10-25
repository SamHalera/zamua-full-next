import { Show } from "@prisma/client";
import React from "react";
import ShowItemContent from "./ShowItemContent";

const ShowsListContent = ({ shows }: { shows?: Show[] }) => {
  return (
    <div className="flex flex-col items-center py-16">
      {shows &&
        shows.length > 0 &&
        shows.map((item) => {
          return <ShowItemContent key={item.id} show={item} />;
        })}
    </div>
  );
};

export default ShowsListContent;
