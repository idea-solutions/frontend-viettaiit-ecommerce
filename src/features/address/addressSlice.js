import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressesMeAsync } from "./addressThunk";

const initialState = {
  addresses: [],
  totalAddress: 0,
  isLoading: false,
  isError: false,
};

export const getAddressesMe = createAsyncThunk(
  "addresses/getAddressesMe",
  async (_, thunkAPI) => {
    return await getAddressesMeAsync("/addresses", thunkAPI);
  }
);
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CASE GET COLORS
    builder.addCase(getAddressesMe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAddressesMe.fulfilled, (state, action) => {
      state.isLoading = state.isError = false;
      state.addresses = action.payload.data;
      state.totalAddress = action.payload.total;
    });
    builder.addCase(getAddressesMe.rejected, (state, action) => {
      state.isLoading = state.isError = true;
    });
  },
});

export const {} = addressSlice.actions;
export default addressSlice.reducer;
