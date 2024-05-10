import { configureStore } from "@reduxjs/toolkit";
import navbarReducer  from "./slice/navbarSlice.js"

export const store = configureStore({
  reducer: {
    navbar:navbarReducer 
  },
});
