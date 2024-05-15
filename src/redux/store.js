import { configureStore } from "@reduxjs/toolkit";
import navbarReducer  from "../redux/slice/navbarSlice.js"


export const store = configureStore({
  reducer: {
    navbar:navbarReducer
  },
});
