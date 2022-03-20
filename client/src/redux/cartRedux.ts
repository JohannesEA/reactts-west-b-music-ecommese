import { Product } from "../types/product";
import { CartAction, CartActioType, ICart } from "./types";

const initialState: ICart = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state: ICart = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActioType.ADD:
      if (state.products.find((p) => p._id === action.payload._id)) {
        return state;
      } else {
        const myClonedArray: Product[] = [];
        state.products.forEach((val) =>
          myClonedArray.push(Object.assign({}, val))
        );

        myClonedArray.push(action.payload);

        const newState: ICart = {
          products: myClonedArray,
          quantity: (state.quantity += 1),
          total: (state.total += action.payload.price),
        };

        if (newState !== undefined) {
          return newState;
        } else {
          return state;
        }
      }

    case CartActioType.REDUCE:
      if (state.quantity > 0) {
        state.products.forEach((element, index) => {
          if (element === action.payload) delete state.products[index];
        });

        const myClonedArray: Product[] = [];
        state.products.forEach((val) =>
          myClonedArray.push(Object.assign({}, val))
        );

        const newState: ICart = {
          products: myClonedArray,
          quantity: (state.quantity -= 1),
          total: (state.total -= action.payload.price),
        };

        if (newState !== undefined) {
          return newState;
        } else {
          return state;
        }
      } else {
        alert("Hadlekurven er allerede tom.");
        return state;
      }
    case CartActioType.CLEAR: {
      const empty = (arr: Product[]) => (arr.length = 0);
      empty(state.products);
      state.quantity = 0;
      state.total = 0;

      const myClonedArray: Product[] = [];
      state.products.forEach((val) =>
        myClonedArray.push(Object.assign({}, val))
      );

      const newState: ICart = {
        products: myClonedArray,
        quantity: 0,
        total: 0,
      };
      if (newState !== undefined) {
        return newState;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
