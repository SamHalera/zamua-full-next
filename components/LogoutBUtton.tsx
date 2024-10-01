"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const LogoutBUtton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      LogOut
    </Button>
  );
};

export default LogoutBUtton;
