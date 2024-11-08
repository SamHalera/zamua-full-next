"use client";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";
import React from "react";

const ButtonDeleteAllFolders = ({
  actionProps,
  btnLabel,
}: {
  actionProps: () => Promise<any>;
  btnLabel: string;
}) => {
  const { toast } = useToast();
  const handleClickButton = async () => {
    try {
      const response = await actionProps();

      if (response?.error) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: response.error,
          variant: "destructive",
        });
      } else if (response?.success) {
        toast({
          title: "Good news!",
          description: response.success,
          variant: "default",
          style: {
            backgroundColor: "#FEC140",
            color: "black",
          },
        });
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Uh oh! Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-1/3">
      <Button
        onClick={() => {
          handleClickButton();
        }}
        className=""
      >
        {btnLabel}
      </Button>
    </div>
  );
};

export default ButtonDeleteAllFolders;
