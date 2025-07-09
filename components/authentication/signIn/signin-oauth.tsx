"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/config";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { LuGithub } from "react-icons/lu";
import { signIn } from "next-auth/react";

const SignInOAuth = () => {
  const handleGoogleSignIn = async () => {
    await signIn("google", { redirectTo: "/app/dashboard" });
  };

  const handleGithubSignIn = async () => {
    await signIn("github", { redirectTo: "/app/dashboard" });
  };

  return (
    <React.Fragment>
      <motion.div variants={itemVariants} className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm">
          Or continue with
        </span>{" "}
        <div className="flex-grow border-t border-gray-300"></div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <Button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center rounded-md border !border-gray-300 !py-5 px-4 text-sm text-gray-700 bg-gray-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <FcGoogle className="w-6 h-6" />
          Google
        </Button>
        <Button
          onClick={handleGithubSignIn}
          className="flex items-center justify-center rounded-md border !border-gray-300  !py-5 px-4 text-sm text-gray-700 bg-gray-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <LuGithub className="h-6 w-6" />
          GitHub
        </Button>
      </motion.div>
    </React.Fragment>
  );
};

export default SignInOAuth;
