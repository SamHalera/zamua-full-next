import { cn } from "@/lib/utils";
import { AlignJustify, CircleX, Home } from "lucide-react";
import React, { useState } from "react";
import adminMenu from "@/assets/adminMenu.json";
import Link from "next/link";
import { AdminMenuItem, SingleItem } from "@/types/types";
import LogoutButtonComponent from "@/components/LogutButtonComponent";
import { useRouter } from "next/navigation";

const AdminMobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();
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
                <div
                  onClick={() => {
                    router.push(adminMenuItem.href);
                    setShowMenu(false);
                  }}
                  className="text-primary text-2xl duration-700 hover:text-primary/70 font-semibold block cursor-pointer"
                >
                  {adminMenuItem.label}
                </div>
                {adminMenuItem.items && (
                  <div className=" flex flex-col gap-1 my-3 border-r-2 border-primary">
                    {adminMenuItem.items.length > 0 &&
                      adminMenuItem.items.map((singleItem: SingleItem) => {
                        return (
                          <div
                            onClick={() => {
                              router.push(singleItem.href);
                              setShowMenu(false);
                            }}
                            className=" text-primary text-center duration-500 border-b border-transparent hover:border-primary cursor-pointer"
                            key={singleItem.label}
                          >
                            {singleItem.label}
                          </div>
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
