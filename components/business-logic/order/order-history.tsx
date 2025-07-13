import { Card } from "@/components/ui/card";

const OrderHistoryTab = () => {
  return <Card className="border-none px-6 py-4 bg-white shadow-2xl mb-10">
    <h1 className="text-[#62AA67] font-[700] text-[25px]">Order history</h1>
    <p className="font-[500] text-[#707070] text-[14px] postm-2:text-[15px] md:text-[17px] -mt-7">Filter orders by cateogry to track your eco-friendly purchases</p>
  </Card>;
};

export default OrderHistoryTab;
