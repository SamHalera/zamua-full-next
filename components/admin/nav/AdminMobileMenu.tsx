import { cn } from "@/lib/utils";
import { AlignJustify, CircleX, Home } from "lucide-react";
import React, { useState } from "react";
import adminMenu from "@/assets/adminMenu.json";
import Link from "next/link";
import { AdminMenuItem, SingleItem } from "@/types/types";
import LogoutButtonComponent from "@/components/LogutButtonComponent";

const AdminMobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="block ">
      <AlignJustify
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className={cn("size-10 text-primary cursor-pointer z-50", {
          hidden: showMenu,
        })}
      />
      <div
        className={cn(
          "bg-black absolute top-0 left-0 h-screen w-full z-50 flex flex-col items-end gap-4 p-10",
          {
            hidden: !showMenu,
          }
        )}
      >
        <CircleX
          onClick={() => {
            setShowMenu(false);
          }}
          className={cn("size-10 text-primary cursor-pointer z-50", {
            hidden: !showMenu,
          })}
        />
        <div className="flex flex-col items-end gap-4">
          {adminMenu.map((adminMenuItem: AdminMenuItem) => {
            return (
              <div key={adminMenuItem.label} className="">
                <Link
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="text-primary text-2xl duration-700 hover:text-primary/70 font-semibold block"
                  href={adminMenuItem.href}
                >
                  {adminMenuItem.label}
                </Link>
                {adminMenuItem.items && (
                  <div className=" flex flex-col gap-1 my-3 border-r-2 border-primary">
                    {adminMenuItem.items.length > 0 &&
                      adminMenuItem.items.map((singleItem: SingleItem) => {
                        return (
                          <Link
                            onClick={() => {
                              setShowMenu(false);
                            }}
                            className=" text-primary text-center duration-500 border-b border-transparent hover:border-primary "
                            key={singleItem.label}
                            href={singleItem.href}
                          >
                            {singleItem.label}
                          </Link>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            className="flex gap-1 text-primary items-center text-xl duration-700 hover:text-primary/70 font-semibold"
            href={"/"}
          >
            <Home />
            Public home
          </Link>
          <LogoutButtonComponent />
        </div>
      </div>
    </div>
  );
};

export default AdminMobileMenu;
