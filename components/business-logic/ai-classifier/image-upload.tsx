"use client";

import { Image } from "lucide-react";
import FileUpload from "./fileUpload";
import React from "react";
import { AiClassifierFormDataProps } from "@/app/(business-logic)/app/ai-classifier/page";

const AiClasifierImageUpload = ({
  classifierFormData,
  setClassifierFormData,
}: {
  classifierFormData: AiClassifierFormDataProps;
  setClassifierFormData: React.Dispatch<
    React.SetStateAction<AiClassifierFormDataProps>
  >;
}) => {
  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <div className="bg-[#6DBE73] rounded-3xl px-2 py-1">1</div>
        <div className="mb-3">
          <h1 className="text-black font-[700] text-[20px] postm-2:text-[22px] sm:text-[25px]">
            Upload Your Item
          </h1>
          <p className="text-[#8C8C8C] font-[500] text-[13px] postm-2:text-[15px] sm:text-[18px] -mt-1">
            Start by uploading a clear image of your item
          </p>
        </div>
      </div>
      <div className="border-[2px] !border-[#22782A] border-dashed rounded-lg flex flex-col items-center ">
        <div className="bg-[#BCE7C0] rounded-lg p-3 sm:p-3 mt-8">
          <Image className="text-[#6DBE73] h-6 w-6 sm:h-9 sm:w-9" />
        </div>
        <div className="text-center">
          <h1 className="font-[500] text-[23px] postm-2:text-[25px] lg:text-[28px] text-black">
            Drop your image here
          </h1>
          <p className="text-[#8C8C8C] font-[500] text-[16px] postm-2:text-[18px] lg:text-[20px]">
            or click to browse files
          </p>
        </div>
        <p className="text-[#6DBE73] font-[500] mt-2 text-[12px] postm-2:text-[14px]  lg:text-[21px] text-center ">
          Maximum 10MB JPG,PNG,JPEG supported
        </p>
        <p className="-mt-1 text-[#8C8C8C] font-[400] text-[14px] postm-2:text-[15px]">
          {classifierFormData.image?.name}
        </p>

        <FileUpload
          onFileSelect={(file) =>
            setClassifierFormData((prev) => ({ ...prev, image: file }))
          }
        />
      </div>
    </div>
  );
};

export default AiClasifierImageUpload;
