import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/config";

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox = (props: InputProps) => {
  return (
    <motion.div variants={itemVariants} className="mb-4">
      <label
        htmlFor={props.id}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="relative">
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={props.state}
          className="text-gray-600 w-full rounded-md py-2 pl-10 pr-3 border-2 !border-gray-300 focus:!border-green-700  focus:outline-none"
          onChange={(e) => props.setState(e.target.value)}
          required
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <props.icon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default InputBox;
