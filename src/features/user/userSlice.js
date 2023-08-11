import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  registerUserThunk,
  loginUserThunk,
  verifyEmailUserThunk,
  logoutUserThunk,
  resetPasswordUserThunk,
  forgotPasswordUserThunk,
} from "./userThunk";

import {
  attachUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";
import { toastError, toastSuccess } from "../../utils/toast";
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
export const forgotPasswordUser = createAsyncThunk(
  "user/forgotPasswordUser",
  async (inputs, thunkAPI) => {
    return forgotPasswordUserThunk("/auth/forgot-password", inputs, thunkAPI);
  }
);
export const resetPasswordUser = createAsyncThunk(
  "user/resetPasswordUser",
  async (inputs, thunkAPI) => {
    return resetPasswordUserThunk("/auth/reset-password", inputs, thunkAPI);
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
      toastError(message);
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
      toastError(message);
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
      toastSuccess(message);
      state.isLoading = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });
    // verify email
    builder.addCase(verifyEmailUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyEmailUser.fulfilled, (state, action) => {
      const { message } = action.payload;
      toastSuccess(message);

      state.isLoading = false;
    });
    builder.addCase(verifyEmailUser.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });

    // forgot password
    builder.addCase(forgotPasswordUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPasswordUser.fulfilled, (state, action) => {
      const { message } = action.payload;
      toastSuccess(message);

      state.isLoading = false;
    });
    builder.addCase(forgotPasswordUser.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });
    // reset password
    builder.addCase(resetPasswordUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPasswordUser.fulfilled, (state, action) => {
      const { message } = action.payload;
      toastSuccess(message);

      state.isLoading = false;
    });
    builder.addCase(resetPasswordUser.rejected, (state, action) => {
      const { message } = action.payload;
      console.log(action.payload);
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
