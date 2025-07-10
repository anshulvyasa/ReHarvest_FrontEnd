"use client";

import { howItWorks } from "@/config";
import TiltedCard from "@/reactbit/Components/TiltedCard/TiltedCard";
import React from "react";

const HowItWorksTiltedCard = () => {
  return (
    <React.Fragment>
      {howItWorks.map((content, index) => (
        <div className="w-full " key={index}>
          <TiltedCard
            rotateAmplitude={8}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="px-6 pt-3 pb-6">
                <div className="flex justify-between">
                  <div
                    className="h-13 w-13 rounded-2xl px-1 flex items-center justify-center"
                    style={{ backgroundColor: content.iconbg }}
                  >
                    <content.icon
                      className="h-8 w-8"
                      style={{ color: content.iconcolor }}
                    />
                  </div>
                  <span className="font-[700] text-[#CBCBCB] text-[36px]">
                    {content.number}
                  </span>
                </div>
                <div className="text-[#000000] font-[600] text-[24px] mt-2">
                  {content.title}
                </div>
                <p className="font-[400] text-[16px] text-[#8E8A8A] font-sans">
                  {content.description}
                </p>
              </div>
            }
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default HowItWorksTiltedCard;
