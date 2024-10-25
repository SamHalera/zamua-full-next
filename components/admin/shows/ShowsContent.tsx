import React from "react";

import { getShows } from "@/actions/show";
import ShowForm from "./ShowForm";

const ShowsContent = async () => {
  const shows = await getShows();
  return (
    <div>
      <ShowForm shows={shows} />
    </div>
  );
};

export default ShowsContent;
