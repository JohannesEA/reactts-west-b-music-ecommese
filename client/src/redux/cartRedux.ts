import { Product } from "../types/Product";
import { CartAction, CartActioType, ICart } from "./types";

const arr: Product[] = [];

const initialState: ICart = {
  products: arr,
  quantity: 0,
  total: 0,
};

const cartReducer = (state: ICart = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActioType.ADD:
      state.products.push(action.payload);
      state.total += action.payload.price;
      state.quantity += 1;
      return state;
    case CartActioType.REDUCE:
      const index = state.products.indexOf(action.payload);
      state.products.splice(index, 1);
      state.total -= action.payload.price;
      state.quantity -= 1;
      return state;
    case CartActioType.CLEAR: {
      const empty = (arr: Product[]) => (arr.length = 0);
      empty(state.products);
      state.quantity = 0;
      return state;
    }
  }
};

export default cartReducer;
