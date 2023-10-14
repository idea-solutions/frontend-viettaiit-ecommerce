import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingComp: false,
};

const loadingCompSlice = createSlice({
  name: "loadingComp",
  initialState,
  reducers: {
    setIsLoadingApi: (state, action) => {
      state.isLoadingComp = action.payload;
    },
  },
});
export const { setIsLoadingApi } = loadingCompSlice.actions;
export default loadingCompSlice.reducer;
