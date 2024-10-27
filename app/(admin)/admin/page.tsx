import React from "react";

const adminPage = () => {
  return (
    <div className="p-10  h-screen flex flex-col">
      <div className="flex flex-col">
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
