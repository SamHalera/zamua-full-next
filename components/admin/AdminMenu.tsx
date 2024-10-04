import React from "react";
import adminMenu from "@/assets/adminMenu.json";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import { Home } from "lucide-react";
import { AdminMenuItem, SingleItem } from "@/types/types";

const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white text-2xl font-bold">ADMIN SECTION</div>
      {adminMenu.map((adminMenuItem: AdminMenuItem) => {
        return (
          <div key={adminMenuItem.label}>
            <Link
              className="text-primary text-xl duration-700 hover:text-primary/70 font-semibold block mb-2"
              href={adminMenuItem.href}
            >
              {adminMenuItem.label}
            </Link>
            {adminMenuItem.items && (
              <div className="text-primary flex flex-col gap-1 ml-5 border-l border-primary pl-2">
                {adminMenuItem.items.length > 0 &&
                  adminMenuItem.items.map((singleItem: SingleItem) => {
                    return (
                      <Link
                        className="text-primary duration-700 hover:text-primary/40"
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
        className="flex gap-3 text-primary text-xl duration-700 hover:text-primary/70 font-semibold mb-2"
        href={"/"}
      >
        <Home />
        Public home
      </Link>
      <LogoutButton />
    </div>
  );
};

export default AdminMenu;
