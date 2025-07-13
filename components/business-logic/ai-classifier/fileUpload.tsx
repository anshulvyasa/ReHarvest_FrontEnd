"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { MdFileUpload } from "react-icons/md";

const FileUpload = ({
  onFileSelect,
}: {
  onFileSelect: (file: File | null) => void;
}) => {
  return (
    <label className="inline-flex items-center px-4 py-2 mt-1 mb-8 border !border-[#61B567] text-[#6DBE73] font-medium rounded-lg cursor-pointer hover:bg-green-50 gap-2">
      <MdFileUpload size={20} />
      <span>Choose File</span>
      <Input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          onFileSelect(file);
        }}
      />
    </label>
  );
};

export default FileUpload;
