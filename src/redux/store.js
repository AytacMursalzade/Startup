import { configureStore } from "@reduxjs/toolkit";
import navbarReducer  from "../redux/slice/navbarSlice.js"
import productReducer from "../redux/slice/productSlice";
import userReducer from "../redux/slice/userSlice";

export const store = configureStore({
  reducer: {
    navbar:navbarReducer, 
    products:productReducer,
    user: userReducer
  },
});
