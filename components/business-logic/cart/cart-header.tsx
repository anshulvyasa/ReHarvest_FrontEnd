import { ShoppingCart } from "lucide-react";

const CartHeader = () => {
  return (
    <section>
      <div className="text-[#62AA67] font-[700] text-[32px] sm:text-[38px]  text-center flex justify-center items-center ">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="h-7 w-7 sm:w-9 sm:h-9 " />
          <span> Your Cart</span>
        </div>
      </div>
      <p className="font-[500] text-[17px]  sm:text-[19px] -mt-2 text-[#707070] text-center">
        items ready for sustainable shopping
      </p>
    </section>
  );
};

export default CartHeader;
