import { getShowsNotPast } from "@/actions/show";
import ShowsContent from "@/components/contents/shows/ShowsContent";
import React from "react";

const showPage = async () => {
  const shows = await getShowsNotPast();
  return <ShowsContent shows={shows} />;
};

export default showPage;
