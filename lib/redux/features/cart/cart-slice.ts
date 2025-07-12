import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconType } from "react-icons";

interface Cart {
  orderId: string;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: "recycle" | "non-edible" | "edible" | "all";
  star: number;
  price: number;
  greenPoint: number;
  addToCart: number;
}

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartFn(state, action: PayloadAction<Cart>) {
      state.push(action.payload);
    },
    removefromCartFn(state, action: PayloadAction<string>) {
      const orderIdRemoved = action.payload;
      return state.filter((item) => item.orderId !== orderIdRemoved);
    },
  },
});

export const { addToCartFn, removefromCartFn } = cartSlice.actions;
export default cartSlice.reducer;
