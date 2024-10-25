"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      className="mt-8"
      onClick={() => {
        signOut();
      }}
    >
      LogOut
    </Button>
  );
};

export default LogoutButton;
