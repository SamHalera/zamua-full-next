"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../../ui/button";
import { Database } from "lucide-react";
import SeedValidationForm from "./SeedValidationForm";
import { cn } from "@/lib/utils";

const SeedComponent = ({
  customClassButton,
  entityToSeed,
  seedFunction,
  label,
}: {
  customClassButton: string;
  entityToSeed: string;
  seedFunction: (prevState: any, formData: FormData) => Promise<any>;
  label: string;
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <div className={cn(`${customClassButton}`, {})}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default">
            <Database className="mx-2" /> {label}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className=" flex justify-between">
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogCancel
                onClick={() => {
                  setShowForm(false);
                }}
              >
                Close
              </AlertDialogCancel>
            </div>
            <AlertDialogDescription>
              <span className="text-black">
                This action will add {entityToSeed} to your database.
              </span>{" "}
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {!showForm ? (
              <Button
                className="text-black"
                onClick={() => {
                  // await seedFunction();
                  setShowForm(true);
                }}
              >
                Seed Database
              </Button>
            ) : (
              <SeedValidationForm actionProps={seedFunction} />
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SeedComponent;
