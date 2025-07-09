"use client";

import { Card } from "@/components/ui/card";
import { impactOverviewSustanabilityData, popUpVarient } from "@/config";
import Image from "next/image";
import React from "react";
import WeeklyImpactChart from "./weekly-impact-chart";
import { motion } from "framer-motion";

const DashboardImpactOverview = () => {
  return (
    <section className="mb-30">
      <h1 className="text-[#1E4A2A] font-[700] text-xl sm:text-2xl md:text-3xl ">
        Impact Overview
      </h1>
      <p className="text-[#22782A] text-lg font-[400]">
        Your contribution to a sustainable future
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 max-w-[90%] mb-12">
        {impactOverviewSustanabilityData.map((option) => (
          <div
            key={option.id}
            className="rounded-xl p-[1px] bg-gradient-to-br from-[#E3F2EC] to-[#ABD2C2] shadow-sm shadow-green-200 hover:scale-105 transition-all duration-300"
          >
            <Card className="border-none bg-white px-6 py-2 h-full w-full">
              <div className="flex justify-between items-center">
                <div
                  className={`flex justify-center items-center h-12 w-12 rounded-xl`}
                  style={{ backgroundColor: option.iconbg }}
                >
                  <Image
                    src={option.iconSrc}
                    height={20}
                    width={20}
                    alt={option.id}
                  />
                </div>
                <span className="text-[#3EAD69]">{option.percentage}</span>
              </div>
              <motion.div
                className="text-[#1E4A2A] font-[800] text-2xl"
                variants={popUpVarient}
                initial="hidden"
                animate="visible"
              >
                {option.amount}
                <span className="text-[#428C47] font-[600] text-sm">
                  {option.label}
                </span>
              </motion.div>
              <div className="text-[#428C47] font-[500] text-[18px] -mt-5">
                {option.footer}
              </div>
            </Card>
          </div>
        ))}
      </div>

      <WeeklyImpactChart />
    </section>
  );
};

export default DashboardImpactOverview;
