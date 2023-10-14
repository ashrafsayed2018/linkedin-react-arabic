import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import allReducers from "../reducers/allReducers";

const store = createStore(allReducers, applyMiddleware(reduxThunk));

export default store;
