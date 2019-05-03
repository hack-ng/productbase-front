import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_REJECTED,
  FETCH_PRODUCTS_FULFILLED
} from "../actions/constants";

const initialState = {
  products: null,
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_REJECTED:
      return {
          ...state,
          loading: false,
          error: true
      }

    case FETCH_PRODUCTS_FULFILLED:
      return {
          ...state,
          loading: false,
          products: action.payload
      }

    default:
      return state;
  }
};

export default productsReducer;