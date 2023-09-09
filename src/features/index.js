import navBarSlice from "./navBarSlice";
import authSlice from "./auth/authSlice";
import loadingSlice from "./loadingSlice";
import { combineReducers } from "redux";
import productSlice from "./product/productSlice";
const rootReducer = combineReducers({
  navBar: navBarSlice,
  auth: authSlice,
  loading: loadingSlice,
  product: productSlice,
});

export default rootReducer;
