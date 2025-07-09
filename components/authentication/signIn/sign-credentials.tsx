"use client";

import InputBox from "@/components/general/input";
import { itemVariants, Signin_Form_Data } from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";

type formDataType = {
  email: string;
  password: string;
};

const SignInCredentials = () => {
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    setIsSending(false);

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/app/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Signin_Form_Data.map((option, index) => (
        <InputBox
          key={index}
          {...option}
          state={formData[option.id as keyof formDataType]}
          setState={(val) =>
            setFormData((prev) => ({ ...prev, [option.id]: val }))
          }
        />
      ))}

      {error && (
        <p className="mb-4 text-sm text-red-600 font-medium">{error}</p>
      )}

      <motion.div
        variants={itemVariants}
        className="mb-6 flex items-center justify-between"
      >
        <label
          htmlFor="rememberMe"
          className="flex items-center text-sm text-gray-600"
        >
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
        <Link
          href="/forget-password"
          className="text-sm text-green-700 hover:underline"
        >
          Forgot password?
        </Link>
      </motion.div>

      <motion.button
        variants={itemVariants}
        type="submit"
        className="w-full rounded-md bg-green-800 py-2 text-md font-semibold text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        {isSending ? (
          <div className="w-full flex justify-center items-center space-x-2">
            <Loader className="h-4 w-4 animate-spin" />
            <span>Signing in...</span>
          </div>
        ) : (
          <span>Sign In</span>
        )}
      </motion.button>
    </form>
  );
};

export default SignInCredentials;
