import {
  FETCH_APIKEYS_PENDING,
  FETCH_APIKEYS_REJECTED,
  FETCH_APIKEYS_FULFILLED,
  /////////////////////////
  GENERATE_APIKEYS_PENDING,
  GENERATE_APIKEYS_REJECTED,
  GENERATE_APIKEYS_FULFILLED
} from "../actions/constants";


const initialState = {
  apikeys: null,
  loading: false,
  error: null
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APIKEYS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_APIKEYS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };

    case FETCH_APIKEYS_FULFILLED:
      return {
        ...state,
        loading: false,
        apikeys: action.payload
      };

    // GENERATE API KEY  

    case GENERATE_APIKEYS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case GENERATE_APIKEYS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };

    case GENERATE_APIKEYS_FULFILLED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default entriesReducer;
