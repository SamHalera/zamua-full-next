import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const LinkToPublicView = ({ path }: { path: string }) => {
  return (
    <Link
      href={path}
      target="_blank"
      className="flex gap-2 items-center text-primary font-semibold mb-4"
    >
      <Eye className="size-7" /> Public view
    </Link>
  );
};

export default LinkToPublicView;
