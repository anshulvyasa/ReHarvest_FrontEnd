import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../cart/cart-slice";

export interface Order {
  orderId: string;
  status:string;
  orderDate:string;
  products: Cart[];
}

const initialOrderState: Order[] = [];

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
