import { Dispatch } from "redux";
import { Product } from "../types/Product";
import {
  CartAction,
  CartActioType,
  ProductAction,
  ProductActionType,
} from "./Types";

export const getProducts = (products: Product[]) => {
  return (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.SUCCESS,
      payload: products,
    });
  };
};

export const addProductToCart = (product: Product) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActioType.ADD,
      payload: product,
    });
  };
};

export const removeProductFromCart = (product: Product) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActioType.REDUCE,
      payload: product,
    });
  };
};

export const deleteAllProductsFromCart = () => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActioType.CLEAR,
    });
  };
};
