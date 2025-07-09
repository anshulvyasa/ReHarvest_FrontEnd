"use client";

import { dashboardBarChartData } from "@/config";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { RectangleProps } from "recharts";

const CustomCursor: React.FC<RectangleProps> = (props) => {
  const x = Number(props.x) || 0;
  const y = Number(props.y) || 0;
  const width = Number(props.width) || 0;
  const height = Number(props.height) || 0;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={props.fill || "rgba(30, 74, 42, 0.1)"}
      stroke={props.stroke || "#1E4A2A"}
      strokeWidth={props.strokeWidth || 2}
      rx={5}
      ry={5}
    />
  );
};

const WeeklyImpactChart = () => {
  return (
    <div className="w-[95%] h-55">
      <h2 className="text-[#1E4A2A] font-[700] text-xl mb-4">
        Weekly Impact Trend
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dashboardBarChartData} barCategoryGap={10}>
          <XAxis dataKey="day" stroke="#61B392" />
          <Tooltip
            cursor={<CustomCursor />}
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            labelStyle={{ color: "#333333" }}
            itemStyle={{ color: "#000000" }}
          />
          <Bar dataKey="value" radius={[10, 10, 0, 0]}>
            {dashboardBarChartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill="url(#gradient)" />
            ))}
          </Bar>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#70DDB1" />
              <stop offset="100%" stopColor="#5DA789" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyImpactChart;
