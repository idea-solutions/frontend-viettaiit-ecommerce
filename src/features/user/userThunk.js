import httpRequest from "../../services/httpRequest";

export const registerUserThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const loginUserThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const logoutUserThunk = async (url, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const verifyEmailUserThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
