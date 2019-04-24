import {
  CREATE_USER_PENDING,
  CREATE_USER_REJECTED,
  CREATE_USER_FULFILLED,
  //////////////////////
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_FULFILLED
} from "../actions/constants";

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case CREATE_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };

    case CREATE_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case LOGIN_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };

    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        token: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
