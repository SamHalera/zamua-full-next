import React from "react";

import { getShows } from "@/actions/show";
import ShowForm from "./ShowForm";

const ShowsContent = async () => {
  const shows = await getShows();
  return <ShowForm shows={shows} />;
};

export default ShowsContent;
