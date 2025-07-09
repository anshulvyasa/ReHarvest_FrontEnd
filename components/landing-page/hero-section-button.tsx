"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const HeroSectionButtton = () => {
  const router = useRouter();
  const session = useSession();

  const handleStartDonating = async () => {
    if (session.status === "authenticated") return router.push("/app/dashboard");

    return router.push("/sign-in");
  };

  return (
    <React.Fragment>
      <Button
        size="lg"
        className="group btn-primary text-lg px-8 py-4"
        onClick={handleStartDonating}
      >
        <span className="flex items-center">Start Donating</span>
        <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button size="lg" className="group btn-secondary text-lg px-8 py-4">
        Learn More
        <Heart className="inline-block ml-2 h-5 w-5 group-hover:text-secondary-400 transition-colors" />
      </Button>
    </React.Fragment>
  );
};

export default HeroSectionButtton;
