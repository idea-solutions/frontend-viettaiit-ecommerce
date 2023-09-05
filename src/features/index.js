import navBarSlice from "./navBarSlice";
import userSlice from "./user/userSlice";
import loadingSlice from "./loadingSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  navBar: navBarSlice,
  user: userSlice,
  loading: loadingSlice,
});

export default rootReducer;
