import TableContents from "@/components/contents/Home/admin/TableContents";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminPagesSectionPage = () => {
  return (
    <div className="p-10 flex flex-col gap-4 items-start">
      <h1 className="text-3xl font-semibold mb-6">MANAGE PAGES</h1>
      <Link className="custom-btn self-end block" href={"/admin/pages/new"}>
        <Plus className="mr-2" /> new page
      </Link>
      <TableContents />
    </div>
  );
};

export default AdminPagesSectionPage;
