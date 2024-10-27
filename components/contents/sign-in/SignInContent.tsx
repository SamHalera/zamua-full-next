import LoginForm from "@/components/LoginForm";
import React from "react";

const SignInContent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/zamua-studio.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
      className=" bg-cover h-screen w-full"
    >
      <div className="flex items-center h-screen w-full bg-black/75">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignInContent;
