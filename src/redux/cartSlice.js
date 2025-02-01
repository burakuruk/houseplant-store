import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
