"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const LogoutButtonComponent = () => {
  return (
    <Button
      className=""
      onClick={() => {
        signOut();
      }}
    >
      LogOut
    </Button>
  );
};

export default LogoutButtonComponent;
