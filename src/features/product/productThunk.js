import httpRequest from "../../services/httpRequest";

export const getProductsAsync = async (url, params, thunkAPI) => {
  try {
    const { data } = await httpRequest.get(url, params);
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
