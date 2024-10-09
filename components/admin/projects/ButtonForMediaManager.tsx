import { Button } from "@/components/ui/button";
import { ImagePlus, NotebookPen } from "lucide-react";
import React from "react";

const ButtonForMediaManager = ({
  addMediaView,
  setAddMediaView,
}: {
  addMediaView: boolean;
  setAddMediaView: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        // router.push("/admin/projects");
        setAddMediaView(!addMediaView);
      }}
      className="mb-10 bg-primary h-14"
    >
      {!addMediaView ? (
        <>
          <ImagePlus className="mr-4" />
          <span>Media Project</span>
        </>
      ) : (
        <>
          <NotebookPen className="mr-4" />
          <span>back to project form</span>
        </>
      )}
    </Button>
  );
};

export default ButtonForMediaManager;
