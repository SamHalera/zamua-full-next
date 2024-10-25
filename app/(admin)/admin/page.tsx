import React from "react";

const adminPage = () => {
  return (
    <div className="p-10  h-screen flex flex-col items-center">
      <div className="flex flex-col items-center my-auto">
        <h1 className="text-3xl font-semibold mb-6">ADMIN SECTION</h1>
        <div className="text-xl text-center mb-4">
          Welcome to the Admin Section.
        </div>
        <div className="text-xl text-center">
          You can manage your website dynamic content here (albums, playlists,
          medias, shows...)
        </div>
      </div>
    </div>
  );
};

export default adminPage;
