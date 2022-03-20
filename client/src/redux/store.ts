import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cartRedux";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   product: productReducer,
// });

export const store = createStore(cartReducer, applyMiddleware(thunk));

export type State = ReturnType<typeof cartReducer>;
