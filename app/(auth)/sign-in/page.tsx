"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { containerVariants } from "@/config";

import SignInOAuth from "@/components/authentication/signIn/signin-oauth";
import SignInCardFooter from "@/components/authentication/signIn/signin-card-footer";
import SignInHeader from "@/components/authentication/signIn/signin-header";
import SignInCredentials from "@/components/authentication/signIn/sign-credentials";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/app/dashboard");
    }
  }, [status, router]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
      {" "}
      <motion.div
        className="w-full max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="shadow-2xl border-none">
          <CardHeader className="text-center -mb-2">
            {" "}
            <SignInHeader />
          </CardHeader>

          <CardContent className="pt-2">
            {" "}
            <SignInCredentials />
            <SignInOAuth />
          </CardContent>

          <CardFooter className="mt-1 justify-center -pt-2">
            {" "}
            <SignInCardFooter />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
