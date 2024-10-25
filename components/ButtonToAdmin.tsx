import { Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const ButtonToAdmin = () => {
  return (
    <div>
      <Link
        href={"/admin"}
        className=" block fixed bottom-20 right-10 rounded-full p-2 duration-500 border-2 border-transparent bg-primary hover:bg-transparent hover:border-primary hover:text-primary"
      >
        <Settings className="size-14" />
      </Link>
    </div>
  );
};

export default ButtonToAdmin;
