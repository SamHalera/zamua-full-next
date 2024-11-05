import React from "react";
import MusicFeatureForm from "@/components/admin/musicFeature/MusicFeatureForm";
import Link from "next/link";
import { Eye } from "lucide-react";
import LinkToPublicView from "@/components/globals/LinkToPublicView";

const AdminMusicPage = () => {
  return (
    <div className="p-2 md:p-10  flex flex-col items-center gap-1">
      <h1 className="text-3xl font-semibold mb-6 text-center">MANAGE MUSIC</h1>
      <LinkToPublicView path="/music#music-features" />
      <MusicFeatureForm />
    </div>
  );
};

export default AdminMusicPage;
