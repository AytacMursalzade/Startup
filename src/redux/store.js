import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./Slice/NavbarSlice"

export const store = configureStore({
  reducer: {
    navbarReducer:navbarSlice.reducer
  },
});
