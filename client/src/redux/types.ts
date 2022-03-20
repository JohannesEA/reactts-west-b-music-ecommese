import { Product } from "../types/product";

export enum CartActioType {
  ADD = "add",
  REDUCE = "reduce",
  CLEAR = "clear",
}

export interface ICart {
  products: Product[];
  quantity: number;
  total: number;
}

export interface CartAddAction {
  type: CartActioType.ADD;
  payload: Product;
}

export interface CartReduceAction {
  type: CartActioType.REDUCE;
  payload: Product;
}

export interface CartClearAction {
  type: CartActioType.CLEAR;
}

export type CartAction = CartAddAction | CartReduceAction | CartClearAction;

export enum ProductActionType {
  START = "start",
  SUCCESS = "success",
  FAILIURE = "failiure",
}

export interface IProduct {
  products: Product[];
  isFetching: boolean;
  error: boolean;
}

export interface ProductStartAction {
  type: ProductActionType.START;
}

export interface ProductSuccessAction {
  type: ProductActionType.SUCCESS;
  payload: Product[];
}

export interface ProductFailiureAction {
  type: ProductActionType.FAILIURE;
}

export type ProductAction =
  | ProductStartAction
  | ProductSuccessAction
  | ProductFailiureAction;
