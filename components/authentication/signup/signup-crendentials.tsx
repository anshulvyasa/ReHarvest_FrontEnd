import InputBox from "@/components/general/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { popUpVarient, signUpCredentials } from "@/config";
import { FormEvent, useState } from "react";
import { signup_schema } from "@/lib/zod-schema";
import { SignUpFormService } from "@/service";
import { Loader } from "lucide-react";

export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const SignUpCredentails = () => {
  const [form, setForm] = useState<SignUpFormType>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isError, setIsError] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSending, setIsSending] = useState<boolean>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = signup_schema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const allErrors = Object.values(fieldErrors).flat();
      const firstError = allErrors.find((error) => !!error || "Unknown error");

      setIsError(true);
      setErrorMessage(firstError);
      return;
    }

    setIsError(false);
    setErrorMessage("");

    setIsSending(true);
    try {
      const response = await SignUpFormService(form);
      setIsSending(false);
      if (!response.data.success)
        throw new Error(response.data.error || "Something went wrong");
      setSuccessMessage(response.data.message);
      setForm({ name: "", email: "", password: "", confirm_password: "" });
    } catch (error: unknown) {
      setIsSending(false);
      setIsError(true);
      if (error instanceof Error) {
        setErrorMessage(error?.message || "Something went wrong");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {signUpCredentials.map((option, index) => (
        <InputBox
          key={index}
          {...option}
          state={form[option.id as keyof SignUpFormType]}
          setState={(val) => setForm((prev) => ({ ...prev, [option.id]: val }))}
        />
      ))}

      {!!successMessage && (
        <motion.div
          variants={popUpVarient}
          className="my-1 w-full bg-green-400 text-green-900 text-center rounded-lg text-lg"
        >
          {successMessage}
        </motion.div>
      )}

      {isError && (
        <motion.div
          variants={popUpVarient}
          className="my-1 w-full bg-red-300 text-gray-100 text-center rounded-lg text-lg"
        >
          {errorMessage}
        </motion.div>
      )}

      <Button
        type="submit"
        className="w-full bg-green-800 hover:bg-green-900 text-white py-2 rounded-md"
      >
        {isSending ? (
          <div className="flex items-center justify-center space-x-2 w-full">
            <Loader className="h-4 w-4 animate-spin" />
            <span>Creating Account...</span>
          </div>
        ) : (
          <span className="w-full"> Create Account</span>
        )}
      </Button>
    </form>
  );
};

export default SignUpCredentails;
