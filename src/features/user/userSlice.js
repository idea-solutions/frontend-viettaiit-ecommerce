import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserThunk } from "./userThunk";
import { toast } from "react-toastify";
const initialState = {
  user: "",
  isLoading: false,
  isError: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (inputs, thunkAPI) => {
    return registerUserThunk("/auth/register", inputs, thunkAPI);
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
      state.isError = true;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
