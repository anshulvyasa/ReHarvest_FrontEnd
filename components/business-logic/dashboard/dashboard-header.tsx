"use client";

import { useSession } from "next-auth/react";

const DashBoardHeader = () => {
  const session = useSession();

  return (
    <section className=" pt-4 md:ml-0 md:pt-0">
      <h1 className="text-[#1E4A2A] text-xl pt-3 sm:text-xl md:text-3xl font-bold">
        Welcome back, <span>{session.data?.user?.name}</span>
      </h1>
      <p className="text-sm text-[#22782A] font-[400]">
        You&apos;ve saved{" "}
        <span className="text-[#059313] font-[600]">2,847 kg</span> of CO₂ this
        month. Keep making a difference!
      </p>
    </section>
  );
};

export default DashBoardHeader;
