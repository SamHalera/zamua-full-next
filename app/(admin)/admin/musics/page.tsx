import React from "react";
import MusicFeatureForm from "../../../../components/admin/musicFeature/MusicFeatureForm";

const AdminMusicPage = () => {
  return (
    <div className="p-2 md:p-10 ">
      <h1 className="text-3xl font-semibold mb-6 text-center">MANAGE MUSIC</h1>

      <MusicFeatureForm />
    </div>
  );
};

export default AdminMusicPage;
