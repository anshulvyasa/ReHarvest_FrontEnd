"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { containerVariants } from "@/config";
import SignUpHeader from "@/components/authentication/signup/signup-header";
import SignUpCredentials from "@/components/authentication/signup/signup-crendentials";
import SignInOAuth from "@/components/authentication/signIn/signin-oauth";
import SignUpCardFooter from "@/components/authentication/signup/signup-card-footer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="shadow-2xl border-none">
          <CardHeader className="text-center -mb-2">
            <SignUpHeader />
          </CardHeader>

          <CardContent className="pt-2">
            <SignUpCredentials />
            <SignInOAuth />
          </CardContent>

          <CardFooter className="mt-1 justify-center -pt-2">
            <SignUpCardFooter />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
