import { combineReducers } from "redux";

import userReducer from "./userReducer";
import articleReducer from "./articleReducser";

const allReducers = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default allReducers;
