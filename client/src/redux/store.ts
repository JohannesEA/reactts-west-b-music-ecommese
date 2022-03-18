import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./productRedux";
import cartReducer from "./cartRedux";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export const store = createStore(cartReducer, applyMiddleware(thunk));

export type State = ReturnType<typeof cartReducer>;
