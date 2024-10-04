import { getMusicFeatures } from "@/actions/admin";
import MusicContent from "@/components/contents/music/MusicContent";
import React from "react";

const page = async () => {
  const musicFeatures = await getMusicFeatures();
  return <MusicContent musicFeatures={musicFeatures} />;
};

export default page;
