import { combineReducers } from "redux";

import userReducer from "./userReducer";

const allReducers = combineReducers({
  userState: userReducer,
});

export default allReducers;
