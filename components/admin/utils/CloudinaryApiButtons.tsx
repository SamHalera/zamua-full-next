import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ButtonDeleteAllFolders from "./ButtonDeleteAllFolders";
import { deleteAllCloudinaryFolders } from "@/actions/admin/utils";
const CloudinaryApiButtons = () => {
  return (
    <Card className="w-full md:w-1/3">
      <CardHeader>
        <CardTitle>Cloudinary API Buttons</CardTitle>
        <CardDescription>
          Do some actions easely to communicate with Cloudinary
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
        <div className="flex justify-start gap-2">
          <ButtonDeleteAllFolders
            actionProps={deleteAllCloudinaryFolders}
            btnLabel="Delete all forlder"
          />
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default CloudinaryApiButtons;
