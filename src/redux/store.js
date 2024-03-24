import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { doctorReducer } from "./reducer";

const store = createStore(doctorReducer, applyMiddleware(thunk));

export default store;
