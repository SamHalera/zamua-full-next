"use client";
import React, { useState } from "react";
import { AlignJustify, CircleX } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileMenu = ({ menu }: { menu: Menu }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleShowMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const pathname = usePathname();

  return (
    <div className="block lg:hidden">
      {!showMenu ? (
        <AlignJustify
          onClick={handleShowMenuClick}
          className="size-10 text-primary cursor-pointer"
        />
      ) : (
        <div className="bg-black absolute top-0 left-0 h-screen w-full z-50 flex flex-col items-end gap-4 p-10">
          <CircleX
            onClick={handleShowMenuClick}
            className="size-10 text-primary cursor-pointer mb-10"
          />
          {menu.map((item: MenuItem) => {
            return (
              <Link
                onClick={handleShowMenuClick}
                key={item.label}
                className={cn(
                  "text-primary text-2xl hover:text-primary/80 pb-1 border-b-2 border-transparent",
                  {
                    " border-primary":
                      pathname === `/${item.href.slice(1, -1)}` ||
                      pathname.split("/")[1] === `${item.href.slice(1, -1)}`,
                  }
                )}
                href={item.href}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
