import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./redux/client/features/navBarSlice";

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
  },
});

export default store;
