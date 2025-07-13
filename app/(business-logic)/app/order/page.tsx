import OrderHeader from "@/components/business-logic/order/order-header";
import OrderHistoryTab from "@/components/business-logic/order/order-history";
import OrderList from "@/components/business-logic/order/order-list";
const OrderPage = () => {
  return (
    <main className="min-h-screen py-6 px-3  w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-tr from-green-50 via-white to-white relative">
      <div className="px-4 sm:py-10 py-6">
        <OrderHeader />
        <OrderHistoryTab />
        <OrderList />
      </div>
    </main>
  );
};

export default OrderPage;
