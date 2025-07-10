"use client";

import React, { useState } from "react";
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

const COLORS = ["#94C9A8", "#69B578", "#4A8C66", "#7DBB97"];

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: ActiveShapeProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 0));
  const cos = Math.cos(-RADIAN * (midAngle ?? 0));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
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
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
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
      >{`Value: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${((percent ?? 0) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const RedistributionChannel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const onPieEnter = (_: React.MouseEvent<SVGElement>, index: number): void => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  // Construct props and extend with custom properties
  const pieProps: PieProps & {
    activeIndex?: number;
    activeShape?: typeof renderActiveShape;
  } = {
    data: landingpagePieChartData,
    cx: "50%",
    cy: "50%",
    innerRadius: 60,
    outerRadius: 120,
    dataKey: "value",
    onMouseEnter: onPieEnter,
    onMouseLeave: onPieLeave,
  };

  if (activeIndex !== null) {
    pieProps.activeIndex = activeIndex;
    pieProps.activeShape = renderActiveShape;
  }

  return (
    <Card className="border-none shadow-2xl rounded-2xl bg-white h-[400px] sm:h-[80vh] w-full">
      <h1 className="text-[#1E4A2A] font-[700] text-[24px] sm:text-[36px] text-center mb-4 sm:mb-6">
        Redistribution Channels
      </h1>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie {...pieProps}>
              {landingpagePieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RedistributionChannel;
