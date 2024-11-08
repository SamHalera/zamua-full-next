"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { useFormState } from "react-dom";

const INITIAL_STATE = {
  error: null,
  success: null,
};
const SeedValidationForm = ({
  actionProps,
}: {
  actionProps: (prevState: any, formData: FormData) => Promise<any>;
}) => {
  const [formState, formAction] = useFormState(actionProps, INITIAL_STATE);

  return (
    <form action={formAction} className="w-full flex flex-col gap-3">
      <div className="flex gap-3">
        <Label htmlFor="secretKey">Secret Key</Label>
        {formState.error && (
          <span className="text-red-500 italic">{formState.error}</span>
        )}
      </div>
      <Input
        id="secretKey"
        name="secretKey"
        type="password"
        placeholder="secret key"
        className={cn({
          "border border-red-500": formState.error,
        })}
      />
      <Button type="submit" className="self-end">
        Validate Seed
      </Button>
    </form>
  );
};

export default SeedValidationForm;
