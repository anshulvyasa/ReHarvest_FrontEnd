"use client";

import React, { useState, useEffect } from "react";
import {
  PieChart,
  ResponsiveContainer,
  Sector,
  SectorProps,
  Cell,
  Pie,
  PieProps,
} from "recharts";
import { Card } from "../ui/card";
import { landingpagePieChartData } from "@/config";

type PieChartData = {
  name: string;
  value: number;
};

interface ActiveShapeProps extends SectorProps {
  payload?: PieChartData;
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
  percent?: number;
  value?: number;
}

const COLORS = ["#83C29A", "#55AD8A", "#5DA474", "#3E7766"];

// Desktop active shape with external labels
const renderActiveShape = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  startAngle = 0,
  endAngle = 0,
  fill = "#000",
  payload,
  percent = 0,
  value = 0,
}: ActiveShapeProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-sm font-medium"
      >
        {payload?.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        className="text-xs font-medium"
      >{`Value: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        className="text-xs"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

// Mobile active shape with label and percentage inside slice
const renderMobileActiveShape = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  startAngle = 0,
  endAngle = 0,
  fill = "#000",
  payload,
  percent = 0,
}: ActiveShapeProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const textRadius = (innerRadius + outerRadius) / 2;
  const textX = cx + textRadius * cos;
  const textY = cy + textRadius * sin;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* Label */}
      <text
        x={textX}
        y={textY - 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        className="text-xs font-bold"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
      >
        {payload?.name}
      </text>
      {/* Percentage */}
      <text
        x={textX}
        y={textY + 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        className="text-xs font-bold"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const RedistributionChannel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onPieEnter = (_: React.MouseEvent<SVGElement>, index: number): void => {
    setActiveIndex(index);
  };

  const onPieLeave = (): void => {
    setActiveIndex(null);
  };

  // Better typing for pie props with mobile/desktop distinction
  const pieProps: PieProps = {
    data: landingpagePieChartData,
    cx: "50%",
    cy: "50%",
    innerRadius: isMobile ? 40 : 60,
    outerRadius: isMobile ? 80 : 120,
    dataKey: "value",
    onMouseEnter: onPieEnter,
    onMouseLeave: onPieLeave,
    ...(activeIndex !== null && {
      activeIndex,
      activeShape: isMobile ? renderMobileActiveShape : renderActiveShape,
    }),
  };

  return (
    <Card className="border-none shadow-2xl rounded-2xl w-full !bg-white px-3 py-6 sm:py-8 max-h-[90vh] sm:h-[80vh] h-auto overflow-hidden sm:bg-transparent sm:border-transparent">
      {/* Header with better responsive design */}
      <h1 className="text-[#1E4A2A] font-[700] text-[24px] sm:text-[36px] text-center mb-4 sm:mb-6">
        Redistribution Channels
      </h1>

      {/* Chart container with better responsive sizing */}
      <div className="w-full h-[250px] sm:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie {...pieProps}>
              {landingpagePieChartData.map(
                (entry: PieChartData, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RedistributionChannel;
