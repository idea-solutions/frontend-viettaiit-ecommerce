import httpRequest from "../../services/httpRequest";

export const getProductsAsync = async (url, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const { data } = await httpRequest.get(url, {
      params: state.product.query,
    });
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data);
  }
};
export const getProductsHotSalesAsync = async (url, thunkAPI) => {
  try {
    const { data } = await httpRequest.get(url);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data);
  }
};
