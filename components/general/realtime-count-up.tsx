"use client";

import CountUp from "@/reactbit/TextAnimations/CountUp/CountUp";

const RealTimeCountUp = ({
  val,
  duration,
}: {
  val: number;
  duration: number;
}) => {
  return (
    <CountUp
      from={1}
      to={val}
      separator=","
      direction="up"
      duration={duration}
      className="count-up-text"
    />
  );
};

export default RealTimeCountUp;
