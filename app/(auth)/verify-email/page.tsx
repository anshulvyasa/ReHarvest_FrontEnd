"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, redirect } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { containerVariants } from "@/config";
import ForgetPageHeaderIcon from "@/components/general/forget-page-header-icon";
import { verifyTokenEmail } from "@/service";
import { Suspense } from "react";
import { useSession } from "next-auth/react";

export default function VerifyEmailPage() {
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("/");
  }
  return (
    <Suspense>
      <Verify />
    </Suspense>
  );
}

function Verify() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token || typeof token !== "string") {
      setStatus("error");
      setMessage("Verification token missing.");
      return;
    }

    const verify = async () => {
      try {
        const res = await verifyTokenEmail(token);
        console.log("verifyTokenEmail response:", res);

        if (res.data.success) {
          setStatus("success");
          setMessage(res.data.message || "Email verified successfully!");

          setTimeout(() => {
            router.push("/sign-in");
          }, 1500);
        } else {
          setStatus("error");
          setMessage(res.data.error || "Verification failed.");
        }
      } catch (err) {
        console.error("Verification error:", err);
        setStatus("error");
        setMessage("An unexpected error occurred.");
      }
    };

    verify();
  }, [token, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-8">
      <motion.div
        className="w-full max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="shadow-2xl border-none">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center">
              <ForgetPageHeaderIcon />
            </div>
            <h2 className="text-2xl font-semibold text-green-800">ReHarvest</h2>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-4 py-4">
            {status === "loading" && (
              <>
                <Loader2 className="animate-spin h-10 w-10 text-green-700" />
                <p className="text-md text-gray-700 font-medium">
                  Verifying your email...
                </p>
              </>
            )}

            {status === "success" && (
              <>
                <CheckCircle2 className="h-10 w-10 text-green-600" />
                <p className="text-md font-medium text-green-700">{message}</p>
              </>
            )}

            {status === "error" && (
              <>
                <XCircle className="h-10 w-10 text-red-500" />
                <p className="text-md font-medium text-red-500">{message}</p>
              </>
            )}
          </CardContent>

          <CardFooter className="justify-center text-sm text-gray-500">
            ReHarvest – AI for Sustainable Supply Chains
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
