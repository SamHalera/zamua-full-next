"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "console";

type LoginForm = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (values) => {
    console.log(values);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
    });
    if (signInData?.error) {
      console.log(signInData?.error);
    } else {
      console.log("here", signInData);
      router.push("/");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
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
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
