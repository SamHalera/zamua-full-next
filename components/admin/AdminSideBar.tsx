import Image from "next/image";
import React from "react";
import AdminMenu from "./AdminMenu";

const AdminSideBar = () => {
  return (
    <div className="bg-black p-10 h-screen fixed">
      <div className="flex flex-col justify-start gap-20">
        <Image
          className=" object-contain"
          src="/images/logo.png"
          width={143}
          height={27}
          alt="logo de Zamua"
        />
        <AdminMenu />
      </div>
    </div>
  );
};

export default AdminSideBar;
