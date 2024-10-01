"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import path from "path";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputFile from "../InputFile";
import { createPage } from "@/actions/admin";

type CreatePageFormType = {
  name: string;
  title: string;
  path: string;
  bgHero: string;
};
const CreatePageForm = () => {
  //   const [pageNameValue, setPageNameValue] = useState<string>("");
  //   const [pathValue, setPathValue] = useState<string>("");
  //   const handlePathOnChange = (value: string) => {
  //     const newStr = value.toLocaleLowerCase().split(" ").join("-");
  //     console.log(newStr);
  //     setPathValue(newStr);
  //   };
  //   handlePathOnChange("My New Page");
  const form = useForm<CreatePageFormType>({
    defaultValues: {
      name: "",
      title: "",
      path: "",
      bgHero: "",
    },
  });

  const onSubmit: SubmitHandler<CreatePageFormType> = async (values) => {
    console.log(values);
    const { name, title, path, bgHero } = values;

    const formData = new FormData();

    name && formData.append("name", name);
    title && formData.append("title", title);
    path && formData.append("path", path);
    bgHero && formData.append("bgHero", bgHero);
    formData.entries();
    await createPage(formData);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name for your page"
                    {...field}
                    type="text"
                  />
                </FormControl>

                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="title for your page"
                    {...field}
                    type="text"
                  />
                </FormControl>

                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="path"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Path </FormLabel>
                <FormControl>
                  <Input
                    // // value={pathValue}
                    // defaultValue={pathValue}
                    placeholder="path for your page"
                    {...field}
                    type="text"
                  />
                </FormControl>

                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="bgHero"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="backgroung image for your page"
                    {...field}
                    type="text"
                  />
                </FormControl>


              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="bgHero"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <div className="grid w-full max-w-sm items-center gap-1.5 bg-slate-200 rounded">
                    <Input id="picture" type="file" {...field} />
                  </div>
                  {/* <Input
                    placeholder="backgroung image for your page"
                    {...field}
                    type="text"
                  /> */}
                </FormControl>

                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          <Button className="self-end" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePageForm;
