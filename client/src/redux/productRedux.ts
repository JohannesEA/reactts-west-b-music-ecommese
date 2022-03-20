import { IProduct, ProductAction, ProductActionType } from "./Types";

const initialState: IProduct = {
  products: [],
  isFetching: false,
  error: false,
};

const productReducer = (
  state: IProduct = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case ProductActionType.START:
      state.isFetching = true;
      return state;
    case ProductActionType.SUCCESS:
      state.isFetching = false;
      state.products = action.payload;
      return state;
    case ProductActionType.FAILIURE: {
      state.isFetching = false;
      state.error = true;
      return state;
    }
  }
};

export default productReducer;
