"use client";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import CustomInput from "../forms/CustomInput";

type CreatePageFormType = {
  name: string;
  title: string;
  path: string;
};
const ContentPageForm = () => {
  const [pathValue, setPathValue] = useState<string>("");
  const handlePathOnChange = (value: string) => {
    const newStr = value.toLocaleLowerCase().split(" ").join("-");

    setPathValue(`${newStr}`);
  };

  const { register, handleSubmit } = useForm<CreatePageFormType>({
    defaultValues: {
      name: "",
      title: "",
      path: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePageFormType> = async (values) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <CustomInput
          label="Page name"
          type="text"
          name="name"
          register={register}
          placeholder="name for your page"
          handleChangeValue={handlePathOnChange}
          customClass="input input-bordered w-full"
        />
        <CustomInput
          label="Title"
          type="text"
          name="title"
          register={register}
          placeholder="title for your page"
          customClass="input input-bordered w-full"
        />
        <CustomInput
          label="Path"
          type="text"
          name="path"
          register={register}
          placeholder="path for your page"
          value={pathValue}
          disabled
          customClass="input input-bordered w-full"
        />

        <Button className="self-end" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContentPageForm;
