import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./features/navBarSlice";

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
  },
});

export default store;
