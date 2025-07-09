import ForgetPageHeaderIcon from "@/components/general/forget-page-header-icon";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { itemVariants } from "@/config";
import { motion } from "framer-motion";
import React from "react";

const ForgetPasswordHeader = () => {
  return (
    <React.Fragment>
      <motion.div variants={itemVariants} className="mb-2 flex justify-center">
        <ForgetPageHeaderIcon />
      </motion.div>
      <motion.div variants={itemVariants}>
        <CardTitle className="text-2xl text-gray-900 font-bold text-center">
          Forget Password?
        </CardTitle>
      </motion.div>
      <motion.div variants={itemVariants}>
        <CardDescription className="text-sm text-gray-600 mt-[2px] font-[480] tracking-tight text-center">
          No Worries! Enter your email and we&apos;ll send you reset
          instruction
        </CardDescription>
      </motion.div>
    </React.Fragment>
  );
};

export default ForgetPasswordHeader;
