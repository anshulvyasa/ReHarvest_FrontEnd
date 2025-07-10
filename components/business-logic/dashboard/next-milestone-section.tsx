import React from "react";
import { GoGoal } from "react-icons/go";

interface NextMileStoneSectionProps {
  milestone_start: number;
  milestone_end: number;
  current_points: number;
  nextlevel: number;
}

const NextMileStoneSection = ({
  milestone_start,
  milestone_end,
  current_points,
  nextlevel,
}: NextMileStoneSectionProps) => {
  const levelRange = milestone_end - milestone_start;
  let progress = 0;
  if (levelRange > 0) {
    progress = ((current_points - milestone_start) / levelRange) * 100;
  }

  const cappedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <span className="text-[16px] font-[500] text-[#1E4A2A] flex items-center gap-1">
          <GoGoal
            className="h-5 w-5
          "
          />{" "}
          Next Milestone{" "}
        </span>
        <span className="text-[#1E4A2A] text-[16px] font-[500]">
          Level {nextlevel}
        </span>
      </div>
      <div className="mt-2 h-3 w-full rounded-xl bg-[#DAFFDC]">
        <div
          className="h-3 rounded-xl bg-[#5FAB8C] "
          style={{
            width: `${cappedProgress}%`,
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between text-[#4D9F63] font-[500] text-[15px] mt-1">
        <span>{current_points}</span>
        <span>{milestone_end}</span>
      </div>
    </React.Fragment>
  );
};

export default NextMileStoneSection;
