import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  registerUserThunk,
  loginUserThunk,
  verifyEmailUserThunk,
  logoutUserThunk,
} from "./userThunk";

import {
  attachUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";
const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  isError: false,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (inputs, thunkAPI) => {
    return registerUserThunk("/auth/register", inputs, thunkAPI);
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (inputs, thunkAPI) => {
    return loginUserThunk("/auth/login", inputs, thunkAPI);
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (inputs, thunkAPI) => {
    return logoutUserThunk("/auth/logout", thunkAPI);
  }
);
export const verifyEmailUser = createAsyncThunk(
  "user/verifyEmailUser",
  async (inputs, thunkAPI) => {
    return verifyEmailUserThunk("/auth/verify-email", inputs, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { message } = action.payload;
      toast(message);
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      state.isLoading = false;
      state.isError = true;
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.user = data;
      attachUserToLocalStorage(data);
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      state.isLoading = false;
      state.isError = true;
    });

    // logout
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      const { message } = action.payload;
      state.user = null;
      attachUserToLocalStorage(null);
      toast.success(message);
      state.isLoading = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      state.isLoading = false;
      state.isError = true;
    });
    // verify email
    builder.addCase(verifyEmailUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyEmailUser.fulfilled, (state, action) => {
      const { message } = action.payload;
      toast.success(message);
      state.isLoading = false;
    });
    builder.addCase(verifyEmailUser.rejected, (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
