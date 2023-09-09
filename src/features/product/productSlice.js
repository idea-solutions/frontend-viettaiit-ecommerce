import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsAsync, getProductsHotSalesAsync } from "./productThunk";
const initialState = {
  products: [],
  productsHotSales: [],
  perPage: 6,
  totalPages: 1,
  total: 2,
  query: {
    name: "",
    categoryName: "",
    providerName: "",
    sort: "",
  },
  page: 1,
  isLoading: false,
  isError: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (params, thunkAPI) => {
    return await getProductsAsync("/products", { params }, thunkAPI);
  }
);

export const getProductsHotSales = createAsyncThunk(
  "products/getProductsHotSales",
  async (_, thunkAPI) => {
    return await getProductsHotSalesAsync("/products/hot-sales", thunkAPI);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setQueryProduct: (state, action) => {
      const value =
        action.payload.value === "all" ? null : action.payload.value;
      state.query = {
        ...state.query,
        [action.payload.name]: value,
      };
    },
    resetQueryProduct: (state) => {
      state.query = { name: "", categoryName: "", providerName: "", sort: "" };
    },
  },

  extraReducers: (builder) => {
    // CASE GET ALL PRODUCTS
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const { data, page, perPage, totalPages, total } = action.payload;
      state.products = data;
      state.page = page;
      state.perPage = perPage;
      state.totalPages = totalPages;
      state.total = total;

      state.isLoading = state.isError = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = state.isError = true;
    });

    // get product hot sales
    builder.addCase(getProductsHotSales.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsHotSales.fulfilled, (state, action) => {
    
      const { data } = action.payload;
      state.productsHotSales = data;

      state.isLoading = state.isError = false;
    });
    builder.addCase(getProductsHotSales.rejected, (state, action) => {
      state.isLoading = state.isError = true;
    });
  },
});

export const { setQueryProduct, resetQueryProduct } = productSlice.actions;
export default productSlice.reducer;
