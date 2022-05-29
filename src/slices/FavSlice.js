import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const FavSlice = createSlice({
  name: "fav",
  initialState: {
    data: [],
  },
  reducers: {
    getFav: (state, action) => {
      return state.data;
    },
    addFav: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateFav: (state, action) => {
      var getCart = state.data.findIndex((i) => i.id == action.payload.id);
      state.data[getCart] = action.payload;
      state.data = [...state.data];
    },
    deleteFav: (state, action) => {
      var findedItem = state.data.indexOf((i) => i.id == action.payload.id);
      state.data.splice(findedItem);
      state.data = [...state.data];
    },
  },
});

export const { getFav, addFav, updateFav, deleteFav } = FavSlice.actions;

export default FavSlice.reducer;
