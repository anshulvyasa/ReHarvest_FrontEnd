import Image from "next/image";

const OrderHeader = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-1">
          <Image src="/order.png" height={35} width={35} alt="" />
          <span className="text-[#62AA67] font-[700] text-[32px] sm:text-[35px]">
            My Orders
          </span>
        </div>
      </div>
      <p className="font-[500] text-[16px] postm-2:text-[17px] sm:text-[18px]  -mt-1  text-[#707070]  text-center">
        Track your sustainable purchases
      </p>
    </div>
  );
};

export default OrderHeader;
