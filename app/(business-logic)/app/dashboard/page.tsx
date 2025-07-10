"use client";

import DashBoardHeader from "@/components/business-logic/dashboard/dashboard-header";
import DashboardImpactOverview from "@/components/business-logic/dashboard/dashboard-impact-overview";
import UserSection from "@/components/business-logic/dashboard/user-section";

const DashBoard = () => {
  return (
    <main className="min-h-screen py-3 pl-3  w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-tr from-green-50 via-white to-white">
      <div className="conatiner-max px-1 sm:px-10  mx-auto ">
        <header className="mb-4">
          <DashBoardHeader />
        </header>

        <DashboardImpactOverview />
        <UserSection/>
      </div>
    </main>
  );
};

export default DashBoard;
