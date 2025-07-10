"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import GlareHover from "@/reactbit/Animations/GlareHover/GlareHover";

const HeroSectionButtton = () => {
  const router = useRouter();
  const session = useSession();

  const handleGetStartedClick = async () => {
    if (session.status === "authenticated")
      return router.push("/app/dashboard");

    return router.push("/sign-in");
  };

  return (
    <React.Fragment>
      <div onClick={handleGetStartedClick}>
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          background="#468168"
          height="h-6"
          width="w-6"
          borderRadius="8rem"
          className=" text-[#FFFFFF]  text-xl   lg:text-[24px] px-8 py-2 border-none hover:scale-105 transition-all duration-300"
        >
          Get Started
        </GlareHover>
      </div>

      <div className="hover:bg-[#38723D]  transition-all duration-300 rounded-full p-[1px]">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          height="h-10"
          width="w-30"
          background="#FFFFFF"
          borderRadius="8rem"
          className=" text-[#38723D] rounded-3xl text-xl px-8 py-2 border-none lg:text-[24px]  "
        >
          Learn More
        </GlareHover>
      </div>
    </React.Fragment>
  );
};

export default HeroSectionButtton;
