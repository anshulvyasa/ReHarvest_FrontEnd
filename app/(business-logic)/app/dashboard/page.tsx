"use client";

import DashBoardHeader from "@/components/business-logic/dashboard/dashboard-header";
import DashboardImpactOverview from "@/components/business-logic/dashboard/dashboard-impact-overview";

const DashBoard = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-tr from-green-50 via-white to-white">
      <div className="w-[95%] mx-auto ">
        <header>
          <DashBoardHeader />
        </header>

        <DashboardImpactOverview />
      </div>
    </main>
  );
};

export default DashBoard;
