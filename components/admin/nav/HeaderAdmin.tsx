"use client";

import React from "react";

import AdminMobileMenu from "./AdminMobileMenu";

const HeaderAdmin = () => {
  return (
    <header className=" h-24 bg-black flex justify-end items-center sticky top-0 z-40 px-8">
      <AdminMobileMenu />
    </header>
  );
};

export default HeaderAdmin;
