import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart-slice";
import orderReducer from "./features/order/order-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      order: orderReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
