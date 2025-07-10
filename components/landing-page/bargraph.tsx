"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RectangleProps } from "recharts";
import { Card } from "../ui/card";
import { landingpageBarGraph } from "@/config";

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
      fill="rgba(30, 74, 42, 0.1)"
      stroke="#1E4A2A"
      strokeWidth={2}
      rx={5}
      ry={5}
    />
  );
};

const Bargraph = () => {
  return (
    <Card className="border-none shadow-2xl rounded-2xl w-full bg-white px-3 py-6 sm:py-8 max-h-[90vh] sm:h-[80vh] h-auto overflow-hidden">
      <h1 className="text-[#1E4A2A] font-[700] text-[24px] sm:text-[36px] text-center mb-4 sm:mb-6">
        Monthly Impact Trends
      </h1>
      <div className="w-full h-[300px] -ml-4 sm:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={landingpageBarGraph}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barCategoryGap={10}
          >
            <CartesianGrid strokeDasharray="2 9" />
            <XAxis dataKey="name" stroke="#61B392" />
            <YAxis />
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
            <Bar dataKey="impact" fill="#69B578" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Bargraph;
