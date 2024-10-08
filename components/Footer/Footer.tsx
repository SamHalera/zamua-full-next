import { Facebook, Instagram, Mail } from "lucide-react";
import React from "react";

import Link from "next/link";
import menuFooterJson from "@/assets/footerMenu.json";
import FooterMenu from "./FooterMenu";

const Footer = async () => {
  return (
    <footer className=" h-auto bg-black flex justify-center w-full py-14">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-2xl text-primary font-semibold">CONTACT</h2>

          <div className="flex gap-10">
            <Link href={"https://www.facebook.com/zamua/"} target="_blank">
              <Facebook className="size-8 text-primary" />
            </Link>
            <Link
              href={"https://www.instagram.com/zamua_haleri/"}
              target="_blank"
            >
              <Instagram className="size-8 text-primary" />
            </Link>
            <Link href={"mailto:contact@zamuamusic.com"} target="_blank">
              <Mail className="size-8 text-primary" />
            </Link>
          </div>
          <FooterMenu menu={menuFooterJson} />
        </div>
        <p className="text-white">© 2024 - Zamua - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
