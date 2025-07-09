import { itemVariants } from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";

const ForgetPasswordFooter = () => {
  return (
    <motion.p
      variants={itemVariants}
      className="text-xs text-gray-600 flex flex-col sm:flex-row justify-center items-center space-x-2 w-full"
    >
      {" "}
      <span>Remember your password?</span>
      <Link
        href="/sign-in"
        className="font-semibold cursor-pointer text-green-700 hover:underline "
      >
        Back to login{" "}
      </Link>
    </motion.p>
  );
};

export default ForgetPasswordFooter;
