import { applyMiddleware, createStore } from "redux";
import RootReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
