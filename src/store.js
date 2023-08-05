import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./features/navBarSlice";
import userSlice from "./features/user/userSlice";
import loadingSlice from "./features/loadingSlice";

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    user: userSlice,
    loading: loadingSlice,
  },
});

export default store;
