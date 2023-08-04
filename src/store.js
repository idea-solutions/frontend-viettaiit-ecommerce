import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./features/navBarSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    user: userSlice,
  },
});


export default store;
