import React from "react";

import menuJson from "@/assets/menu.json";
import Navbar from "./Navbar";

const Header = async () => {
  return (
    <header className=" h-24  bg-black flex justify-center sticky top-0 z-40">
      <Navbar menu={menuJson} />
    </header>
  );
};

export default Header;
