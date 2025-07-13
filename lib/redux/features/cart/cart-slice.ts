import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
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
      const IdRemoved = action.payload;
      return state.filter((item) => item.id !== IdRemoved);
    },
    decreaseQuantityInCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.addToCart = Math.max(1, existingItem.addToCart - 1);
      }
    },
    increaseQuantityInCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.addToCart = existingItem.addToCart + 1;
      }
    },
    clearCart() {
      return [];
    },
  },
});

export const {
  addToCartFn,
  removefromCartFn,
  increaseQuantityInCart,
  decreaseQuantityInCart,
} = cartSlice.actions;
export default cartSlice.reducer;
