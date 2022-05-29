import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/CartSlice";
import FavSlice from "../slices/FavSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    fav: FavSlice,
  },
});
