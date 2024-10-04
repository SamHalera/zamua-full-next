import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

const TableContents = () => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Page</TableHead>
          <TableHead>Updated at</TableHead>
          <TableHead>State</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">BIO</TableCell>
          <TableCell>DATE HERE</TableCell>
          <TableCell>Published</TableCell>
          <TableCell className="flex  gap-4 justify-end">
            <Link href={"/admin/pages"} className="text-green-600">
              <SquarePen />
            </Link>
            <Link href={"/admin/pages"} className="text-red-500">
              <Trash2 />
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableContents;
