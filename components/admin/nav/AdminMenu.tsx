import React from "react";
import adminMenu from "@/assets/adminMenu.json";
import Link from "next/link";

import { Home } from "lucide-react";
import { AdminMenuItem, SingleItem } from "@/types/types";
import LogoutButtonComponent from "../../LogutButtonComponent";

const AdminMenu = ({
  setShowSidebar,
}: {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="gap-4 items-center hidden lg:flex justify-center">
      {adminMenu.map((adminMenuItem: AdminMenuItem) => {
        return (
          <div key={adminMenuItem.label} className="group">
            <Link
              onClick={() => {
                setShowSidebar(false);
              }}
              className="text-primary text-xl duration-700 hover:text-primary/70 font-semibold block"
              href={adminMenuItem.href}
            >
              {adminMenuItem.label}
            </Link>
            {adminMenuItem.items && (
              <div className=" flex flex-col gap-1 px-4 py-2 bg-primary absolute duration-500 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:-bottom-10">
                {adminMenuItem.items.length > 0 &&
                  adminMenuItem.items.map((singleItem: SingleItem) => {
                    return (
                      <Link
                        onClick={() => {
                          setShowSidebar(false);
                        }}
                        className="font-semibold text-black duration-500 hover:text-black/65"
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
  );
};

export default AdminMenu;
