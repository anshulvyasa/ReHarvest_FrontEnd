import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/config";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Logo from "@/components/general/logo";
const SignInHeader = () => {
  return (
    <React.Fragment>
      <motion.div variants={itemVariants} className="mb-2 flex justify-center">
        <Logo />
      </motion.div>
      <motion.div variants={itemVariants}>
        <CardTitle className="text-2xl font-bold text-gray-900">
          {" "}
          Welcome Back to ReHarvest
        </CardTitle>
      </motion.div>
      <motion.div variants={itemVariants}>
        <CardDescription className="text-sm text-gray-600 mt-[2px] font-[480] tracking-tight">
          {" "}
          Log in to track your impact and rescue more produce
        </CardDescription>
      </motion.div>
    </React.Fragment>
  );
};

export default SignInHeader;
