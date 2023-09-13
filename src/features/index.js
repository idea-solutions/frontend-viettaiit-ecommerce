import navBarSlice from "./navBarSlice";
import authSlice from "./auth/authSlice";
import loadingSlice from "./loadingSlice";
import { combineReducers } from "redux";
import productSlice from "./product/productSlice";
import categorySlice from "./category/categorySlice";
import productFutureLocalSlice from "./productFutureLocal";
const rootReducer = combineReducers({
  navBar: navBarSlice,
  auth: authSlice,
  loading: loadingSlice,
  product: productSlice,
  category: categorySlice,
  productFutureLocal: productFutureLocalSlice,
});

export default rootReducer;
