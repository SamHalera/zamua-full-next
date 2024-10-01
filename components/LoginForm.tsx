"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginForm = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = async (values) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/admin",
    });

    if (signInData?.error) {
      console.log(signInData?.error);
    } else {
      router.push("/admin");
    }
  };
  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/4 m-auto flex flex-col gap-10 justify-center my-16"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EMAIL</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} type="email" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PASSWORD</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} type="password" />
                </FormControl>
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

export default LoginForm;
