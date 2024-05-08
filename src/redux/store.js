import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./slice/NavbarSlice"

export const store = configureStore({
  reducer: {
    navbar:navbarSlice
  },
});
