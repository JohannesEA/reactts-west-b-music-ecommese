import { Product } from "../types/Product";
import { CartAction, CartActioType, ICart } from "./types";

const initialState: ICart = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state: ICart = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActioType.ADD:
      if (state.products.some((prod) => prod.title === action.payload.title)) {
        alert("Produktet er allerede lagt til i handlekurven.");
      } else {
        state.products.push(action.payload);
        state.total += action.payload.price;
        state.quantity += 1;
        localStorage.setItem("cart-products", JSON.stringify(state.products));
        localStorage.setItem("cart-quantity", JSON.stringify(state.quantity));
        localStorage.setItem("cart-total", JSON.stringify(state.total));
      }
      return state;
    case CartActioType.REDUCE:
      if (state.quantity > 0) {
        const index = state.products.indexOf(action.payload);
        state.products.splice(index, 1);
        state.total -= action.payload.price;
        state.quantity -= 1;
        alert(
          `Produktet ${action.payload.title} blir nå fjernet fra handlekurven.`
        );
        localStorage.setItem("cart-products", JSON.stringify(state.products));
        localStorage.setItem("cart-quantity", JSON.stringify(state.quantity));
        localStorage.setItem("cart-total", JSON.stringify(state.total));
      } else {
        alert("Handlekurven er allerede tom.");
      }
      return state;
    case CartActioType.CLEAR: {
      const empty = (arr: Product[]) => (arr.length = 0);
      empty(state.products);
      state.quantity = 0;
      state.total = 0;
      localStorage.setItem("cart-products", JSON.stringify("[]"));
      localStorage.setItem("cart-quantity", JSON.stringify("0"));
      localStorage.setItem("cart-total", JSON.stringify("0"));
      return state;
    }
  }
};

export default cartReducer;
