import InputBox from "@/components/general/input";
import { itemVariants } from "@/config";
import { motion } from "framer-motion";
import { useState } from "react";
import { CiMail } from "react-icons/ci";

const ForgetPasswordCredentials = () => {
  const [email, setEmail] = useState<string>("");

  console.log("Email is ", email);

  return (
    <form>
      <motion.div variants={itemVariants}>
        <InputBox
          type="email"
          placeholder="Enter Your Email Address"
          label="Email Address"
          icon={CiMail}
          id="email"
          state={email}
          setState={(val) => setEmail(val)}
        />
      </motion.div>
      <motion.button
        variants={itemVariants}
        type="submit"
        className="w-full rounded-md bg-green-800 py-2 text-md font-semibold text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Send Instructions
      </motion.button>
    </form>
  );
};

export default ForgetPasswordCredentials;
