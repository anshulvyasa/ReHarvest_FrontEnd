"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  ai_classifier_item_category,
  ai_classifier_item_condition,
} from "@/config";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { AiClassifierFormDataProps } from "@/app/(business-logic)/app/ai-classifier/page";

const ItemInformation = ({
  classifierFormData,
  setClassifierFormData,
}: {
  classifierFormData: AiClassifierFormDataProps;
  setClassifierFormData: React.Dispatch<
    React.SetStateAction<AiClassifierFormDataProps>
  >;
}) => {
  return (
    <section className="mt-12 ">
      <div className="flex items-center space-x-4">
        <div className="bg-[#6DBE73] rounded-3xl px-2 py-1">2</div>
        <div className="mb-3">
          <h1 className="text-black font-[700] text-[20px] postm-2:text-[22px] sm:text-[25px]">
            Item Information
          </h1>
          <p className="text-[#8C8C8C] font-[500] text-[13px] postm-2:text-[15px] sm:text-[18px] -mt-1">
            Tell us about your item’s details
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 ">
        {/* Item Category and years in used  */}
        <ItemCategoryAndYearsUsed
          classifierFormData={classifierFormData}
          setClassifierFormData={setClassifierFormData}
        />

        {/* current Condition and description  */}
        <CurrentConditionAndDescription
          classifierFormData={classifierFormData}
          setClassifierFormData={setClassifierFormData}
        />
      </div>
    </section>
  );
};

export default ItemInformation;

// this is second part
const ItemCategoryAndYearsUsed = ({
  classifierFormData,
  setClassifierFormData,
}: {
  classifierFormData: AiClassifierFormDataProps;
  setClassifierFormData: React.Dispatch<
    React.SetStateAction<AiClassifierFormDataProps>
  >;
}) => {
  return (
    <Card className="!border-[#22782A] bg-white px-6  py-8">
      {/* item Category  */}
      <div className="">
        <Label
          htmlFor="type"
          className="font-[500] text-[18px] postm-2:text-[20px] sm:text-[23px] lg:text-[25px] text-[#373737] mb-1 cursor-pointer"
        >
          Item Category
        </Label>
        <Select>
          <SelectTrigger
            id="type"
            className="min-w-[95%] !text-[#8C8C8C] !border-[#B3B3B3] cursor-pointer"
          >
            <SelectValue placeholder="What type of item is this?" />
          </SelectTrigger>
          <SelectContent
            side="bottom"
            className="text-[#8C8C8C] font-[500] bg-white !border-green-50 px-6 py-3 hide-scrollbar"
          >
            {ai_classifier_item_category.map((item, index) => (
              <SelectItem
                key={index}
                value={item}
                onClick={() =>
                  setClassifierFormData((prev) => ({
                    ...prev,
                    itemType: item as AiClassifierFormDataProps["itemType"],
                  }))
                }
              >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* year Used  */}
      <div>
        <Label
          htmlFor="year"
          className="font-[500] text-[18px] postm-2:text-[20px] sm:text-[23px] lg:text-[25px] text-[#373737] mb-1"
        >
          Years in use
        </Label>
        <Slider
          defaultValue={[1]}
          max={10}
          step={1}
          className="w-full bg-[#DAEEDC] rounded-lg [&_[role=slider]]:!border-[#22782A] [&_[role=slider]]:bg-white"
          onValueChange={(val) =>
            setClassifierFormData((prev) => ({
              ...prev,
              year_used: val[0],
            }))
          }
        />
        <div className="flex justify-between items-center text-[#8C8C8C] font-[500] text-[13px] mt-1">
          <span>1 year</span>
          <span>10 year</span>
        </div>
        <div className="text-center flex justify-center items-center">
          <span className="text-[#6DBE73] bg-[#DAEEDC] rounded-sm px-5 py-1 ">
            {classifierFormData.year_used} Year
          </span>
        </div>
      </div>
    </Card>
  );
};

const CurrentConditionAndDescription = ({
  classifierFormData,
  setClassifierFormData,
}: {
  classifierFormData: AiClassifierFormDataProps;
  setClassifierFormData: React.Dispatch<
    React.SetStateAction<AiClassifierFormDataProps>
  >;
}) => {
  return (
    <Card className="!border-[#22782A] bg-white px-6  py-8">
      {/* item Category  */}
      <div className="">
        <Label
          htmlFor="condition"
          className="font-[500] text-[18px] postm-2:text-[20px] sm:text-[23px] lg:text-[25px] text-[#373737] mb-1 cursor-pointer"
        >
          Current Condition
        </Label>
        <Select>
          <SelectTrigger
            id="condition"
            className="min-w-[95%] !text-[#8C8C8C] !border-[#B3B3B3] cursor-pointer"
          >
            <SelectValue placeholder="How is the condition ?" />
          </SelectTrigger>
          <SelectContent
            side="bottom"
            className="text-[#8C8C8C] font-[500] bg-white !border-green-50 px-6 py-3 hide-scrollbar"
          >
            {ai_classifier_item_condition.map((item, index) => (
              <SelectItem
                key={index}
                value={item}
                onClick={() =>
                  setClassifierFormData((prev) => ({
                    ...prev,
                    condition: item as AiClassifierFormDataProps["condition"],
                  }))
                }
              >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* year Used  */}
      <div>
        <Label
          htmlFor="description"
          className="font-[500] text-[18px] postm-2:text-[20px] sm:text-[23px] lg:text-[25px] text-[#373737] mb-1"
        >
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Any special details, defects?"
          className="py-1 px-2 text-[16px] postm-2:text-[17px] sm:text-[18px]  text-[#8C8C8C]"
          value={classifierFormData.description}
          onChange={(e) =>
            setClassifierFormData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
      </div>
    </Card>
  );
};
