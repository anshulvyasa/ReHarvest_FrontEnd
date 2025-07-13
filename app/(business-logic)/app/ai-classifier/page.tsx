"use client";

import AiClassifierContent from "@/components/business-logic/ai-classifier/ai-classifier-content";
import AiClassifierHeader from "@/components/business-logic/ai-classifier/ai-classifier-header";
import { useState } from "react";

export interface AiClassifierFormDataProps {
  image: File | null;
  itemType:
    | "Blenders/Mixers"
    | "Electric Kettles"
    | "Chairs"
    | "Bags"
    | "Water Purifier"
    | "Lamps"
    | "Calculators"
    | "Plastic Toys"
    | "Shoes"
    | "Headphones"
    | "";
  year_used: number;
  condition: "Working" | "Repairable" | "Dead" | "";
  description: string;
}

const AiClassifier = () => {
  const [classifierFormData, setClassifierFormData] =
    useState<AiClassifierFormDataProps>({
      image: null,
      itemType: "",
      year_used: 1,
      condition: "",
      description: "",
    });

  console.log("classifier form data : ", classifierFormData);

  return (
    <main className="min-h-screen py-3 pl-3 sm:pl-6 w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-br from-white via-white to-green-50">
      <div className="container-max mx-auto">
        <AiClassifierHeader />
        <AiClassifierContent
          classifierFormData={classifierFormData}
          setClassifierFormData={setClassifierFormData}
        />

        {/* <AnalysisResult/> */}
      </div>
    </main>
  );
};

export default AiClassifier;
