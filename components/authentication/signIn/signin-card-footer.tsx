import { itemVariants } from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";
const SignInCardFooter = () => {

  return (
    <motion.p variants={itemVariants} className="text-xs text-gray-600">
      {" "}
      Don&apos;t have an account?{" "}
      <Link href='/sign-up'   className="font-semibold cursor-pointer text-green-700 hover:underline ">
       Sign up
      </Link>
    </motion.p>
  );
};

export default SignInCardFooter;
