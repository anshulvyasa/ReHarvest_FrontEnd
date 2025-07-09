import { Card } from "@/components/ui/card";
import Image from "next/image";

const GreenPointWallet = () => {
  return (
    <div className="h-screen">
      <Card className="h-full w-full border-none shadow-2xl rounded-2xl px-5 py-3">
        <div className="flex space-x-2">
          <div className="h-14 w-14 bg-[#D4E3FE] rounded-2xl flex items-center justify-center">
            <Image src="/wallet.png" height={20} width={40} alt="w" />
          </div>
          <span className="text-[#1E4A2A] font-[700] text-[32px]">
            GreenPoints Wallet
          </span>
        </div>
      </Card>
    </div>
  );
};

export default GreenPointWallet;
