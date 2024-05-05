import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "./Slice/NavbarSlice";

export const store = configureStore({
  reducer: {
    navbarReducer,
  },
});
