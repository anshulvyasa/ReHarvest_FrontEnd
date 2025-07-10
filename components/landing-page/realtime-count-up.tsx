"use client";

import CountUp from "@/reactbit/TextAnimations/CountUp/CountUp";

const RealTimeCountUp = ({ val }: { val: number }) => {
  return (
    <CountUp
      from={1}
      to={val}
      separator=","
      direction="up"
      duration={3}
      className="count-up-text"
    />
  );
};

export default RealTimeCountUp;
