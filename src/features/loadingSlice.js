import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingShow: (state) => {
      state.isLoading = true;
    },
    setLoadingClose: (state) => {
      state.isLoading = false;
    },
  },
});
export const { setLoadingShow, setLoadingClose } = loadingSlice.actions;
export default loadingSlice.reducer;
