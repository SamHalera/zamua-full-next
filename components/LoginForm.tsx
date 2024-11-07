"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormSchema } from "@/types/zodSchemas/authForms";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type LoginForm = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const errorForm = form.formState.errors;

  const isErrorForm = Object.keys(errorForm).length > 0;

  const onSubmit: SubmitHandler<LoginForm> = async (
    values: z.infer<typeof signinFormSchema>
  ) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/admin",
    });

    if (signInData?.error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Invalid credentials",
        variant: "destructive",
      });
    } else {
      router.push("/admin");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/4 m-auto flex flex-col gap-10 justify-center bg-slate-300/90 p-12 rounded-md"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-semibold flex gap-2">
                EMAIL
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="email"
                  {...field}
                  type="email"
                  className={cn("border border-slate-100 bg-transparent", {
                    "border-red-400": isErrorForm && errorForm.email,
                  })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-semibold flex gap-2">
                PASSWORD
                <FormMessage className="" />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  type="password"
                  className={cn("border border-slate-100 bg-transparent", {
                    "border-red-400": isErrorForm && errorForm.password,
                  })}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="self-end" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
