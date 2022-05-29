import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    getCart: (state, action) => {
      state.data = action.payload;
    },
    addCart: (state, action) => {
      state.data = [...state, action.payload];
    },
    updateCart: (state, action) => {
      var getCart = state.find((i) => i.id == action.payload.id);
      getCart = action.payload;
      state.data = [...state];
    },
    deleteCart: (state, action) => {
      var findedItem = state.find((i) => i.id == action.payload.id);
      var index = state.indexOf(findedItem);
      state.splice(index);
      state.data = [...state];
    },
  },
});

export const { getCart, addCart, updateCart, deleteCart } = CartSlice.actions;

export default CartSlice.reducer;
