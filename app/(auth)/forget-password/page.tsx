"use client";

import ForgetPasswordCredentials from "@/components/authentication/forget-password/forget-password-credentials";
import ForgetPasswordFooter from "@/components/authentication/forget-password/forget-password-footer";
import ForgetPasswordHeader from "@/components/authentication/forget-password/forget-password-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { containerVariants } from "@/config";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ForgetPassword = () => {
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        className="w-full max-w-sm"
        initial="hidden"
        animate="visible"
      >
        <Card className="border-none shadow-2xl">
          <CardHeader>
            {" "}
            <ForgetPasswordHeader />
          </CardHeader>

          <CardContent>
            <ForgetPasswordCredentials />
          </CardContent>

          <CardFooter>
            <ForgetPasswordFooter />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ForgetPassword;
