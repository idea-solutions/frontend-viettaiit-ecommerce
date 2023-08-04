import httpRequest from "../../services/httpRequest";

export const registerUserThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
