"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "@/components/nav/Menu";
import MobileMenu from "./MobileMenu";

const Navbar = ({ menu }: { menu: Menu }) => {
  return (
    <>
      <div></div>
      <div className="flex justify-between items-center container">
        <Link href="/">
          <Image
            className=" object-contain"
            src="/images/logo.png"
            width={143}
            height={27}
            alt="logo de Zamua"
          />
        </Link>

        {menu.length > 0 && (
          <>
            <Menu menu={menu} />
            <MobileMenu menu={menu} />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
