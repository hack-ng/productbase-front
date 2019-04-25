import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_REJECTED,
  FETCH_PRODUCTS_FULFILLED
} from "./constants";

import axios from "axios";

const fetchProductsApi = "http://localhost:8000/api/products";

const fetchProducts = (query="") => {
  return async dispatch => {
    dispatch(fetchProductsPending())
    try {
      let response = await axios.get(`${fetchProductsApi}/?search=${query}`);
      console.log(response);
      return dispatch(fetchProductsFulfilled(response.data));
    } catch (e) {
      console.log(e.response.data);
      return dispatch(fetchProductsRejected());
    }
  };
};

const fetchProductsPending = () => {
  return { type: FETCH_PRODUCTS_PENDING };
};

const fetchProductsRejected = () => {
  return { type: FETCH_PRODUCTS_REJECTED };
};

const fetchProductsFulfilled = products => {
  return { type: FETCH_PRODUCTS_FULFILLED, payload: products };
};

export { fetchProducts };
